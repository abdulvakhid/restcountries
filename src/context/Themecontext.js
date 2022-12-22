import { createContext, useEffect, useState } from "react";

export const Themecontext = createContext();

export const ThemeProvider = ({children}) => {

const [theme,setTheme] = useState(localStorage.getItem("theme") || "light");

useEffect(() => {
localStorage.setItem("theme", theme)
})

return (
    <Themecontext.Provider value={{theme,setTheme}}>
        {children}
    </Themecontext.Provider>  
    )
}