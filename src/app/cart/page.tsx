'use client';

import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { remove } from '../redux/cartslice';
import { RootState } from '../redux/store';
import Image from 'next/image';

interface CartItem { 
  _id: number;
  productName: string;
  price: number;
  imageUrl: string;
}

const Cartpage: React.FC = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart);

  const [showCustomerForm, setShowCustomerForm] = useState(false);
  const [showOrderDetails, setShowOrderDetails] = useState(false);
  const [orderDetails, setOrderDetails] = useState({
    name: '',
    email: '',
    address: '',
    paymentMethod: '',
  });

  const handleRemove = (_id:any) => {
    console.log("Removing product ID:", _id); 
    dispatch(remove(_id));
  };

  const handleProceedToCheckout = () => {
    setShowCustomerForm(true);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowCustomerForm(false);
    setShowOrderDetails(true);


    // Clear cart after submitting
    cartItems.forEach((item) => dispatch(remove(item._id))); // This clears all items
};

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setOrderDetails((prev) => ({ ...prev, [name]: value }));
  };

  // Timeline Steps
  const steps = [
    {
      date: 'Dec 04',
      time: '09:25',
      title: 'Shipment Handed Over',
      description:
        "Your package has been handed over to our logistics partner who'll transport it to your country.",
      active: true,
    },
    {
      date: 'Dec 03',
      time: '03:09',
      title: 'Ready To Take-off',
      description: 'Your parcel has departed the logistics facility from China.',
      active: false,
    },
    {
      date: 'Dec 03',
      time: '01:56',
      title: 'Dropped Off',
      description:
        'Your package has been dropped off by the seller and will soon arrive at our logistics facility.',
      active: false,
    },
    {
      date: 'Dec 03',
      time: '01:56',
      title: 'Package Picked',
      description:
        'Our international delivery partner has picked up your package from the seller.',
      active: false,
    },
    {
      date: 'Dec 01',
      time: '11:58',
      title: 'Processed and Ready to Ship',
      description:
        'Your package has been processed and will be with our delivery partner soon.',
      active: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <h3 className="text-3xl font-bold text-center mb-8">Your Cart</h3>
      {showOrderDetails ? (
        <div className="bg-white shadow-md rounded-lg p-6 flex flex-col items-center py-6">
          <div>
          <h4 className="text-2xl font-bold mb-4">Order Details</h4>
          <p>
            <strong>Name:</strong> {orderDetails.name}
          </p>
          <p>
            <strong>Email:</strong> {orderDetails.email}
          </p>
          <p>
            <strong>Address:</strong> {orderDetails.address}
          </p>
          <p>
            <strong>Payment Method:</strong> {orderDetails.paymentMethod}
          </p></div>
          {/* Timeline */}
          <div className="p-6 bg-gray-50 rounded-lg shadow-md max-w-md mx-auto mt-8 ">
            {steps.map((step, index) => (
              <div key={index} className="relative flex items-start mb-6 last:mb-0">
                {/* Indicator */}
                <div className="flex flex-col items-center">
                  <div
                    className={`w-4 h-4 rounded-full ${
                      step.active ? 'bg-blue-500' : 'bg-gray-300'
                    }`}
                  ></div>
                  {index !== steps.length - 1 && (
                    <div
                      className={`w-1 flex-grow ${
                        step.active ? 'bg-blue-500' : 'bg-gray-300'
                      }`}
                    ></div>
                  )}
                </div>
                {/* Content */}
                <div className="ml-4">
                  <p className="text-sm text-gray-500">
                    {step.date} <span className="ml-2">{step.time}</span>
                  </p>
                  <h3
                    className={`text-base font-semibold ${
                      step.active ? 'text-blue-600' : 'text-gray-800'
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : cartItems.length === 0 && !showCustomerForm ? (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.length > 0 && (
            <div className="space-y-6">
              {cartItems.map((product) => (
                <div
                  key={product._id}
                  className="flex items-center bg-white shadow-md rounded-lg p-4"
                >
                  <div className="flex-shrink-0">
                    {product.imageUrl ? (
                      <Image
                        src={product.imageUrl}
                        alt={product.productName || 'Product Image'}
                        height={150}
                        width={150}
                        className="rounded-md"
                      />
                    ) : (
                      <div className="w-36 h-36 bg-gray-200 flex items-center justify-center text-gray-500 rounded-md">
                        No Image
                      </div>
                    )}
                  </div>
                  <div className="ml-4 flex-grow">
                    <h5 className="text-lg font-semibold text-gray-800">
                      {product.productName || 'Unnamed Product'}
                    </h5>
                    <h5 className="text-lg font-medium text-gray-600 mt-2">
                      ${product.price || '0.00'}
                    </h5>
                  </div>
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
                    onClick={() => handleRemove(product._id)}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          )}
          <div className="mt-8 flex justify-center">
            <button
              className="bg-green-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-green-600 transition-colors"
              onClick={handleProceedToCheckout}
            >
              Proceed to Checkout
            </button>
          </div>

          {/* Customer Data Form */}
          {showCustomerForm && (
            <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h3 className="text-2xl font-bold mb-4">Enter Your Details</h3>
                <form onSubmit={handleFormSubmit}>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={orderDetails.name}
                      onChange={handleInputChange}
                      className="w-full border rounded-lg px-3 py-2 text-gray-700"
                      placeholder="Your Name"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={orderDetails.email}
                      onChange={handleInputChange}
                      className="w-full border rounded-lg px-3 py-2 text-gray-700"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Address
                    </label>
                    <textarea
                      name="address"
                      value={orderDetails.address}
                      onChange={handleInputChange}
                      className="w-full border rounded-lg px-3 py-2 text-gray-700"
                      placeholder="Your Address"
                      required
                    ></textarea>
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      Payment Method
                    </label>
                    <select
                      name="paymentMethod"
                      value={orderDetails.paymentMethod}
                      onChange={handleInputChange}
                      className="w-full border rounded-lg px-3 py-2 text-gray-700"
                      required
                    >
                      <option value="" disabled>
                        Select Payment Method
                      </option>
                      <option value="Credit Card">Credit Card</option>
                      <option value="PayPal">PayPal</option>
                      <option value="Cash on Delivery">Cash on Delivery</option>
                    </select>
                  </div>
                  <div className="flex justify-end space-x-4">
                    <button
                      type="button"
                      className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400 transition-colors"
                      onClick={() => setShowCustomerForm(false)}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Cartpage;
