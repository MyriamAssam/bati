import { Link } from "react-router-dom";
import './App.css';
import { useEffect } from "react";


const Header = () => {
    useEffect(() => {
        console.log("Largeur de l'écran : " + window.innerWidth + "px");
    }, []);
    return (
        <header>
            {/* 📌 Logo bien positionné */}
            <div className="logo-container">
                <img src="/images/logoBati.jpg" alt="Logo" className="logo" />
            </div>

            {/* 📌 Navigation avec toutes les pages */}
            <nav style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
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

