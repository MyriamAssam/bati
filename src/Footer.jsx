import { useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate();
    return (
        <footer style={footerStyle}>
            <div style={containerStyle}>
                {/* Logo aligné à gauche et plus bas */}
                <div style={logoContainerStyle}>
                    <img src="/images/logoBati2.jpg" alt="Logo" width="150" height="150" />
                </div>

                {/* Informations de contact au centre */}
                <div style={contactStyle}>
                    <h3>Bâti Québec Inc.</h3>
                    <p>CP 82 NDG, Montréal, Québec H4A-3P4</p>
                    <p>Email: info@batiquebec.com</p>
                    <p>Tél: (514) 992-8595</p>
                </div>

                {/* Section Contact alignée à droite et plus bas */}
                <div style={contactUsStyle}>
                    <h3 style={{ fontWeight: "bold" }}>DES QUESTIONS?</h3>
                    <button onClick={() => navigate("/contact")} style={buttonStyle}>
                        Contactez-nous
                    </button>
                </div>
            </div>

            {/* Copyright en bas bien centré */}
            <div style={copyrightStyle}>
                <p>© 2024 Bâti Québec Inc. Tous droits réservés.</p>
            </div>
        </footer>
    );
};

// ✅ Styles mis à jour
const footerStyle = {
    backgroundColor: "#ECE2D0",
    color: "black",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "30px 20px",
    width: "100%",
    boxSizing: "border-box",
    marginTop: "auto"
};

const containerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",  // 🔹 Aligne les éléments vers le haut et permet de les ajuster
    width: "100%",
    maxWidth: "1200px",
    flexWrap: "wrap",
    gap: "30px" // 🔹 Ajoute un peu d’espace entre les colonnes
};

const logoContainerStyle = {
    flex: "1",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    paddingBottom: "20px"
};

const contactStyle = {
    flex: "1",
    textAlign: "center",
    alignSelf: "center"
};

const contactUsStyle = {
    flex: "1",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    paddingBottom: "20px"
};

const buttonStyle = {
    marginTop: "10px",
    color: "white",
    backgroundColor: "#AD8A64",
    padding: "10px 20px",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px"
};

const copyrightStyle = {
    textAlign: "center",
    marginTop: "20px",
    width: "100%"
};

export default Footer;
