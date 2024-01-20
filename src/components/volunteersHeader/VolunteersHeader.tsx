import { useState } from "react";
import style from "./volunteersHeader.module.scss";
import { useTranslation } from "react-i18next";

const VolunteersHeader: React.FC = () => {
    const {t} = useTranslation();
    const [activeOption, setActiveOption] = useState<string>("option1")

    const handleOptionClick = (option: string) => {
        setActiveOption(option)
    }

    return(
        <div className={style.header}>
            <h1>{t("volunteersHeader.title")}</h1>

            <ul>
                <li onClick={() => handleOptionClick("option1")} className={activeOption === "option1" ? style.active : ""}>{t("volunteersHeader.option1")}</li>
                <li onClick={() => handleOptionClick("option2")} className={activeOption === "option2" ? style.active : ""}>{t("volunteersHeader.option2")}</li>
            </ul>
        </div>
    )
}

export default VolunteersHeader