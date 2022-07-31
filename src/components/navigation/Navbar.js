import React from 'react';
import '../navigation/Navbar.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {

  return(
    <div id='navbar'>
      <NavLink to="/"><img src={require('../assets/logo.png')} alt="logo" id='logo'/></NavLink>
        <ul>
          <li>
            <NavLink to="/signup">Create Account</NavLink>
          </li>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        </ul>
    </div>
  )
}

export default Navbar