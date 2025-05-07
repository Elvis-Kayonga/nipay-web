
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import WaitlistModal from '../modals/WaitlistModal';
import InvestorModal from '../modals/InvestorModal';
import { ArrowRight } from "lucide-react";
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const [showWaitlistModal, setShowWaitlistModal] = useState(false);
  const [showInvestorModal, setShowInvestorModal] = useState(false);
  
  return <section className="relative h-screen min-h-[600px] flex items-center justify-center text-white">
      {/* Background image with overlay - Updated to Rwandan landscape */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0" style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3')",
      backgroundAttachment: "fixed"
    }} aria-hidden="true">
        <div className="absolute inset-0 hero-gradient"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">Get Instant Revolving Credit For Your Business</h1>
          
          <p className="text-lg md:text-xl mb-8 animate-slide-up">
            Access up to 2x your monthly mobile-money inflows—no paperwork, no delays, no collateral.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Button 
              className="btn-primary text-lg py-6 px-8 text-white" 
              onClick={() => setShowWaitlistModal(true)}
            >
              Get Your Overdraft Limit
              <ArrowRight className="ml-2" />
            </Button>
            <Link to="/investors">
              <Button 
                variant="outline" 
                className="btn-secondary text-white dark:text-white hover:text-black hover:border-nipay-green"
              >
                For Capital Providers
              </Button>
            </Link>
          </div>
          
          <p className="text-sm italic mb-10 opacity-80 max-w-2xl mx-auto">
            Join thousands of Rwandan SMEs unlocking working capital through their mobile money transaction history.
          </p>
          
          <div className="text-xs text-gray-300 max-w-2xl mx-auto">
            <p className="mb-1">
              "79% of SMEs in Rwanda lack sufficient access to finance, leading to an estimated $1.2 billion gap." 
              <span className="font-semibold ml-1">I&M Group</span>
            </p>
            <p>
              "Active MoMo users rose to 5.3 million in Q1 2025."
              <span className="font-semibold ml-1">TechAfrica News, The Fast Mode</span>
            </p>
          </div>
        </div>
      </div>
      
      <WaitlistModal isOpen={showWaitlistModal} onClose={() => setShowWaitlistModal(false)} />
      <InvestorModal isOpen={showInvestorModal} onClose={() => setShowInvestorModal(false)} />
    </section>;
};

export default HeroSection;
