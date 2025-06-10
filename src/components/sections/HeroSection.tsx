
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import WaitlistModal from '../modals/WaitlistModal';
import { ArrowRight, TrendingUp, Users, DollarSign } from "lucide-react";
import { useIsMobile } from '@/hooks/use-mobile';

const HeroSection = () => {
  const [showWaitlistModal, setShowWaitlistModal] = useState(false);
  const isMobile = useIsMobile();
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Advanced background with multiple layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-nipay-green via-nipay-dark-green to-emerald-900"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-48 h-48 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/3 rounded-full blur-3xl"></div>
      </div>
      
      {/* Floating money icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <DollarSign className="absolute top-1/4 left-1/4 w-4 h-4 text-white/20 animate-bounce delay-300" />
        <TrendingUp className="absolute top-1/3 right-1/4 w-5 h-5 text-yellow-300/30 animate-bounce delay-700" />
        <Users className="absolute bottom-1/3 left-1/3 w-3 h-3 text-white/15 animate-bounce delay-1000" />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline - Increased Size */}
          <div className="mb-4 lg:mb-6">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold mb-3 leading-tight text-white">
              Cash tight? <span className="relative">
                <span className="bg-gradient-to-r from-yellow-300 to-yellow-400 bg-clip-text text-transparent">
                  NiPay
                </span>
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-yellow-300 to-yellow-400 rounded-full"></div>
              </span> helps you borrow small amounts — 
              <span className="relative inline-block">
                <span className="text-yellow-300">automatically</span>
                <svg className="absolute -bottom-2 left-0 w-full h-2" viewBox="0 0 200 12" fill="none">
                  <path d="M2 10C50 2 150 2 198 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="text-yellow-300/60"/>
                </svg>
              </span> — from your mobile money sales.
            </h1>
          </div>
          
          {/* Subheadline */}
          <p className="text-base lg:text-lg mb-6 lg:mb-8 max-w-3xl mx-auto leading-relaxed font-medium text-white/90">
            No paperwork. No stress. No collateral.
          </p>

          {/* Pain Point Callout - Moved below headline */}
          <div className="inline-block bg-white/15 backdrop-blur-md rounded-lg px-3 py-2 mb-6 lg:mb-8 border border-white/20 shadow-xl transform hover:scale-105 transition-all duration-300">
            <p className="text-sm lg:text-base italic text-white/95 leading-relaxed font-medium">
              "You run your business with mobile money — but no one will lend you even 20K when you need it most."
            </p>
          </div>
          
          {/* Join Waitlist Button - Smaller and animated */}
          <div className="flex justify-center mb-8 lg:mb-12">
            <Button 
              onClick={() => setShowWaitlistModal(true)}
              className="group bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-bold text-sm lg:text-base py-2.5 lg:py-3 px-4 lg:px-6 shadow-2xl hover:shadow-yellow-400/25 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 rounded-lg animate-pulse"
            >
              Join the Waitlist
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
          
          {/* Early Traction - Smaller */}
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-2 border border-white/20 shadow-xl max-w-md mx-auto hover:scale-105 transition-all duration-300">
            <div className="flex items-center justify-center space-x-4 lg:space-x-6">
              <div className="text-center">
                <div className="text-base lg:text-lg font-bold text-yellow-300">400+</div>
                <div className="text-xs text-white/80 font-medium">SMEs</div>
              </div>
              <div className="text-center">
                <div className="text-base lg:text-lg font-bold text-yellow-300">258M</div>
                <div className="text-xs text-white/80 font-medium">RWF</div>
              </div>
              <div className="text-center">
                <div className="text-base lg:text-lg font-bold text-yellow-300">100%</div>
                <div className="text-xs text-white/80 font-medium">Rwanda</div>
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
