import { useState } from "react";
import '../App.css';
const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        description: "",
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

        const formDataObj = new FormData();
        Object.keys(formData).forEach(key => {
            if (key !== "files") {
                formDataObj.append(key, formData[key]);
            }
        });

        formData.files.forEach(file => {
            formDataObj.append("files", file);
        });

        try {
            const response = await fetch("http://localhost:5000/api/contact", {
                method: "POST",
                body: formDataObj
            });

            const data = await response.json();

            if (response.ok) {
                setMessage({ type: "success", text: "✅ Nous vous contacterons des que possible !" });
                setTimeout(() => setMessage(null), 5000);
            } else {
                setMessage({ type: "error", text: data.message || "❌ Erreur lors de l'enregistrement." });
            }
        } catch (error) {
            console.error("Error:", error);
            setMessage({ type: "error", text: "❌ Problème de connexion avec le serveur." });
        }
    };


    return (
        <form className="form-container fade-in" onSubmit={handleSubmit} >
            <h2>Contactez-nous!</h2>

            <div style={fieldStyle}>
                <label>Prénom :</label>
                <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required style={inputStyle} />
            </div>

            <div style={fieldStyle}>
                <label>Nom :</label>
                <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required style={inputStyle} />
            </div>

            <div style={fieldStyle}>
                <label>Email :</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} required style={inputStyle} />
            </div>



            <div style={fieldStyle}>
                <label>Description :</label>
                <textarea name="description" value={formData.description} onChange={handleChange} rows="4" style={{ ...inputStyle, height: "100px" }} />
            </div>

            <div style={fieldStyle}>
                <label>Ajoutez des photos ou vidéos :</label>
                <input type="file" multiple accept="image/*,video/*" onChange={handleFileChange} style={inputStyle} />
            </div>
            <button type="submit" style={buttonStyle}>
                Send
            </button>
            { }
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

export default Contact;