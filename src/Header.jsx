import { Suspense } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Header = () => {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
    };

    return (
        <Suspense fallback={<div>Loading...</div>}> {/* ✅ Ajout du suspense */}
            <header>
                <div className="logo-container">
                    <img src="/images/logoBati.jpg" alt="Logo" className="logo" />
                </div>

                <nav>
                    <ul>
                        <li><Link to="/">{t("home")}</Link></li>
                        <li><Link to="/about">{t("A_propos")}</Link></li>
                        <li><Link to="/qualifications">Qualifications</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/rdv">{t("rdv")}</Link></li>
                    </ul>
                </nav>

                <div style={{ marginLeft: "20px" }}>
                    <button onClick={() => changeLanguage("fr")}>🇫🇷 Français</button>
                    <button onClick={() => changeLanguage("en")}>🇬🇧 English</button>
                </div>
            </header>
        </Suspense>
    );
};

export default Header;
