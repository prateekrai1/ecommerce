import React from "react";
import "./DiscountBanner.css";

const DiscountBanner = () => {
  return (
    <div className="discount-banner">
      <div className="discount-content">
        <h2>Get <span className="discount-percent">15%</span> off on your First Order</h2>
        <p>Sign up to receive emails and texts and be the first to know about latest drops and deals!</p>
        <a href="#" className="button">
          Shop Now
        </a>
      </div>
    </div>
  );
};

export default DiscountBanner;
