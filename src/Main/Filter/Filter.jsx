import React, { useState } from "react";
import TuneIcon from "@mui/icons-material/Tune";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import Menu from "../Menu/Menu.jsx";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const Filter = () => {
  const [isSortByOpen, setIsSortByOpen] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  function handleSortby() {
    setIsSortByOpen(!isSortByOpen);
  }

  function handleSortbyOption(option) {
    console.log("Selected sort by:", option);
    setIsSortByOpen(false);
  }

  function handleFilters() {
    setIsFilterOpen(true);
  }

  function closeFilters() {
    setIsFilterOpen(false);
  }

  return (
    <div className="flex flex-row justify-between mb-5">
      <div onClick={handleSortby}>
        <button className="text-xl pr-1">Sort By</button>
        <ArrowDownwardIcon className="pb-1.5" sx={{ fontSize: 30 }} />
        {isSortByOpen && (
            <div className="absolute mt-2 w-48 bg-white border border-gray-300  shadow-lg z-10 ">
              <ul className="py-1">
                <li
                  className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleSortbyOption("price: high-to-low")}
                >
                  Price: High to Low
                </li>
                <li
                  className="px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleSortbyOption("price: low-to-high")}
                >
                  Price: Low to High
                </li>
              </ul>
            </div>
          )}
      </div>
      {isFilterOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={closeFilters}
        ></div>
      )}
      {isFilterOpen ? (
        <div
          className={`fixed right-0 top-0 h-full bg-white z-50 transform ${
            isFilterOpen ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-1000 ease-in-out  w-1/4`}
        >
          <div className="p-4">
            <button className="mb-4 text-red-600" onClick={closeFilters}>
              Close
            </button>
            <Menu
              title="Filters"
              items={["Filter 1", "Filter 2", "Filter 3"]}
            />
          </div>
        </div>
      ) : (
        <div onClick={handleFilters}>
          <button className="text-xl pr-1">Filter</button>
          <TuneIcon className="pb-1.5" sx={{ fontSize: 30 }} />
        </div>
      )}
    </div>
  );
};

export default Filter;
