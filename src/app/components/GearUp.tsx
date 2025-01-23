"use client";
import Image from "next/image";
import { useState } from "react";


type Product = {
  id: string; 
  name: string;
  category: string;
  price: string;
  image: string;
};


interface GearUpSectionProps {
  menProducts: Product[];
  womenProducts: Product[];
}


const GearUpSection: React.FC<GearUpSectionProps> = ({ menProducts, womenProducts }) => {
  const [menIndex, setMenIndex] = useState(0);
  const [womenIndex, setWomenIndex] = useState(0);

  const goToNextMen = () => {
    setMenIndex((prevIndex) =>
      prevIndex >= Math.ceil(menProducts.length / 2) - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPreviousMen = () => {
    setMenIndex((prevIndex) =>
      prevIndex === 0 ? Math.ceil(menProducts.length / 2) - 1 : prevIndex - 1
    );
  };

  const goToNextWomen = () => {
    setWomenIndex((prevIndex) =>
      prevIndex >= Math.ceil(womenProducts.length / 2) - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPreviousWomen = () => {
    setWomenIndex((prevIndex) =>
      prevIndex === 0 ? Math.ceil(womenProducts.length / 2) - 1 : prevIndex - 1
    );
  };

  return (
    <section className="p-4">
      <h2 className="text-2xl font-bold mb-4">Gear Up</h2>
      <div className="grid grid-cols-2 gap-6">
        {/* Men's Section */}
        <div className="relative">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-lg font-semibold">Shop Mens</h3>
            <div className="flex space-x-2">
              <button
                onClick={goToPreviousMen}
                className="bg-gray-200 hover:bg-gray-300 p-2 rounded-full"
              >
                &lt;
              </button>
              <button
                onClick={goToNextMen}
                className="bg-gray-200 hover:bg-gray-300 p-2 rounded-full"
              >
                &gt;
              </button>
            </div>
          </div>
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500"
              style={{
                transform: `translateX(-${menIndex * 100}%)`,
              }}
            >
              {menProducts.map((product) => (
                <div
                  key={product.id}
                  className="w-1/2 flex-shrink-0 p-2 flex flex-col items-center"
                >
                  <div className="w-full h-48 bg-gray-100 flex items-center justify-center">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={180}
                      height={120}
                      className="object-contain"
                    />
                  </div>
                  <div className="text-center mt-2">
                    <h4 className="font-medium">{product.name}</h4>
                    <p className="text-gray-500">{product.category}</p>
                    <p className="font-bold mt-1">₹ {product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        
        <div className="relative">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-lg font-semibold">Shop Womens</h3>
            <div className="flex space-x-2">
              <button
                onClick={goToPreviousWomen}
                className="bg-gray-200 hover:bg-gray-300 p-2 rounded-full"
              >
                &lt;
              </button>
              <button
                onClick={goToNextWomen}
                className="bg-gray-200 hover:bg-gray-300 p-2 rounded-full"
              >
                &gt;
              </button>
            </div>
          </div>
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500"
              style={{
                transform: `translateX(-${womenIndex * 100}%)`,
              }}
            >
              {womenProducts.map((product) => (
                <div
                  key={product.id}
                  className="w-1/2 flex-shrink-0 p-2 flex flex-col items-center"
                >
                  <div className="w-full h-48 bg-gray-100 flex items-center justify-center">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={180}
                      height={120}
                      className="object-contain"
                    />
                  </div>
                  <div className="text-center mt-2">
                    <h4 className="font-medium">{product.name}</h4>
                    <p className="text-gray-500">{product.category}</p>
                    <p className="font-bold mt-1">₹ {product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GearUpSection;
