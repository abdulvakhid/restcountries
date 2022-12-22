import { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import { Themecontext } from "./context/Themecontext";
import "./index.css";
import "./App.css";
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import { lang } from "./lang/lang";
import { Home } from "./pages/Home";
import { Single } from "./pages/Single";


const App = () => {
  
  const {theme} = useContext(Themecontext)


  i18next
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: localStorage.getItem("language") || 'uz',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: { translation: lang.en},
      uz: { translation: lang.uz},
      ru: { translation: lang.ru},
    }
  });


return (
  <div className={`app ${theme}`}>
  <Header /> 
  
    <main className= {`${theme} mainpart`}>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/info/:id" element={<Single/>}/>
      </Routes>
    </main>
  </div>
  )
}

export default App;