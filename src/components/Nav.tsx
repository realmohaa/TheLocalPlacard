import React, { useState } from 'react';
import { HiSearch, HiShoppingCart, HiMenuAlt1, HiUser, HiGlobe } from "react-icons/hi";
import { Button, IconButton } from '@mui/material'
import Hamburger from 'hamburger-react'

const Navbar = () => {
  const [isOpen, setOpen] = useState(false)
  return (
    // Navigation container
    <div className="px-8 pt-6 pb-3">
      {/* Navigation wrapper */}
      <div className="lg:px-10 sm:px-0 sm:mx-4 flex justify-between items-center h-full">
        {/* Left section */}
        <div className="flex items-center flex-1">
          {/* Language selection */}
          <div className="hidden sm:block">
          <IconButton color="default"><HiGlobe/></IconButton>
          </div>

          {/* Search bar */}
          {/* <div className="border border-gray-300 rounded-full flex items-center ml-5 p-2 hidden sm:block">
            <input type="text" placeholder="Search" className="outline-none px-2 w-full" />
            <HiSearch className="h-5 w-5 text-gray-500" />
          </div> */}
        </div>

        {/* Center section */}
        <div className="flex-1 text-center">
            <h1 className="font-bold uppercase block text-sm md:text-2xl min-w-full transition-all duration-100 ease-in-out hover:scale-112">
              The Local Placard
            </h1>
        </div>

        {/* Right section */}
        <div className="flex items-center flex-1 justify-end ">
          {/* Register button */}
          <div className="hidden sm:block">
          <IconButton color="default"><HiUser/></IconButton>
          </div>

          {/* Login button */}
          <div className="hidden sm:block">
          <IconButton color="default"><HiSearch/></IconButton>
          </div>

          {/* Cart icon */}
          <div className="hidden sm:block">
          <IconButton color="default"><HiShoppingCart/></IconButton>
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden">
          <Hamburger size={22} toggled={isOpen} toggle={setOpen} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
