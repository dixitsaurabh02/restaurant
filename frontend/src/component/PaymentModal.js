import React from 'react';

const PaymentModal = ({ isOpen, onClose, amount, deliveryAddress }) => {
  if (!isOpen) return null;

  // Using the QR code from public folder
  const qrCodeImage = "/qr.jpeg";

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl max-w-md w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Scan QR to Pay</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>
        
        <div className="text-center mb-4">
          <p className="text-gray-600 mb-2">Amount to Pay:</p>
          <p className="text-2xl font-bold text-green-600">₹{amount}</p>
        </div>

        {/* Delivery Address Section */}
        <div className="mb-4 p-3 bg-gray-50 rounded-lg">
          <h3 className="font-semibold text-gray-700 mb-2">Delivery Address:</h3>
          <div className="text-sm text-gray-600">
            <p>{deliveryAddress?.street}</p>
            <p>{deliveryAddress?.city}, {deliveryAddress?.state}</p>
            <p>PIN: {deliveryAddress?.pincode}</p>
            <p>Phone: {deliveryAddress?.phone}</p>
          </div>
        </div>

        <div className="flex justify-center mb-4">
          <img 
            src={qrCodeImage} 
            alt="Payment QR Code" 
            className="w-64 h-64 object-contain"
          />
        </div>

        <div className="text-center text-sm text-gray-500">
          <p>1. Open your UPI payment app</p>
          <p>2. Scan this QR code</p>
          <p>3. Complete the payment</p>
          <p className="mt-2 text-xs text-gray-400">Your order will be delivered to the address provided</p>
        </div>
      </div>
    </div>
  );
};

export default PaymentModal; 