import { useNavigate } from "react-router-dom";
import './App.css';
const Footer = () => {
    const navigate = useNavigate();

    return (
        <footer className="footer">
            <div className="footer-container">
                {/* 🏢 Section Entreprise */}
                <div className="footer-section">
                    <img src="/images/logoBati.jpg" alt="Logo Bâti Québec" />
                    <h3>Bâti Québec Inc.</h3>
                    <p>CP 82 NDG, Montréal, Québec H4A-3P4</p>
                </div>

                {/* 📞 Section Contact */}
                <div className="footer-section">
                    <h3>Nous Contacter</h3>
                    <p>(514) 992-8595</p>
                    <p><a href="mailto:info@batiquebec.com" className="footer-link">info@batiquebec.com</a></p>
                    <p>RBQ : 5587-0471-01</p>
                </div>

                {/* 💬 Section Action */}
                <div className="footer-section">
                    <h3>Des Questions ?</h3>
                    <button onClick={() => navigate("/contact")} className="footer-button">
                        Contactez-nous
                    </button>
                </div>
            </div>

            {/* Copyright */}
            <div className="footer-copyright">
                <p>© 2024 Bâti Québec Inc. Tous droits réservés.</p>
            </div>
        </footer>
    );
};

export default Footer;