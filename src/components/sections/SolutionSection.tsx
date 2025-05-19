
import SectionWrapper from '../shared/SectionWrapper';
import IconCard from '../shared/IconCard';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import WaitlistModal from '../modals/WaitlistModal';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const SolutionSection = () => {
  const [showWaitlistModal, setShowWaitlistModal] = useState(false);
  
  return (
    <SectionWrapper id="solution" backgroundColor="bg-nipay-dark-green" className="text-white py-16 md:py-24">
      <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 text-center">
        NiPay: Loans Based On Your Phone
      </h2>
      
      <p className="text-lg md:text-xl mb-8 md:mb-12 text-center max-w-xs md:max-w-3xl mx-auto">
        Get access to capital with just your phone number — no collateral required.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
        <IconCard 
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
          title="Apply in 5 Minutes" 
          description="Simple registration with your phone number." 
          className="text-white" 
        />
        
        <IconCard 
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2v20" />
              <path d="m4.93 15.93 14.14-14.14" />
              <path d="m19.07 15.93-14.14-14.14" />
            </svg>
          } 
          title="Get Money Within Hours" 
          description="Our AI reviews your payment history for quick loan approval." 
          className="text-white" 
        />
        
        <IconCard 
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
              <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2" />
              <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8" />
              <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
            </svg>
          } 
          title="Easy Repayments" 
          description="Small automatic repayments from your income." 
          className="text-white" 
        />
      </div>

      <div className="mt-12 max-w-xl mx-auto bg-white/10 p-5 rounded-lg">
        <h3 className="text-xl font-bold mb-4 text-center">How It Works</h3>
        <div className="flex flex-col md:flex-row justify-between items-center text-center gap-4">
          <div className="flex-1 p-3">
            <div className="w-12 h-12 rounded-full bg-white text-nipay-dark-green flex items-center justify-center text-xl font-bold mx-auto mb-2">1</div>
            <p className="text-sm">Connect your phone</p>
          </div>
          <div className="hidden md:block text-3xl">→</div>
          <div className="flex-1 p-3">
            <div className="w-12 h-12 rounded-full bg-white text-nipay-dark-green flex items-center justify-center text-xl font-bold mx-auto mb-2">2</div>
            <p className="text-sm">Get approved for a loan</p>
          </div>
          <div className="hidden md:block text-3xl">→</div>
          <div className="flex-1 p-3">
            <div className="w-12 h-12 rounded-full bg-white text-nipay-dark-green flex items-center justify-center text-xl font-bold mx-auto mb-2">3</div>
            <p className="text-sm">Use money & repay automatically</p>
          </div>
        </div>
      </div>

      <div className="text-center mt-12">
        <Link to="/waitlist">
          <Button variant="outline" className="border-white text-white hover:bg-white/10 text-base md:text-lg px-6 md:px-8 py-5 md:py-6 w-full sm:w-auto">
            Apply for the Pilot Program
            <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
          </Button>
        </Link>
      </div>
      
      <WaitlistModal isOpen={showWaitlistModal} onClose={() => setShowWaitlistModal(false)} />
    </SectionWrapper>
  );
};

export default SolutionSection;
