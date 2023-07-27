import React, { useState, useEffect } from "react";
import "./ProductDetail.css";
import { useContext } from "react";
import { ProductContext } from "../../context/Context";
import ProductCard from "../ProductCard/ProductCard";
import { Link } from "react-router-dom";
import Shimmer from "../ShimmerUI/Shimmer";
import DetailShimmer from "../ShimmerUI/DetailShimmer";

const ProductDetail = (props) => {
  const [isLoading,setIsLoading] = useState(true)
  const { id, title, image, price, description, category } = props.product;
  const {data} = useContext(ProductContext);
  const [similarProducts, setSimilarProducts] = useState([]);
  
  const filterProducts = () => {
    const filterList = data.filter((product) => product.category === category);
    const updateProductList = filterList.filter((product) => product.id !== id)
    console.log(updateProductList)
    setSimilarProducts(updateProductList)
  }

  useEffect(() => {
    
    const delay = 1000; 
    setTimeout(() => {
      filterProducts();
      setIsLoading(false);
    }, delay);
    
  },[])
  if (isLoading) return <><DetailShimmer/><Shimmer/></>
  return (
    <>
  
    <div className="product-detail">
      <div className="product-image">
        <img src={image} alt="image" />
      </div>
      <div className="product-info">
        <h1 className="product-title">{title}</h1>
        <p className="product-description">Description - {description}</p>
        <p className="product-price">Rs {price}/-</p>
        <button className="detail-add-to-cart-btn">Add to Cart</button>
      </div>
      
    </div>
    <div className="similar-prod-container">
      <h2 className="heading">Similar Products</h2>
      <div className="prod-card-container">
      {
        similarProducts.map((product) => (
          <Link to={"/productdetail/" + product.id} key={product.id} className='product-link'>
            <ProductCard id={product.id} title={product.title} image={product.image} price={product.price} />
          </Link>
        ))
      }
      </div>
    </div>
    </>
  );
};

export default ProductDetail;
