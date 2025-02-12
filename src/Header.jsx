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
                        <li><Link to="/" onClick={closeMenu}>Home</Link></li>
                        <li><Link to="/about" onClick={closeMenu}>À propos</Link></li>
                        <li><Link to="/qualifications" onClick={closeMenu}>Qualifications</Link></li>
                        <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
                        <li><Link to="/rdv" onClick={closeMenu}>Rendez-vous</Link></li>
                    </ul>
                </nav>

                <div className="language-switcher">
                    <button onClick={() => i18n.changeLanguage("fr")}>🇫🇷 Français</button>
                    <button onClick={() => i18n.changeLanguage("en")}>🇬🇧 English</button>
                </div>
            </header>
        </Suspense>
    );
};

export default Header;
