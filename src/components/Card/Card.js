import { useContext } from "react";
import { Link } from "react-router-dom";
import { Themecontext } from "../../context/Themecontext";
import "./card.css";
import { useTranslation } from 'react-i18next';

const Card = ({title,img,population,region,capital}) => {
    const {theme} = useContext(Themecontext);
    const {t} =useTranslation();
return (
<li className={`flag-item col-3`}> 
    <Link className="text-decoration-none text-dark item-link " to={`/info/${title}`}>
    <div className="item-box inactives">
        <div className="border">
            <img src={img} className="img-fluid card-img"  width="267" height="160" alt="usa flag" />
        </div>
        <div className={`item-content ${theme}`}>
            <h2 className="fs-5 fw-bold inactives">{title}</h2>
            <>
            <p className="inactives"><span className="fw-bold inactives population">{t("Card.population")}:</span> {population}</p>
            <p className="inactives"><span className="fw-bold inactives region">{t("Card.region")}:</span> {region}</p>
            <p className="inactives"><span className="fw-bold inactives capital">{t("Card.capital")}:</span> {capital}</p>
            </>
        </div>
    </div>
    </Link>
 </li>
);
};

export default Card;