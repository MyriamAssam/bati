import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header style={headerStyle}>
            {/* 📌 Logo plus à gauche */}
            <div style={logoContainer}>
                <img src="/images/logoBati.jpg" alt="Logo" style={logoStyle} />
            </div>

            {/* 📌 Navigation plus à droite */}
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
    height: "80px"
};

const logoContainer = {
    flex: 1,
    display: "flex",
    justifyContent: "flex-start", /* ✅ Ajouté pour aligner à gauche */
    marginLeft: "20px"
};

const logoStyle = {
    height: "60px",
    width: "auto"
};

const menuStyle = {
    flex: 1,
    display: "flex",
    justifyContent: "flex-end",
    marginRight: "20px"
};

const menuListStyle = {
    listStyle: "none",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
    margin: 0,
    padding: 0
};

const linkStyle = {
    color: "white",
    textDecoration: "none",
    fontSize: "16px"
};

document.body.style.marginTop = "80px";

export default Header;
