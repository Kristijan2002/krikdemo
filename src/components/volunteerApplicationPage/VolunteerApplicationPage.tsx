import { useState } from "react";
import style from "./volunteerApplicationPage.module.scss";
import { useTranslation } from "react-i18next";

const VolunteerApplicationPage: React.FC = () => {
    const {t} = useTranslation();

    return(
        <div className={style.volunteerApplicationPage}>
         <h1>{t("volunteerApplication.title")}</h1>

         <form>
            <div className={style.formWrapper}>

            
                <div className={style.left}>
                <label htmlFor="">{t("volunteerApplication.volunteerNameLabel")}</label>
                <input type="text" name="" id="" placeholder={t("volunteerApplication.volunteerNamePlaceholder")}/>

                <label htmlFor="">{t("volunteerApplication.volunteerAddresLabel")}</label>
                <input type="text" name="" id="" placeholder={t("volunteerApplication.volunteerAddresPlaceholder")}/>

                <label htmlFor="">{t("volunteerApplication.volunteerPhoneLabel")}</label>
                <input type="text" name="" id="" placeholder="+38900000000"/>

                <label htmlFor="">Email*</label>
                <input type="text" name="" id="" placeholder="example@email.com"/>
                </div>

                <div className={style.right}>
                    <label htmlFor="">{t("volunteerApplication.ageLabel")}</label>
                        <div>
                            <button>{t("volunteerApplication.ageOption1")}</button>
                            <button>{t("volunteerApplication.ageOption2")}</button>
                        </div>

                    <label htmlFor="">{t("volunteerApplication.volunteerExperienceLabel")}</label>

                    <div className={style.rangeContainer}>
                        <input type="range" name="" id="" min="0" max="10"/>
                        <div className={style.rangeLabel} id="rangeLabel">{Array.from({ length: 11 }, (_, index) => (
                            <span key={index}>{index}</span>
                        ))}</div>
                    </div>
                            <div className={style.interests}>
                                <label htmlFor="">{t("volunteerApplication.volunteerInterestsLabel")}</label>
                                <div className={style.interestsOptions}>
                                    <button>{t("volunteerApplication.volunteerInterestsOption1")}</button>
                                    <button>{t("volunteerApplication.volunteerInterestsOption2")}</button>
                                    <button>{t("volunteerApplication.volunteerInterestsOption3")}</button>
                                    <button>{t("volunteerApplication.volunteerInterestsOption4")}</button>
                                </div>
                            </div>

                </div>
            </div>
            <button className={style.submitBtn}>{t("volunteerApplication.btn")}</button>

         </form>
        </div>
    )
}

export default VolunteerApplicationPage