import style from "./partners.module.scss";
import { useTranslation } from "react-i18next";

const Partners: React.FC = () => {
    const {t} = useTranslation();

    return(
        <div className={style.partnersDiv}>
            <h1>{t("partners")}</h1>

            <div className={style.partnersLogos}>
                <div className={style.logosWrapper}>
                    <img src="/partners/VCS 1.png" alt="VCS" />
                    <img src="/partners/Frame 92.png" alt="MladiHub" />
                    <img src="/partners/nmsmakedonija 1.png" alt="NMSM" />
                    <img src="/partners/stella-network 2.png" alt="stella" />
                </div>
            </div>
        </div>
    )
}

export default Partners