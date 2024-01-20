import { useTranslation } from "react-i18next";
import style from "./ourServices.module.scss";

const OurServices: React.FC = () => {
    const {t} = useTranslation();

    return(
        <div className={style.ourServices}>
            <h1>{t("ourServices.title")}</h1>
            <div className={style.wrapper}>
        <div className={style.imgDiv}>
           <img src="/homepage_uslugi_cardimg.jpg" alt="" />
        </div>
           <div className={style.services}>
                <div>
                    <h4>{t("ourServices.service1.title")}
                    <svg xmlns="http://www.w3.org/2000/svg" width="29" height="28" viewBox="0 0 29 28" fill="none">
                        <path d="M7.88135 22.1667L22.9473 7M22.9473 7V21.56M22.9473 7H8.48399" stroke="white" stroke-width="2" stroke-linecap="square"/>
                    </svg>
                    </h4>
                    <p>{t("ourServices.service1.paragraph")}</p>
                </div>
                <div>
                <h4>{t("ourServices.service2.title")}
                <svg xmlns="http://www.w3.org/2000/svg" width="29" height="28" viewBox="0 0 29 28" fill="none">
                    <path d="M7.88135 22.1667L22.9473 7M22.9473 7V21.56M22.9473 7H8.48399" stroke="white" stroke-width="2" stroke-linecap="square"/>
                </svg>
                </h4>
                    <p>{t("ourServices.service2.paragraph")}</p>
                </div>
                <div>
                <h4>{t("ourServices.service3.title")}
                <svg xmlns="http://www.w3.org/2000/svg" width="29" height="28" viewBox="0 0 29 28" fill="none">
                    <path d="M7.88135 22.1667L22.9473 7M22.9473 7V21.56M22.9473 7H8.48399" stroke="white" stroke-width="2" stroke-linecap="square"/>
                </svg>
                </h4>
                    <p>{t("ourServices.service3.paragraph")}</p>
                </div>
           </div>
            </div>
        </div>
    )
}

export default OurServices