import React from "react";
import './ProductCard.css'



const ProductCard = ({ productImages, onDeletetoCart, onAddtoCart, cartCount }) => {

  function handleAddtoCartButtons(){
    return (
      <div>
        <button onClick={onDeletetoCart}>-</button>
        <button onClick={onAddtoCart}>+</button>
      </div>
    );
  }
  return (
    <div className="card-container">
        <div className="card">
          <img src={productImages.imagesrc} alt={productImages.imagesrc} className="card-image"/>
          <h1 className="product-heading">{productImages.title}</h1>
          <div>
          <p className="price">${productImages.price}</p>
          {productImages.qty < 10 &&
          <p className="warning">Only few left</p>
          }
          </div>
          {cartCount > 0 ?
            handleAddtoCartButtons() :
            <button onClick={onAddtoCart}>Add to Cart</button>
          } 
        </div>
    </div>
  );
};

export default ProductCard;
