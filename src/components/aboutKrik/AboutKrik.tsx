import style from "./aboutKrik.module.scss";
import { useTranslation } from "react-i18next";

const AboutKrik: React.FC = () => {
    const {t} = useTranslation();

    return(
        <div className={style.aboutKrik}>
            <h1>{t("aboutKrik.title")}</h1>
            <div className={style.wrapper}>
                <div className={style.row}>
                    <div className={style.rowWrapper}>
                        <h5>{t("aboutKrik.mission")}</h5>
                        <p>{t("aboutKrik.missionParagraph")}</p>
                    </div>
                </div>
                <div className={style.row}>
                    <div className={style.rowWrapper}>
                        <h5>{t("aboutKrik.vision")}</h5>
                        <p>{t("aboutKrik.visionParagraph")}</p>
                    </div>
                </div>
                <div className={style.row}>
                    <div className={style.rowWrapper}>
                        <h5>{t("aboutKrik.ourValues")}</h5>
                        <p>{t("aboutKrik.ourValuesParagpraph")}</p>
                    </div>
                </div>
            </div>
          
        </div>
    )
}

export default AboutKrik