
import { useState } from 'react';
import SectionWrapper from '../shared/SectionWrapper';
import { Button } from '@/components/ui/button';
import WaitlistModal from '../modals/WaitlistModal';
import { ArrowRight, Check } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { Link } from 'react-router-dom';

const SmeBenefitsSection = () => {
  const [showWaitlistModal, setShowWaitlistModal] = useState(false);
  const isMobile = useIsMobile();
  
  return (
    <SectionWrapper id="benefits" className="py-16 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
          <h2 className="text-2xl md:text-4xl font-bold">
            How NiPay Powers Your Business
          </h2>
          
          <ul className="space-y-4 md:space-y-6">
            <li className="flex gap-3 items-start">
              <div className="flex-shrink-0 text-nipay-green mt-1">
                <Check className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div>
                <p className="font-medium">Up to 2x your monthly inflows as capital</p>
              </div>
            </li>
            
            <li className="flex gap-3 items-start">
              <div className="flex-shrink-0 text-nipay-green mt-1">
                <Check className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div>
                <p className="font-medium">Pay only for what you use, when you use it</p>
              </div>
            </li>
            
            <li className="flex gap-3 items-start">
              <div className="flex-shrink-0 text-nipay-green mt-1">
                <Check className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div>
                <p className="font-medium">Real-time dashboard for your finances</p>
              </div>
            </li>
            
            <li className="flex gap-3 items-start">
              <div className="flex-shrink-0 text-nipay-green mt-1">
                <Check className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div>
                <p className="font-medium">No collateral required</p>
              </div>
            </li>
          </ul>
          
          <div className="pt-2 md:pt-4">
            <Link to="/waitlist">
              <Button 
                className="bg-nipay-green hover:bg-nipay-dark-green w-full sm:w-auto text-base md:text-lg py-5 md:py-6 px-6 md:px-8"
              >
                Join Waitlist
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
              </Button>
            </Link>
          </div>
        </div>
        
        <div className="bg-muted rounded-xl overflow-hidden shadow-lg order-1 lg:order-2">
          <img 
            src="/placeholder.svg" 
            alt="NiPay mobile app interface" 
            className="w-full h-auto"
          />
          <div className="p-4 md:p-6">
            <h3 className="font-bold mb-2">NiPay Mobile Experience</h3>
            <p className="text-sm text-muted-foreground">
              Simple USSD commands or intuitive app for credit.
            </p>
          </div>
        </div>
      </div>
      
      <WaitlistModal 
        isOpen={showWaitlistModal} 
        onClose={() => setShowWaitlistModal(false)} 
      />
    </SectionWrapper>
  );
};

export default SmeBenefitsSection;
