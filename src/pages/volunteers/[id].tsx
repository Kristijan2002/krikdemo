import VolunteerPage from "@/components/volunteerPage/VolunteerPage";
import { NewsCard, VolunteerCardsType } from "@/interfaces";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

interface Props {
    volunteersData: VolunteerCardsType,
    projectsData: {
        mk: NewsCard[],
        en: NewsCard[]
      }
}

const ProductDetailPage: NextPage<Props> = ({volunteersData, projectsData}) => {
    const {i18n} = useTranslation();
    const router = useRouter();
    const { id } = router.query;

    const [language, setLanguage] = useState<"mk" | "en">(i18n.language as "mk" | "en");

    useEffect(() => {
        setLanguage(i18n.language as "mk" | "en")
    }, [i18n.language]);
    let volunteer = volunteersData[language].find((v) => v.id === id);
    
  return (
    <div>
        {volunteer ? 
        (<VolunteerPage data={volunteer} projectsData={projectsData}/>
        ) : (
        <p>No information about the person was found</p>
        )}
        
    </div>
  );
};

export default ProductDetailPage;

export const getStaticPaths: GetStaticPaths = async () => {
  const volunteersRes = await fetch(`http://localhost:5001/volunteers`);
  const volunteersData: VolunteerCardsType = await volunteersRes.json();

  const paths = volunteersData.mk.map((volunteer) => {
    return {
      params: {
        id: volunteer.id,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {

  const volunteersRes = await fetch("http://localhost:5001/volunteers");
  const volunteersData: VolunteerCardsType = await volunteersRes.json();

  const projectsRes = await fetch("http://localhost:5001/news");
  const projectsData: NewsCard[] = await projectsRes.json();  

  return {
    props: {
        volunteersData,
        projectsData
     },
  };
};