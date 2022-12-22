import { useContext, useState} from "react";
import { Link } from "react-router-dom";
import { Themecontext } from "../../context/Themecontext";
import "./header.css";
import { useTranslation } from 'react-i18next';
const Header = () => {
    const {t, i18n} =useTranslation();
    const {theme, setTheme} = useContext(Themecontext)
    // const [title, setTitle] = useState("")
    // const btnTheme = () => {
    //     setTitle(title === "modeDark" ? "modeLight" : "modeDark")
    //   }

return (
    <header className="site-header header">
        <div className="container">
        <div className="row py-3  align-items-center">
            <Link className="d-block col-md-6 text-decoration-none  fw-bold logo" to="/">
            {t("header.logo")}
            </Link>
          <div className="col-md-6 d-flex justify-content-end ">
             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-moon align-self-center moon" viewBox="0 0 16 16">
            <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z"/>
            </svg> 
            <button onClick={() => {
            setTheme(theme === "light" ? "dark" : "light");
            }} className="btn mode text-end">{t(`${theme} mode`)}</button>
            
            <select className="region" 
            defaultValue={i18n.language} 
            onChange= {(evt) => {
                localStorage.setItem("language", evt.target.value);
                i18n.changeLanguage(evt.target.value)
            }}>
                <option className="inactives" value="uz">UZ</option>
                <option className="inactives" value="en">EN</option>
                <option className="inactives" value="ru">RU</option>
            </select>
  
          </div>

            
        </div>
        </div>
    </header>
    )
}

export default Header;
