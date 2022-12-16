
import "./form.css";

const Form = ({setvalue, setSelectValue}) => {

return (
    <div className="container">
        <form onSubmit={(evt) => {
        evt.preventDefault();
        }} className="p-5 row">

        <div className="col-md-6 d-flex">
       
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search icon" viewBox="0 0 16 16">
           <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
        </svg>
        <input onKeyDown={(evt) => {
            if (evt.key === "Enter") {
                setvalue(evt.target.value);
            }
        }} className="position-relative form-control text-center" type="search" aria-label="Search for a country…" placeholder="Search for a country…"  />
        </div>
        <select onChange={(evt) => setSelectValue(evt.target.value) }
           className="col-md-6 form-select w-25 ms-auto" aria-label="filter by region" >
            <option  hidden>Filter by Region</option>
            <option value="africa">Africa</option>
            <option value="america">America</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
        </select> 
    </form>
    </div>
    )
}

export default Form;