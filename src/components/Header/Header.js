import React from 'react'
import './Header.css'
import Logo from '../../images/logo.jpg'
import { Link } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar'

const Header = () => {
  return (
    <nav>
      <input type="checkbox" id="check" />
      <label htmlFor="check" className='checkBtn'>
        Menu
        <i className ='fa fa-bars'></i>
      </label>
      <label className='logo'>Lets Shop!</label>
      
      <ul>
        <Link to = "/" className='nav-link'><li>Home</li></Link>
        <Link to = "/" className='nav-link'><li>Contact Us</li></Link>
        <Link to = "/" className='nav-link'><li>About Us</li></Link>
        <Link to = "/" className='nav-link'><li>Sign In</li></Link>
        <Link to = "/" className='nav-link'><li>Cart</li></Link>
      </ul>
    </nav>
    // <div className='nav-container'>
    //     <div className='logo-container'>
    //         <img src={Logo} alt="logo"/>
    //     </div>
    //     <SearchBar/>
    //     <div className='nav-items'>
    //         <ul>
    //             <Link to ="/" className='nav-link'><li>Home</li></Link>
    //             <li>Contact Us</li>
    //             <li>About Us</li>
    //             <li>Cart</li>
    //             <li>Sign In</li>
    //         </ul>
    //     </div>
    // </div>
  )
}

export default Header