
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import WaitlistModal from '../modals/WaitlistModal';
import AnimatedCounter from '../shared/AnimatedCounter';
import { ArrowRight, TrendingUp, Users, DollarSign } from "lucide-react";

const HeroSection = () => {
  const [showWaitlistModal, setShowWaitlistModal] = useState(false);
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Enhanced background */}
      <div className="absolute inset-0 bg-gradient-to-br from-nipay-green via-nipay-dark-green to-emerald-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.1)_0%,transparent_50%)] opacity-30"></div>
      </div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-40 h-40 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-yellow-400/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-emerald-400/5 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          {/* Main Headline */}
          <div className="mb-6 lg:mb-8">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 leading-tight text-white">
              Cash tight? <span className="relative">
                <span className="bg-gradient-to-r from-yellow-300 to-yellow-400 bg-clip-text text-transparent animate-pulse">
                  NiPay
                </span>
              </span> helps you borrow small amounts — 
              <span className="text-yellow-300 font-extrabold">automatically</span> — from your mobile money sales.
            </h1>
          </div>
          
          {/* Subheadline */}
          <p className="text-lg lg:text-xl mb-8 lg:mb-10 max-w-2xl mx-auto leading-relaxed text-white/95 font-medium">
            No paperwork. No stress. No collateral.
          </p>

          {/* Pain Point */}
          <div className="bg-white/15 backdrop-blur-lg rounded-xl px-6 py-4 mb-8 lg:mb-10 border border-white/30 max-w-2xl mx-auto shadow-xl hover:bg-white/20 transition-all duration-300">
            <p className="text-base lg:text-lg italic text-white/95 leading-relaxed font-medium">
              "You run your business with mobile money — but no one will lend you even 20K when you need it most."
            </p>
          </div>
          
          {/* Enhanced Join Waitlist Button */}
          <div className="flex justify-center mb-10 lg:mb-12">
            <Button 
              onClick={() => setShowWaitlistModal(true)}
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-bold text-base lg:text-lg py-4 lg:py-5 px-8 lg:px-10 shadow-2xl hover:shadow-yellow-400/25 transition-all duration-300 rounded-xl hover:scale-105 transform group"
            >
              Join the Waitlist
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          {/* Enhanced Early Traction with animations */}
          <div className="bg-white/15 backdrop-blur-xl rounded-xl p-5 border border-white/30 max-w-lg mx-auto shadow-2xl hover:bg-white/20 transition-all duration-500">
            <div className="flex items-center justify-center space-x-8 lg:space-x-12">
              <div className="text-center group">
                <div className="text-xl lg:text-2xl font-bold text-yellow-300 mb-1 group-hover:scale-110 transition-transform">
                  <AnimatedCounter value="400+" />
                </div>
                <div className="text-xs lg:text-sm text-white/80 font-medium">SMEs</div>
              </div>
              <div className="text-center group">
                <div className="text-xl lg:text-2xl font-bold text-yellow-300 mb-1 group-hover:scale-110 transition-transform">
                  <AnimatedCounter value="258M" />
                </div>
                <div className="text-xs lg:text-sm text-white/80 font-medium">RWF</div>
              </div>
              <div className="text-center group">
                <div className="text-xl lg:text-2xl font-bold text-yellow-300 mb-1 group-hover:scale-110 transition-transform">
                  <AnimatedCounter value="100%" />
                </div>
                <div className="text-xs lg:text-sm text-white/80 font-medium">Rwanda</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <WaitlistModal isOpen={showWaitlistModal} onClose={() => setShowWaitlistModal(false)} />
    </section>
  );
};

export default HeroSection;
