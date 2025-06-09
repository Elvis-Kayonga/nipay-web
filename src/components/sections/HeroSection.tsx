
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import WaitlistModal from '../modals/WaitlistModal';
import InvestorModal from '../modals/InvestorModal';
import { ArrowRight } from "lucide-react";
import { Link } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';

const HeroSection = () => {
  const [showWaitlistModal, setShowWaitlistModal] = useState(false);
  const [showInvestorModal, setShowInvestorModal] = useState(false);
  const isMobile = useIsMobile();
  
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center text-white">
      {/* Background image with overlay */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3')",
        backgroundPosition: isMobile ? "65% center" : "center"
      }} aria-hidden="true">
        <div className="absolute inset-0 hero-gradient"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-6 lg:px-8 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold mb-6 lg:mb-8 animate-fade-in leading-tight">
            Loans for Rwandan Businesses - NO COLLATERAL NEEDED
          </h1>
          
          <p className="text-xl lg:text-2xl mb-8 lg:mb-12 animate-slide-up max-w-3xl mx-auto leading-relaxed">
            Get quick access to loans with just your phone number - Inguzanyo NTA NGWATE!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center mb-12 lg:mb-16">
            <Link to="/waitlist" className="w-full sm:w-auto">
              <Button variant="green" size="lg" className="text-lg lg:text-xl py-6 lg:py-8 w-full sm:w-auto px-8 lg:px-12 shadow-lg hover:shadow-xl transition-all duration-300">
                Join Pilot Program
                <ArrowRight className="ml-3 h-5 w-5 lg:h-6 lg:w-6" />
              </Button>
            </Link>
            <Link to="/investors" className="w-full sm:w-auto">
              <Button variant="outline-white" size="lg" className="text-lg lg:text-xl py-6 lg:py-8 w-full sm:w-auto px-8 lg:px-12 shadow-lg hover:shadow-xl transition-all duration-300">
                For Funders & Partners
                <ArrowRight className="ml-3 h-5 w-5 lg:h-6 lg:w-6" />
              </Button>
            </Link>
          </div>
          
          <p className="text-base lg:text-lg italic mb-8 lg:mb-12 opacity-90 max-w-2xl mx-auto leading-relaxed">
            Isunge NiPay nawe ujye mu bacuruzi banini - Join NiPay and grow your business
          </p>
          
          <div className="text-sm lg:text-base text-gray-300 max-w-2xl mx-auto">
            <p className="leading-relaxed">
              "79% of SMEs in Rwanda lack access to finance." 
              <span className="font-semibold ml-1">Source: *I&M Group</span>
            </p>
          </div>
        </div>
      </div>
      
      <WaitlistModal isOpen={showWaitlistModal} onClose={() => setShowWaitlistModal(false)} />
      <InvestorModal isOpen={showInvestorModal} onClose={() => setShowInvestorModal(false)} />
    </section>
  );
};

export default HeroSection;
