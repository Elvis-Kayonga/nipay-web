
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
    <SectionWrapper id="solution" backgroundColor="bg-nipay-dark-green" className="text-white py-20 lg:py-32">
      <h2 className="text-3xl lg:text-5xl xl:text-6xl font-bold mb-6 lg:mb-8 text-center leading-tight">
        NiPay: Loans Based On Your Phone
      </h2>
      
      <p className="text-xl lg:text-2xl mb-12 lg:mb-16 text-center max-w-4xl mx-auto leading-relaxed">
        Get access to capital with just your phone number — no collateral required.
      </p>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 xl:gap-16 mb-16 lg:mb-20">
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
          title="Apply in 5 Minutes" 
          description="Simple registration with your phone number." 
          className="text-white p-6 lg:p-8" 
        />
        
        <IconCard 
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2v20" />
              <path d="m4.93 15.93 14.14-14.14" />
              <path d="m19.07 15.93-14.14-14.14" />
            </svg>
          } 
          title="Get Money Within Hours" 
          description="Our AI reviews your payment history for quick loan approval." 
          className="text-white p-6 lg:p-8" 
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
          title="Easy Repayments" 
          description="Small automatic repayments from your income." 
          className="text-white p-6 lg:p-8" 
        />
      </div>

      <div className="mt-16 lg:mt-20 max-w-4xl mx-auto bg-white/10 p-8 lg:p-12 rounded-2xl backdrop-blur-sm">
        <h3 className="text-2xl lg:text-3xl font-bold mb-8 lg:mb-12 text-center">How It Works</h3>
        <div className="flex flex-col lg:flex-row justify-between items-center text-center gap-8 lg:gap-6">
          <div className="flex-1 p-4 lg:p-6">
            <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-white text-nipay-dark-green flex items-center justify-center text-2xl lg:text-3xl font-bold mx-auto mb-4 lg:mb-6 shadow-lg">1</div>
            <p className="text-base lg:text-lg font-medium">Connect your phone</p>
          </div>
          <div className="hidden lg:block text-4xl xl:text-5xl opacity-75">→</div>
          <div className="flex-1 p-4 lg:p-6">
            <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-white text-nipay-dark-green flex items-center justify-center text-2xl lg:text-3xl font-bold mx-auto mb-4 lg:mb-6 shadow-lg">2</div>
            <p className="text-base lg:text-lg font-medium">Get approved for a loan</p>
          </div>
          <div className="hidden lg:block text-4xl xl:text-5xl opacity-75">→</div>
          <div className="flex-1 p-4 lg:p-6">
            <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-white text-nipay-dark-green flex items-center justify-center text-2xl lg:text-3xl font-bold mx-auto mb-4 lg:mb-6 shadow-lg">3</div>
            <p className="text-base lg:text-lg font-medium">Use money & repay automatically</p>
          </div>
        </div>
      </div>

      <div className="text-center mt-16 lg:mt-20">
        <Link to="/waitlist">
          <Button variant="outline" className="border-white text-white hover:bg-white/10 text-lg lg:text-xl px-8 lg:px-12 py-6 lg:py-8 w-full sm:w-auto shadow-lg hover:shadow-xl transition-all duration-300">
            Apply for the Pilot Program
            <ArrowRight className="ml-3 h-5 w-5 lg:h-6 lg:w-6" />
          </Button>
        </Link>
      </div>
      
      <WaitlistModal isOpen={showWaitlistModal} onClose={() => setShowWaitlistModal(false)} />
    </SectionWrapper>
  );
};

export default SolutionSection;
