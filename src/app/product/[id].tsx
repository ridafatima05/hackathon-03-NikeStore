import React from "react";
import { client } from "@/app/sanity/lib/client";
import Image from "next/image";

// Fetch product data based on the ID from the URL
async function getProductById(id: string) {
  const data = await client.fetch(
    `
    *[_type == "product" && _id == _id][0] {
      _id,
      name,
      category,
      price,
      inventory,
      colors,
      status,
      "imageUrl": image.asset->url,
      description
    }
    `,
    { id }
  );
  return data;
}

export default async function ProductDetail({ params }: { params: { id: string } }) {
  const product = await getProductById(params.id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Product Image */}
      <Image
        className="w-full rounded-lg"
        src={product.imageUrl}
        alt={product.name}
      />
      <h1 className="text-3xl font-bold mt-4">{product.name}</h1>
      <p className="text-gray-700 mt-2">{product.description}</p>
      <p className="text-lg font-semibold mt-4">Price: ${product.price}</p>
      <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
        Add to Cart
      </button>
    </div>
  );
}
