import { useTranslation } from "react-i18next";
import style from "./news.module.scss";
import { useEffect, useState } from "react";
import { NewsCard } from "@/interfaces";

interface Props {
    data: {
        en: NewsCard[];
        mk: NewsCard[];
    }
    page: "volunteerPage" | "newsDiv",
}

const News: React.FC<Props> = ({data, page}) => {
    const {t, i18n} = useTranslation();
    const [language, setLanguage] = useState<"mk" | "en">(i18n.language as "mk" | "en");
    const [dataForRender, setDataForRender] = useState<any>(data.mk)

    useEffect(() => {
        setLanguage(i18n.language as "mk" | "en")
    }, [i18n.language]);

    useEffect(() => {
        setDataForRender(data[language])
    }, [data, language])


    return(
        <div className={page === "newsDiv" ? style.newsDiv : style.volunteerProjects}>
                <h1>{t(`${page}.title`)}</h1>
            <div className={page === "newsDiv" ? style.scroll : style.volunteerProjects}>
                {dataForRender.slice(0, page === "volunteerPage" ? 3 : dataForRender.length).map((card: NewsCard) => {
                    return (
                        <div key={card.id} className={style.card}>
                            {page === "volunteerPage" ? (<p className={style.status}>{card.status}</p>) : (<></>)}
                            <img src={card.img} alt="" />
                            <div className={style.cardContent}>
                                <div>
                                    <p>{card.type}</p>
                                    <p>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                            <path d="M8.3051 6.36079V3.80078C8.3051 3.24078 8.7451 2.80078 9.3051 2.80078C9.8651 2.80078 10.3051 3.24078 10.3051 3.80078V6.36079C10.3051 6.92079 9.8651 7.36079 9.3051 7.36079C8.7451 7.36079 8.3051 6.92079 8.3051 6.36079ZM15.7051 7.36079C16.2651 7.36079 16.7051 6.92079 16.7051 6.36079V3.80078C16.7051 3.24078 16.2651 2.80078 15.7051 2.80078C15.1451 2.80078 14.7051 3.24078 14.7051 3.80078V6.36079C14.7051 6.92079 15.1451 7.36079 15.7051 7.36079ZM8.9451 10.8008H16.0451C16.4851 10.8008 16.8451 10.4408 16.8451 10.0008C16.8451 9.56078 16.4851 9.20078 16.0451 9.20078H8.9451C8.5051 9.20078 8.1451 9.56078 8.1451 10.0008C8.1451 10.4408 8.5051 10.8008 8.9451 10.8008ZM20.1051 4.20078H18.4451C18.0051 4.20078 17.6451 4.56078 17.6451 5.00078C17.6451 5.44078 18.0051 5.80078 18.4451 5.80078H19.3051V19.4008H5.7051V5.80078H6.5651C7.0051 5.80078 7.3651 5.44078 7.3651 5.00078C7.3651 4.56078 7.0051 4.20078 6.5651 4.20078H4.9051C4.4651 4.20078 4.1051 4.64076 4.1051 5.08076V20.2008C4.1051 20.6408 4.4651 21.0008 4.9051 21.0008H20.1051C20.5451 21.0008 20.9051 20.6408 20.9051 20.2008V5.08076C20.9051 4.64076 20.5451 4.20078 20.1051 4.20078ZM11.8451 5.80078H13.1651C13.6051 5.80078 13.9651 5.44078 13.9651 5.00078C13.9651 4.56078 13.6051 4.20078 13.1651 4.20078H11.8451C11.4051 4.20078 11.0451 4.56078 11.0451 5.00078C11.0451 5.44078 11.4051 5.80078 11.8451 5.80078ZM8.9451 14.4008H16.0451C16.4851 14.4008 16.8451 14.0408 16.8451 13.6008C16.8451 13.1608 16.4851 12.8008 16.0451 12.8008H8.9451C8.5051 12.8008 8.1451 13.1608 8.1451 13.6008C8.1451 14.0408 8.5051 14.4008 8.9451 14.4008Z" fill="white"/>
                                        </svg>
                                       {card.date}
                                    </p>
                                    </div>
                                <p className={style.paragraph}>{card.paragraph}</p>
                                <button>
                                    {card.btn}
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                        <path d="M4.25 12H20.75" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M14 5.25L20.75 12L14 18.75" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </button>
                            </div>
                        </div>)
                })}
            </div>
            <div className={style.btnWrapper}>
                {page === "newsDiv" ? (<button className={style.seeMore}>{t("newsDiv.btn")}</button>) : (<></>)}
            </div>
        </div>
    )
}

export default News