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

// Connexion à MongoDB
connectDB();

// Middleware
app.use(cors({
    origin: "*", // Remplace "*" par ton domaine de frontend si nécessaire
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json());
app.use(express.static("uploads"));

// Configuration Multer pour l'upload
const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, "uploads/"),
    filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
});
const upload = multer({ storage });

// Fonction pour envoyer un email
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
        console.log(`${t.emailreussi} ${to}`);
    } catch (error) {
        console.error(t.emailerreur, error.response?.body || error.message);
    }
};

// Route pour le contact
app.post("/api/contact", upload.array("files", 5), async (req, res) => {
    const lang = req.headers['accept-language'] || 'fr';
    const t = translations[lang] || translations['fr'];

    try {
        const { firstName, lastName, email, description } = req.body;
        const attachments = req.files.map(file => ({
            filename: file.originalname,
            path: file.path
        }));

        await Promise.all([
            sendEmail(email, t.contactSubject, "", t.contactMessage(firstName)),
            sendEmail(
                "mimimontmo2@gmail.com",
                t.adminContactSubject,
                "",
                `
                ${t.adminContactIntro(firstName, lastName)}
                <p><strong>${t.adminEmail} :</strong> ${email}</p>
                <p><strong>${t.adminDescription} :</strong></p>
                <p>${description}</p>
              `,
                attachments
            )
        ]);


        res.status(201).json({ message: t.contactSuccess });
    } catch (error) {
        console.error(t.contactError, error);
        res.status(500).json({ message: t.contactError });
    }
});


// Route pour les rendez-vous
app.post("/api/rdv", upload.array("files", 5), async (req, res) => {
    const lang = req.headers['accept-language'] || 'fr';
    const t = translations[lang] || translations['fr'];

    try {
        const { firstName, lastName, email, description, date, time } = req.body;

        const existingRdv = await Rdv.findOne({ date, time });
        if (existingRdv) {
            return res.status(400).json({ message: t.rdvAlreadyTaken });
        }

        const fileUrls = req.files.map(file => `/uploads/${file.filename}`);
        const newRdv = new Rdv({ ...req.body, files: fileUrls });
        await newRdv.save();

        await Promise.all([
            sendEmail(email, t.rdvSubject, "", t.rdvMessage(date, time)),
            sendEmail(
                "mimimontmo2@gmail.com",
                t.adminRdvSubject,
                "",
                `
                ${t.adminRdvIntro(firstName, lastName)}
                <p><strong>${t.adminEmail} :</strong> ${email}</p>
                <p><strong>${t.adminDate} :</strong> ${date}</p>
                <p><strong>${t.adminTime} :</strong> ${time}</p>
                <p><strong>${t.adminDescription} :</strong></p>
                <p>${description}</p>
              `
            )
        ]);

        res.status(201).json({ message: t.rdvSuccess });
    } catch (error) {
        console.error(t.rdvError, error);
        res.status(500).json({ message: t.rdvError });
    }
});


// Servir les fichiers statiques depuis "dist" après les routes API
app.use(express.static(path.join(path.resolve(), "dist")));
app.get("*", (req, res) => {
    res.sendFile(path.resolve("dist", "index.html"));
});
app.get("/api/health", (req, res) => {
    res.json({ message: "✅ Serveur opérationnel !" });
});
const translations = {
    fr: {
        contactSuccess: "✅ Contact envoyé avec succès !",
        contactError: "❌ Erreur lors du traitement de la demande.",
        rdvSuccess: "✅ RDV enregistré et confirmé par email.",
        rdvError: "❌ Problème lors de l'enregistrement.",
        contactSubject: "Votre Demande de Contact - Bâti Québec",
        contactMessage: (firstName) => `<p>Merci ${firstName}, nous avons bien reçu votre message.</p>`,
        rdvSubject: "Confirmation de Rendez-vous - Bâti Québec",
        rdvMessage: (date, time) => `<p>Votre RDV est confirmé pour le ${date} à ${time}.</p>`,
        rdvAlreadyTaken: "Ce créneau est déjà réservé.",
        adminContactSubject: "Nouvelle Demande de Contact",
        adminContactIntro: (firstName, lastName) => `<h3>Nouveau message de ${firstName} ${lastName}</h3>`,
        adminEmail: "Email",
        adminDescription: "Description",
        erreuremail: "❌ Email error:",
        emailreussi: "✅ Email sent to",
        adminRdvSubject: "Nouveau RDV Réservé",
        adminRdvIntro: (firstName, lastName) => `<h3>RDV pris par ${firstName} ${lastName}</h3>`,
        adminDate: "Date",
        adminTime: "Heure"

    },
    en: {
        contactSuccess: "✅ Contact sent successfully!",
        contactError: "❌ Error while processing the request.",
        rdvSuccess: "✅ Appointment registered and confirmed by email.",
        rdvError: "❌ Error while saving the appointment.",
        contactSubject: "Your Contact Request - Bâti Québec",
        contactMessage: (firstName) => `<p>Thank you ${firstName}, we have received your message.</p>`,
        rdvSubject: "Appointment Confirmation - Bâti Québec",
        rdvMessage: (date, time) => `<p>Your appointment is confirmed for ${date} at ${time}.</p>`,
        rdvAlreadyTaken: "This time slot is already booked.",
        adminContactSubject: "New Contact Request",
        adminContactIntro: (firstName, lastName) => `<h3>New message from ${firstName} ${lastName}</h3>`,
        adminEmail: "Email",
        erreuremail: "❌ Erreur lors de l'envoi de l'email:",
        emailreussi: "✅ Email envoyé à",
        adminDescription: "Description",
        adminRdvSubject: "New Appointment Booked",
        adminRdvIntro: (firstName, lastName) => `<h3>Appointment booked by ${firstName} ${lastName}</h3>`,
        adminDate: "Date",
        adminTime: "Time"

    }
};


// Démarrage du serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Serveur en cours d'exécution sur le port ${PORT}`);
});
