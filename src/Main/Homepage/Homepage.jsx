import React from "react";
import './Homepage.css';
import featureImage from '../../assets/FeaturedItems/Feature Image women 1.jpg'; 
import featureImage2 from '../../assets/FeaturedItems/Feature Image men 1.jpg'; 
import featureImage3 from '../../assets/FeaturedItems/Feature Image women 2.jpg'; 


const Homepage = () => {
  return (
    <div className="featured-product">
      <div className="image-container">
        <img src={featureImage} alt="Product" />
        <div className="tooltip">This is an amazing product!</div>
      </div>
      <div className="image-container">
        <img src={featureImage2} alt="Product" />
        <div className="tooltip">This is an amazing product!</div>
      </div>
      <div className="image-container">
        <img src={featureImage3} alt="Product" />
        <div className="tooltip">This is an amazing product!</div>
      </div>
    </div>
  );
};

export default Homepage;
