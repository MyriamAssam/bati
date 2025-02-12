import { useNavigate } from "react-router-dom";
import Header from "../Header.jsx";
import { FiHome } from "react-icons/fi";
import { FaHardHat, FaBuilding } from "react-icons/fa";
import '../App.css';
import { useTranslation } from "react-i18next";

const Home = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();

    return (
        <div className="home-container">
            <Header />
            <main className="home-content">
                {/* Section Hero avec Image de fond */}
                <div className="home-banner">
                    <div className="text-on-image">
                        <h1>{t("welcome")}</h1>
                        <p>{t("descriptionEntreprise")}</p>
                        <button onClick={() => navigate("/rdv")}>{t("rendezvous")}</button>
                    </div>
                </div>

                {/* Section Services */}
                <section className="services-section">
                    <h2>{t("services")}</h2>

                    <div className="services-container">
                        <div className="service-box">
                            <FaHardHat size={50} className="service-icon" />
                            <h3>{t("services2")}</h3>
                            <p>{t("services3")}</p>
                        </div>

                        <div className="service-box">
                            <FiHome size={50} className="service-icon" />
                            <h3>{t("services4")}</h3>
                            <p>{t("services5")}</p>
                        </div>

                        <div className="service-box">
                            <FaBuilding size={50} className="service-icon" />
                            <h3>{t("services6")}</h3>
                            <p>{t("services7")}</p>
                        </div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default Home;
