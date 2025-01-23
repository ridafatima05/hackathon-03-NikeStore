"use client";

import React, { useEffect, useState } from "react";
import { client } from "@/app/sanity/lib/client"
import ProductGrid from "../components/productgrid";
import Sidebar from "../components/sidebar";

// Define the product type
interface Product {
  _id: string;
  productName: string;
  category: string;
  price: string; // Price is stored as a string in the database
  inventory: number;
  colors: string[];
  status: string;
  imageUrl: string;
  description: string;
  gender?: string; // Optional field for gender
}

// Define the filter type
interface Filters {
  gender: string[]; // Array of gender filters
  price: string; // Price range filter
  colors: string[]; // Array of color filters
  category: string; // Category filter
}

const ProductsPage = () => {
  // State for all products
  const [products, setProducts] = useState<Product[]>([]);

  // State for filtered products
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  // State for filters
  const [filters, setFilters] = useState<Filters>({
    gender: [], // Filter by gender
    price: "", // Filter by price range
    colors: [], // Filter by colors
    category: "", // Filter by category
  });

  // Fetch products from the Sanity database
  useEffect(() => {
    async function fetchData() {
      try {
        const fetchedData: Product[] = await client.fetch(
          `*[_type == "product"] {
            _id,
            productName,
            category,
            price,
            inventory,
            colors,
            status,
            "imageUrl": image.asset->url,
            description
          }`
        );
        setProducts(fetchedData);
        setFilteredProducts(fetchedData); // Initialize filtered products
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }

    fetchData();
  }, []);

  // Apply filters whenever filters or products state changes
  useEffect(() => {
    const applyFilters = () => {
      let filtered = [...products];

      // Filter by category
      if (filters.category) {
        filtered = filtered.filter(
          (product) => product.category === filters.category
        );
      }

      // Filter by gender
      if (filters.gender.length > 0) {
        filtered = filtered.filter((product) =>
          product.gender ? filters.gender.includes(product.gender) : false
        );
      }

      // Filter by price
      if (filters.price) {
        filtered = filtered.filter((product) => {
          const price = parseInt(product.price || "0"); // Ensure price is a number
          if (filters.price === "Under ₹2,500") return price < 2500;
          if (filters.price === "₹2,501 - ₹5,000")
            return price >= 2501 && price <= 5000;
          return true; // Default case
        });
      }

      // Filter by colors
      if (filters.colors.length > 0) {
        filtered = filtered.filter((product) =>
          product.colors.some((color) => filters.colors.includes(color))
        );
      }

      setFilteredProducts(filtered);
    };

    applyFilters();
  }, [filters, products]);

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar filters={filters} setFilters={setFilters} />

      {/* Product Grid */}
      <div className="flex-1">
        <ProductGrid products={filteredProducts} />
      </div>
    </div>
  );
};

export default ProductsPage;
