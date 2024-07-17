import "./App.css";
import "./index.css";
import SPA from "./Main/SPA";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetails from "./Main/ProductDetails/ProductDetails/ProductDetails";
import Navbar from "./Main/Navbar/Navbar";
import Header from "./Main/Header/Header";
import Shop from "./Main/Shop/Shop";
import Carousel from "./Main/Carousel/Carousel";
const navbarItems = [
  { href: "/women", label: "Women" },
  {
    href: "/men",
    label: "Men",
    subItems: [
      { href: "/men-shirts", label: "Shirts" },
      { href: "/men-pants", label: "Pants" },
    ],
  },
  {
    href: "/baby",
    label: "Baby",
    subItems: [
      { href: "/men-shirts", label: "Shirts" },
      { href: "/men-pants", label: "Pants" },
    ],
  },
  { href: "/kids", label: "Kids" },
  { href: "/Beauty", label: "Beauty" },
  { href: "/Sport", label: "Sport" },
  { href: "/Sale", label: "Sale" },
];

function App() {
  const [cartCount, setCartCount] = useState(0);

  const handleAddtoCart = () => {
    setCartCount(cartCount + 1);
  };

  const handleDeleteCart = () => {
    setCartCount(cartCount - 1);
  };
  return (
    <div className="App">
      <Header cartCount={cartCount} />
      <Navbar items={navbarItems} />
      <Carousel className="m-4 p-4" />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SPA />} />
          <Route path="/product" element={<ProductDetails />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
