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
        console.log(`✅ Email envoyé à ${to}`);
    } catch (error) {
        console.error("❌ Erreur lors de l'envoi de l'email:", error.response?.body || error.message);
    }
};

// Route pour le contact
app.post("/api/contact", upload.array("files", 5), async (req, res) => {
    try {
        const { firstName, lastName, email, description } = req.body;
        const attachments = req.files.map(file => ({
            filename: file.originalname,
            path: file.path
        }));

        // Envoi des emails
        await Promise.all([
            sendEmail(email, "Votre Demande de Contact - Bâti Québec", "", `<p>Merci ${firstName}, nous avons bien reçu votre message.</p>`),
            sendEmail("mimimontmo2@hotmail.com", "Nouvelle Demande de Contact", "", `<p>Nouveau message de ${firstName} ${lastName}.</p>`, attachments)
        ]);

        res.status(201).json({ message: "✅ Contact envoyé avec succès !" });
    } catch (error) {
        console.error("❌ Erreur de contact :", error);
        res.status(500).json({ message: "❌ Erreur lors du traitement de la demande." });
    }
});

// Route pour les rendez-vous
app.post("/api/rdv", upload.array("files", 5), async (req, res) => {
    try {
        const { firstName, lastName, email, description, date, time } = req.body;

        // Vérification si le créneau est libre
        const existingRdv = await Rdv.findOne({ date, time });
        if (existingRdv) {
            return res.status(400).json({ message: "Ce créneau est déjà réservé." });
        }

        const fileUrls = req.files.map(file => `/uploads/${file.filename}`);
        const newRdv = new Rdv({ ...req.body, files: fileUrls });
        await newRdv.save();

        // Envoi des emails
        await Promise.all([
            sendEmail(email, "Confirmation de Rendez-vous - Bâti Québec", "", `<p>Votre RDV est confirmé pour le ${date} à ${time}.</p>`),
            sendEmail("mimimontmo2@hotmail.com", "Nouveau RDV Réservé", "", `<p>RDV pris par ${firstName} ${lastName}.</p>`)
        ]);

        res.status(201).json({ message: "✅ RDV enregistré et confirmé par email." });
    } catch (error) {
        console.error("❌ Erreur RDV :", error);
        res.status(500).json({ message: "❌ Problème lors de l'enregistrement." });
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


// Démarrage du serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Serveur en cours d'exécution sur le port ${PORT}`);
});
