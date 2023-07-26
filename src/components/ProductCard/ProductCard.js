import React from "react";
import "./ProductCard.css";

const ProductCard = (props) => {
  const { title, price, image } = props;
 
  const truncateTitle = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };

  return (
    <div className="card-container">
      <img src={image} alt="Product" />

      <h4 className="title">{truncateTitle(title, 20)}</h4>
      <h5 className="price">Rs {price}</h5>
      <button className="add-to-cart-btn">Add to Cart</button>
    </div>
  );
};

export default ProductCard;
