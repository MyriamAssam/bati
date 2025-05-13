import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./App.css";

const Footer = () => {
    const navigate = useNavigate();
    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        localStorage.setItem("i18nextLng", lng);
    };

    return (
        <footer className="footer">
            <div className="footer-container">
                {/* 🏢 Section Entreprise */}
                <div className="footer-section entreprise">
                    <div className="footer-logo-text">
                        <img src="/images/logoBati.jpg" alt="Logo Bâti Québec" className="footer-logo-img" />
                        <h3 className="footer-title">Bâti Québec Inc.</h3>
                    </div>
                    <p>CP 82 NDG, Montréal, Québec H4A-3P4</p>
                </div>


                {/* 📞 Section Contact */}
                <div className="footer-section">
                    <h3>Contact</h3>
                    <p>(514) 992-8595</p>
                    <p><a href="mailto:info@batiquebec.com" className="footer-link">info@batiquebec.com</a></p>
                    <p>RBQ : 5587-0471-01</p>
                </div>

                {/* 💬 Section Action */}
                <div className="footer-section">
                    <h3>Questions ?</h3>
                    <button onClick={() => navigate("/contact")} className="footer-button">
                        {t("contactfooter")}
                    </button>
                    <div className="language-buttons">
                        <button onClick={() => changeLanguage('fr')} className="lang-btn">FR</button>
                        <button onClick={() => changeLanguage('en')} className="lang-btn">EN</button>
                    </div>
                </div>
            </div>

            {/* ✅ Logos APCHQ + RBQ pour mobile */}
            <div className="footer-certifications">
                <div className="certification-block">
                    <img src="/images/logo_apchq_full-removebg-preview.png" alt="Logo APCHQ" />
                    <p>{t("entrepreneurs")}</p>
                </div>
                <div className="certification-block">
                    <img src="/images/rbqlogo-removebg-preview.png" alt="Logo RBQ" />
                    <p>RBQ : 5820-5246-01</p>
                </div>
            </div>

            <div className="footer-copyright">
                <p>© 2024 Bâti Québec Inc, {t("copyright")}</p>
            </div>
        </footer>
    );
};

export default Footer;
