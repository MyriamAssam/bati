import { useNavigate } from "react-router-dom";
import './App.css';
import { useTranslation } from "react-i18next";

const Footer = () => {
    const navigate = useNavigate();
    const { t } = useTranslation(); // ✅ Doit être dans le composant

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <img src="/images/logoBati.jpg" alt="Logo Bâti Québec" />
                    <h3>Bâti Québec Inc.</h3>
                    <p>CP 82 NDG, Montréal, Québec H4A-3P4</p>
                </div>

                <div className="footer-section">
                    <h3>Contact</h3>
                    <p>(514) 992-8595</p>
                    <p><a href="mailto:info@batiquebec.com" className="footer-link">info@batiquebec.com</a></p>
                    <p>RBQ : 5587-0471-01</p>
                </div>

                <div className="footer-section">
                    <h3>{t("questions")}</h3>
                    <button onClick={() => navigate("/contact")} className="footer-button">
                        {t("contactfooter")}
                    </button>
                </div>
            </div>

            <div className="footer-copyright">
                <p>{t("copyright")}</p>
            </div>
        </footer>
    );
};

export default Footer;
