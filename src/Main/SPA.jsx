import React, { useState } from "react";
import Homepage from "./Homepage/Homepage.jsx";
import DiscountBanner from "./DiscountBanner/DiscountBanner.jsx";

const SPA = () => {
  return (
    <div>
          <DiscountBanner />
          <Homepage />
    </div>
  );
};

export default SPA;
