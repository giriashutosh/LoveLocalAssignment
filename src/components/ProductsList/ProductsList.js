import React, {useEffect, useState} from 'react'
import ProductCard from '../ProductCard/ProductCard';
import './ProductsList.css'
import { Link } from 'react-router-dom';

const ProductsList = () => {
 const [products, setProducts] = useState([]);

 const fetchProducts = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  //console.log(response);
  const json = await response.json();
  //console.log(json);
  setProducts(json)
 }

 useEffect(()=>{
    fetchProducts();
 },[])

  if (products.length === 0) {
    return <h1>Loading...</h1>
  }
  return (
    <div className='products-container'>
        {
            products.map((product)=>(
                <Link to = {"/productdetail/"+product.id} key={product.id} className='product-link'>
                    <ProductCard id={product.id} title={product.title} image={product.image} price={product.price}/>
                </Link>
            ))
        }
         
    </div>
  )
}

export default ProductsList