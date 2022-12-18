import { Link } from "react-router-dom";
import "./card.css";

const Card = ({title,img,population,region,capital}) => {

return (
<li className="flag-item col-3"> 
    <Link className="text-decoration-none text-dark" to={`/info/${title}`}>
    <div className="item-box">
        <div>
            <img src={img} className="img-fluid card-img"  width="267" height="160" alt="usa flag" />
        </div>
        <div className="item-content bg-white">
            <h2 className="fs-5 fw-bold">{title}</h2>
            <>
            <p><span className="fw-bold">Population:</span> {population}</p>
            <p><span className="fw-bold">Region:</span> {region}</p>
            <p><span className="fw-bold">Capital:</span> {capital}</p>
            </>
        </div>
    </div>
    </Link>
 </li>
);
};

export default Card;