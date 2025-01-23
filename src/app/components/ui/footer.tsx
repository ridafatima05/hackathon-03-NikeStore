
import React from "react";
import { AiFillTwitterCircle } from "react-icons/ai";
import { MdFacebook } from "react-icons/md";

const Footer = () => {
  return (
    <div className="w-[1440px] h-[331px] bg-black">
      <div className="flex justify-between">
        <div className="text-white w-[245.25px] h-[166.63px]">
          <div className="">Find A Store</div>
          <div className="">Become A Member</div>
          <div className=" ">Sign Up for Email</div>
          <div className="">Send Us Feedback</div>
          <div className="">Student Discounts</div>
        </div>
        <div className=" w-[245.25px] h-[210px]">
          <div className="text-white">Get Help</div>
          <div className="text-gray-500">Order Status</div>
          <div className=" text-gray-500">Delivery</div>
          <div className="text-gray-500">Returns</div>
          <div className="text-gray-500">Payment Options</div>
          <div className="text-gray-500">Contact Us On Nike.com Inquiries</div>
          <div className="text-gray-500">Contact Us On All Other Inquiries</div>
         </div>
          <div>
            <div className=" w-[245.25px] h-[151px]">
              <div className="text-white">About Nike</div>
              <div className="text-gray-500">News</div>
              <div className=" text-gray-500">Careers</div>
              <div className="text-gray-500">Investors</div>
              <div className="text-gray-500">Sustainability</div>
            </div>
          
        </div>
      </div>
      <div><AiFillTwitterCircle /> <MdFacebook /></div>
    </div>
  );
};

export default Footer;
