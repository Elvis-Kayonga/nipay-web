
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
      {/* Background image with overlay */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0" style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3')",
      backgroundAttachment: "fixed"
    }} aria-hidden="true">
        <div className="absolute inset-0 hero-gradient"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">Instant Credit For Your Business</h1>
          
          <p className="text-lg md:text-xl mb-8 animate-slide-up">
            Up to 2x your monthly mobile-money inflows—no paperwork, no delays.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Link to="/waitlist">
              <Button 
                variant="green"
                size="lg"
                className="text-lg py-6 px-8"
              >
                Get Your Credit Limit
                <ArrowRight className="ml-2" />
              </Button>
            </Link>
            <Link to="/investors">
              <Button 
                variant="outline" 
                size="lg"
                className="text-white border-white hover:text-black hover:border-nipay-green py-6 px-8"
              >
                For Capital Providers
              </Button>
            </Link>
          </div>
          
          <p className="text-sm italic mb-10 opacity-80 max-w-2xl mx-auto">
            Join thousands of Rwandan SMEs unlocking working capital through mobile money.
          </p>
          
          <div className="text-xs text-gray-300 max-w-2xl mx-auto">
            <p>
              "79% of SMEs in Rwanda lack access to finance." 
              <span className="font-semibold ml-1">I&M Group</span>
            </p>
          </div>
        </div>
      </div>
      
      <WaitlistModal isOpen={showWaitlistModal} onClose={() => setShowWaitlistModal(false)} />
      <InvestorModal isOpen={showInvestorModal} onClose={() => setShowInvestorModal(false)} />
    </section>;
};

export default HeroSection;
