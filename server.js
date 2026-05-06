import express from "express";
import connectDB from "./rdvdb.js";
import Rdv from "./modeles/Rdv.js";
import cors from "cors";
import multer from "multer";
import path from "path";
import dotenv from "dotenv";
import fs from "fs";

dotenv.config();

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


// Route pour le contact
app.post("/api/contact", upload.array("files", 5), async (req, res) => {
    const lang = req.headers['accept-language'] || 'fr';
    const t = translations[lang] || translations['fr'];

    try {
        const { firstName, lastName, email, description } = req.body;
        const attachments = (req.files || []).map(file => ({
            filename: file.originalname,
            path: file.path
        }));


        res.status(201).json({ message: t.contactSuccess });
    } catch (error) {
        console.error(t.contactError, error);
        res.status(500).json({ message: t.contactError });
    }
});


app.post("/api/rdv", upload.array("files", 5), async (req, res) => {
    const lang = req.headers['accept-language'] || 'fr';
    const t = translations[lang] || translations['fr'];

    try {
        const { firstName, lastName, email, description, date, time } = req.body;
        console.log("BODY:", req.body);
        console.log("FILES:", req.files);
        const existingRdv = await Rdv.findOne({ date, time });
        if (existingRdv) {
            return res.status(400).json({ message: t.rdvAlreadyTaken });
        }

        const attachments = (req.files || []).map(file => ({
        filename: file.originalname,
        path: file.path
       }));

        const fileUrls = (req.files || []).map(
        file => `/uploads/${file.filename}`
      );
        const newRdv = new Rdv({
              ...req.body,
              date: new Date(date),
              files: fileUrls
   });
       
 await newRdv.save();

      res.status(201).json({
         message: t.rdvSuccess
      });

   } catch (error) {
      console.error(t.rdvError, error);
      res.status(500).json({ message: t.rdvError });
   }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
   console.log(`🚀 Serveur en cours d'exécution sur le port ${PORT}`);
});
        
        
  
