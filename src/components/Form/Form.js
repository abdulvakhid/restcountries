
import { useContext } from "react";
import { Themecontext } from "../../context/Themecontext";
import "./form.css";
import { useTranslation } from 'react-i18next';

const Form = ({setvalue, setSelectValue}) => {
    const {theme} = useContext(Themecontext);
    const {t} =useTranslation();
return (
    <div className="container">
        <form onSubmit={(evt) => {
        evt.preventDefault();
        }} className="p-5 row">

        <div className="col-md-6 d-flex">
       
        {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search icon" viewBox="0 0 16 16">
           <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
        </svg> */}
        <input onKeyDown={(evt) => {
            if (evt.key === "Enter") {
                setvalue(evt.target.value);
            }
        }} className={`position-relative form-control text-center ${theme} inputdark`} type="search" aria-label="Search for a country…" placeholder={t("Form.input_placeholder")}  />
        </div>
        <select onChange={(evt) => setSelectValue(evt.target.value) }
           className={`region col-md-6 form-select w-25 ms-auto `}aria-label="filter by region" >
            <option className="inactives filterRegion" hidden>{t("Form.filterRegion")}</option>
            <option className="inactives" value="africa">Africa</option>
            <option className="inactives" value="america">America</option>
            <option className="inactives" value="asia">Asia</option>
            <option className="inactives" value="europe">Europe</option>
            <option className="inactives" value="oceania">Oceania</option>
        </select> 
    </form>
    </div>
    )
}

export default Form;