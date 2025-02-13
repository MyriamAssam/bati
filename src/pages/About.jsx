import '../App.css';
import { useTranslation } from "react-i18next";

const About = () => {
    const { t } = useTranslation();
    return (
        /*<div className="page-content">*/
        <div style={{ textAlign: "left", margin: "0 auto", maxWidth: "100%", width: "90%", padding: "20px", color: "black" }}>
            <h2 className="fade-in">{t("A_propos")}</h2>
            < h3 className="fade-in" > {t("description")}</h3>
            <p className="fade-in">
                {t("description2")}
            </p>
            <p className="fade-in">
                {t("description3")}
            </p>
            <h3 className="fade-in">{t("description4")}</h3>
            <p className="fade-in">
                {t("description5")}
            </p>
        </div >
        /*</div >*/
    );
};

export default About;
