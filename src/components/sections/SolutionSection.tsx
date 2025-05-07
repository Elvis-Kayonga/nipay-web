
import SectionWrapper from '../shared/SectionWrapper';
import IconCard from '../shared/IconCard';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import WaitlistModal from '../modals/WaitlistModal';

const SolutionSection = () => {
  const [showWaitlistModal, setShowWaitlistModal] = useState(false);
  
  return (
    <SectionWrapper 
      id="solution" 
      backgroundColor="bg-nipay-green" 
      className="text-white"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
        Unlock Your Business Potential With NiPay
      </h2>
      
      <p className="text-xl mb-12 text-center max-w-3xl mx-auto">
        Get the capital you need when you need it - powered by your existing mobile-money transaction history.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
        <IconCard 
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="18" height="18" x="3" y="3" rx="2" />
              <path d="M7 7h.01" />
              <path d="M12 7h.01" />
              <path d="M17 7h.01" />
              <path d="M7 12h.01" />
              <path d="M12 12h.01" />
              <path d="M17 12h.01" />
              <path d="M7 17h.01" />
              <path d="M12 17h.01" />
              <path d="M17 17h.01" />
            </svg>
          }
          title="Apply in Minutes"
          description="Simple application process that uses your existing mobile money history - no lengthy forms."
          className="text-white"
        />
        
        <IconCard 
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2v20" />
              <path d="m4.93 15.93 14.14-14.14" />
              <path d="m19.07 15.93-14.14-14.14" />
            </svg>
          }
          title="Funds Within Hours"
          description="Get approved and access your overdraft limit the same day - when you need it most."
          className="text-white"
        />
        
        <IconCard 
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
              <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2" />
              <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8" />
              <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
            </svg>
          }
          title="Flexible Repayments"
          description="Automatically repay through small percentages of your incoming mobile money payments."
          className="text-white"
        />
      </div>

      <div className="text-center mt-12">
        <Button 
          variant="outline" 
          onClick={() => setShowWaitlistModal(true)}
          className="border-white text-white hover:bg-white/10 text-lg px-8 py-6"
        >
          Get Started Now
        </Button>
      </div>
      
      <WaitlistModal 
        isOpen={showWaitlistModal} 
        onClose={() => setShowWaitlistModal(false)} 
      />
    </SectionWrapper>
  );
};

export default SolutionSection;
