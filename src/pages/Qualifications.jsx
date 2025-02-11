import '../App.css';
import { useTranslation } from "react-i18next";

const Qualifications = () => {
    const { t } = useTranslation();
    return (
        <div style={{ textAlign: "left", margin: "0 auto", maxWidth: "100%", width: "90%", padding: "20px", color: "black" }}>
            <h2 className="fade-in">Qualifications</h2>
            <h3 className="fade-in"> {t("categorie1")}</h3>
            <ul className="fade-in">
                <li>{t("qualifications1")}</li>
                <li>{t("qualifications2")}</li>
            </ul>
            <h3 className="fade-in">{t("categorie2")}</h3>
            <ul className="fade-in">

                <li>{t("qualifications3")}</li>
                <li>{t("qualifications4")}</li>
                <li>{t("qualifications5")}</li>
                <li>{t("qualifications6")}</li>
                <li>{t("qualifications7")}</li>
                <li>{t("qualifications8")}</li>
                <li>{t("qualifications9")}</li>
                <li>{t("qualifications10")}</li>
                <li>{t("qualifications11")}</li>
                <li>{t("qualifications12")}</li>
                <li>{t("qualifications13")}</li>
                <li>{t("qualifications14")}</li>
                <li>{t("qualifications15")}</li>
                <li>{t("qualifications16")}</li>
                <li>{t("qualifications17")}</li>
                <li>{t("qualifications18")}</li>
                <li>{t("qualifications19")}</li>
                <li>{t("qualifications20")}</li>
                <li>{t("qualifications21")}</li>
                <li>{t("qualifications22")}</li>
                <li>{t("qualifications23")}</li>
                <li>{t("qualifications24")}</li>
                <li>{t("qualifications25")}</li>
                <li>{t("qualifications27")}</li>
                <li>{t("qualifications28")}</li>
            </ul>
        </div>
    );
};

export default Qualifications;
