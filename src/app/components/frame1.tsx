import React from "react";
import Image from "next/image";

const Frame1 = () => {
  return (
    <div>
      <div className="mt-3">
        <div className="overflow-hidden">
          <h1 className="text-[25px] w-full flex justify-center text-bold mr-3">
            Hello Nike App
          </h1>
          <p className="text-[15px] flex justify-center ">
            Download the app to access everything Nike. Get Your Great
          </p>
        </div>
        <div className="flex justify-center mt-5">
          {" "}
          <Image
            src={"/images/Image (3).png"}
            alt=""
            width={1200}
            height={600}
          />{" "}
        </div>
        <div className="text-black mt-5">
          <p className="text-[12px] sm:text-[15px] flex justify-center">
            First Look
          </p>
          <h1 className="text-[24px] sm:text-[30px] lg:text-[56px] font-bold flex justify-center m-3">
            Nike Air Max Pulse
          </h1>
          <p className="text-[12px] sm:text-[15px] flex justify-center ">
            Extreme comfort. Hyper durable. Max volume. Introducing the Air Max
            Pulse
          </p>
          <p className="text-[12px] sm:text-[15px] flex justify-center ">
            —designed to push you past your limits and help you go to the max.
          </p>

          <div className="text-white flex justify-center gap-5 mt-10">
            <button className="bg-black rounded-full hover:bg-gray-500 px-5 py-1">
              Notify Me
            </button>
            <button className="bg-black rounded-full hover:bg-gray-500 px-5 py-1">
              Shop Air Max
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame1;
