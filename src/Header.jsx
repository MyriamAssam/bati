import { useState } from "react";
import { Suspense } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Header = () => {
    const { t } = useTranslation();
    const [menuOpen, setMenuOpen] = useState(false);

    if (!t) {
        return <div>Loading...</div>;
    }

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <header style={headerStyle}>
                {/* 📌 Logo à gauche */}
                <div style={logoContainer}>
                    <Link to="/" onClick={() => setMenuOpen(false)}>
                        <img src="/images/logoBati.jpg" alt="Logo" style={logoStyle} />
                    </Link>
                </div>

                {/* 📱 Bouton menu hamburger */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    style={hamburgerStyle}
                >
                    ☰
                </button>

                {/* 🌐 Menu desktop */}
                <nav style={{ ...menuStyle, display: window.innerWidth > 768 ? "flex" : "none" }}>
                    <ul style={menuListStyle}>
                        <li><Link to="/" style={linkStyle}>{t("home")}</Link></li>
                        <li><Link to="/about" style={linkStyle}>{t("A_propos")}</Link></li>
                        <li><Link to="/qualifications" style={linkStyle}>Qualifications</Link></li>
                        <li><Link to="/contact" style={linkStyle}>Contact</Link></li>
                        <li><Link to="/rdv" style={linkStyle}>{t("rdv")}</Link></li>
                    </ul>
                </nav>
            </header>

            {/* 🌐 Menu mobile */}
            {menuOpen && (
                <div style={mobileMenuStyle}>
                    <Link to="/" style={mobileLinkStyle} onClick={() => setMenuOpen(false)}>{t("home")}</Link>
                    <Link to="/about" style={mobileLinkStyle} onClick={() => setMenuOpen(false)}>{t("A_propos")}</Link>
                    <Link to="/qualifications" style={mobileLinkStyle} onClick={() => setMenuOpen(false)}>Qualifications</Link>
                    <Link to="/contact" style={mobileLinkStyle} onClick={() => setMenuOpen(false)}>Contact</Link>
                    <Link to="/rdv" style={mobileLinkStyle} onClick={() => setMenuOpen(false)}>{t("rdv")}</Link>
                </div>
            )}
        </Suspense>
    );
};

/* ✅ STYLES */
const headerStyle = {
    backgroundColor: "#AD8A64",
    color: "white",
    padding: "10px 20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    boxSizing: "border-box",
    height: "80px"
};

const logoContainer = {
    flex: 1,
    display: "flex",
    justifyContent: "flex-start",
    marginLeft: "20px"
};

const logoStyle = {
    height: "60px",
    width: "auto"
};

const menuStyle = {
    flex: 1,
    justifyContent: "flex-end",
    marginRight: "20px"
};

const menuListStyle = {
    listStyle: "none",
    display: "flex",
    gap: "20px",
    margin: 0,
    padding: 0
};

const linkStyle = {
    color: "white",
    textDecoration: "none",
    fontSize: "16px"
};

const hamburgerStyle = {
    background: "transparent",
    border: "none",
    fontSize: "26px",
    color: "white",
    cursor: "pointer",
    display: window.innerWidth <= 768 ? "block" : "none"
};

const mobileMenuStyle = {
    position: "fixed",
    top: "80px",
    left: 0,
    width: "100%",
    backgroundColor: "#AD8A64",
    zIndex: 999,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px 0",
};

const mobileLinkStyle = {
    color: "white",
    fontSize: "18px",
    padding: "10px",
    textDecoration: "none",
};

document.body.style.marginTop = "80px";

export default Header;
