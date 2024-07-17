import React, { useState } from "react";

const Size = ({ sizes }) => {

    const [select, setSelect] = useState(false);

  return (
    <div>
      <h1 className="pb-2 text-xl font-medium">Sizes</h1>
      <div className="flex flex-row justify-start">
        {sizes.map((size) => (
          <button className="border-solid border-gray-300 border-2 p-5 mr-5">{size}</button>
        ))}
      </div>
    </div>
  );
};

export default Size;
