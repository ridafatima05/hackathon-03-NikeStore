import React from "react";

const Frame6 = () => {
  return (
    <div className="p-6 mt-10">
      <h1 className="text-[25px]  flex justify-start text-bold ml-7 text-bold">
        The Essentials
      </h1>
      <div className="flex flex-wrap justify-between px-4 lg:px-8 gap-4">
        <div
          className="bg-cover w-full sm:w-[200px] md:w-[300px] lg:w-[380px] h-[240px] md:h-[300px] lg:h-[540px]"
          style={{
            backgroundImage: "url('/images/Image (13).png')",
          }}
        >
          <button className="bg-white rounded-full hover:bg-gray-500 px-5 py-1 mt-[180px] md:mt-[260px] lg:mt-[480px] ml-4">
            Mens
          </button>
        </div>
        <div
          className="bg-cover w-full sm:w-[200px] md:w-[300px] lg:w-[380px] h-[240px] md:h-[300px] lg:h-[540px]"
          style={{
            backgroundImage: "url('/images/Image (14).png')",
          }}
        >
          <button className="bg-white rounded-full hover:bg-gray-500 px-5 py-1 mt-[180px] md:mt-[260px] lg:mt-[480px] ml-4">
            Womens
          </button>
        </div>
        <div
          className="bg-cover w-full sm:w-[180px0px] md:w-[300px] lg:w-[380px] h-[240px] md:h-[300px] lg:h-[540px]"
          style={{
            backgroundImage: "url('/images/Image (15).png')",
          }}
        >
          <button className="bg-white rounded-full hover:bg-gray-500 px-5 py-1 mt-[180px] md:mt-[260px] lg:mt-[480px] ml-4">
            Kids
          </button>
        </div>
      </div>
      <div className="flex justify-center gap-7 mt-16 p-4 text-center">
        <div>
          <h3 className="text-black text-[11px] mb-4 text-semibold ">Icons</h3>
          <p className="text-gray-500">Air Force 1</p>
          <p className="text-gray-500">Huarache</p>
          <p className="text-gray-500">Air Max 90</p>
          <p className="text-gray-500">Air Max 95</p>
        </div>
        <div>
          <h3 className="text-black text-[11px] mb-4 text-semibold">Shoes</h3>
          <p className="text-gray-500">All Shoes</p>
          <p className="text-gray-500">Custom Shoes</p>
          <p className="text-gray-500">Jordan Shoes</p>
          <p className="text-gray-500">Running Shoes</p>
        </div>
        <div>
          <h3 className="text-black text-[11px] mb-4 text-semibold">Clothing</h3>
          <p className="text-gray-500">All Clothing</p>
          <p className="text-gray-500">Modest Wear</p>
          <p className="text-gray-500">Hoodies & Pullovers</p>
          <p className="text-gray-500">Shirts & Tops</p>
        </div>
        <div>
          <h3 className="text-black text-[11px] mb-4 text-semibold">Kids</h3>
          <p className="text-gray-500">Infant & Toddler Shoes</p>
          <p className="text-gray-500">Kids Shoes</p>
          <p className="text-gray-500">Kids Jordan Shoes</p>
          <p className="text-gray-500">Kids Basketball Shoes</p>
        </div>
      </div>
    </div>
  );
};

export default Frame6;
