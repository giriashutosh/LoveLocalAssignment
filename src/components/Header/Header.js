import React from 'react'
import './Header.css'
import Logo from '../../images/logo.jpg'
import { Link } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar'

const Header = () => {
  return (
    <div className='nav-container'>
        <div className='logo-container'>
            <img src={Logo} alt="logo"/>
        </div>
        <SearchBar/>
        <div className='nav-items'>
            <ul>
                <Link to ="/" className='nav-link'><li>Home</li></Link>
                <li>Contact Us</li>
                <li>About Us</li>
                <li>Cart</li>
                <li>Sign In</li>
            </ul>
        </div>
    </div>
  )
}

export default Header