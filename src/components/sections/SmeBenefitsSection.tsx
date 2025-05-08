
import { useState } from 'react';
import SectionWrapper from '../shared/SectionWrapper';
import { Button } from '@/components/ui/button';
import WaitlistModal from '../modals/WaitlistModal';
import { ArrowRight } from 'lucide-react';

const SmeBenefitsSection = () => {
  const [showWaitlistModal, setShowWaitlistModal] = useState(false);
  
  return (
    <SectionWrapper id="benefits">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            How NiPay Powers Your Business
          </h2>
          
          <ul className="space-y-6">
            <li className="flex gap-4">
              <div className="flex-shrink-0 text-nipay-green">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </div>
              <div>
                <p className="font-medium">Up to 2x your monthly inflows as capital</p>
              </div>
            </li>
            
            <li className="flex gap-4">
              <div className="flex-shrink-0 text-nipay-green">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </div>
              <div>
                <p className="font-medium">Pay only for what you use, when you use it</p>
              </div>
            </li>
            
            <li className="flex gap-4">
              <div className="flex-shrink-0 text-nipay-green">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </div>
              <div>
                <p className="font-medium">Real-time dashboard for your finances</p>
              </div>
            </li>
            
            <li className="flex gap-4">
              <div className="flex-shrink-0 text-nipay-green">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </div>
              <div>
                <p className="font-medium">No collateral or paperwork required</p>
              </div>
            </li>
          </ul>
          
          <div className="pt-4">
            <Button 
              className="bg-nipay-green hover:bg-nipay-dark-green text-lg py-6 px-8"
              onClick={() => setShowWaitlistModal(true)}
            >
              Join Waitlist
              <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
        
        <div className="bg-muted rounded-xl overflow-hidden shadow-lg">
          <img 
            src="/placeholder.svg" 
            alt="NiPay mobile app interface" 
            className="w-full h-auto"
          />
          <div className="p-6">
            <h3 className="font-bold mb-2">NiPay Mobile Experience</h3>
            <p className="text-sm text-muted-foreground">
              Simple USSD commands or our intuitive app for credit management.
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
