import { EventCardProps } from "@/interfaces";
import style from "./eventCard.module.scss";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

interface Props {
    data: EventCardProps
}

const EventCard: React.FC<Props> = ({data}) => {
    const {i18n} = useTranslation();

    const [language, setLanguage] = useState<"mk" | "en">(i18n.language as "mk" | "en");

    useEffect(() => {
        setLanguage(i18n.language as "mk" | "en")
    }, [i18n.language])
    let arr = [...Array(14)]

    return(
        <div className={style.eventCard}>
           <div className={style.eventCardLeft}>
                <h5 className={style.when}>{data[language]?.when}</h5>
                <h6 className={style.title}>{data[language]?.title}</h6>
                <p className={style.paragraph}>{data[language]?.paragraph}</p>
                <div className={style.btnDiv}>
                <button className={style.seeMoreBtn}>{data[language]?.seeMoreBtn}</button>
                <button className={style.signUp}>{data[language]?.signUp}</button>
                </div>
           </div>
           <div className={style.eventCardRight}>
                <p className={style.date}>{data[language]?.day}<span>{data[language]?.month}</span></p>
                <h1 className={style.title}>{data[language]?.title}</h1>
                <h3 className={style.locationAndTime}>{data[language]?.locationAndTime}</h3>
                <div className={style.dotted}>
                    {
                        arr.map(() => {
                            const randomColor = `#${Math.floor(Math.random()*16777215).toString(16)}`;
                            return(
                                <div key={randomColor} className={style.dot} style={{ background: randomColor }}></div>
                                )
                        })
                    }
                </div>
           </div>
        </div>
    )
}

export default EventCard