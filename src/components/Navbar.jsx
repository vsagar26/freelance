import React, { useState } from "react";
import logo from "../assets/logo.png";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);



  return (
    <div className="fixed z-10 w-full">
      <nav className="flex flex-row justify-between items-center w-full bg-[#16112F] box-border ">  
      
        <div className="py-4">
          <img
            src={logo}
            alt="logo"
            className="h-[32px] sm:h-[40px] pl-8 sm:pl-10"
          />
        </div>
        <div>
          <div
            onClick={() => setToggle((prev) => !prev)}
            className="block sm:hidden"
          >
            {toggle ? (
              <HiMenuAlt3 className="text-white text-[28px] mr-8 block sm:hidden" />
            ) : (
              <MdClose className=" text-white text-[28px] mr-8 block sm:hidden" />
            )}
          </div>

          <ul className="hidden list-none sm:flex flex-row text-white ">
            <a href="/" className="px-6 py-6 font-medium">
              <li>Home</li>
            </a>
            <a href="/about" className="px-6 py-6">
              <li>About</li>
            </a>
            <a href="/service" className="px-6 py-6 font-medium">
              <li>Service</li>
            </a>
            <a href="/price" className="px-6 py-6 font-medium">
              <li>Price</li>
            </a>
            <a href="/contact" className="px-6 pr-20 py-6 font-medium ">
              <li>Contact</li>
            </a>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

// ##F0E3FF
