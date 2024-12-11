import React, { createContext, useState } from 'react'



const ThemesContext = createContext();


const ThemeContext = ({children}) => {
    const [theme,setTheme] = useState(true);
  return (
   <ThemesContext.Provider value={{theme,setTheme}}>
    {children}
   </ThemesContext.Provider>
  )
}

export default ThemeContext
export {ThemesContext};