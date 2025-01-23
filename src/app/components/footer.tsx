import React from "react";
import { AiFillTwitterCircle } from "react-icons/ai";
import { MdFacebook } from "react-icons/md";
import { TiSocialYoutubeCircular } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa6";
import { IoLocation } from "react-icons/io5";
import Link from "next/link";

const Footer = () => {
  return (
<div className="w-full bg-black mt-10">
  <div className="w-full h-auto bg-black flex flex-col lg:flex-row justify-between p-10">
  
    <div className="flex flex-col lg:flex-row justify-between gap-5 lg:gap-0">
      <div className="text-white w-full lg:w-[245.25px] h-auto">
        <div className="mt-5"><Link href="/allproduct">Find A Store</Link></div>
        <div className="mt-3"><Link href="/joinus">Become A Member</Link></div>
        <div className="mt-3"><Link href="/login">Sign Up for Email</Link></div>
        <div className="mt-3"><Link href="">Send Us Feedback</Link></div>
        <div className="mt-3"><Link href="">Student Discounts</Link></div>
      </div>
      <div className="w-full lg:w-[300.25px] h-auto">
        <div className="text-white mt-3">Get Help</div>
        <div className="text-gray-500 mt-3">Order Status</div>
        <div className="text-gray-500 mt-3">Delivery</div>
        <div className="text-gray-500 mt-3">Returns</div>
        <div className="text-gray-500 mt-3">Payment Options</div>
        <div className="text-gray-500 mt-3">Contact Us On Nike.com Inquiries</div>
        <div className="text-gray-500 mt-3">Contact Us On All Other Inquiries</div>
      </div>
      <div className="w-full lg:w-[245.25px] h-auto">
        <div className="text-white mt-3">About Nike</div>
        <div className="text-gray-500 mt-3">News</div>
        <div className="text-gray-500 mt-3">Careers</div>
        <div className="text-gray-500 mt-3">Investors</div>
        <div className="text-gray-500 mt-3">Sustainability</div>
      </div>
    </div>

    {/** Icons */}
    <div className="flex justify-center lg:justify-between gap-5 mt-5 lg:mt-0">
      <AiFillTwitterCircle className="w-[30px] h-[30px]" color="gray" />
      <MdFacebook className="w-[30px] h-[30px]" color="gray" />
      <TiSocialYoutubeCircular className="w-[30px] h-[30px]" color="gray" />
      <FaInstagram className="w-[30px] h-[30px]" color="gray" />
    </div>
  </div>

  {/** Bottom div*/}
  <div className="flex flex-col lg:flex-row justify-between mt-4 px-5 lg:px-10 pb-4">
    <div className="flex justify-between w-full lg:w-auto mb-4 lg:mb-0">
      <div className="text-white flex items-center">
        <IoLocation className="w-[18px] h-[20px] mr-2" color="white" />
        India
      </div>
      <div className="text-gray-500 text-[12px] ml-3">
        © 2023 Nike, Inc. All Rights Reserved
      </div>
    </div>
    <div className="flex justify-center lg:justify-between gap-4 text-gray-500 text-[11px]">
      <div>Guides</div>
      <div>Terms of Sale</div>
      <div>Terms of Use</div>
      <div>Nike Privacy Policy</div>
    </div>
  </div>
</div>

  );
};

export default Footer;
