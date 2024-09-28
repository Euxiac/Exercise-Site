import React from "react";

function Features(props) {
  return (
    <section className="features" id="features">
      <h2>Features</h2>
      <ul>
        {props.features.map((value, index) => {
          return <li key={index}>{value}</li>;
        })}
      </ul>
    </section>
  );
}

export default Features;
