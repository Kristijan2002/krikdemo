import { useState } from "react";
import style from "./donateHeader.module.scss";
import { useTranslation } from "react-i18next";

const DonateHeader: React.FC = () => {
    const {t} = useTranslation();
    const [activeOption, setActiveOption] = useState<string>("option1")
    const handleOptionClick = (option: string) => {
        setActiveOption(option)
    }

    return(
        <div className={style.headerDiv}>
            <h1>{t("donateHeader.title")}</h1>
                <div className={style.header}>
                    <ul>
                        <li onClick={() => handleOptionClick("option1")} className={activeOption === "option1" ? style.active : ""}>{t("donateHeader.option1")}</li>
                        <li onClick={() => handleOptionClick("option2")} className={activeOption === "option2" ? style.active : ""}>{t("donateHeader.option2")}</li>
                    </ul>
                </div>
        </div>
    )
}

export default DonateHeader