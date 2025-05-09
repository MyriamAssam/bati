import { useNavigate } from "react-router-dom";
import Header from "../Header.jsx";
import { FiHome } from "react-icons/fi";
import { FaHardHat, FaBuilding, FaHouseDamage } from "react-icons/fa";
import '../App.css';
import { useTranslation } from "react-i18next";
import { IoBusinessSharp } from "react-icons/io5";
import { IoHammerOutline, IoHammerSharp } from "react-icons/io5";
import { FaKitchenSet } from "react-icons/fa6";
import { FiCloudDrizzle, FiUser } from "react-icons/fi";
import { GiHomeGarage } from "react-icons/gi";
import { BiHandicap } from "react-icons/bi";
import { FaWarehouse } from "react-icons/fa6";

import { useEffect } from "react";

const Home = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    useEffect(() => {
        const fadeInElements = document.querySelectorAll(".fade-in");

        if (fadeInElements.length === 0) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        fadeInElements.forEach((element) => observer.observe(element));

        return () => {
            fadeInElements.forEach((element) => observer.unobserve(element));
        };
    }, []);

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
                    height: "80vh",

                    overflow: "hidden",
                    position: "relative"
                }}>
                    <img
                        src="./images/reno.jpg"
                        alt="Background"
                        style={{
                            width: "100%",
                            height: "100%",

                            objectFit: "cover",
                            position: "absolute",
                            top: "0",
                            left: "0"
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

                        backgroundColor: "rgba(255, 255, 255, 0.85)",
                        padding: "5vw",
                        borderRadius: "10px",
                        width: "90%",
                        maxWidth: "700px",
                        boxShadow: "10px 5px 5px rgba(0, 0, 0, 0.1)",
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
                            {t("welcome")}

                        </h1>
                        <p style={{
                            fontSize: "clamp(14px, 2vw, 16px)",
                            lineHeight: "1.7",
                            marginBottom: "25px"
                        }}>
                            {t("descriptionEntreprise")}

                        </p>

                        <button onClick={() => navigate("/rdv")}
                            style={{
                                marginTop: "-1px",
                                color: "white",
                                backgroundColor: "#AD8A64",
                                padding: "12px 20px",
                                borderRadius: "8px",
                                fontWeight: "bold",
                                fontSize: "clamp(14px, 2vw, 16px)",
                                border: "none",
                                cursor: "pointer",
                            }}>
                            {t("rendezvous")}

                        </button>

                        <button onClick={() => window.location.href = "https://app-soumission.onrender.com"}
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
                            {t("soumissions")}
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

                    <section style={{ backgroundColor: "#ECE2D0", padding: "60px 20px", textAlign: "center" }}>
                        <h2 style={{ fontSize: "30px", marginBottom: "35px" }}>Nos services</h2>

                        <div style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                            gap: "20px",
                            justifyItems: "center"
                        }}>
                            {[
                                { label: "Commercial, institutionnel et industriel", image: "./images/pexels-jeshoots-com-147458-834892.jpg" },
                                { label: "Rénovation", image: "./images/pexels-cottonbro-4488660.jpg" },
                                { label: "Rénovation commerciale", image: "./images/pexels-cottonbro-4488660.jpg" },
                                { label: "Sous-sol", image: "./images/pexels-rquiros-2219024" },
                                { label: "Agrandissement", image: "./images/pexels-sevenstormphotography-439416" },
                                { label: "Cuisine", image: "./images/pexels-lamiko-3616759.jpg" },
                                { label: "Rénovation après sinistre", image: "./images/pexels-monica-3562689.jpg" },
                                { label: "Rénovation pour personne à mobilité réduite", image: "./images/pexels-cottonbro-6583355" },
                                { label: "Experts en sinistre", image: "./images/pexels-cottonbro-4488660.jpg" },
                                { label: "Construction et rénovation de garage détaché (jusqu'à 600 m²)", image: "./images/pexels-cottonbro-4488660.jpg" },
                            ].map((service, i) => (
                                <div key={i} style={{
                                    backgroundImage: `url(${service.image})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    width: "100%",
                                    minHeight: "200px",
                                    borderRadius: "8px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: "white",
                                    fontWeight: "bold",
                                    fontSize: "1.2rem",
                                    textShadow: "0 2px 4px rgba(0,0,0,0.7)"
                                }}>
                                    {service.label}
                                </div>
                            ))}

                            {/* Et plus encore... */}
                            <div style={{
                                backgroundColor: "#1c1c1c",
                                borderRadius: "8px",
                                padding: "20px",
                                color: "white",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center"
                            }}>
                                <h3 style={{ marginBottom: "15px" }}>Et plus encore...</h3>

                            </div>
                        </div>
                    </section>


                    <div className="fixed-logos">
                        <button className="logo-apchq">
                            <img src="/images/logo_apchq_full-removebg-preview.png" alt="Logo APCHQ" />
                            <p>Entrepreneurs membres de l'APCHQ</p>
                        </button>
                        <button className="logo-rbq">
                            <p>RBQ : 5820-5246-01</p>
                            <img src="/images/rbqlogo-removebg-preview.png" alt="Logo RBQ" />

                        </button>
                    </div>


                </section>
            </main >

        </div >
    );
};

export default Home;