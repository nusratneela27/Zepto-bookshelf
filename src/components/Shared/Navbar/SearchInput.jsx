import React from "react";
import { BiSearch } from "react-icons/bi";

const SearchInput = () => {
  const handleSearchClick = () => {
    alert("Search icon clicked!");
  };

  return (
    <div className="relative w-full max-w-sm">
      <button
        type="button"
        onClick={handleSearchClick}
        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 focus:outline-none"
      >
        <BiSearch className="text-xl" />
      </button>

      <input
        type="search"
        placeholder="Search..."
        className="w-full py-2 pl-10 pr-5 rounded-full focus:outline-none focus:ring-2 focus:sky-purple-500"
      />
    </div>
  );
};

export default SearchInput;
