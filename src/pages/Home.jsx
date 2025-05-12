import { useNavigate } from "react-router-dom";
import Header from "../Header.jsx";
import '../App.css';
import { useTranslation } from "react-i18next";
import { useEffect } from "react";

const Home = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    useEffect(() => {
        const cards = document.querySelectorAll(".card-fade");

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

        cards.forEach((card) => observer.observe(card));

        return () => {
            cards.forEach((card) => observer.unobserve(card));
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
                    textAlign: "center"
                }}>
                    <section style={{
                        backgroundColor: "#ECE2D0",
                        padding: "60px 20px",
                        textAlign: "center"
                    }}>
                    </section>

                    <section style={{ backgroundColor: "#ECE2D0", padding: "60px 20px", textAlign: "center" }}>
                        <h2 style={{ fontSize: "30px", marginBottom: "35px" }}>{t("Services offerts")} : </h2>

                        <div
                            style={{
                                display: "grid",
                                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                                gap: "25px",
                                justifyItems: "center",
                                padding: "0 10px"
                            }}
                        >
                            {[
                                { label: t("Commercial"), image: "./images/pexels-jeshoots-com-147458-834892.jpg" },
                                { label: t("Rénovation"), image: "./images/pexels-cottonbro-6583355.jpg" },
                                { label: t("Rénovation commerciale"), image: "./images/pexels-bidvine-517980-1249611.jpg" },
                                { label: t("Sous-sol"), image: "./images/pexels-rquiros-2219024.jpg" },
                                { label: t("Agrandissement"), image: "./images/pexels-curtis-adams-1694007-4092030.jpg" },
                                { label: t("Cuisine"), image: "./images/pexels-lamiko-3616759.jpg" },
                                { label: t("Rénovation après sinistre"), image: "./images/pexels-kseniachernaya-5768107.jpg" },
                                { label: t("Accessibilité PMR"), image: "./images/pexels-marcus-aurelius-4063493.jpg" },
                                { label: t("Experts en sinistre"), image: "./images/pexels-shawlw-804394.jpg" },
                                { label: t("Garage détaché (jusqu'à 600 m²)"), image: "./images/pexels-cottonbro-4488660.jpg" }
                            ].map((service, i) => (
                                <div
                                    key={i}
                                    className="card-fade"
                                    style={{
                                        position: "relative",
                                        width: "100%",
                                        minHeight: "220px",
                                        borderRadius: "12px",
                                        overflow: "hidden",
                                        boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                                        cursor: "pointer",
                                        transition: "transform 0.3s ease",
                                    }}
                                    onMouseOver={e => (e.currentTarget.style.transform = "scale(1.02) rotate(-0.5deg)")}
                                    onMouseOut={e => (e.currentTarget.style.transform = "scale(1) rotate(0)")}
                                >

                                    <img
                                        src={service.image}
                                        alt={service.label}
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            objectFit: "cover",
                                            display: "block"
                                        }}
                                    />
                                    <div
                                        style={{
                                            position: "absolute",
                                            bottom: 0,
                                            width: "100%",
                                            padding: "10px",
                                            background: "linear-gradient(to top, rgba(0,0,0,0.6), transparent)",
                                            color: "#fff",
                                            fontWeight: "bold",
                                            textAlign: "center"
                                        }}
                                    >
                                        {service.label}
                                    </div>
                                </div>
                            ))}

                            {/* Et plus encore... */}
                            <div
                                style={{
                                    backgroundColor: "#3B2F2F",
                                    color: "white",
                                    borderRadius: "12px",
                                    padding: "30px 20px",
                                    textAlign: "center",
                                    fontWeight: "bold",
                                    fontSize: "1.1rem",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    height: "220px",
                                    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                                    gridColumn: "span 2",
                                    width: "100%",
                                    minWidth: "480px",
                                    maxWidth: "100%"
                                }}
                            >
                                <span style={{ lineHeight: "1.5" }}>
                                    {t("servicemessage")}<br />
                                    {t("demande")}&nbsp;!
                                </span>
                            </div>


                        </div>

                    </section>


                    <div className="fixed-logos">
                        <button className="logo-apchq">
                            <img src="/images/logo_apchq_full-removebg-preview.png" alt="Logo APCHQ" />
                            <p>{t("entrepreneurs")}</p>

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