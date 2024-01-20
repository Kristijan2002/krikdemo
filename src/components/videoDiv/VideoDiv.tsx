import { useTranslation } from "react-i18next";
import style from "./videoDiv.module.scss";
import Link from "next/link";

const VideoDiv: React.FC = () => {
    const {t} = useTranslation();

    return(
        <div className={style.videoDiv}>
            <div className={style.videoWrapper}>
                <h1>Placeholder for video</h1>
            </div>
            <div className={style.volunteersApplication}>
                <h1>{t("videoDiv.title")}</h1>
                <p>{t("videoDiv.paragraph")}</p>
                <Link href="volunteers/application">
                <button>{t("videoDiv.btn")}</button>
                </Link>
            </div>
        </div>
    )
}

export default VideoDiv