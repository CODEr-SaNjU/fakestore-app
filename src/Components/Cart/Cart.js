import React from "react";
import './Cart.css'

const Cart = (props) => {
  return (
    <div className="col-md-4">
      <h2>Cart</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {props.cart.map((product) => (
            <tr key={product.id}>
              <td>{product.title}</td>
              <td>${product.price}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <h4>Total: ${props.cartTotal.toFixed(2)}</h4>
    </div>
  );
};

export default Cart;
