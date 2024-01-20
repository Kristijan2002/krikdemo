import { NewsCard } from "@/interfaces";
import News from "../news/News";
import style from "./volunteerCard.module.scss";

interface Props {
    data: 
    {
        id:string,
        fullName: string,
        yearsAndCountry: string,
        description: string,
        img: string
    },
    projectsData: {
        mk: NewsCard[],
        en: NewsCard[]
      }

}

const VolunteerPage: React.FC<Props> = ({data, projectsData}) => {

    return(
        <div className={style.volunteerPage}>
            <div className={style.volunteerCard}>
                <img src={data.img} alt="personImg" />
                <div className={style.volunteerDesc}>
                    <h1>{data.fullName}</h1>
                    <p>{data.description}</p>
                </div>
            </div>

            <div>
                <News data={projectsData} page="volunteerPage"/>
            </div>
           
        </div>
    )
}

export default VolunteerPage