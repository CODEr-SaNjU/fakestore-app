import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css'

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products?limit=10')
      .then((response) => setProducts(response.data))
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  useEffect(() => {
    let total = cart.reduce((sum, product) => sum + product.price, 0);
    setCartTotal(total);
  }, [cart]);

  return (
    <div className="container mt-5">
      <div className="row">
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
              {products.map((product) => (
                <tr key={product.id}>
                  <td>{product.title}</td>
                  <td>${product.price}</td>
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={() => handleAddToCart(product)}
                    >
                      Add to Cart
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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
              {cart.map((product) => (
                <tr key={product.id}>
                  <td>{product.title}</td>
                  <td>${product.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <h4>Total: ${cartTotal.toFixed(2)}</h4>
        </div>
      </div>
    </div>
  );
};

export default App;
