import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./App.css";

const Footer = () => {
    const navigate = useNavigate();
    const { t, i18n } = useTranslation();

    // ✅ Fonction pour changer la langue avec stockage
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        localStorage.setItem("i18nextLng", lng);
    };

    return (
        <footer className="footer">
            <div className="footer-container">

                {/* 🏢 Section Entreprise */}
                <div className="footer-section">
                    <img src="/images/logoBati.jpg" alt="Logo Bâti Québec" width="130" height="130" />
                    <h3>Bâti Québec Inc.</h3>
                    <p>CP 82 NDG, Montréal, Québec H4A-3P4</p>
                </div>

                {/* 📞 Section Contact */}
                <div className="footer-section">
                    <h3>Contact</h3>
                    <p><i className="fas fa-phone"></i> (514) 992-8595</p>
                    <p><i className="fas fa-envelope"></i> <a href="mailto:info@batiquebec.com" className="footer-link">info@batiquebec.com</a></p>
                    <p><i className="fas fa-id-badge"></i> RBQ : 5587-0471-01</p>
                </div>

                {/* 💬 Section Action */}
                <div className="footer-section">
                    <h3>Questions ?</h3>
                    <button onClick={() => navigate("/contact")} className="footer-button">
                        {t("contactfooter")}
                    </button>
                    <div class="language-buttons">
                        <button onClick={() => changeLanguage('fr')} className="lang-btn">FR</button>
                        <button onClick={() => changeLanguage('en')} className="lang-btn">EN</button>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="footer-copyright">
                <p>© 2024 Bâti Québec Inc, {t("copyright")}</p>
            </div>
        </footer>
    );
};

export default Footer; 