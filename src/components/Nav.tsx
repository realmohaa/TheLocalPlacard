import React from 'react';
import { HiSearch, HiShoppingCart, HiMenuAlt1 } from "react-icons/hi";

const Navbar = () => {
  return (
    // Navigation container
    <div className="px-8 pt-6 pb-3">
      {/* Navigation wrapper */}
      <div className="px-10 sm:px-0 sm:mx-4 flex justify-between items-center h-full">
        {/* Left section */}
        <div className="flex items-center flex-1">
          {/* Language selection */}
          <span className="text-sm cursor-pointer hidden sm:block">EN</span>

          {/* Search bar */}
          {/* <div className="border border-gray-300 rounded-full flex items-center ml-5 p-2 hidden sm:block">
            <input type="text" placeholder="Search" className="outline-none px-2 w-full" />
            <HiSearch className="h-5 w-5 text-gray-500" />
          </div> */}
        </div>

        {/* Center section */}
        <div className="flex-1 text-center">
            <h1 className="font-bold uppercase text-lg sm:text-2xl transition-all duration-100 ease-in-out hover:scale-112">
              The Local Placard
            </h1>
        </div>

        {/* Right section */}
        <div className="flex items-center flex-1 justify-end">
          {/* Register button */}
          <div className="hidden sm:block">
              <div className="text-sm cursor-pointer mr-5 transition-all duration-100 ease-in-out hover:scale-112">
                REGISTER
              </div>
          </div>

          {/* Login button */}
          <div className="hidden sm:block">
              <div className="text-sm cursor-pointer mr-5 transition-all duration-100 ease-in-out hover:scale-112">
                LOG IN
              </div>
          </div>

          {/* Cart icon */}
          <div className="hidden sm:block">
              <div className="relative">
                {/* <Badge badgeContent={2} color="primary"> */}
                  <HiShoppingCart className="h-6 w-6 text-gray-500" />
                {/* </Badge> */}
              </div>
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden">
            <HiMenuAlt1
              className="h-6 w-6 text-gray-500 cursor-pointer"
              // onClick={toggle}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
