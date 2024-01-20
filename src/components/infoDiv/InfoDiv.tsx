import { useTranslation } from "react-i18next";
import style from "./infoDiv.module.scss";

const InfoDiv: React.FC = () => {
    const {t} = useTranslation();

    return(
        <div className={style.infoDiv}>
            <div className={style.projects}>
                <p>{t("infoDiv.projects.count")}</p>
                <h1>{t("infoDiv.projects.title")}</h1>
            </div>
            <div className={style.volunteers}>
                <p>{t("infoDiv.volunteers.count")}</p>
                <h1>{t("infoDiv.volunteers.title")}</h1>
            </div>
            <div className={style.partners}>
                <p>{t("infoDiv.partners.count")}</p>
                <h1>{t("infoDiv.partners.title")}</h1>
            </div>
        </div>
    )
}

export default InfoDiv