
import SectionWrapper from '../shared/SectionWrapper';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import WaitlistModal from '../modals/WaitlistModal';
import { ArrowRight, Smartphone, DollarSign, RefreshCw } from 'lucide-react';

const SolutionSection = () => {
  const [showWaitlistModal, setShowWaitlistModal] = useState(false);
  
  return (
    <SectionWrapper id="how-it-works" className="py-20 lg:py-32 bg-white">
      <h2 className="text-3xl lg:text-5xl xl:text-6xl font-bold mb-6 lg:mb-8 text-center leading-tight text-gray-900">
        How NiPay Works
      </h2>
      
      <p className="text-xl lg:text-2xl mb-12 lg:mb-16 text-center max-w-3xl mx-auto leading-relaxed text-gray-600">
        Simple. Automatic. Built for your mobile money business.
      </p>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 xl:gap-16 mb-16 lg:mb-20">
        <div className="text-center p-6 lg:p-8 rounded-2xl bg-gradient-to-br from-green-50 to-green-100 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-nipay-green flex items-center justify-center mx-auto mb-6 lg:mb-8 shadow-lg">
            <Smartphone className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
          </div>
          <h3 className="text-xl lg:text-2xl font-bold mb-4 lg:mb-6 text-gray-900">Accept Payments</h3>
          <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
            Keep using MTN Mobile Money, Airtel Money, or your bank account like normal
          </p>
        </div>
        
        <div className="text-center p-6 lg:p-8 rounded-2xl bg-gradient-to-br from-yellow-50 to-yellow-100 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-yellow-500 flex items-center justify-center mx-auto mb-6 lg:mb-8 shadow-lg">
            <DollarSign className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
          </div>
          <h3 className="text-xl lg:text-2xl font-bold mb-4 lg:mb-6 text-gray-900">Borrow Instantly</h3>
          <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
            NiPay grows your overdraft limit based on your daily mobile money sales
          </p>
        </div>
        
        <div className="text-center p-6 lg:p-8 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-blue-500 flex items-center justify-center mx-auto mb-6 lg:mb-8 shadow-lg">
            <RefreshCw className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
          </div>
          <h3 className="text-xl lg:text-2xl font-bold mb-4 lg:mb-6 text-gray-900">Repay Automatically</h3>
          <p className="text-gray-600 text-base lg:text-lg leading-relaxed">
            Small percentage deducted from each transaction — no stress about due dates
          </p>
        </div>
      </div>

      <div className="text-center">
        <Button 
          onClick={() => setShowWaitlistModal(true)}
          className="bg-nipay-green hover:bg-nipay-dark-green text-lg lg:text-xl px-8 lg:px-12 py-6 lg:py-8 shadow-lg hover:shadow-xl transition-all duration-300"
        >
          Start with NiPay Today
          <ArrowRight className="ml-3 h-5 w-5 lg:h-6 lg:w-6" />
        </Button>
      </div>
      
      <WaitlistModal isOpen={showWaitlistModal} onClose={() => setShowWaitlistModal(false)} />
    </SectionWrapper>
  );
};

export default SolutionSection;
