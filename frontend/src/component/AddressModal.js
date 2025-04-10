import React, { useState } from 'react';

const AddressModal = ({ isOpen, onClose, onSubmit }) => {
  const [address, setAddress] = useState({
    street: '',
    city: '',
    state: '',
    pincode: '',
    phone: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(address);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Delivery Address</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Street Address
            </label>
            <input
              type="text"
              name="street"
              value={address.street}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-red-500"
              placeholder="Enter your street address"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              City
            </label>
            <input
              type="text"
              name="city"
              value={address.city}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-red-500"
              placeholder="Enter your city"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              State
            </label>
            <input
              type="text"
              name="state"
              value={address.state}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-red-500"
              placeholder="Enter your state"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              PIN Code
            </label>
            <input
              type="text"
              name="pincode"
              value={address.pincode}
              onChange={handleChange}
              required
              pattern="[0-9]{6}"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-red-500"
              placeholder="Enter 6-digit PIN code"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              value={address.phone}
              onChange={handleChange}
              required
              pattern="[0-9]{10}"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-red-500"
              placeholder="Enter 10-digit phone number"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 transition duration-300"
          >
            Proceed to Payment
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddressModal; 