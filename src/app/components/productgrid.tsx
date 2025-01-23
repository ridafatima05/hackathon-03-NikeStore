"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

// Define the product type
interface Product {
  _id: string;
  productName: string;
  category: string;
  price: string; // Assuming price is stored as a string in the database
  imageUrl: string;
}

interface ProductGridProps {
  products: Product[];
}

const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  return (
    <div className="w-full px-2 sm:px-4 lg:px-8 mt-5">
      {/* Responsive grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {products.map((product) => (
          <Link key={product._id} href={`/products/${product._id}`} passHref>
            <div
              className="border rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
            >
              {/* Image */}
              <div className="relative bg-gray-200 w-full h-48 sm:h-56 md:h-64 lg:h-72">
                <Image
                  src={product.imageUrl}
                  alt={product.productName}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                />
              </div>
              {/* Details */}
              <div className="p-2 sm:p-4">
                <p className="text-xs sm:text-sm text-red-800">Just In</p>
                <h3 className="text-sm sm:text-base lg:text-lg font-medium mt-1">
                  {product.productName}
                </h3>
                <p className="text-xs sm:text-sm lg:text-base text-gray-500">
                  {product.category}
                </p>
                <p className="text-sm sm:text-base font-semibold mt-2">
                  ₹{product.price}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
