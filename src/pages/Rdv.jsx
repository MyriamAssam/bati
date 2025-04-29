import { useState } from "react";
import '../App.css';
import { useTranslation } from "react-i18next";

const Rdv = () => {
    const { t, i18n } = useTranslation();
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        description: "",
        date: "",
        time: "",
        files: []
    });

    const [message, setMessage] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleFileChange = (e) => {
        const selectedFiles = Array.from(e.target.files);
        setFormData({
            ...formData,
            files: selectedFiles
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage(null);

        const formDataObj = new FormData();
        Object.keys(formData).forEach(key => {
            if (key !== "files") {
                formDataObj.append(key, formData[key]);
            }
        });
        formData.files.forEach(file => {
            formDataObj.append("files", file);
        });

        const API_URL = import.meta.env.VITE_API_URL;

        try {
            const response = await fetch(`${API_URL}/api/rdv`, {
                method: "POST",
                headers: {
                    'Accept-Language': i18n.language || 'fr'  // <- Ajout clé ici
                },
                body: formDataObj
            });


            const data = await response.json();

            if (response.ok) {
                setMessage({ type: "success", text: t("message_success_rdv") });
                setTimeout(() => setMessage(null), 5000);
            } else {
                setMessage({ type: "error", text: data.message || t("erreur enregistrement") });
            }
        } catch (error) {
            console.error("Erreur:", error);
            setMessage({ type: "error", text: t("erreur serveur") });
        }
    };

    return (
        <div className="page-content form-layout">
            <form className="form-container fade-in page-content" onSubmit={handleSubmit} >
                <h2> {t("rdvprojets")}</h2>

                <div style={fieldStyle}>
                    <label>{t("first_name")}</label>
                    <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required style={inputStyle} />
                </div>

                <div style={fieldStyle}>
                    <label>{t("last_name")}</label>
                    <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required style={inputStyle} />
                </div>

                <div style={fieldStyle}>
                    <label>Email :</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required style={inputStyle} />
                </div>

                <div style={fieldStyle}>
                    <label>{t("date")}</label>
                    <input type="date" name="date" value={formData.date} onChange={handleChange} required style={inputStyle} />
                </div>

                <div style={fieldStyle}>
                    <label>{t("heure")}</label>
                    <input type="time" name="time" value={formData.time} onChange={handleChange} required style={inputStyle} />
                </div>

                <div style={fieldStyle}>
                    <label>Description :</label>
                    <textarea name="description" value={formData.description} onChange={handleChange} rows="4" style={{ ...inputStyle, height: "100px" }} />
                </div>

                <div style={fieldStyle}>
                    <label>{t("fichiers")}</label>
                    <input type="file" multiple accept="image/*,video/*" onChange={handleFileChange} style={inputStyle} />
                </div>

                <button type="submit" style={buttonStyle}>{t("envoi")}</button>

                {message && (
                    <p style={{
                        color: message.type === "success" ? "green" : "red",
                        fontWeight: "bold",
                        marginTop: "10px"
                    }}>
                        {message.text}
                    </p>
                )}
            </form>
            <div className="info-box-rdv">
                <h3>{t("Besoin d'aller plus loin ?")}</h3>
                <p>{t("Si vous souhaitez faire une soumission, rendez-vous sur notre site")} <strong>Bâti Québec Soumissions</strong> {t("ou téléchargez l'application")} <strong>Bâti Québec Soumissions</strong>.</p>
                <p>{t("Pour estimer les prix de vos projets, téléchargez l'application")} <strong>Bâti Québec Estimation</strong>.</p>
            </div>
        </div>

    );
};

const fieldStyle = {
    marginBottom: "15px"
};

const inputStyle = {
    width: "100%",
    padding: "8px",
    marginTop: "5px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "16px"
};

const buttonStyle = {
    backgroundColor: "#AD8A64",
    color: "white",
    padding: "10px 15px",
    fontSize: "16px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
};

export default Rdv;
