
import { useState } from 'react';
import SectionWrapper from '../shared/SectionWrapper';
import { Button } from '@/components/ui/button';
import WaitlistModal from '../modals/WaitlistModal';

const SmeBenefitsSection = () => {
  const [showWaitlistModal, setShowWaitlistModal] = useState(false);
  
  return (
    <SectionWrapper id="benefits">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">
            Why SMEs Love NiPay
          </h2>
          
          <ul className="space-y-6">
            <li className="flex gap-4">
              <div className="flex-shrink-0 text-nipay-green">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </div>
              <p>Tap into working capital up to twice your monthly inflows.</p>
            </li>
            
            <li className="flex gap-4">
              <div className="flex-shrink-0 text-nipay-green">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </div>
              <p>Only pay interest on what you use—no fixed installments.</p>
            </li>
            
            <li className="flex gap-4">
              <div className="flex-shrink-0 text-nipay-green">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </div>
              <p>Dashboard shows real-time borrowings and balances.</p>
            </li>
            
            <li className="flex gap-4">
              <div className="flex-shrink-0 text-nipay-green">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check">
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </div>
              <p>No collateral beyond your mobile-money activity.</p>
            </li>
          </ul>
          
          <div className="pt-4">
            <Button 
              className="bg-nipay-green hover:bg-nipay-dark-green"
              onClick={() => setShowWaitlistModal(true)}
            >
              Join Waitlist
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                <path d="M5 12h14"/>
                <path d="m12 5 7 7-7 7"/>
              </svg>
            </Button>
          </div>
        </div>
        
        <div className="bg-muted rounded-xl overflow-hidden shadow-lg">
          <img 
            src="/placeholder.svg" 
            alt="NiPay mobile app interface showing overdraft dashboard" 
            className="w-full h-auto"
          />
          <div className="p-6">
            <h3 className="font-bold mb-2">NiPay Mobile Experience</h3>
            <p className="text-sm text-muted-foreground">
              Simple USSD commands or our intuitive app make it easy to manage your overdraft.
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
