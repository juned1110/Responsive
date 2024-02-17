import React from "react";

const SearchBar = () => {
  return (
    <div className="outer h-40 w-full mt-10">
      <div className="searchContainer flex flex-col md:flex-row justify-evenly m-4 rounded-[30px] shadow-xl border border-solid bg-[#FDFEFE] ">
        <div className="w-full md:w-1/3">
          <label className="mt-10 bg-white w-full md:w-[15vw] flex flex-col py-2 px-2 rounded-2xl">
            What are you looking for?
          </label>
          <input
            id="search-bar"
            placeholder="Enter your search term"
            className="px-6 py-2 w-full rounded-md flex-1 outline-none bg-white border mb-8"
          />
        </div>
        <div className="w-full md:w-1/3">
          <label className="mt-10 bg-white w-full md:w-[10vw] flex flex-col py-2 px-2 rounded-2xl shadow-2xl">
            Category
          </label>
          <input
            id="search-bar"
            placeholder="Enter your search term"
            className="px-6 py-2 w-full rounded-md flex-1 outline-none bg-white border"
          />
        </div>
        <div className="w-full md:w-1/3">
          <label className="mt-10 bg-white w-full md:w-[10vw] flex flex-col py-2 px-2 rounded-2xl shadow-2xl">
            Status
          </label>
          <input
            id="search-bar"
            placeholder="Enter your search term"
            className="px-6 py-2 w-full rounded-md flex-1 outline-none bg-white border"
          />
        </div>
        <div className="flex justify-center items-center mt-8 md:mt-12">
          <button className="h-10 w-[8px] md:w-16 rounded-md bg-[#404CEB] text-[#fff] font-[sans-serif] text-sm font-medium tracking-tight px-6 leading-none mr-4 flex items-center justify-center">
            +
          </button>
          <button className="h-10 md:h-12 w-24 md:w-34 rounded-md bg-[#404CEB] text-[#fff] font-[sans-serif] text-sm font-medium tracking-tight px-10 leading-none flex items-center justify-center">
            SEARCH
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
