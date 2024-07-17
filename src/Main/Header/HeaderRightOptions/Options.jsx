import React, { useState } from "react";
import "./Options.css";
import Modal from "../../Modal/Modal";

const Options = ({ options,cartCount }) => {
  const [isVisible, setIsVisible] = useState(false);

  function handleLoginClick(setIsVisible) {
    setIsVisible(true);
  }
  return (
    
    <div className="options-container">
      {options.map((option, index) => (
        <div key={index} className="imageOptions-container">
          <img src={option.imagesrc} alt={option.imagesrc} />
          <p onClick={() => option.caption === "Login/SignUp" && handleLoginClick(setIsVisible)}>
            {option.caption}
            {option.caption === "Cart" &&  cartCount > 0 &&(
             <span className="cart-count">{cartCount}</span>
          )}
          </p>
        </div>
      ))}
      <Modal isVisible={isVisible} onClose={() => setIsVisible(false)}/>
    </div>
  );
};

export default Options;
