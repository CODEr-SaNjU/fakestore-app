import React from "react";
import Product from "../Product/Product";
import './Products.css'

const Products = (props) => {
  return (
    <div className="col-md-8">
      <h2>Products</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {props.products.map((product) => (
            <Product
              key={product.id}
              product={product}
              addToCart={props.handleAddToCart}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
