import express from "express";
import connectDB from "./rdvdb.js";
import Rdv from "./modeles/Rdv.js";
import cors from "cors";
import multer from "multer";
import path from "path";
import sgMail from "@sendgrid/mail";
import dotenv from "dotenv";
import fs from "fs";

dotenv.config();
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const app = express();
connectDB();
app.use(cors());
app.use(express.json());
app.use(express.static("uploads"));

const sendEmail = async (to, subject, text, html, attachments = []) => {
    const msg = {
        to,
        from: process.env.EMAIL_SENDER,
        subject,
        text: text || "Veuillez consulter l'email en format HTML.",
        html,
        attachments: attachments.length > 0 ? attachments.map(file => ({
            content: fs.readFileSync(file.path).toString("base64"),
            filename: file.filename,
            type: "application/octet-stream",
            disposition: "attachment"
        })) : []
    };

    try {
        await sgMail.send(msg);
        console.log(`✅ Email envoyé à ${to}`);
    } catch (error) {
        console.error("❌ Erreur lors de l'envoi de l'email:", error.response?.body || error.message);
    }
};


app.get("/", (req, res) => {
    res.send("Bienvenue sur l'API de Bâti Québec !");
});

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, "uploads/"),
    filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
});
const upload = multer({ storage });
app.post("/api/contact", upload.array("files", 5), async (req, res) => {
    try {
        const { firstName, lastName, email, description } = req.body;


        const fileUrls = req.files.map(file => `/uploads/${file.filename}`);


        const attachments = req.files.length > 0 ? req.files.map(file => ({
            filename: file.originalname,
            path: file.path
        })) : [];


        const userHtml = `
            <h3>Hello ${firstName},</h3>
            <p>Thank you for contacting us. We have received your request and will get back to you shortly.</p>
            <p><strong>Your message:</strong> ${description}</p>
            <br>
            <p><strong>Best regards,</strong><br>Bâti Québec Inc.</p>
        `;

        const adminHtml = `
            <h3>New Contact Request</h3>
            <p><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong> ${description}</p>
            ${attachments.length > 0 ? `<p><strong>Attachments included.</strong></p>` : ""}
            <br>
            <p><strong>Bâti Québec Inc.</strong></p>
        `;


        await Promise.all([
            sendEmail(email, "Your Contact Request - Bâti Québec Inc.", "", userHtml),
            sendEmail("info@batiquebec.com", "New Contact Request", "", adminHtml, attachments)
        ]);

        res.status(201).json({ message: "✅ Contact request sent successfully!" });
    } catch (error) {
        console.error("❌ Error processing contact request:", error);
        res.status(500).json({ message: "❌ Error processing the request." });
    }
});

app.post("/api/rdv", upload.array("files", 5), async (req, res) => {
    try {
        const { firstName, lastName, email, description, date, time } = req.body;


        const existingRdv = await Rdv.findOne({ date, time });
        if (existingRdv) {
            return res.status(400).json({ message: "Ce créneau est déjà réservé. Veuillez choisir une autre date ou heure." });
        }


        const fileUrls = req.files.map(file => `/uploads/${file.filename}`);
        const newRdv = new Rdv({ ...req.body, files: fileUrls });
        await newRdv.save();


        const attachments = req.files.length > 0 ? req.files.map(file => ({
            filename: file.originalname,
            path: file.path
        })) : [];


        const userHtml = `
            <h3>Bonjour ${firstName},</h3>
            <p>Votre rendez-vous a été confirmé pour le <strong>${date}</strong> à <strong>${time}</strong>.</p>
            <p><strong>Description :</strong> ${description}</p>
            <p>Merci de nous faire confiance !</p>
            <br>
            <p><strong>Bâti Québec Inc.</strong></p>
        `;

        const adminHtml = `
            <h3>Nouveau rendez-vous réservé</h3>
            <p><strong>Nom:</strong> ${firstName} ${lastName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Date:</strong> ${date}</p>
            <p><strong>Heure:</strong> ${time}</p>
            <p><strong>Description:</strong> ${description}</p>
            ${attachments.length > 0 ? `<p><strong>Des fichiers sont attachés à ce rendez-vous.</strong></p>` : ""}
            <br>
            <p><strong>Bâti Québec Inc.</strong></p>
        `;


        await Promise.all([
            sendEmail(email, "Confirmation de Rendez-vous - Bâti Québec Inc.", "", userHtml),
            sendEmail("billy@batiquebec.com", "Nouveau Rendez-vous Réservé", "", adminHtml, attachments)
        ]);

        res.status(201).json({ message: "✅ Rendez-vous enregistré avec succès ! Un email de confirmation a été envoyé." });
    } catch (error) {
        console.error("❌ Erreur lors de l'enregistrement :", error);
        res.status(500).json({ message: "❌ Erreur lors de l'enregistrement." });
    }
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`🚀 Serveur en cours d'exécution sur le port ${port}`));

