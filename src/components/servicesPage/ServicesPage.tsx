import { useState } from "react";
import style from "./servicesPage.module.scss";
import { useTranslation } from "react-i18next";

const ServicesPage: React.FC = () => {
    const {t} = useTranslation();
    const [activeService, setActiveService] = useState("service01");

    const handleServiceClick = (service: string) => {
        setActiveService(service);
    }

    return(
        <div className={style.servicesPage}>
           <div className={style.header}>
                <ul>
                    <li onClick={() => handleServiceClick("service01")} className={activeService === "service01" ? style.active : ""}>{t("services.service01")}</li>
                    <li onClick={() => handleServiceClick("service02")} className={activeService === "service02" ? style.active : ""}>{t("services.service02")}</li>
                    <li onClick={() => handleServiceClick("service03")} className={activeService === "service03" ? style.active : ""}>{t("services.service03")}</li>
                </ul>
           </div>

           <div className={style.description}>
                <h1>{t(`services.${activeService}`)}</h1>
                <p>{t(`services.${activeService}Desc`)}</p>
           </div>

           <div className={style.gallery}>
                <h3>{t("servicesGallery")}</h3>
                <div>
                    <img src="/servicesGallery/Rectangle 11.png" alt="." />
                    <img src="/servicesGallery/centar krikni 2 3.png" alt="" className={style.filter}/>
                </div>
                <div>
                    <img src="/servicesGallery/Rectangle 21.png" alt="." className={style.filter}/>
                    <img src="/servicesGallery/Rectangle 22.png" alt="." />
                    <img src="/servicesGallery/Rectangle 23.png" alt="." />
                </div>
           </div>
        </div>
    )
}

export default ServicesPage