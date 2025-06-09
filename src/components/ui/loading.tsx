
import React from 'react';

const NiPayLoading = () => {
  return (
    <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
      <div className="text-center">
        {/* NiPay Logo Animation */}
        <div className="relative mb-8">
          <div className="animate-pulse">
            <div className="inline-flex items-center">
              <span className="text-4xl lg:text-5xl font-bold text-nipay-green">Ni</span>
              <span className="text-4xl lg:text-5xl font-bold bg-nipay-green text-white px-3 py-1 rounded-lg ml-1">Pay</span>
            </div>
          </div>
          
          {/* Animated dots */}
          <div className="flex justify-center mt-4 space-x-1">
            <div className="w-2 h-2 bg-nipay-green rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-nipay-green rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-2 h-2 bg-nipay-green rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
        </div>
        
        {/* Loading text */}
        <p className="text-lg text-gray-600 animate-fade-in">
          Loading your business tools...
        </p>
      </div>
    </div>
  );
};

export default NiPayLoading;
