import React from "react";
import ProductDetailsImages from "../ProductDetailsImages/ProductDetailsImages";
import hnm1 from "../../../assets/Product/hnm1.jpg";
import hnm2 from "../../../assets/Product/hnm2.webp";
import hnm3 from "../../../assets/Product/hnm3.webp";
import hnm4 from "../../../assets/Product/hnm4.webp";
import hnm5 from "../../../assets/Product/hnm5.webp";
// import shirts2 from "../../../assets/FeaturedItems/Shirts image 2.jpg";
import Size from "../Sizes/Size";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import StraightenOutlinedIcon from '@mui/icons-material/StraightenOutlined';
import ProductDescription from "../Description/ProductDescription";

const productImages = [hnm1, hnm2, hnm3, hnm4, hnm5];

const sizes = ["XS", "S", "M", "L", "XL", "XXL", "XXXL"];

const ProductDetails = () => {
  return (
    <div className="flex flex-row justify-center space-x-8 p-8">
      <div className="w-1/2">
        <ProductDetailsImages productDetailsImages={productImages} />
      </div>
      <div className="w-1/2 flex flex-col justify-start space-y-4 pl-5">
        <div className="flex flex-row justify-between">
          <div>
            <h1 className="text-2xl mb-3">
              Regular Fit Textured-weave Resort Shirt
            </h1>
            <p className="text-2xl mb-3">$19.99</p>
          </div>
          <div>
            <FavoriteBorderIcon className="mr-5" sx={{ fontSize: 40 }} />
          </div>
        </div>
        <>
          <Size sizes={sizes} />
          <div className="flex flex-row">
            <StraightenOutlinedIcon/>
            <a href="" className="text-lg underline pl-2">Size Guide</a>
          </div>
        </>
        <div className="flex flex-row border justify-center border-black bg-black text-white p-3">
          <ShoppingBagOutlinedIcon sx={{ fontSize: 40 }} />
          <button className="text-xl  p-2"> Add to Bag</button>
        </div>
        <div>
            <ProductDescription/>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
