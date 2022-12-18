import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import "./index.css";
import { Home } from "./pages/Home";
import { Single } from "./pages/Single";


const App = () => {
  


return (
  <>
  <Header /> 
  
 <main>
  <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/info/:id" element={<Single/>}/>
  </Routes>
 </main>
 {/* <Home/> */}
  </>
  )
}

export default App;