import React from "react";

const Cart = ({ items }) => {
  const empty = <h2>Your cart is empty</h2>;
  const itemlist = 
  (
    <>
      <h2>Your Cart</h2>
      <ol>
        {items.map((item, index) => {
          return <li>{item}</li>;
        })}
      </ol>
    </>
  );

  if (items.length > 1) return itemlist;
  else return empty;
};

// Usage in another component
const App = () => {
  const cartItems = ["Apple", "Banana", "Orange"]; // Try changing this to an empty array []
  return <Cart items={cartItems} />;
};

export default App;
