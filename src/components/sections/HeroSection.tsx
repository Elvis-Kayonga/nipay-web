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
  return <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center text-white">
      {/* Background image with overlay */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0" style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3')",
      backgroundPosition: isMobile ? "65% center" : "center"
    }} aria-hidden="true">
        <div className="absolute inset-0 hero-gradient"></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center">
        <div className="max-w-md mx-auto md:max-w-3xl">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 animate-fade-in">
            Instant Credit For Your Business
          </h1>
          
          <p className="text-base md:text-xl mb-6 md:mb-8 animate-slide-up">Inguzanyo ku nyungu iri hasi </p>
          
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-8 md:mb-10">
            <Link to="/waitlist" className="w-full sm:w-auto">
              <Button variant="green" size={isMobile ? "default" : "lg"} className="text-base md:text-lg py-5 md:py-6 w-full sm:w-auto px-6 md:px-8">
                Get Capital
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
              </Button>
            </Link>
            <Link to="/investors" className="w-full sm:w-auto">
              
            </Link>
          </div>
          
          <p className="text-sm italic mb-6 md:mb-10 opacity-80 max-w-xs mx-auto md:max-w-2xl">Isunge NiPay nawe ujye mu bacuruzi banini</p>
          
          <div className="text-xs text-gray-300 max-w-xs mx-auto md:max-w-2xl">
            <p>
              "79% of SMEs in Rwanda lack access to finance." 
              <span className="font-semibold ml-1">Source : *I&M Group</span>
            </p>
          </div>
        </div>
      </div>
      
      <WaitlistModal isOpen={showWaitlistModal} onClose={() => setShowWaitlistModal(false)} />
      <InvestorModal isOpen={showInvestorModal} onClose={() => setShowInvestorModal(false)} />
    </section>;
};
export default HeroSection;