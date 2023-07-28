import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import Logo from '../../images/logo.jpg'

const Header = () => {
  return (
    <nav>
      <div className='logo-container'>
        <img src={Logo} alt="im" />
      </div>
      <div className='nav-items'>
        <ul>
          <Link to="/" className='nav-link'><li>Home</li></Link>
          <Link to="/" className='nav-link'><li>Contact Us</li></Link>
          <Link to="/" className='nav-link'><li>About Us</li></Link>
          <Link to="/" className='nav-link'><li>Sign In</li></Link>
          <Link to="/" className='nav-link'><li>Cart</li></Link>
        </ul>
      </div>

    </nav>

  )
}

export default Header