import React, { useState } from "react";

const ProductListHook = () => {
  const [cart, setCart] = useState([]);
  const [products] = useState([
    { id: 1, name: "Doom" },
    { id: 2, name: "Quake" }
  ]);

  const addToCart = product => {
    console.log(product);
    const newCartItem = { ...product };
    setCart([...cart, newCartItem]);
  };

  return (
    <div>
      <h2>Cart</h2>
      {cart.map((item, index) => (
        <div key={index}>{item.name} </div>
      ))}
      <h2>Products</h2>
      {products.map(product => (
        <div key={product.id} onClick={() => addToCart(product)}>
          {product.name}
        </div>
      ))}
    </div>
  );
};

export default ProductListHook;

