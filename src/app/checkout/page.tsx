"use client";

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { removeFromWishlist } from "../redux/wishlistSlice";
import Image from "next/image";
import Link from "next/link";

const Wishlist: React.FC = () => {
  const wishlist = useSelector((state: RootState) => state.wishlist); // Access wishlist from Redux store
  const dispatch = useDispatch();

  const handleRemoveFromWishlist = (id: string) => {
    dispatch(removeFromWishlist(id)); // Remove the product from the wishlist
  };

  if (wishlist.length === 0) {
    return (
      <div className="container mx-auto p-4 text-center">
        <h1 className="text-2xl font-bold mb-4">Your Wishlist is Empty</h1>
        <p className="text-gray-600">You have not added any products to your wishlist yet.</p>
      </div>
    );
  }

  return (
    <div  className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Your Wishlist</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {wishlist.map((item) => (
          <div key={item._id}
           // Use the unique `id` as the key
            className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center"
          >
            <Link href={`/products/${item._id}`} passHref>
              <div >
                {/* Product Image */}
                {item.imageUrl ? (
                  <div className="bg-gray-100">
                  <Image
                    src={item.imageUrl}
                    alt={item.productName}
                    width={300}
                    height={300}
                    className="rounded-lg mb-4"
                  />
                  </div>
                ) : (
                  <div className="w-36 h-36 bg-gray-300 flex items-center justify-center rounded-lg mb-4">
                    <span className="text-gray-500">No Image Available</span>
                  </div>
                )}
                {/* Product Name */}
                <h2 className="text-lg font-bold text-gray-800 mb-2">{item.productName}</h2>
                {/* Product Price */}
                <p className="text-green-600 font-semibold mb-4">${item.price}</p>
              </div>
            </Link>

            {/* Remove from Wishlist Button */}
            <button
              onClick={() => handleRemoveFromWishlist(item._id)}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
