import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='flex gap-6 place-content-evenly'>
        <NavLink to="/">
            Home
        </NavLink>

        <NavLink to="/pastes">
            Pastes
        </NavLink>
    </div>
  )
}

export default NavBar