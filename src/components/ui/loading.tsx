
import React, { useEffect, useState } from 'react';

const NiPayLoading = () => {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  
  const steps = [
    "Connecting to mobile money...",
    "Analyzing your transactions...",
    "Calculating your limit...",
    "Setting up your account..."
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) return 100;
        const newProgress = prev + Math.random() * 15;
        
        // Update step based on progress
        if (newProgress > 25 && currentStep === 0) setCurrentStep(1);
        if (newProgress > 50 && currentStep === 1) setCurrentStep(2);
        if (newProgress > 75 && currentStep === 2) setCurrentStep(3);
        
        return Math.min(newProgress, 100);
      });
    }, 200);

    return () => clearInterval(timer);
  }, [currentStep]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-nipay-green via-nipay-dark-green to-emerald-900 z-50 flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/3 rounded-full blur-3xl"></div>
      </div>

      <div className="text-center relative z-10 max-w-md mx-auto px-6">
        {/* NiPay Logo with Advanced Animation */}
        <div className="relative mb-12">
          <div className="relative">
            {/* Rotating ring */}
            <div className="absolute inset-0 w-32 h-32 mx-auto">
              <div className="w-full h-full border-4 border-white/20 rounded-full"></div>
              <div className="absolute inset-0 w-full h-full border-4 border-transparent border-t-yellow-400 rounded-full animate-spin"></div>
            </div>
            
            {/* Logo container */}
            <div className="relative w-32 h-32 mx-auto flex items-center justify-center">
              <div className="text-center transform hover:scale-110 transition-transform duration-300">
                <div className="inline-flex items-center">
                  <span className="text-3xl lg:text-4xl font-bold text-white">Ni</span>
                  <span className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-yellow-400 to-yellow-500 text-white px-3 py-1 rounded-lg ml-1 shadow-lg">Pay</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Floating particles */}
          <div className="absolute inset-0 pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-yellow-400/60 rounded-full animate-pulse"
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${30 + (i % 2) * 40}%`,
                  animationDelay: `${i * 200}ms`,
                  animationDuration: '2s'
                }}
              />
            ))}
          </div>
        </div>
        
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="w-full bg-white/20 rounded-full h-3 overflow-hidden backdrop-blur-sm">
            <div 
              className="h-full bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full transition-all duration-300 ease-out relative"
              style={{ width: `${progress}%` }}
            >
              <div className="absolute inset-0 bg-white/30 animate-pulse rounded-full"></div>
            </div>
          </div>
          <div className="text-right mt-2">
            <span className="text-white/80 text-sm font-medium">{Math.round(progress)}%</span>
          </div>
        </div>
        
        {/* Loading text with typewriter effect */}
        <div className="h-12 flex items-center justify-center">
          <p className="text-lg lg:text-xl text-white/90 animate-pulse font-medium">
            {steps[currentStep]}
          </p>
        </div>
        
        {/* Mobile money icons */}
        <div className="flex justify-center items-center space-x-6 mt-8 opacity-60">
          <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
            <span className="text-xs font-bold text-white">MTN</span>
          </div>
          <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
            <span className="text-xs font-bold text-white">AIR</span>
          </div>
          <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce"></div>
          <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce delay-150"></div>
          <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce delay-300"></div>
        </div>
      </div>
    </div>
  );
};

export default NiPayLoading;
