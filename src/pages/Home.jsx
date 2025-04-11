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
                            marginBottom: "65px"
                        }}>
                            {t("descriptionEntreprise")}

                        </p>

                        <button onClick={() => navigate("/rdv")}
                            style={{
                                marginTop: "1px",
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

                    <h2 style={{ fontSize: "30px", marginBottom: "35px" }}> {t("services")}</h2>

                    <div className="services-container" style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "160px",
                        flexWrap: "wrap"
                    }}>


                        { }
                        <div style={{ maxWidth: "300px", textAlign: "center" }}>
                            <FaHardHat size={50} style={{ color: "black" }} />
                            <h3 style={{ fontWeight: "bold", marginTop: "12px" }}>{t("services2")}</h3>
                            <p>{t("services3")}</p>
                        </div>

                        { }
                        <div style={{ maxWidth: "300px", textAlign: "center" }}>
                            <FiHome size={50} style={{ color: "black" }} />
                            <h3 style={{ fontWeight: "bold", marginTop: "12px" }}>{t("services4")}</h3>
                            <p>{t("services5")}</p>
                        </div>

                        { }
                        <div style={{ maxWidth: "300px" }}>
                            <FaBuilding size={50} style={{ color: "black" }} />
                            <h3 style={{ fontWeight: "bold", marginTop: "12px" }}>{t("services6")}</h3>
                            <p>{t("services7")}</p>
                        </div>
                        { }







                        {/* Section Types de Travaux avec effet de fondu */}
                        <section className="fade-in">
                            <h2>Types de Travaux</h2>
                            <div className="travaux-container">
                                <div>
                                    <IoBusinessSharp size={50} />
                                    <h3>Commercial, institutionnel et industriel</h3>
                                </div>
                                <div>
                                    <IoHammerSharp size={50} />
                                    <h3>Rénovation</h3>
                                </div>
                                <div>
                                    <IoHammerOutline size={50} />
                                    <h3>Rénovation commerciale</h3>
                                </div>
                                <div>
                                    <FaHouseDamage size={50} />
                                    <h3>Sous-sol</h3>
                                </div>

                                <div>
                                    <FaWarehouse size={50} style={{ color: "black" }} />
                                    <h3>Agrandissement</h3>
                                </div>

                                <div>
                                    <FaKitchenSet size={50} style={{ color: "black" }} />
                                    <h3>Cuisine</h3>
                                </div>

                                <div>
                                    <FiCloudDrizzle size={50} style={{ color: "black" }} />
                                    <h3>Rénovation après sinistre</h3>
                                </div>

                                <div>
                                    <BiHandicap size={50} style={{ color: "black" }} />
                                    <h3>Rénovation pour personne à mobilité réduite</h3>
                                </div>

                                <div>
                                    <FiUser size={50} style={{ color: "black" }} />
                                    <h3>Experts en sinistre</h3>
                                </div>

                                <div>
                                    <GiHomeGarage size={50} style={{ color: "black" }} />
                                    <h3>Construction et rénovation de garage détaché (jusqu'à 600 m²)</h3>
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

                    </div>
                </section>
            </main>
        </div>

    );
};

export default Home;