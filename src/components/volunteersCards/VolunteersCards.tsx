import { VolunteerCardsType } from "@/interfaces";
import style from "./volunteersCards.module.scss";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import Link from "next/link";

interface Props {
    data: VolunteerCardsType
}

const VolunteersCards: React.FC<Props> = ({data}) => {
    const { i18n } = useTranslation();
    const [language, setLanguage] = useState<"mk" | "en">(i18n.language as "mk" | "en");

    useEffect(() => {
        setLanguage(i18n.language as "mk" | "en")
    }, [i18n.language])

    return(
        <div className={style.volunteersCardsDiv}>
            {
                data[language].map((card) => {
                    return(
                        <Link href={`volunteers/${card.id}`} key={card.id} className={style.card}>
                        <div className={style.cardWrapper}>
                            <img src={card.img} alt="personImage" />
                            <div className={style.personInfo}>
                                <h3>{card.fullName}</h3>
                                <p>{card.yearsAndCountry}</p>
                            </div>
                        </div>
                        </Link>

                    )
                })
            }
        </div>
    )
}

export default VolunteersCards