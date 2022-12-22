import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import "./single.css"
import { useTranslation } from 'react-i18next';


export const Single = () => {
    const {id} = useParams()
    const back = useNavigate()
    const [info, setinfo] = useState({
      isError: false,
      isLoading: true,
      data:[]
    })
  
    const {t} =useTranslation();
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
 <div className='single-box'>
  <div className="container">
     <div className='mt-5 pb-5'>
       <div className="mb-5">
              <button className="btn border back" onClick={()=>back(-1)}>
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
                </svg>{t("Single.back")}
              </button>
           </div>
           {info.data.map(item =>
          <div key={item.name} className="row align-items-center">
          <div className="col-5">
              <img className="img-thumbnail img-single" src={item.flags.png} alt=""/>
          </div>
          <div className="offset-1 col-6">
              <div className="row">
                    <h2 className="mb-3 s-title">{item.name.common}</h2>
                    <ul className="row list-unstyled">
                    <li className="col-6">
                            <p className='s-text'>
                              <strong className='nativeName'>{t("Single.nativeName")}:</strong> <span>{item.name.official}</span>
                            </p>
                            <p className='s-text'>
                          <strong className='population'> {t("Single.population")}:</strong> <span>{item.population}</span>
                            </p>
                            <p className='s-text'>
                        <strong className='region'>{t("Single.region")}:</strong> <span>{item.region}</span>
                            </p>
                          <p className='s-text'><strong className='subRegion'>{t("Single.region")}:</strong> <span>{item.subregion}</span>
                            </p>
                            <p className='s-text'>
                        <strong className='capital'>{t("Single.capital")}: </strong><span>{item.capital}</span>
                            </p>
              
                    </li>
                    <li className="col-6">
                      <p className='s-text'><strong className='domen'>{t("Single.domen")}: </strong><span>{item.tld[0]}</span></p>
                      <p className='s-text'> <strong className='currencies'>{t("Single.currencies")}:</strong> <span>{Object.keys(item.currencies)}</span></p>
                      <p className='s-text'><strong className='languages'>{t("Single.languages")}:</strong> <span>{Object.values(item.languages)+","}</span></p>    
                    </li>
                    </ul>

                    <ul className='list-unstyled single-list s-text '><strong className='borders'>{t("Single.borders")}: </strong>
                    {item?.borders?.map(border =>   <li key={border} className="col-2 ms-2 mb-2 py-2 px-4 borders text-center rounded-4">{border}</li>)}
                    </ul>                      
              </div>
          </div>
        </div>
       )}
     </div>
 </div>
 </div>
)}
