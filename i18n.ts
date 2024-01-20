import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'mk',
    returnObjects: true,
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
           header: {
            menu: [
            { label: "About Us", link: "/", dropdown: [
              {label: "About Us", link: "/aboutUs"},
              {label: "Our Team", link: "/ourTeam"},
              {label: "Volunteers", link: "/volunteers"},
              {label: "Archive", link: "/archive"},
            ]
           },
            { label: "Services", link: "/services", dropdown: null},
            { label: "Projects", link: "/projects", dropdown: null},
            { label: "Contact", link: "/contact", dropdown: null},
            { label: "Donate", link: "/donate", dropdown: null}
            ]
           },

           accessibility:{
            accessibilityBtn: "Accessibility",
            oversizedWidget: "Oversized Widget",
            cursorSize: "Cursor Size",
            screenReader: "Screen Reader",
            contrast: "Contrast",
            readingMask: "Reading Mask",
            pauseAnim: "Pause Animation",
            saturation: "Saturation"
           },

           banner: {
            title: "Change comes from the youth",
            question_title: "Who are we?",
            answer: "The Center for Youth Activism Krik is a non-governmental, non-profit organization founded by young people, led by young people, and works for and with young people.",
            button: "More about us"
           },

           infoDiv: {
            projects: {
              title: "Projects",
              count: "320+"
            },
            volunteers: {
              title: "Volunteers",
              count: "580+"
            },
            partners: {
              title: "Partners",
              count: "25+",
            }
           },

           videoDiv: {
            title: "Become a Volunteer",
            paragraph: "Do you want to work with young people? This opportunity is just for you.",
            btn: "Join us"
          },

          newsDiv: {
            title: "Latest News",
            btn: "View for the entire month"
        },

        ourServices: {
          title: "Our Services",
          service1: {
              title: "01 Multifunctional Center Crikni",
              paragraph: "Lorem ipsum dolor sit amet consectetur. Non at at risus dolor accumsan vitae dignissim. Est dapibus turpis metus ac rhoncus tellus volutpat."
          },
          service2: {
              title: "02 Independent Residential Units",
              paragraph: "Lorem ipsum dolor sit amet consectetur. Non at at risus dolor accumsan vitae dignissim. Est dapibus turpis metus ac rhoncus tellus volutpat."
          },
          service3: {
              title: "03 Youth and Parenting Counseling",
              paragraph: "Lorem ipsum dolor sit amet consectetur. Non at at risus dolor accumsan vitae dignissim. Est dapibus turpis metus ac rhoncus tellus volutpat."
          }
      },

      partners: "Partners",

      footer: {
        monthlyNewsletter: "Monthly Newsletter",
        newsletter: "Lorem ipsum dolor sit amet consectetur. Non at at risus dolor accumsan vitae dignissim.",
        inputPlaceholder1: "Your Email Address",
        btn1: "CTA",
        contactUs: "Contact Us!",
        inputPlaceholder2: "Your Name",
        inputPlaceholder3: "Your Email Address",
        btn2: "CTA",
        join: "Join",
        joinParagraph: "Lorem ipsum dolor sit amet consectetur. Non at at risus dolor accumsan vitae dignissim. Est dapibus turpis metus ac rhoncus tellus volutpat.",
        aboutKrik: "About Krik",
        aboutKrikParagraph: "Lorem ipsum dolor sit amet consectetur. Non at at risus dolor accumsan vitae dignissim."
    },





        aboutUsBanner: {
          title: "The Center for Youth Activism Krik is a non-governmental, non-profit organization founded by young people, led by young people, and works for and with young people.",
          paragraph: "The target group with which KRIK works includes all people (but mainly the youth) who want to contribute and make changes in the fields of ecology, critical thinking, and communication skills, as well as working for the well-being of socially excluded and marginalized groups from society. Krik aims to encourage greater youth participation, youth activism, and inspire young people to be more involved in the policy-making process at the local and national levels."
        },

        aboutKrik: {
          title: "About Krik",
          mission: "Mission",
          missionParagraph: "To offer activities to strengthen the capacities of young people and persons with disabilities through the development of youth work and provision of social protection services.",
          vision: "A vision",
          visionParagraph: "To create an inclusive society where youth and persons with disabilities are equally included and have fully developed capacities to actively contribute to the community.",
          ourValues: "Our Values",
          ourValuesParagpraph: "Developing youth work, encouraging youth activism and volunteerism. Greater involvement of young people excluded from society through participation in workshops, events and trainings. Development of services for social protection, accommodation and care for persons with intellectual and/or physical disabilities and other conditions. Encouraging the social inclusion of marginalized groups of young people and adults in all spheres of social activity."
        },

        aboutUsFAQ: "Frequently asked questions",




        services: {
          service01: "Center Krikni",
          service01Desc: "Lorem ipsum dolor sit amet consectetur. Eu morbi sed sollicitudin eu ut. Congue dictum nibh non sodales est. Id dolor eu purus cursus elit. Sed eleifend facilisis morbi risus ullamcorper. Dictumst viverra semper scelerisque proin nisl luctus vitae ut. Turpis viverra mauris adipiscing ornare etiam ipsum pretium. Ornare aenean adipiscing nunc dolor vitae vel sem aliquet. Aliquam est integer libero morbi congue est porttitor. Vitae tellus lorem arcu tortor sem tellus hendrerit nibh. Mattis volutpat nunc parturient dignissim. Tincidunt mauris velit congue rhoncus ut eget malesuada purus. Ut commodo tempus sed consectetur sem etiam. Vel enim aliquam urna orci tempus mauris vitae tincidunt habitant.",
          service02: "Independent living units",
          service02Desc: "Lorem ipsum dolor sit amet consectetur. Eu morbi sed sollicitudin eu ut. Congue dictum nibh non sodales est. Id dolor eu purus cursus elit. Sed eleifend facilisis morbi risus ullamcorper. Dictumst viverra semper scelerisque proin nisl luctus vitae ut. Turpis viverra mauris adipiscing ornare etiam ipsum pretium. Ornare aenean adipiscing nunc dolor vitae vel sem aliquet. Aliquam est integer libero morbi congue est porttitor. Vitae tellus lorem arcu tortor sem tellus hendrerit nibh. Mattis volutpat nunc parturient dignissim. Tincidunt mauris velit congue rhoncus ut eget malesuada purus. Ut commodo tempus sed consectetur sem etiam. Vel enim aliquam urna orci tempus mauris vitae tincidunt habitant.",
          service03: "Counseling center",
          service03Desc: "Lorem ipsum dolor sit amet consectetur. Eu morbi sed sollicitudin eu ut. Congue dictum nibh non sodales est. Id dolor eu purus cursus elit. Sed eleifend facilisis morbi risus ullamcorper. Dictumst viverra semper scelerisque proin nisl luctus vitae ut. Turpis viverra mauris adipiscing ornare etiam ipsum pretium. Ornare aenean adipiscing nunc dolor vitae vel sem aliquet. Aliquam est integer libero morbi congue est porttitor. Vitae tellus lorem arcu tortor sem tellus hendrerit nibh. Mattis volutpat nunc parturient dignissim. Tincidunt mauris velit congue rhoncus ut eget malesuada purus. Ut commodo tempus sed consectetur sem etiam. Vel enim aliquam urna orci tempus mauris vitae tincidunt habitant."
        },

        servicesGallery: "Activity gallery",



        donateHeader: {
          title: "Donate!",
          option1: "Individual",
          option2: "Organization/Enterprise"
      },

      donateOptions: {
        optionsTitle: "Lorem ipsum dolor sit amet consectetur.",
        option1: "20 Euro",
        option2: "50 Euro",
        option3: "100 Euro",
        option4: "Change Currency",
        paragraph: "Lorem ipsum dolor sit amet consectetur. In sed lobortis donec a cras feugiat mattis velit venenatis. Adipiscing viverra praesent tristique non. Nunc blandit turpis tellus natoque mi odio viverra fermentum.",
        label: "Other amount:",
        inputPlaceholder: "Input",
        button1: "Donate with 💳",
        button2: "PayPal"
    },

      donateForm: {
        nameLabel: "Donor Name*",
        namePlaceholder: "Example Namington",
        emailLabel: "Email*",
        emailPlaceholder: "example@email.com",
        phoneLabel: "Phone Number*",
        phonePlaceholder: "+38900000000",
        sumLabel: "Donation Amount*",
        sumPlaceholder: "a million?",
        cardNoLabel: "Card Number*",
        cardNoPlaceholder: "**** **** **** ****",
        cardOwnerLabel: "Card Owner Name*",
        cardOwnerPlaceholder: "Example Namington",
        buttonDonate: "Donate"
    },





      volunteersHeader: {
        title: "Our Volunteers",
        option1: "Long Term",
        option2: "Short Term"
    },


    volunteerPage: {
      title: "Projects in which he participates",
    },

    volunteerApplication: {
      title: "Volunteer Now!",
      volunteerNameLabel: "Volunteer Name*",
      volunteerNamePlaceholder: "Example Namington",
      volunteerAddresLabel: "Address*",
      volunteerAddresPlaceholder: "Example Street 24",
      volunteerPhoneLabel: "Phone Number*",
      ageLabel: "Age*",
      ageOption1: "Under 18 Years",
      ageOption2: "Over 18 Years",
      volunteerExperienceLabel: "Volunteering Experience*",
      volunteerInterestsLabel: "Volunteer Interests*",
      volunteerInterestsOption1: "Lorem Ipsum",
      volunteerInterestsOption2: "Lorem Ipsum",
      volunteerInterestsOption3: "Lorem Ipsum",
      volunteerInterestsOption4: "Lorem Ipsum",
      btn: "Apply Now"
  },

  
  


  

      


  
        }
      },
      mk: {
        translation: {
           header:{
            menu: [
            { label: "За нас", link: "/", dropdown: [
              {label: "За крик", link: "/aboutUs"},
              {label: "Нашиот Тим", link: "/ourTeam"},
              {label: "Волонтери", link: "/volunteers"},
              {label: "Архива", link: "/archive"},
            ] 
          },
            { label: "Услуги", link: "/services", dropdown: null },
            { label: "Пројекти", link: "/projects", dropdown: null },
            { label: "Контакт", link: "/contact", dropdown: null },
            { label: "Донирај", link: "/donate", dropdown: null }
          ]
           },

           accessibility:{
            accessibilityBtn: "Пристапност",
            oversizedWidget: "Прекумерен Виџет",
            cursorSize: "Големина на Курсор",
            screenReader: "Читач на Екран",
            contrast: "Контраст",
            readingMask: "Маска за Читање",
            pauseAnim: "Пауза на Анимација",
            saturation: "Заситеност"
        },

           banner: {
            title: "Промената доаѓа од младите",
            question_title: "Кои сме ние?",
            answer: "Центарот за младински активизам Крик е невладина, непрофитна организација основана од млади луѓе, предводена од млади луѓе и работи за и со млади луѓе.",
            button: "Повеќе за нас"
           },

           infoDiv: {
            projects: {
              title: "Проекти",
              count: "320+"
            },
            volunteers: {
              title: "Волонтери",
              count: "580+"
            },
            partners: {
              title: "Партнери",
              count: "25+",
            }
           },

           videoDiv: {
            title: "Стани волонтер",
            paragraph: "Сакаш да работиш со млади лица? Оваа можност е токму за тебе.",
            btn: "Придружи ни се"
           },

           newsDiv: {
            title: "Најнови вести",
            btn: "Види за цел Месец"
          },

          ourServices: {
            title: "Нашите услуги",
            service1: {
              title: "01 Мултифункционален центар Крикни",
              paragraph: "Lorem ipsum dolor sit amet consectetur. Non at at risus dolor accumsan vitae dignissim. Est dapibus turpis metus ac rhoncus tellus volutpat. "
            },
            service2: {
              title: "02 Независни станбени единици",
              paragraph: "Lorem ipsum dolor sit amet consectetur. Non at at risus dolor accumsan vitae dignissim. Est dapibus turpis metus ac rhoncus tellus volutpat. "
            },
            service3: {
              title: "03 советувалиште за Млади и Родители",
              paragraph: "Lorem ipsum dolor sit amet consectetur. Non at at risus dolor accumsan vitae dignissim. Est dapibus turpis metus ac rhoncus tellus volutpat. "
            }
          },

          partners: "Партнери",

          footer: {
            monthlyNewsletter: "Месечен билтен",
            newsletter: "Lorem ipsum dolor sit amet consectetur. Non at at risus dolor accumsan vitae dignissim.",
            inputPlaceholder1: "Вашата Емаил Адреса",
            btn1: "CTA",
            contactUs: "Контактирај не!",
            inputPlaceholder2: "Вашето Име",
            inputPlaceholder3: "Вашата Емаил Адреса",
            btn2: "CTA",
            join: "Приклучи се",
            joinParagraph: "Lorem ipsum dolor sit amet consectetur. Non at at risus dolor accumsan vitae dignissim. Est dapibus turpis metus ac rhoncus tellus volutpat. ",
            aboutKrik: "За Крик",
            aboutKrikParagraph: "Lorem ipsum dolor sit amet consectetur. Non at at risus dolor accumsan vitae dignissim. "
          },





          aboutUsBanner: {
            title: "Центарот за младинскиот активизам Крик е невладина, непрофитна организација основана од страна на млади луѓе, предводена од млади луѓе и работи за и со младите луѓе.",
            paragraph: "Целната група со која КРИК работи се сите луѓе (но главно млади) кои сакаат да придонесат и направат промени во полето на екологија, критичко размислување и комуникациски вештини, како и рабење за благостојба на социјално исклучените групи од општеството и маргинализираните групи. Крик се стреми кон поттикнување на поголема партиципација на младите, младински активизам, да ги охрабри младите луѓе да бидат повеќе вклучени во процесот на креирање политики на локално и на национално ниво."
          },

          aboutKrik: {
            title: "За Крик",
            mission: "Мисија",
            missionParagraph: "Да понуди активности за зајакнување на капацитетите на младите и лицата со попреченост преку развој на младинската работа и обезбедување услуги за социјална заштита.",
            vision: "Визија",
            visionParagraph: "Да создаде инклузивно општество каде младите и лицата со попреченост се подеднакво вклучени и имаат целосно развиени капацитети активно да придонесуваат за заедницата.",
            ourValues: "Нашите Вредности",
            ourValuesParagpraph: "Развивање на младинската работа, поттикнување младински активизам и волонтеризам. Поголема вклученост на младите исклучени од општеството преку учество на работилници, настани и обуки. Развој на услуги за социјална заштита, сместување и грижа за лица со интелектуална и/или телесна попреченост и други услови. Поттикнување на социјалната вклученост на маргинализираните групи млади и возрасни во сите сфери на општественото делување."
          },

          aboutUsFAQ: "Најчесто поставувани прашања",




          services: {
            service01: "Центар Крикни",
            service01Desc: "Lorem ipsum dolor sit amet consectetur. Eu morbi sed sollicitudin eu ut. Congue dictum nibh non sodales est. Id dolor eu purus cursus elit. Sed eleifend facilisis morbi risus ullamcorper. Dictumst viverra semper scelerisque proin nisl luctus vitae ut. Turpis viverra mauris adipiscing ornare etiam ipsum pretium. Ornare aenean adipiscing nunc dolor vitae vel sem aliquet. Aliquam est integer libero morbi congue est porttitor. Vitae tellus lorem arcu tortor sem tellus hendrerit nibh. Mattis volutpat nunc parturient dignissim. Tincidunt mauris velit congue rhoncus ut eget malesuada purus. Ut commodo tempus sed consectetur sem etiam. Vel enim aliquam urna orci tempus mauris vitae tincidunt habitant.",
            service02: "Независни станбени единици",
            service02Desc: "Lorem ipsum dolor sit amet consectetur. Eu morbi sed sollicitudin eu ut. Congue dictum nibh non sodales est. Id dolor eu purus cursus elit. Sed eleifend facilisis morbi risus ullamcorper. Dictumst viverra semper scelerisque proin nisl luctus vitae ut. Turpis viverra mauris adipiscing ornare etiam ipsum pretium. Ornare aenean adipiscing nunc dolor vitae vel sem aliquet. Aliquam est integer libero morbi congue est porttitor. Vitae tellus lorem arcu tortor sem tellus hendrerit nibh. Mattis volutpat nunc parturient dignissim. Tincidunt mauris velit congue rhoncus ut eget malesuada purus. Ut commodo tempus sed consectetur sem etiam. Vel enim aliquam urna orci tempus mauris vitae tincidunt habitant.",
            service03: "Советувалиште",
            service03Desc: "Lorem ipsum dolor sit amet consectetur. Eu morbi sed sollicitudin eu ut. Congue dictum nibh non sodales est. Id dolor eu purus cursus elit. Sed eleifend facilisis morbi risus ullamcorper. Dictumst viverra semper scelerisque proin nisl luctus vitae ut. Turpis viverra mauris adipiscing ornare etiam ipsum pretium. Ornare aenean adipiscing nunc dolor vitae vel sem aliquet. Aliquam est integer libero morbi congue est porttitor. Vitae tellus lorem arcu tortor sem tellus hendrerit nibh. Mattis volutpat nunc parturient dignissim. Tincidunt mauris velit congue rhoncus ut eget malesuada purus. Ut commodo tempus sed consectetur sem etiam. Vel enim aliquam urna orci tempus mauris vitae tincidunt habitant."
          },

          servicesGallery: "Галерија со активности",


          donateHeader: {
            title: "Донирај!",
            option1: "Индивидуа",
            option2: "Организација/Претпријатие"
          },

          donateOptions: {
            optionsTitle: "Lorem ipsum dolor sit amet consectetur.",
            option1: "1000 Ден",  
            option2: "3000 Ден",  
            option3: "6000 Ден",
            option4: "Промени Валута",
            paragraph: "Lorem ipsum dolor sit amet consectetur. In sed lobortis donec a cras feugiat mattis velit venenatis. Adipiscing viverra praesent tristique non. Nunc blandit turpis tellus natoque mi odio viverra fermentum." ,
            label: "Друг износ:",
            inputPlaceholder: "Инпут",
            button1: "Донирај со 💳",
            button2: "PayPal" 
          },

          donateForm:{
            nameLabel: "Име на Донатор*",
            namePlaceholder: "Example Namington",
            emailLabel: "Email*",
            emailPlaceholder: "example@email.com",
            phoneLabel: "Телефонски број*",
            phonePlaceholder: "+38900000000",
            sumLabel: "Сума за донирање*",
            sumPlaceholder: "a million?",
            cardNoLabel: "Број на картичка*",
            cardNoPlaceholder: "**** **** **** ****",
            cardOwnerLabel: "Име на сопственик*",
            cardOwnerPlaceholder: "Example Namington",
            buttonDonate: "Донирај"
          },




          volunteersHeader: {
            title: "Нашите Волонтери",
            option1: "Долг Рок",
            option2: "Краток рок"
          },

          volunteerPage: {
            title: "Проекти во кои учествува",
          },

          volunteerApplication: {
            title: "Волонтирај Сега!",
            volunteerNameLabel: "Име на Волонтер*",
            volunteerNamePlaceholder: "Example Namington",
            volunteerAddresLabel: "Адреса*",
            volunteerAddresPlaceholder: "Example Street 24",
            volunteerPhoneLabel: "Телефонски број*",
            ageLabel: "Возраст*",
            ageOption1: "Под 18 Години",
            ageOption2: "Над 18 Години",
            volunteerExperienceLabel: "Искуство со волонтирање*",
            volunteerInterestsLabel: "Волонтерски интереси*",
            volunteerInterestsOption1: "Lorem Ipsum",
            volunteerInterestsOption2: "Lorem Ipsum",
            volunteerInterestsOption3: "Lorem Ipsum",
            volunteerInterestsOption4: "Lorem Ipsum",
            btn: "Пријави Се"
          }

          

        }
      }
    },
  });

export default i18n;