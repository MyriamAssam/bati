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
            <nav className={menuOpen ? "menu-open" : "menu-closed"}>
                <ul className="menuListStyle">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">À propos</Link></li>
                    <li><Link to="/qualifications">Qualifications</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/rdv">Rendez-vous</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
