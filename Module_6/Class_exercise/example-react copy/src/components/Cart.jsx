import React from "react";

const Cart = (items) => {
  const available = items.map((item) => {
    return <li>{item}</li>;
  });

  const notAvailable = <>Your Cart is Empty</>;

  const page = items.length === 0 ? notAvailable : available;

  return page;
};

// Usage in another component
const CartComponent = () => {
  const cartItems = ["Apple", "Banana", "Orange"]; // Try changing this to an empty array []
  const component = Cart(cartItems);
  return component;
};

export default CartComponent;
