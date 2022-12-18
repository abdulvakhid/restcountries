import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const Single = () => {
    const {id} = useParams()
    const back = useNavigate()
    const [info, setinfo] = useState({
      isError: false,
      isLoading: true,
      data:[]
    })
  
  
    useEffect(() => {
      fetch(`https://restcountries.com/v3.1/name/${id}`)
        .then(response => response.json())
        .then(json => {
          setinfo({
            isError: false,
            isLoading: false,
            data: json
          })
          if (json.status === 404) {
            setinfo({
              isError: true,
              isLoading: false,
              data: []
           })
          }
        })
        .catch(error => { })
    },[id])
    return (
 <div className="container">
     <div className='mt-5'>
       <div className="mb-5">
              <button className="btn border" onClick={()=>back(-1)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-arrow-left me-2 "
                  viewBox="0 0 16 16">
                  <path
                    fillRule="evenodd"
                    d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" />
                </svg>Back
              </button>
           </div>
           {info.data.map(item =>
          <div key={item.name} className="row align-items-center">
          <div className="col-5">
              <img className="img-thumbnail img-single" src={item.flags.png} alt=""/>
          </div>
          <div className="offset-1 col-6">
              <div className="row">
                    <h2 className="mb-3">{item.name.common}</h2>
                    <ul className="row list-unstyled">
                    <li className="col-6">
                            <p>
                              <strong>Native Name:</strong> <span>{item.name.official}</span>
                            </p>
                            <p>
                          <strong> Population:</strong> <span>{item.population}</span>
                            </p>
                            <p>
                        <strong>Region:</strong> <span>{item.region}</span>
                            </p>
                          <p><strong>Sub Region:</strong> <span>{item.subregion}</span>
                            </p>
                            <p>
                        <strong>Capital: </strong><span>{item.capital}</span>
                            </p>
              
                    </li>
                    <li className="col-6">
                      <p><strong>Top Level Domain: </strong><span>{item.tld[0]}</span></p>
                      <p> <strong>Currencies:</strong> <span>{Object.keys(item.currencies)}</span></p>
                      <p><strong>Languages:</strong> <span>{Object.values(item.languages)+","}</span></p>    
                    </li>
                    </ul>

                    <span><strong>Border Countries: </strong>
                    {item?.borders?.map(border =>   <span key={border} className="col-2 me-1 p-2 border text-center rounded-4">{border}</span>)}
                    </span>                      
              </div>
          </div>
        </div>
       )}
     </div>
 </div>
)}
