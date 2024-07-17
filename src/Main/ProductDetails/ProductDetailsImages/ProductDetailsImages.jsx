import React, { useState } from "react";

const ProductDetailsImages = ({ productDetailsImages }) => {
  const [displayedImage, setDisplayedImage] = useState(productDetailsImages[0]);
  return (
    <div className="flex space-x-4 h-full">
      <div className="flex flex-col space-y-2">
        {productDetailsImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Thumbnail ${index + 1}`}
            className="w-24 h-24 object-cover cursor-pointer border border-gray-200 hover:border-gray-400"
            onMouseEnter={() => setDisplayedImage(image)}
          />
        ))}
      </div>
      <div className="w-full h-full flex items-center justify-center border border-gray-200">
        <img
          src={displayedImage}
          alt="Displayed"
          className="object-cover max-h-full"
        />
      </div>
    </div>
  );
};

export default ProductDetailsImages;
