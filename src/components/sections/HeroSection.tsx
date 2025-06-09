
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import WaitlistModal from '../modals/WaitlistModal';
import { ArrowRight, MessageCircle, TrendingUp, Users, DollarSign } from "lucide-react";
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
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/3 rounded-full blur-3xl"></div>
      </div>
      
      {/* Floating money icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <DollarSign className="absolute top-1/4 left-1/4 w-6 h-6 text-white/20 animate-bounce delay-300" />
        <TrendingUp className="absolute top-1/3 right-1/4 w-8 h-8 text-yellow-300/30 animate-bounce delay-700" />
        <Users className="absolute bottom-1/3 left-1/3 w-5 h-5 text-white/15 animate-bounce delay-1000" />
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Pain Point Callout - Redesigned */}
          <div className="inline-block bg-white/15 backdrop-blur-md rounded-2xl px-8 py-6 mb-12 border border-white/20 shadow-2xl transform hover:scale-105 transition-all duration-300">
            <p className="text-lg lg:text-xl italic text-white/95 leading-relaxed font-medium">
              "You run your business with mobile money — but no one will lend you even 20K when you need it most."
            </p>
          </div>
          
          {/* Main Headline - Enhanced Typography */}
          <div className="mb-8 lg:mb-12">
            <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight text-white">
              Cash tight? <span className="relative">
                <span className="bg-gradient-to-r from-yellow-300 to-yellow-400 bg-clip-text text-transparent">
                  NiPay
                </span>
                <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-yellow-300 to-yellow-400 rounded-full"></div>
              </span> helps you borrow small amounts — 
              <span className="relative inline-block">
                <span className="text-yellow-300">automatically</span>
                <svg className="absolute -bottom-3 left-0 w-full h-3" viewBox="0 0 200 12" fill="none">
                  <path d="M2 10C50 2 150 2 198 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" className="text-yellow-300/60"/>
                </svg>
              </span> — from your mobile money sales.
            </h1>
          </div>
          
          {/* Subheadline */}
          <p className="text-2xl lg:text-3xl mb-12 lg:mb-16 max-w-4xl mx-auto leading-relaxed font-medium text-white/90">
            No paperwork. No stress. No collateral.
          </p>
          
          {/* CTA Buttons - Enhanced Design */}
          <div className="flex flex-col sm:flex-row gap-6 lg:gap-8 justify-center mb-16 lg:mb-20">
            <Button 
              onClick={() => setShowWaitlistModal(true)}
              size="lg" 
              className="group bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-black font-bold text-xl lg:text-2xl py-8 lg:py-10 px-10 lg:px-14 shadow-2xl hover:shadow-yellow-400/25 transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto rounded-2xl"
            >
              Join the Waitlist
              <ArrowRight className="ml-3 h-6 w-6 lg:h-7 lg:w-7 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="group border-3 border-white/30 text-white hover:bg-white/10 hover:border-white/50 text-xl lg:text-2xl py-8 lg:py-10 px-10 lg:px-14 w-full sm:w-auto backdrop-blur-sm rounded-2xl transition-all duration-300"
              onClick={() => window.open('https://wa.me/250788123456?text=Hi%20NiPay%2C%20I%20have%20a%20question', '_blank')}
            >
              <MessageCircle className="mr-3 h-6 w-6 lg:h-7 lg:w-7 group-hover:scale-110 transition-transform" />
              Ask a Question
            </Button>
          </div>
          
          {/* Early Traction - Premium Card Design */}
          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 lg:p-12 border border-white/20 shadow-2xl">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
              <div className="group">
                <div className="text-3xl lg:text-4xl xl:text-5xl font-bold text-yellow-300 mb-2 group-hover:scale-110 transition-transform">400+</div>
                <div className="text-base lg:text-lg text-white/80 font-medium">SMEs Signed Up</div>
              </div>
              <div className="group">
                <div className="text-3xl lg:text-4xl xl:text-5xl font-bold text-yellow-300 mb-2 group-hover:scale-110 transition-transform">258M</div>
                <div className="text-base lg:text-lg text-white/80 font-medium">RWF Requested</div>
              </div>
              <div className="col-span-2 lg:col-span-1 group">
                <div className="text-3xl lg:text-4xl xl:text-5xl font-bold text-yellow-300 mb-2 group-hover:scale-110 transition-transform">100%</div>
                <div className="text-base lg:text-lg text-white/80 font-medium">Built for Rwanda</div>
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
