
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import WaitlistModal from '../modals/WaitlistModal';
import { ArrowRight, TrendingUp, Users, DollarSign } from "lucide-react";

const HeroSection = () => {
  const [showWaitlistModal, setShowWaitlistModal] = useState(false);
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with reduced intensity */}
      <div className="absolute inset-0 bg-gradient-to-br from-nipay-green via-nipay-dark-green to-emerald-900"></div>
      
      {/* Simplified background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-40 h-40 bg-white/3 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-yellow-400/5 rounded-full blur-3xl"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <div className="mb-4 lg:mb-6">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 leading-tight text-white">
              Cash tight? <span className="relative">
                <span className="bg-gradient-to-r from-yellow-300 to-yellow-400 bg-clip-text text-transparent">
                  NiPay
                </span>
              </span> helps you borrow small amounts — 
              <span className="text-yellow-300">automatically</span> — from your mobile money sales.
            </h1>
          </div>
          
          {/* Subheadline */}
          <p className="text-base lg:text-lg mb-6 lg:mb-8 max-w-2xl mx-auto leading-relaxed text-white/90">
            No paperwork. No stress. No collateral.
          </p>

          {/* Pain Point */}
          <div className="bg-white/10 backdrop-blur-md rounded-lg px-4 py-3 mb-6 lg:mb-8 border border-white/20 max-w-2xl mx-auto">
            <p className="text-sm lg:text-base italic text-white/95 leading-relaxed">
              "You run your business with mobile money — but no one will lend you even 20K when you need it most."
            </p>
          </div>
          
          {/* Join Waitlist Button */}
          <div className="flex justify-center mb-8 lg:mb-10">
            <Button 
              onClick={() => setShowWaitlistModal(true)}
              className="bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-bold text-sm lg:text-base py-2.5 lg:py-3 px-6 lg:px-8 shadow-lg hover:shadow-xl transition-all duration-300 rounded-lg"
            >
              Join the Waitlist
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          {/* Early Traction */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-3 border border-white/20 max-w-sm mx-auto">
            <div className="flex items-center justify-center space-x-6">
              <div className="text-center">
                <div className="text-base lg:text-lg font-bold text-yellow-300">400+</div>
                <div className="text-xs text-white/80">SMEs</div>
              </div>
              <div className="text-center">
                <div className="text-base lg:text-lg font-bold text-yellow-300">258M</div>
                <div className="text-xs text-white/80">RWF</div>
              </div>
              <div className="text-center">
                <div className="text-base lg:text-lg font-bold text-yellow-300">100%</div>
                <div className="text-xs text-white/80">Rwanda</div>
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
