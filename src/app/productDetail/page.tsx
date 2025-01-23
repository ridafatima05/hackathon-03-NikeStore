"use client."
import React from "react";
import Image from "next/image";
import { RiShoppingCartLine } from "react-icons/ri";

const page = () => {
  return (
    <div className="w-full  mt-10">
      <div className=" flex justify-between m-12 ">
        <div className="mb-20 m-3">
          <Image
            src={"/images/Rectangle (92).png"}
            alt=""
            className="rounded shadow md:w-[150px] lg:w-[653px] "
            width={653}
            height={653}
          />
        </div>
        <div className="md:mr-0 lg:mr-[100px] sm:mt-[7px] lg:mt-[50px]  lg:p-3 ">
          <h1 className="sm:text-[30px] lg:text-[48px] text-bold ">Nike Air Force 1 <br />PLT.AF.ORM</h1>
          <p className="text-sm">
            Turn style on its head with this crafted take on the <br /> Air Jordan 1
            Mid. Its inside out-inspired <br /> construction, including unique
            layering and <br /> exposed foam accents, ups the ante on this <br />timeless
            Jordan Brand silhouette. Details like the <br /> deco stitching on the
            Swoosh add coveted <br /> appeal, while the unexpected shading, rich <br />
            mixture of materials and aged midsole aesthetic <br /> give this release an
            artisan finish.
          </p>
          <div>
          <h1 className="md:text-[30px] lg:text-[36px] mt-5">₹ 8 695.00</h1>
         <button className="bg-black rounded-full hover:bg-gray-300 w-[200px] flex justify-center h-[40px] text-white  gap-1 p-3 mt-8">
          <RiShoppingCartLine size={20}/>Add To Cart
            </button></div>
        </div>
      </div>
    </div>
  );
};

export default page;
