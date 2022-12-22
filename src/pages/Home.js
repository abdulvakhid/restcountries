import React, { useContext, useEffect, useState } from 'react'
import Form from '../components/Form/Form';
import Card from '../components/Card/Card';
import { Themecontext } from '../context/Themecontext';


export const Home = () => {
  const {theme} = useContext(Themecontext)

    const [data, setData] = useState({
        loading: true,
        data: [],
        isError: false
        });
      
        const [value, setValue] = useState('');
        const [valueSelect, setValueSelect] = useState('');
      
      
        useEffect(() => {
            if (value !== "") {
              fetch(`https://restcountries.com/v3.1/name/${value}`)
              .then(res => res.json())
              .then(data => { setData({
                loading: false,
                data: data,
                isError: false
               
              })
              if (data.status === 404) {
                setData({
                  loading: false,
                  data: [],
                  isError: true,
              })
              }
              })
              .catch(err => setData({
                  loading: true,
                  data: [],
                  isError: true,
              }));
            }else if (valueSelect !== ""){
              fetch(`https://restcountries.com/v3.1/region/${valueSelect}`)
              .then(res => res.json())
              .then(data =>  setData({
                loading: false,
                data: data,
                isError: false
              })
              )
              .catch(err => setData({
                  loading: true,
                  data: [],
                  isError: true,
              }));
            }else{
              fetch("https://restcountries.com/v3.1/all")
                .then(res => res.json())
                .then(data =>  setData({
                  loading: false,
                  data: data,
                  isError: false
                })
                )
                .catch(err => setData({
                    loading: true,
                    data: [],
                    isError: true,
                }));
              }
        },[value, valueSelect])

  return (
    <div className={theme}>
        <Form setvalue={setValue} setSelectValue={setValueSelect} />
        <div className="container">


  {data.loading && <h1>Loading...</h1>}
  {data.isError && <h1>Error...</h1>}
  {data.data.length !== 0 && (
      <ul className="list-unstyled flag-list row justify-content-center">
      {
        data.data.map(item => 
          <Card key={Math.random()}  img={item.flags.svg} 
          title={item.name.common}
          population={item.population}
          region={item.region}
          capital={item.capital?.[0]} />)
      }  
      </ul>
    
  )}
  
  </div>
    </div>
  )
}
