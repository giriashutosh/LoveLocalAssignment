import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductDetail from "../../components/ProductDetail/ProductDetail";

const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const { prod_id } = useParams();
  console.log(prod_id);

  const fetchProductDetails = async () => {
    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/${prod_id}`
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const json = await response.json();
      console.log(json);
      setProduct(json);
    } catch (error) {
      console.log("Error fetching product details:" + error);
    }
  };

  useEffect(() => {
    fetchProductDetails();
  }, [prod_id]);
  if (Object.keys(product).length === 0) {
    return <h1>Loading...</h1>;
  }

  return <ProductDetail product={product} />;
};

export default ProductDetails;
