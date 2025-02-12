import { useState } from "react";
import { Suspense } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Header = () => {
    const { t, i18n } = useTranslation();
    const [menuOpen, setMenuOpen] = useState(false);

    if (!t) {
        return <div>Loading...</div>;
    }

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <header>
                <div className="logo-container">
                    <img src="/images/logoBati.jpg" alt="Logo" className="logo" />
                </div>

                <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
                    ☰
                </button>

                <nav className={menuOpen ? "menu-open" : ""}>
                    <ul className="menuListStyle">
                        <li><Link to="/" onClick={() => setMenuOpen(false)}>{t("home")}</Link></li>
                        <li><Link to="/about" onClick={() => setMenuOpen(false)}>{t("A_propos")}</Link></li>
                        <li><Link to="/qualifications" onClick={() => setMenuOpen(false)}>Qualifications</Link></li>
                        <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
                        <li><Link to="/rdv" onClick={() => setMenuOpen(false)}>{t("rdv")}</Link></li>
                    </ul>
                </nav>


            </header>
        </Suspense>
    );
};

export default Header;
