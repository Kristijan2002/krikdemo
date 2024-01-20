
export interface EventCardProps {
  mk: {
    when: string;
    title: string;
    paragraph: string;
    seeMoreBtn: string;
    signUp: string;
    locationAndTime: string;
    day: string;
    month: string;
  };
  en: {
    when: string;
    title: string;
    paragraph: string;
    seeMoreBtn: string;
    signUp: string;
    locationAndTime: string;
    day: string;
    month: string;
  };
}


export interface NewsCard {
  id: string;
  img: string;
  type: string;
  date: string;
  paragraph: string;
  btn: string;
  status: string; 
}


interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface AboutUsFAQType {
  mk: FAQItem[];
  en: FAQItem[];
}

interface VolunteerCard {
  id: string;
  fullName: string,
  yearsAndCountry: string,
  description: string,
  img: string
}

export interface VolunteerCardsType {
  mk: VolunteerCard[];
  en: VolunteerCard[];
}