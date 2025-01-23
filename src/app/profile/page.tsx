'use client';

import React, { useState } from 'react';
import Image from 'next/image';

const ProfilePage: React.FC = () => {
  const [user] = useState({
    name: 'Rida Fatima',
    email: 'rida@example.com',
    profilePicture: '/images/profile.jpg',
    rewardPoints: 420,
    orders: [
      {
        id: 'ORD12345',
        date: 'Dec 11, 2021',
        total: '$100',
        status: 'Delivered',
      },
      {
        id: 'ORD67890',
        date: 'Apr 10, 2023',
        total: '$89',
        status: 'In Transit',
      },
    ],
  
  });

  const [editMode, setEditMode] = useState(false);

  const handleEditProfile = () => {
    setEditMode(true);
  };

  const handleSaveProfile = () => {
    setEditMode(false);
    // Add logic to save the updated profile details
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        {/* User Info */}
        <div className="flex items-center space-x-4">
          <Image
            src={user.profilePicture}
            alt="Profile Picture"
            width={80}
            height={80}
            className="rounded-full"
          />
          {editMode ? (
            <div className="flex-grow">
              <input
                type="text"
                className="w-full border rounded-lg px-3 py-2 text-gray-700"
                defaultValue={user.name}
              />
              <input
                type="email"
                className="w-full border rounded-lg px-3 py-2 mt-2 text-gray-700"
                defaultValue={user.email}
              />
            </div>
          ) : (
            <div>
              <h2 className="text-xl font-bold text-gray-800">{user.name}</h2>
              <p className="text-sm text-gray-600">{user.email}</p>
            </div>
          )}
          {editMode ? (
            <button
              onClick={handleSaveProfile}
              className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
            >
              Save
            </button>
          ) : (
            <button
              onClick={handleEditProfile}
              className="bg-blue-500 text-white px-2  rounded-lg hover:bg-blue-600"
            >
              Edit Profile
            </button>
          )}
        </div>

        {/* Reward Points Progress */}
        <div className="mt-6">
          <h3 className="text-lg font-bold text-gray-800">Reward Points</h3>
          <div className="mt-2 w-full bg-gray-200 rounded-full h-4">
            <div
              className="bg-green-500 h-4 rounded-full"
              style={{ width: `${(user.rewardPoints / 1000) * 100}%` }}
            ></div>
          </div>
          <p className="text-sm text-gray-600 mt-1">
            {user.rewardPoints} / 1000 points
          </p>
        </div>

        {/* Order History */}
        <div className="mt-6">
          <h3 className="text-lg font-bold text-gray-800">Order History</h3>
          {user.orders.length > 0 ? (
            <div className="space-y-4 mt-4">
              {user.orders.map((order) => (
                <div
                  key={order.id}
                  className="flex justify-between items-center bg-gray-100 p-4 rounded-lg"
                >
                  <div>
                    <h4 className="text-sm font-semibold text-gray-800">
                      Order #{order.id}
                    </h4>
                    <p className="text-sm text-gray-600">{order.date}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">{order.total}</p>
                    <p
                      className={`text-sm ${
                        order.status === 'Delivered'
                          ? 'text-green-600'
                          : 'text-yellow-600'
                      }`}
                    >
                      {order.status}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-sm text-gray-600 mt-4">No orders found.</p>
          )}
        </div>

        </div>
    </div>
  );
};

export default ProfilePage;
