import React, { useEffect, useState } from 'react'
import ProductCard from '../ProductCard/ProductCard';
import './ProductsList.css'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ProductContext } from '../../context/Context';
import Shimmer from '../ShimmerUI/Shimmer';

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [filterProducts, setFilterProducts] = useState([]);
  const { setData} = useContext(ProductContext);
  const [page, setPage] = useState(1);
  const [isPageLoaded, setIsPageLoaded] = useState(false);

  const fetchMoreProducts = async () => {
    try {
      console.log("I am called")
      setIsPageLoaded(true);
      const response = await fetch(`https://fakestoreapi.com/products?limit=10&page=${page}`, { cache: "no-cache" });
      
      if (!response.ok) {
        throw new Error('Failed to fetch more products from the API.');
      }
      const json = await response.json();
      console.log(json);
      setProducts((prevProducts) => [...prevProducts, ...json]);
      setFilterProducts((prevProducts) => [...prevProducts, ...json])
      console.log(products)
      setData((prevProducts) => [...prevProducts, ...json])
      setPage((prevPage) => prevPage + 1);
      setIsPageLoaded(false);
    } catch (error) {
      console.error(error);
      setIsPageLoaded(false);
    }
  };
  
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
    setIsPageLoaded(true)
    const response = await fetch("https://fakestoreapi.com/products");
    const json = await response.json();
    console.log(json)
    setProducts(json)
    setFilterProducts(json)
    setData(json);
    setIsPageLoaded(false)
  }
  const handleScroll = () => {
    const isScrolledToBottom =
      window.innerHeight + window.scrollY >= document.body.offsetHeight;
    if (isScrolledToBottom && !isPageLoaded && page <= products.length) {
      fetchMoreProducts();
    }
  };
  useEffect(() => {
    fetchProducts()
  },[])
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [page, isPageLoaded]);
  
  

  if (products.length === 0) {
    return <Shimmer/>
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
            <ProductCard id={product.id} title={product.title} image={product.image} price={product.price} rating={ product.rating.rate} />
          </Link>
        ))
      }
      <div id="infinite-scroll-target"></div>
    </div>
  )
}

export default ProductsList