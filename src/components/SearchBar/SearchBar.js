import React from 'react'
import SearchIcon from '../../images/search-icon.jpg'
import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className='search-container'>
       <input type="text" className='search-input'></input>
        <button className= "search-btn">Search</button>
    </div>
  )
}

export default SearchBar