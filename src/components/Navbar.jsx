import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="wrapper flex justify-between items-center bg-[#FBFCFE] my-2">
        <div className="h-16 font-extrabold text-xl flex items-center ml-6">
          Orders
        </div>
        <div></div>
        <div className="btn-wrapper flex items-center">
          <button className="h-10 w-24 sm:w-32 md:w-36 lg:w-40 xl:w-44 mr-6 rounded-md bg-[#404CEB] text-[#fff] font-[sans-serif] text-sm sm:text-base font-medium tracking-tight px-4 sm:px-6 leading-none">
            CREATE NEW
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
