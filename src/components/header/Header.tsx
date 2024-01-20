import Link from "next/link";
import style from "./header.module.scss";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";


const lngs: any = {
  mk: { nativeName: 'Mk' },
  en: { nativeName: 'En' }
};

const Header: React.FC = () => {
  const {t, i18n} = useTranslation();
  const [menuItems, setMenuItems] = useState<any>(t("header.menu") || {});
  const [isActiveDropdown, setIsActiveDropdown] = useState<boolean>(false)

  useEffect(() => {
    setMenuItems(t("header.menu") || {})
  }, [t]);

  const toggleDropdown = () => {
    setIsActiveDropdown(!isActiveDropdown)
  }
  const closeDropdown = () => {
    setIsActiveDropdown(false);
  };
  

  return (
  <>
    <header>
        <div className={style.topHeader}>
            <div>
              <Link href={"/"} className={style.newsletter}>Newsletter</Link>
              <input type="text" name="" id="" placeholder="search" className={style.searchInput}/>
            </div>
            <div>
            {Object.keys(lngs).map((lng) => (
              <button key={lng} style={{ fontWeight: i18n.resolvedLanguage === lng ? 'bold' : 'normal' }} type="submit" onClick={() => i18n.changeLanguage(lng)}>
                {lngs[lng].nativeName}
              </button>
            ))}
              <Link href={"/"} className={style.links}>E-Shop</Link>
            </div>
          </div>
          <div className={style.menu}>
            <Link href={"/"}>
            <Image src="/krik-logo 1.png" width={83} height={86} alt="krik-logo"></Image>
            </Link>
            <ul>
              
             
            {Object.keys(menuItems).map((index) => {
  return (
    <li key={index} className={style.menuItem} onClick={toggleDropdown} onMouseLeave={closeDropdown}>
      {menuItems[index].dropdown ? (
        <>
          <p >{menuItems[index].label} 
            <svg fill="#000000" height="25px" width="25px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 330 330">
              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
              <path id="XMLID_225_" d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"></path> 
              </g>
            </svg>
          </p>
          <div className={`${style.dropdown} ${isActiveDropdown ? style.active : ''}`}>
            {menuItems[index].dropdown.map((item: any, subIndex: any) => (
              <Link key={subIndex} href={item.link} className={style.dropdownLink}>{item.label}</Link>
            ))}
          </div>
        </>
      ) : (
        <Link href={menuItems[index].link}>{menuItems[index].label}</Link>
      )}
    </li>
  );
})}

            </ul>
          </div>
    </header>
  </>
    )
};

export default Header;