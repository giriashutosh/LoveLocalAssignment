import React from "react";
import "./ProductDetail.css";

const ProductDetail = (props) => {
  console.log(props);
  const { title, image, price, description } = props.product;
  console.log(title);
  return (
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
  );
};

export default ProductDetail;
