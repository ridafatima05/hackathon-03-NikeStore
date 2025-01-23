"use client";

import Link from "next/link";
import React, { useState } from "react";
import { SiNike } from "react-icons/si";

// Define form data type
interface FormData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  country: string;
  gender: string;
  agreeToEmails: boolean;
}

const Register: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    country: "India",
    gender: "",
    agreeToEmails: false,
  });

  const [showNotification, setShowNotification] = useState(false);

  // Handle form field changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    if (
      e.target instanceof HTMLInputElement &&
      e.target.type === "checkbox"
    ) {
      // Explicitly cast `e.target` to `HTMLInputElement`
      const input = e.target as HTMLInputElement;
      setFormData((prev) => ({
        ...prev,
        [name]: input.checked,
      }));
    } else {
      // Explicitly cast `e.target` to `HTMLSelectElement` for other cases
     
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Save data to localStorage (simulating backend save)
    localStorage.setItem("nikeMemberData", JSON.stringify(formData));

    // Show notification
    setShowNotification(true);

    // Clear form data
    setFormData({
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      dateOfBirth: "",
      country: "India",
      gender: "",
      agreeToEmails: false,
    });

    // Hide notification after 3 seconds
    setTimeout(() => setShowNotification(false), 3000);
  };

  return (
    <div className="flex justify-center items-center h-[1000px] bg-white">
      <div className="w-full max-w-md p-6 bg-white rounded-md">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <SiNike size={60} />
        </div>

        {/* Header */}
        <h2 className="text-2xl font-semibold text-center mb-4">
          BECOME A NIKE MEMBER
        </h2>
        <p className="text-center text-gray-600 mb-8 text-sm">
          Create your Nike Member profile and get first access to the very best
          of Nike products, inspiration, and community.
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email address"
            className="w-full p-3 border border-gray-300 rounded-md mb-4"
            required
            value={formData.email}
            onChange={handleChange}
            aria-label="Email address"
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full p-3 border border-gray-300 rounded-md mb-4"
            required
            value={formData.password}
            onChange={handleChange}
            aria-label="Password"
          />

          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            className="w-full p-3 border border-gray-300 rounded-md mb-4"
            required
            value={formData.firstName}
            onChange={handleChange}
            aria-label="First Name"
          />

          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            className="w-full p-3 border border-gray-300 rounded-md mb-4"
            required
            value={formData.lastName}
            onChange={handleChange}
            aria-label="Last Name"
          />

          <input
            type="date"
            name="dateOfBirth"
            className="w-full p-3 border border-gray-300 rounded-md mb-4"
            required
            value={formData.dateOfBirth}
            onChange={handleChange}
            aria-label="Date of Birth"
          />
          <p className="text-xs text-gray-500 mb-4">
            Get a Nike Member Reward every year on your Birthday.
          </p>

          <select
            name="country"
            className="w-full p-3 border border-gray-300 rounded-md mb-4"
            value={formData.country}
            onChange={handleChange}
            aria-label="Country"
          >
            <option value="India">India</option>
            <option value="United States">United States</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="Australia">Australia</option>
          </select>

          <div className="flex justify-between mb-4">
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="gender"
                value="Male"
                checked={formData.gender === "Male"}
                onChange={handleChange}
              />
              Male
            </label>
            <label className="flex items-center gap-2">
              <input
                type="radio"
                name="gender"
                value="Female"
                checked={formData.gender === "Female"}
                onChange={handleChange}
              />
              Female
            </label>
          </div>

          <div className="flex items-center gap-2 mb-6">
            <input
              type="checkbox"
              name="agreeToEmails"
              checked={formData.agreeToEmails}
              onChange={handleChange}
            />
            <p className="text-xs text-gray-600">
              Sign up for emails to get updates from Nike on products, offers,
              and your Member benefits.
            </p>
          </div>

          <p className="text-xs text-gray-500 mb-6">
            By creating an account, you agree to Nike&rsquo;s{" "}
            <a href="#" className="underline">
              Privacy Policy
            </a>{" "}
            and{" "}
            <a href="#" className="underline">
              Terms of Use
            </a>
            .
          </p>

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-md font-semibold hover:bg-gray-800 transition"
          >
            JOIN US
          </button>
        </form>

        {/* Notification */}
        {showNotification && (
          <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-md text-center">
            Congratulations! You are now a Nike Member.
          </div>
        )}

        {/* Footer */}
        <div className="text-center text-sm text-gray-600 mt-4">
          Already a Member?{" "}
          <Link href="/login" className="underline">
            Sign In.
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
