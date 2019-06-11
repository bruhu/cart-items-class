import React, { Component } from "react";

export default class ProductListClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        { id: 1, name: "Doom" },
        { id: 2, name: "Quake" },
        { id: 3, name: "Ocarina of Time" }
      ],
      cart: []
    };
  }

  addToCart = product => {
    const newCartItem = { ...product };
    this.setState(prevState => ({
      cart: [...prevState.cart, newCartItem]
    }));
  };

  render() {
    return (
      <React.Fragment>
        <h3>Uh! I am the Product List.</h3>
        <div>
          <h2>Cart</h2>
          {this.state.cart.map(
            (item, index) => <div key={index}>{item.name}</div>
          )}
          <h2>Products</h2>
          {this.state.products.map(product => (
            <p key={product.id} onClick={() => this.addToCart(product)}>
              {product.name}
            </p>
          ))}
        </div>
      </React.Fragment>
    );
  }
}
