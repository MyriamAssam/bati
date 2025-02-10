import { useState } from "react";
import { Link } from "react-router-dom";
import './App.css';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header>
            <div className="logo-container">
                <img src="/images/logoBati.jpg" alt="Logo" className="logo" />
            </div>

            {/* Bouton menu pour mobile */}
            <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
                ☰
            </button>

            {/* Menu de navigation */}
            <nav className={menuOpen ? "menu-open" : ""}>
                <ul className="menuListStyle">
                    <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
                    <li><Link to="/about" onClick={() => setMenuOpen(false)}>À propos</Link></li>
                    <li><Link to="/qualifications" onClick={() => setMenuOpen(false)}>Qualifications</Link></li>
                    <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
                    <li><Link to="/rdv" onClick={() => setMenuOpen(false)}>Rendez-vous</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
