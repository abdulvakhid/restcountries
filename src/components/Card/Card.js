import "./card.css";

const Card = ({title,img,population,region,capital}) => {

return (
<li className="flag-item col-3"> 
    <div className="item-box">
        <div>
            <img src={img} className="img-fluid card-img"  width="267" height="160" alt="usa flag" />
        </div>
        <div className="item-content bg-white">
            <h2 className="fs-5 fw-bold text-center">{title}</h2>
            <>
            <p><span className="fw-bold">Population:</span> {population}</p>
            <p><span className="fw-bold">Region:</span> {region}</p>
            <p><span className="fw-bold">Capital:</span> {capital}</p>
            </>
        </div>
    </div>
 </li>
);
};

export default Card;