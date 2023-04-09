import React from "react";
import logo from "../assets/logo.png";
import { GrFacebook, GrInstagram, GrYoutube, GrTwitter } from "react-icons/gr";
import {BsWhatsapp} from "react-icons/bs"

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#16112F] flex flex-col sm:flex-row justify-between items-center py-8">
        <div className="py-3">
          <img src={logo} alt="logo" className="h-[30px] px-32" />
        </div>
        <div className="px-32 text-white">
          <ul className="flex flex-col  justify-center items-center ">
            <a href="/" className="font-medium py-1 sm:py-3">
              <li>Home</li>
            </a>
            <a href="/about" className="font-medium py-1 sm:py-3">
              <li>About</li>
            </a>
            <a href="/service" className="font-medium py-1 sm:py-3">
              <li>Service</li>
            </a>
            <a href="/pricing" className="font-medium py-1 sm:py-3">
              <li>Pricing</li>
            </a>
            <a href="/contact" className="font-medium py-1 sm:py-3">
              <li>Contact Us</li>
            </a>
          </ul>
        </div>
      </footer>
      <div className="w-full bg-[#16112F] flex flex-col sm:flex-row text-white justify-between items-center px-20 py-10">
        <div>
          <p>&#169; Copyright 2023</p>
        </div>
        <div className="text-white mt-4  flex flex-col sm:flex-row">
          <GrFacebook className=" text-[24px]  mx-3 my-2" onClick={()=>window.open("https://www.facebook.com")}/>
          <GrInstagram className=" text-[24px]  mx-3 my-2" onClick={()=>window.open("https://www.instagram.com")}/>
          <GrYoutube className=" text-[24px]  mx-3 my-2" onClick={()=>window.open("https://www.youtube.com")}/>
          <GrTwitter className=" text-[24px]  mx-3 my-2" onClick={()=>window.open("https://www.twitter.com")}/>
          <BsWhatsapp className=" text-[24px]  mx-3 my-2" onClick={()=>window.open("https://web.whatsapp.com")}/>
        </div>
      </div>
    </div>
  );
};

export default Footer;
