import React, { useEffect, useState } from 'react'
import ProductCard from '../ProductCard/ProductCard';
import './ProductsList.css'
import { Link } from 'react-router-dom';

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);

  const allCategory = (json) => {
    setFilterProducts(json)
  }

  const lowToHighPrice = () => {
    const sortedProducts = [...products].sort((a, b) => a.price - b.price);
    setFilterProducts(sortedProducts);
  }
  
  const highToLowPrice = () => {
    console.log('I am calling by someone')
    const sortedProducts = [...products].sort((a, b) => b.price - a.price);
    setFilterProducts(sortedProducts);
  }
  
  const filterByCategory = (category) => {
    if (category === "all") {
      setFilterProducts(products)
    } else {
      const categoryItem = products.filter((product) => product.category === category)
      setFilterProducts(categoryItem)
    }
  }

  const onChangeHandler = (e) => {
    const selectedOptions = e.target.value;
    if (selectedOptions === 'lowToHigh') {
      lowToHighPrice();
    } else if (selectedOptions === 'highToLow') {
      highToLowPrice();
    } else {
      filterByCategory(selectedOptions)
    } 
  }
  const fetchProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const json = await response.json();
    setProducts(json)
    setFilterProducts(json)
  }

  useEffect(() => {
    fetchProducts();
  }, [])

  if (products.length === 0) {
    return <h1>Loading...</h1>
  }

  return (
    <div className='products-container'>
      <div className='filter-dropdown-container'>
        <div className='filter-dropdown'>
          <label htmlFor="filter-options" className="filterby">Filter By:</label>
          <select id="filter-options" onChange={onChangeHandler}>
          <option value="default">Select Options</option>
            <option value="lowToHigh">Low to High Price</option>
            <option value="highToLow">High to Low Price</option>
            <option value="all">All</option>
            <option value="electronics">Electronics</option>
            <option value="jewelery">Jewelery</option>
            <option value="men's clothing">Men's Clothing</option>
            <option value="women's clothing">Women's Clothing</option>
            {/* <option value="rating">Rating</option> */}
          </select>
        </div>
      </div>
      {
        filterProducts.map((product) => (
          <Link to={"/productdetail/" + product.id} key={product.id} className='product-link'>
            <ProductCard id={product.id} title={product.title} image={product.image} price={product.price} />
          </Link>
        ))
      }
    </div>
  )
}

export default ProductsList