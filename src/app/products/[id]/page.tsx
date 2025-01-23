"use client";

import React, { useEffect, useState } from "react";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { use } from "react";
import { useDispatch } from "react-redux";
import { add } from "../../redux/cartslice";
import { addToWishlist } from "../../redux/wishlistSlice";
import { FaHeart } from "react-icons/fa";

interface Product {
  _id: string;
  productName: string;
  imageUrl: string;
  description: string;
  colors: string[];
  price: string;
  category: string;
  inventory?: string;
  size?: string[];
  rating?: number;
  discount?: number;
  status?: string;
}

interface ProductDetailsProps {
  params: Promise<{ id: string }>;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ params: paramsPromise }) => {
  const params = use(paramsPromise); // Use React.use() to unwrap the Promise
  const [product, setProduct] = useState<Product | null>(null);
  const [notification, setNotification] = useState<string | null>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (params.id) {
      const fetchProduct = async () => {
        try {
          const productData = await client.fetch(
            `*[_type == "product" && _id == $id][0]{
              _id,
              productName,
              "imageUrl": image.asset->url,
              description,
              colors,
              price,
              category,
              inventory,
              size,
              rating,
              discount,
              status
            }`,
            { id: params.id }
          );
          setProduct(productData);
        } catch (error) {
          console.error("Error fetching product:", error);
        }
      };

      fetchProduct();
    }
  }, [params.id]);

  const handleAddToCart = (val: Product) => {
    dispatch(add(val));
    setNotification(`${val.productName} has been added to your cart!`);
    setTimeout(() => setNotification(null), 3000);
  };

  const handleAddToWishlist = (val: Product) => {
    dispatch(addToWishlist(val));
    setNotification(`${val.productName} has been added to your wishlist!`);
    setTimeout(() => setNotification(null), 3000);
  };

  if (!product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="flex space-x-2">
          <div className="w-4 h-4 bg-gray-500 rounded-full animate-bounce"></div>
          <div className="w-4 h-4 bg-gray-500 rounded-full animate-bounce delay-200"></div>
          <div className="w-4 h-4 bg-gray-500 rounded-full animate-bounce delay-400"></div>
        </div>
        <p className="mt-4 font-bold text-gray-500">Loading...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4">
      {notification && (
        <div className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-green-500 text-white py-2 px-4 rounded-md shadow-md z-50">
          {notification}
        </div>
      )}

      <div className="min-h-[300px] bg-gray-100 px-4 py-10">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 w-full mb-6 md:mb-0 px-10">
            {product.imageUrl ? (
              <Image
                src={product.imageUrl}
                alt={product.productName}
                width={500}
                height={500}
                className="object-cover rounded-lg"
              />
            ) : (
              <div className="w-96 h-96 bg-gray-300 flex items-center justify-center rounded-lg">
                <span className="text-gray-500">No Image Available</span>
              </div>
            )}
          </div>

          <div className="md:w-1/2 w-full md:pl-10 px-6 py-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.productName}</h1>
            <p className="text-red-900 mb-4">{product.status || "N/A"}</p>
            <p className="text-green-600 text-2xl font-semibold mb-4">₹{product.price}</p>
            <p className="text-gray-600 mb-4">{product.description}</p>
            {product.discount && (
              <p className="text-red-500 font-semibold mb-4">Discount: {product.discount}%</p>
            )}
            <p className="text-gray-800 mb-4">
              <strong>Category:</strong> {product.category || "N/A"}
            </p>
            <p className="text-gray-800 mb-4">
              <strong>Inventory:</strong> {product.inventory || "Out of stock"}
            </p>
            <p className="text-gray-800 mb-4">
              <strong>Available Sizes:</strong> {product.size?.join(", ") || "N/A"}
            </p>

            <div className="flex mb-4">
              <span className="mr-3">Colour:</span>
              {product.colors.length > 0 ? (
                product.colors.map((color, index) => (
                  <button
                    key={index}
                    style={{ backgroundColor: color }}
                    className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"
                  ></button>
                ))
              ) : (
                <span className="text-gray-500">No colors available</span>
              )}
            </div>

            <div className="flex">
              <button className="flex text-white bg-green-500 py-2 px-6 rounded-md hover:bg-green-600">
                Buy Now
              </button>
              <button
                className="flex text-white bg-indigo-500 py-2 px-6 rounded-md ml-4 hover:bg-indigo-600"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
              <button
                className="flex text-white bg-gray-500 p-3 rounded-full ml-4 hover:bg-gray-600"
                onClick={() => handleAddToWishlist(product)}
              >
                <FaHeart />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
