import styles from './Navigation.module.css'
import React from 'react'

const Navigation = () => {
   
  return (
    <>
        <nav className={`${styles.nav} container`}>
            <div className='logo'>
                <img src="/logo1.png" alt="logo" />
            </div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
        
            </ul>

        </nav>

    </>
  )
}

export default Navigation