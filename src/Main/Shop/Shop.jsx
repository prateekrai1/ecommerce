import React, { useState, useEffect } from "react";
import ProductCard from "../ProductCard/ProductCard";
import image1 from "../../assets/Home-Page-Product-Images/Image 1.jpg";
import Carousel from "../Carousel/Carousel";
import Sidebar from "../Menu/Sidebar";
import Filter from "../Filter/Filter";
const productImages = [
  { id: 1, imagesrc: image1, title: "Casual T-shirt", price: 15, qty: 11 },
  { id: 2, imagesrc: image1, title: "Casual T-shirt", price: 15, qty: 10 },
  { id: 3, imagesrc: image1, title: "Casual T-shirt", price: 15, qty: 10 },
  { id: 4, imagesrc: image1, title: "Casual T-shirt", price: 15, qty: 9 },
  { id: 5, imagesrc: image1, title: "Casual T-shirt", price: 15, qty: 9 },
  { id: 6, imagesrc: image1, title: "Casual T-shirt", price: 15, qty: 9 },
  { id: 7, imagesrc: image1, title: "Casual T-shirt", price: 15, qty: 9 },
];


const Shop = () => {
  const [cartCount, setCartCount] = useState(0);

  const handleAddtoCart = () => {
    setCartCount(cartCount + 1);
  };

  const handleDeleteCart = () => {
    setCartCount(cartCount - 1);
  };

  return (
    <div className="flex justify-normal">
      <div className="w-1/ p-4 m-3">
        <h2 className="text-lg font-bold mb-4 text-center">
            <Sidebar/>
        </h2>
      </div>
      <div className="pl-4 flex flex-col">
        <Filter/>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 divide-x">
          {productImages.map((product) => (
            <ProductCard
              key={product.id}
              productImages={product}
              onAddtoCart={handleAddtoCart}
              cartCount={cartCount}
              onDeletetoCart={handleDeleteCart}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
