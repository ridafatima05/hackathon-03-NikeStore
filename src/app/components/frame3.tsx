import React from "react";
import Image from "next/image";

const Frame3 = () => {
  return (
    <div>
      <div className="mt-10">
        <div className="overflow-hidden">
          <h1 className="text-[25px] w-full flex justify-start text-bold ml-7 text-bold">
            Featured
          </h1>
        </div>
        <div className="flex justify-center mt-5">
          {" "}
          <Image
            src={"/images/Image (7).png"}
            alt=""
            width={1300}
            height={600}
          />{" "}
        </div>
        <div className="text-black mt-5">
          <h1 className="text-[24px] sm:text-[30px] lg:text-[56px] font-bold flex justify-center m-3">
            STEP INTO WHAT FEELS GOOD
          </h1>
          <p className="text-[12px] sm:text-[15px] flex justify-center ">
            Cause everyone should know the feeling of running in that perfect
            pair.
          </p>
          <div className="flex justify-center">
        <button className="bg-black rounded-full hover:bg-gray-500  py-1 m-5 sm:mx-auto md: lg:m-5 sm:ml-[180px]  text-white px-4 flex just-center">
          Find Your Shoe
            </button></div>
        </div>
      </div>
    </div>
  );
};

export default Frame3;
