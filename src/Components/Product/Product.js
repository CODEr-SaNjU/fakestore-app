import React from "react";
import './Product.css'
const Product = (props) => {
  const { product, addToCart } = props;
  return (
    <tr>
      <td>{product.title}</td>
      <td>${product.price}</td>
      <td>
        <button className="btn btn-primary" onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      </td>
    </tr>
  );
};

export default Product;
