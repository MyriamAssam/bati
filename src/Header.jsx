import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header style={headerStyle}>
            {/* 📌 Section Contact à gauche */}
            <div style={contactStyle}>
                <span style={{ fontWeight: "bold" }}>RBQ : 5587-0471-01</span>
                <span>(514) 992-8595</span>
                <a href="mailto:info@batiquebec.com" style={emailStyle}>info@batiquebec.com</a>
            </div>

            {/* 📌 Logo centré */}
            <div style={logoContainer}>
                <img src="/images/logoBati.jpg" alt="Logo" style={logoStyle} />
            </div>

            {/* 📌 Navigation à droite */}
            <nav style={menuStyle}>
                <ul style={menuListStyle}>
                    <li><Link to="/" style={linkStyle}>Home</Link></li>
                    <li><Link to="/about" style={linkStyle}>About</Link></li>
                    <li><Link to="/qualifications" style={linkStyle}>Qualifications</Link></li>
                    <li><Link to="/contact" style={linkStyle}>Contact</Link></li>
                    <li><Link to="/rdv" style={linkStyle}>Rendez-vous</Link></li>
                </ul>
            </nav>
        </header>
    );
};

/* ✅ Styles mis à jour */
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
    height: "80px" // 🔹 Ajuste la hauteur du header
};

const contactStyle = {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    flex: 1,
    justifyContent: "flex-start"
};

const emailStyle = {
    color: "white",
    textDecoration: "none"
};

/* ✅ Centrage parfait du logo */
const logoContainer = {
    flex: 1,
    display: "flex",
    justifyContent: "center"
};

const logoStyle = {
    height: "60px", // 🔹 Réduit la taille du logo
    width: "auto"
};

const menuStyle = {
    flex: 1,
    display: "flex",
    justifyContent: "flex-end"
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

/* 🔹 Ajout pour éviter que le contenu ne soit caché sous le header */
document.body.style.marginTop = "80px";

export default Header;
