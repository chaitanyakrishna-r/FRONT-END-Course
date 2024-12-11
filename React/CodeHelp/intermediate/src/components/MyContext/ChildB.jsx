import React, { useContext } from 'react'
import { ThemesContext } from './ThemeContext';

const ChildB = () => {
    const {theme,setTheme} = useContext(ThemesContext);

    function toggleTheme(){
        setTheme(!theme);
    }
    console.log(theme);
    
  return (
    <div>
        <button onClick={toggleTheme}>Click here</button>
    </div>
  )
}

export default ChildB