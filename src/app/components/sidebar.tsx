"use client";

import React from "react";

// Define the filter state type
interface Filters {
  gender: string[];
  price: string;
  colors: string[];
  category: string;
}

interface SidebarProps {
  filters: Filters;
  setFilters: React.Dispatch<React.SetStateAction<Filters>>;
}

const Sidebar: React.FC<SidebarProps> = ({ filters, setFilters }) => {
  // Reset all filters
  const handleResetFilters = () => {
    setFilters({
      gender: [],
      price: "",
      colors: [],
      category: "",
    });
  };

  // Handle checkbox change for multi-select filters (e.g., colors, gender)
  const handleCheckboxChange = (category: keyof Filters, value: string) => {
    setFilters((prev) => {
      // Ensure category is an array before using .filter
      const currentValues = Array.isArray(prev[category]) ? prev[category] : [];
      const updatedCategory = currentValues.includes(value)
        ? currentValues.filter((item: string) => item !== value) // Explicitly type item
        : [...currentValues, value];

      return { ...prev, [category]: updatedCategory };
    });
  };

  // Handle radio button change for single-select filters (e.g., price, category)
  const handleRadioChange = (category: keyof Filters, value: string) => {
    setFilters((prev) => ({ ...prev, [category]: value }));
  };

  return (
    <div className="sm:w-[150px] lg:w-[250px] bg-white shadow-md border-r p-4 h-screen overflow-y-auto">
      {/* Sidebar Header */}
      <div className="mb-4 flex justify-between items-center">
        <h2 className="text-xl font-semibold">Filters</h2>
        <button
          onClick={handleResetFilters}
          className="text-sm text-blue-500 hover:underline"
        >
          Reset All
        </button>
      </div>

      {/* Category Section */}
      <div className="mb-6">
        <h3 className="text-md font-medium mb-3">Category</h3>
        <div className="space-y-2">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="category"
              checked={filters.category === "Men's Shoes"}
              onChange={() => handleRadioChange("category", "Men's Shoes")}
            />
            Mens Shoes
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="category"
              checked={filters.category === "Women's Shoes"}
              onChange={() => handleRadioChange("category", "Women's Shoes")}
            />
            Womens Shoes
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="category"
              checked={filters.category === "Men's Running Shoes"}
              onChange={() =>
                handleRadioChange("category", "Men's Running Shoes")
              }
            />
            Mens Running Shoes
          </label>
        </div>
      </div>

      {/* Price Section */}
      <div className="mb-6">
        <h3 className="text-md font-medium mb-3">Shop by Price</h3>
        <div className="space-y-2">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="price"
              checked={filters.price === "Under ₹2,500"}
              onChange={() => handleRadioChange("price", "Under ₹2,500")}
            />
            Under ₹2,500
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="price"
              checked={filters.price === "₹2,501 - ₹5,000"}
              onChange={() => handleRadioChange("price", "₹2,501 - ₹5,000")}
            />
            ₹2,501 - ₹5,000
          </label>
        </div>
      </div>

      {/* Colors Section */}
      <div className="mb-6">
        <h3 className="text-md font-medium mb-3">Colors</h3>
        <div className="space-y-2">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={filters.colors.includes("Black")}
              onChange={() => handleCheckboxChange("colors", "Black")}
            />
            Black
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={filters.colors.includes("Blue")}
              onChange={() => handleCheckboxChange("colors", "Blue")}
            />
            Blue
          </label>
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={filters.colors.includes("White")}
              onChange={() => handleCheckboxChange("colors", "White")}
            />
            White
          </label>
        </div>
      </div>

      {/* Clear All Button */}
      <div className="mt-8">
        <button
          onClick={handleResetFilters}
          className="w-full bg-blue-500 text-white py-2 rounded-md text-sm font-medium hover:bg-blue-600"
        >
          Clear All Filters
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
