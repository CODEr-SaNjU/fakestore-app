import React, { useEffect, useState } from 'react';
import './App.css'
import Products from './Components/Products/Products';
import Cart from './Components/Cart/Cart';
import { getProducts } from './Services/products';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    getProducts()
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
        <Products products={products} handleAddToCart={handleAddToCart} />
        <Cart cart={cart} cartTotal={cartTotal} />
      </div>
    </div>
  );
};

export default App;
