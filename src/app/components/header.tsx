"use client";

import React, { useState } from "react";
import { SiNike } from "react-icons/si";
import { AiOutlineHeart } from "react-icons/ai";
import { IoBagOutline } from "react-icons/io5";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import Link from "next/link";
import { FiUser } from "react-icons/fi";
import ProductSearch from "./ProductSearch";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // For mobile sidebar menu

  return (
    <div>
      {/* Header */}
      <div className="w-full sm:h-[50px] lg:h-[80px] bg-white flex items-center justify-between px-6 lg:px-10 border-b border-gray-200">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
          <SiNike className="w-[48px] h-[48px] lg:w-[78.47px] lg:h-[78.47px]" />
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden lg:flex space-x-6 text-sm font-medium ml-[150px]">
          <a href="/allproduct" className="hover:underline text-[16px] font-bold">
            New & Featured
          </a>
          <a href="/allproduct" className="hover:underline text-[16px] font-bold">
            Men
          </a>
          <a href="/allproduct" className="hover:underline text-[16px] font-bold">
            Women
          </a>
          <a href="/allproduct" className="hover:underline text-[16px] font-bold">
            Sale
          </a>
          <a href="/allproduct" className="hover:underline text-[16px] font-bold">
            SNKRS
          </a>
        </div>

        {/* Icons and Search */}
        <div className="flex items-center space-x-4">
          {/* Search Bar  */}
          <ProductSearch/>
            
         

          {/* Wishlist Icon */}
          <Link href="/checkout">
            <AiOutlineHeart
              size={20}
              className="cursor-pointer text-gray-600 hover:text-black"
            />
          </Link>

          {/* Cart Icon */}
          <Link href="/cart">
            <IoBagOutline
              size={20}
              className="cursor-pointer text-gray-600 hover:text-black"
            />
          </Link>
          <Link href={"/profile"}>
               <FiUser className="w-5 h-5" />
                
            </Link>

          {/* Mobile Menu Icon */}
          <HiOutlineMenuAlt3
            size={28}
            className="lg:hidden cursor-pointer"
            onClick={() => setIsOpen(true)}
          />

          
        </div>
      </div>

      {/* Mobile Sidebar */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex">
          <div className="w-64 bg-white h-full p-6 space-y-6">
            {/* Close Icon */}
            <HiOutlineX
              size={28}
              className="cursor-pointer text-black"
              onClick={() => setIsOpen(false)}
            />

            {/* Sidebar Links */}
            <div className="flex flex-col space-y-4 text-sm font-medium">
              <a href="/allproduct" className="hover:underline text-[16px] font-bold">
                New & Featured
              </a>
              <a href="/allproduct" className="hover:underline text-[16px] font-bold">
                Men
              </a>
              <a href="/allproduct" className="hover:underline text-[16px] font-bold">
                Women
              </a>
              <a href="/allproduct" className="hover:underline text-[16px] font-bold">
                Sale
              </a>
              <a href="/allproduct" className="hover:underline text-[16px] font-bold">
                SNKRS
              </a>
            </div>
          </div>
          <div className="flex-1" onClick={() => setIsOpen(false)}></div>
        </div>
      )}




      
    </div>
  );
};

export default Header;
