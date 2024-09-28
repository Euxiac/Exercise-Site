import { useState } from "react";
import "./App.css";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Head from "./components/Head";
import Testimonials from "./components/Testimonials";
import WelcomeSection from "./components/WelcomeSection";
import UserProfile from "./components/profile";
import CartComponent from "./components/Cart";
import Product from "./components/Product";

function App() {
  const featuresArr = [
    "Feature 1: Amazing design",
    "Feature 2: User-friendly interface",
    "Feature 3: High performance",
  ];

  const [products] = useState([
    { id: 1, name: "Laptop", category: "Electronics" },
    { id: 2, name: "Shoes", category: "Clothing" },
    { id: 3, name: "Camera", category: "Electronics" },
    { id: 4, name: "T-shirt", category: "Clothing" },
  ]);

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filterProducts = () => {
    if (selectedCategory === "All") {
      return products;
    }
    return products.filter((product) => product.category === selectedCategory);
  };

  return (
    <>
      <div className="page">
        <Head />
        <WelcomeSection />

        <Features features={featuresArr} />
        <Testimonials />
        <Footer />

        <UserProfile />
        <CartComponent />

        <div>
          <h2>Product List</h2>
          <label>
            Filter by Category:
            <select
              onChange={(e) => setSelectedCategory(e.target.value)}
              value={selectedCategory}
            >
              <option value="All">All</option>
              <option value="Electronics">Electronics</option>
              <option value="Clothing">Clothing</option>
            </select>
          </label>
        </div>

        <div>
          {filterProducts().map((product) => (
            <Product
              key={product.id}
              name={product.name}
              category={product.category}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
