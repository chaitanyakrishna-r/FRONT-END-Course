import React from 'react'
import useLocalStorage from './useLocalStorage';
import './style.css'



const LightDarkMode = () => {

    const [theme, setTheme] = useLocalStorage('theme','dark');

    function handleToggleTheme(){
        setTheme( theme === 'light' ? 'dark' : 'light');
    }
    console.log(theme);

  return (

   
    <div className='container ' data-theme={theme}>
        <div className='light-dark-container'>
            <h1>Hello world !</h1>
            <button onClick={handleToggleTheme}> Change Theme</button>
        </div>

    </div>
  )
}

export default LightDarkMode