import { useNavigate } from "react-router-dom";
import Header from "../Header.jsx";
import { FiHome } from "react-icons/fi";
import { FaHardHat, FaBuilding } from "react-icons/fa";
import '../App.css';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
            backgroundColor: "#ECE2D0",
            margin: "0",
            padding: "0",
            boxSizing: "border-box",
            overflowX: "hidden"
        }}>

            <Header />
            <main style={{ flex: 1, padding: "0", textAlign: "center", position: "relative" }}>

                { }
                <div style={{
                    width: "100%",
                    maxHeight: "80vh",

                    overflow: "hidden",
                    position: "relative"
                }}>
                    <img
                        src="./images/reno.jpg"
                        alt="Background"
                        style={{
                            width: "100%",
                            height: "auto",
                            maxHeight: "80vh",
                            objectFit: "cover",
                            position: relative
                        }}
                    />

                    { }
                    <div className="text-on-image" style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        color: "black",
                        textAlign: "center",
                        backgroundColor: "rgba(255, 255, 255, 0.95)",
                        padding: "5vw",
                        borderRadius: "10px",
                        width: "90%",
                        maxWidth: "700px",
                        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center"

                    }}>
                        <h1 style={{
                            fontSize: "clamp(24px, 4vw, 35px)",
                            color: "black",
                            fontWeight: "bold",
                            marginBottom: "20px",
                        }}>
                            Bienvenue dans le site de Bâti Québec Inc.
                        </h1>
                        <p style={{
                            fontSize: "clamp(14px, 2vw, 16px)",
                            lineHeight: "1.7",
                            marginBottom: "65px"
                        }}>
                            Nous sommes une petite entreprise privée fournissant toutes les phases de construction à nos clients propriétaires. Nous vous traiterons, vous et votre famille, de la conception à l'inspection finale, avec respect du début à la fin. Qu'il s'agisse de rénover une petite salle de bain ou de construire une maison entière, nous somme une compagnie de confiance.
                        </p>

                        <button onClick={() => navigate("/rdv")}
                            style={{
                                marginTop: "5px",
                                color: "white",
                                backgroundColor: "#AD8A64",
                                padding: "12px 20px",
                                borderRadius: "8px",
                                fontWeight: "bold",
                                fontSize: "clamp(14px, 2vw, 16px)",
                                border: "none",
                                cursor: "pointer",
                            }}>
                            Prenez rendez-vous avec nous
                        </button>
                    </div>

                </div>

                { }
                <section style={{
                    backgroundColor: "#ECE2D0",
                    color: "black",
                    padding: "60px 20px",
                    textAlign: "center",
                    marginTop: "40px"
                }}>
                    <h2 style={{ fontSize: "30px", marginBottom: "35px" }}>SERVICES</h2>

                    <div className="services-container" style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "90px",
                        flexWrap: "wrap"
                    }}>


                        { }
                        <div style={{ maxWidth: "300px", textAlign: "center" }}>
                            <FaHardHat size={50} style={{ color: "black" }} />
                            <h3 style={{ fontWeight: "bold", marginTop: "12px" }}>OWNER OCCUPIED PROJECTS</h3>
                            <p>We specialize in owner-occupied projects, ensuring minimal disruption to your daily life while maintaining the highest quality standards.</p>
                        </div>

                        { }
                        <div style={{ maxWidth: "300px", textAlign: "center" }}>
                            <FiHome size={50} style={{ color: "black" }} />
                            <h3 style={{ fontWeight: "bold", marginTop: "12px" }}>CONSTRUCTION</h3>
                            <p>From foundation to finishing touches, we bring your dream home to life with expert craftsmanship and attention to detail.</p>
                        </div>

                        { }
                        <div style={{ maxWidth: "300px", textAlign: "center" }}>
                            <FaBuilding size={50} style={{ color: "black" }} />
                            <h3 style={{ fontWeight: "bold", marginTop: "12px" }}>RENOVATION</h3>
                            <p>Whether upgrading a single room or a complete home renovation, we provide seamless, high-quality remodeling services tailored to your needs.</p>
                        </div>

                    </div>
                </section>
            </main>
        </div>
    );
};

export default Home;