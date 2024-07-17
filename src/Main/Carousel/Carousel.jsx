import React from "react";
import Slider from "react-slick";
import "./Carousel.css";

// function SampleNextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, 
//         display: "block",
//         color:"black",
//         background: "transparent" }}
//       onClick={onClick}
//     />
//   );
// }

// function SamplePrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block",
//       color:"black", background: "black" }}
//       onClick={onClick}
//     />
//   );
// }

function Carousel() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div className="slider-container w-100">
      <Slider {...settings}>
        <div>
          <h3 className="text-lg text-black	text-center underline ">
            Members: Free Shipping on Orders above $50+
          </h3>
        </div>
        <div>
          <h3 className="text-lg text-black	text-center underline">Extra 20% OFF with code HUMJEETENGE20</h3>
        </div>
        <div>
          <h3 className="text-lg text-black	text-center underline">Look for Store Pickup at Checkout</h3>
        </div>
      </Slider>
    </div>
  );
}

export default Carousel;
