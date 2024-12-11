import React from 'react'
import { Link, NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
            <Link to="/">home</Link>
        </li>
        <li>
            <Link to="/about">About</Link>
        </li>
        <li>
            <NavLink to="/dashboard" className={({isActive})=>isActive?console.log("active"):""}>Dashboard</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
