import style from "./donateForm.module.scss";
import { useTranslation } from "react-i18next";

const DonateForm: React.FC = () => {
    const {t} = useTranslation();

    return(
        <div className={style.donateFormDiv}>
            <div className={style.donationOptions}>
                <h3>{t("donateOptions.optionsTitle")}</h3>
                <ul>
                    <li>{t("donateOptions.option1")}</li>
                    <li>{t("donateOptions.option2")}</li>
                    <li>{t("donateOptions.option3")}</li>
                    <li>{t("donateOptions.option4")} 
                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 16 10" fill="none">
                            <path d="M2 2.03907L8 8.05273L14 2.03907" stroke="#191919" stroke-width="2" stroke-linecap="square"/>
                        </svg>
                    </li>
                </ul>
                <p>{t("donateOptions.paragraph")}</p>

                <div className={style.inputDiv}>
                <label htmlFor="">{t("donateOptions.label")}</label>
                <input type="text" name="" id="" placeholder={t("donateOptions.inputPlaceholder")}/>
                </div>
                <div className={style.btnDiv}>
                    <button className={style.donateCardBtn}>{t("donateOptions.button1")}</button>
                    <button className={style.payPalBtn}>{t("donateOptions.button2")}</button>
                </div>
                

            </div>
            <div className={style.donatorInfo}>
                <form>
                    <div className={style.left}>
                        <label htmlFor="">{t("donateForm.nameLabel")}</label>
                        <input type="text" placeholder={t("donateForm.namePlaceholder")}/>
                        <label htmlFor="">{t("donateForm.emailLabel")}</label>
                        <input type="text" placeholder={t("donateForm.emailPlaceholder")}/>
                        <label htmlFor="">{t("donateForm.phoneLabel")}</label>
                        <input type="text" placeholder={t("donateForm.phonePlaceholder")}/>
                        <label htmlFor="">{t("donateForm.sumLabel")}</label>
                        <input type="text" placeholder={t("donateForm.sumPlaceholder")}/>
                    </div>

                    <div className={style.right}>
                        <label htmlFor="">{t("donateForm.cardNoLabel")}</label>
                        <input type="text" placeholder={t("donateForm.cardNoPlaceholder")}/>
                            <div className={style.smallInputsDiv}>
                                <input type="text" placeholder="MM/YY"/>
                                <input type="text" placeholder="CVV"/>
                            </div>
                        <label htmlFor="">{t("donateForm.cardOwnerLabel")}</label>
                        <input type="text" placeholder={t("donateForm.cardOwnerPlaceholder")}/>
                        <button>{t("donateForm.buttonDonate")}</button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default DonateForm