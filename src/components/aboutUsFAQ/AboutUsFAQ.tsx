import { AboutUsFAQType } from "@/interfaces";
import style from "./aboutUsFAQ.module.scss";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

interface Props {
    data: AboutUsFAQType
}

const AboutUsFAQ: React.FC<Props> = ({data}) => {
    const {t} = useTranslation();
    const {i18n} = useTranslation();

    const [language, setLanguage] = useState<"mk" | "en">(i18n.language as "mk" | "en");
    const [activeQuestion, setActiveQuestion] = useState<number | null>(null);


    useEffect(() => {
        setLanguage(i18n.language as "mk" | "en")
    }, [i18n.language]);

    const toggleAnswer = (index: number) => {
        setActiveQuestion((prev) => (prev === index ? null : index));
    };

    return(
        <div className={style.aboutUsFAQ}>
            <h1>{t("aboutUsFAQ")}</h1>

            {
            data[language].map((card, index) => {
                return(
                    <>
                    <div key={card.id} className={`${style.question} ${activeQuestion === index ? style.active : ''}`} onClick={() => toggleAnswer(index)}>
                        <div className={style.questionWrapper}>

                        {card.question}
                        {
                            activeQuestion != index ? (
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                                <path d="M25 0C11.2154 0 0 11.2154 0 25C0 38.7846 11.2154 50 25 50C38.7846 50 50 38.7846 50 25C50 11.2154 38.7846 0 25 0ZM25 3.84615C36.7058 3.84615 46.1538 13.2942 46.1538 25C46.1538 36.7058 36.7058 46.1538 25 46.1538C13.2942 46.1538 3.84615 36.7058 3.84615 25C3.84615 13.2942 13.2942 3.84615 25 3.84615ZM23.0769 13.4615V23.0769H13.4615V26.9231H23.0769V36.5385H26.9231V26.9231H36.5385V23.0769H26.9231V13.4615H23.0769Z" fill="#191919"/>
                            </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                                <path d="M25 50C18.3696 50 12.0107 47.3661 7.32233 42.6777C2.63392 37.9893 0 31.6304 0 25C0 18.3696 2.63392 12.0107 7.32233 7.32233C12.0107 2.63392 18.3696 0 25 0C31.6304 0 37.9893 2.63392 42.6777 7.32233C47.3661 12.0107 50 18.3696 50 25C50 31.6304 47.3661 37.9893 42.6777 42.6777C37.9893 47.3661 31.6304 50 25 50ZM37.5 22.5H12.5V27.5H37.5V22.5Z" fill="#191919"/>
                            </svg>
                            )
                        }
                        </div>
                        
                        {
                            activeQuestion === index && (
                            <div className={style.answer}>
                                {card.answer}
                            </div>
                            )
                        }
                    </div>
                            
                    </>
                )
            })
            }
           
        </div>
    )
}

export default AboutUsFAQ