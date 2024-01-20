import { useTranslation } from "react-i18next";
import style from "./banner.module.scss";
import Link from "next/link";

const Banner: React.FC = () => {
    const {t} = useTranslation();

    return(
        <div className={style.banner}>
            
            {
                <>
                <h1>{t("banner.title")}</h1>
                <h5>{t("banner.question_title")}</h5>
                <p>{t("banner.answer")}</p>
                <Link href="/aboutUs" className={style.link}>{t("banner.button")}</Link>
                </>
            }    
           
        </div>
    )
}

export default Banner