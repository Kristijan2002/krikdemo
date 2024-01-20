import style from "./aboutUsBanner.module.scss";
import { useTranslation } from "react-i18next";

const AboutUsBanner: React.FC = () => {
    const {t} = useTranslation();

    return(
        <div className={style.aboutUsBanner}>
           <div className={style.imgDiv}>
                <img src="/krik za nas 1.png" alt="aboutUs" />
           </div>
           <div className={style.textDiv}>
                <h5>{t("aboutUsBanner.title")}</h5>
                <p>{t("aboutUsBanner.paragraph")}</p>
           </div>
        </div>
    )
}

export default AboutUsBanner