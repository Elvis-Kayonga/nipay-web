import SectionWrapper from '../shared/SectionWrapper';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import WaitlistModal from '../modals/WaitlistModal';
import { ArrowRight, Smartphone, DollarSign, RefreshCw, CheckCircle } from 'lucide-react';
const SolutionSection = () => {
  const [showWaitlistModal, setShowWaitlistModal] = useState(false);
  return <SectionWrapper id="how-it-works" className="py-24 lg:py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-nipay-green/5 rounded-full blur-3xl"></div>
      
      <div className="relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 lg:mb-24">
          <div className="inline-flex items-center bg-nipay-green/10 text-nipay-green px-6 py-3 rounded-full text-sm font-semibold mb-6">
            <CheckCircle className="w-4 h-4 mr-2" />
            How It Works
          </div>
          <h2 className="text-4xl lg:text-6xl xl:text-7xl font-bold mb-8 text-gray-900 leading-tight">
            Simple. Automatic. 
            <br />
            <span className="bg-gradient-to-r from-nipay-green to-nipay-dark-green bg-clip-text text-transparent">
              Built for you.
            </span>
          </h2>
          <p className="text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed text-gray-600 font-medium">
            Three steps to unlock working capital from your mobile money business
          </p>
        </div>
        
        {/* Steps Grid - Made 35% smaller */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 mb-20 lg:mb-24 max-w-5xl mx-auto">
          {/* Step 1 */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-green-50 rounded-3xl transform group-hover:scale-105 transition-transform duration-300"></div>
            <div className="relative text-center p-6 lg:p-8">
              <div className="relative mb-6">
                <div className="w-16 h-16 lg:w-18 lg:h-18 rounded-full bg-gradient-to-br from-nipay-green to-nipay-dark-green flex items-center justify-center mx-auto shadow-2xl">
                  <Smartphone className="w-7 h-7 lg:w-8 lg:h-8 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center text-black font-bold text-xs">1</div>
              </div>
              <h3 className="text-xl lg:text-2xl font-bold mb-4 text-gray-900">Accept Payments</h3>
              <p className="text-gray-600 text-base leading-relaxed">Receive payments from MTN MoMo, Airtel Money, or your bank account like normal</p>
            </div>
            
            {/* Connection Arrow */}
            <div className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2">
              <div className="w-12 h-1 bg-gradient-to-r from-nipay-green to-transparent"></div>
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-nipay-green rotate-45"></div>
            </div>
          </div>
          
          {/* Step 2 */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-100 to-yellow-50 rounded-3xl transform group-hover:scale-105 transition-transform duration-300"></div>
            <div className="relative text-center p-6 lg:p-8">
              <div className="relative mb-6">
                <div className="w-16 h-16 lg:w-18 lg:h-18 rounded-full bg-gradient-to-br from-yellow-500 to-yellow-600 flex items-center justify-center mx-auto shadow-2xl">
                  <DollarSign className="w-7 h-7 lg:w-8 lg:h-8 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-nipay-green rounded-full flex items-center justify-center text-white font-bold text-xs">2</div>
              </div>
              <h3 className="text-xl lg:text-2xl font-bold mb-4 text-gray-900">Borrow Instantly</h3>
              <p className="text-gray-600 text-base leading-relaxed">NiPay Credit score grows your overdraft limit based on your daily mobile money sales</p>
            </div>
            
            {/* Connection Arrow */}
            <div className="hidden lg:block absolute top-1/2 -right-6 transform -translate-y-1/2">
              <div className="w-12 h-1 bg-gradient-to-r from-yellow-500 to-transparent"></div>
              <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-yellow-500 rotate-45"></div>
            </div>
          </div>
          
          {/* Step 3 */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-blue-50 rounded-3xl transform group-hover:scale-105 transition-transform duration-300"></div>
            <div className="relative text-center p-6 lg:p-8">
              <div className="relative mb-6">
                <div className="w-16 h-16 lg:w-18 lg:h-18 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center mx-auto shadow-2xl">
                  <RefreshCw className="w-7 h-7 lg:w-8 lg:h-8 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xs">3</div>
              </div>
              <h3 className="text-xl lg:text-2xl font-bold mb-4 text-gray-900">Repay Automatically</h3>
              <p className="text-gray-600 text-base leading-relaxed">
                Small percentage deducted from each transaction — no stress about due dates
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-block bg-white rounded-3xl p-8 lg:p-12 shadow-2xl border border-gray-100">
            <h3 className="text-2xl lg:text-3xl font-bold mb-6 text-gray-900">Ready to get started?</h3>
            <Button onClick={() => setShowWaitlistModal(true)} className="bg-gradient-to-r from-nipay-green to-nipay-dark-green hover:from-nipay-dark-green hover:to-nipay-green text-xl lg:text-2xl px-10 lg:px-14 py-6 lg:py-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 rounded-2xl">
              Start with NiPay Today
              <ArrowRight className="ml-3 h-6 w-6 lg:h-7 lg:w-7" />
            </Button>
          </div>
        </div>
      </div>
      
      <WaitlistModal isOpen={showWaitlistModal} onClose={() => setShowWaitlistModal(false)} />
    </SectionWrapper>;
};
export default SolutionSection;