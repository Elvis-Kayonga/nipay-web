
import SectionWrapper from '../shared/SectionWrapper';
import { Button } from '@/components/ui/button';
import { ArrowRight, Smartphone, FileText, Shield, Target, MapPin } from 'lucide-react';
import { useState } from 'react';
import WaitlistModal from '../modals/WaitlistModal';

const SmeBenefitsSection = () => {
  const [showWaitlistModal, setShowWaitlistModal] = useState(false);
  
  return (
    <SectionWrapper id="benefits" className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl lg:text-5xl xl:text-6xl font-bold mb-6 lg:mb-8 text-center leading-tight text-gray-900">
          Why NiPay?
        </h2>
        
        <p className="text-xl lg:text-2xl mb-12 lg:mb-16 text-center max-w-3xl mx-auto leading-relaxed text-gray-600">
          Built specifically for Rwandan SMEs who hustle every day
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-16 lg:mb-20">
          <div className="bg-white p-6 lg:p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-lg bg-green-100 flex items-center justify-center mb-4 lg:mb-6">
              <Smartphone className="w-6 h-6 lg:w-7 lg:h-7 text-nipay-green" />
            </div>
            <h3 className="text-lg lg:text-xl font-bold mb-3 lg:mb-4 text-gray-900">Works with Basic Phones</h3>
            <p className="text-gray-600 leading-relaxed">
              Use USSD codes or our simple app — no smartphone needed
            </p>
          </div>
          
          <div className="bg-white p-6 lg:p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-lg bg-blue-100 flex items-center justify-center mb-4 lg:mb-6">
              <FileText className="w-6 h-6 lg:w-7 lg:h-7 text-blue-600" />
            </div>
            <h3 className="text-lg lg:text-xl font-bold mb-3 lg:mb-4 text-gray-900">No Bank Account Needed</h3>
            <p className="text-gray-600 leading-relaxed">
              No paperwork, no collateral, no bank visits required
            </p>
          </div>
          
          <div className="bg-white p-6 lg:p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-lg bg-yellow-100 flex items-center justify-center mb-4 lg:mb-6">
              <ArrowRight className="w-6 h-6 lg:w-7 lg:h-7 text-yellow-600" />
            </div>
            <h3 className="text-lg lg:text-xl font-bold mb-3 lg:mb-4 text-gray-900">Borrow from Your Sales</h3>
            <p className="text-gray-600 leading-relaxed">
              Get small amounts when you need them, repay from daily transactions
            </p>
          </div>
          
          <div className="bg-white p-6 lg:p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-lg bg-purple-100 flex items-center justify-center mb-4 lg:mb-6">
              <Shield className="w-6 h-6 lg:w-7 lg:h-7 text-purple-600" />
            </div>
            <h3 className="text-lg lg:text-xl font-bold mb-3 lg:mb-4 text-gray-900">Free Business Tools</h3>
            <p className="text-gray-600 leading-relaxed">
              Track sales, stock, and invoices free for 6 months
            </p>
          </div>
          
          <div className="bg-white p-6 lg:p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-lg bg-red-100 flex items-center justify-center mb-4 lg:mb-6">
              <MapPin className="w-6 h-6 lg:w-7 lg:h-7 text-red-600" />
            </div>
            <h3 className="text-lg lg:text-xl font-bold mb-3 lg:mb-4 text-gray-900">100% Built for Rwanda</h3>
            <p className="text-gray-600 leading-relaxed">
              Designed for how Rwandan SMEs actually do business
            </p>
          </div>
          
          <div className="bg-white p-6 lg:p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-lg bg-green-100 flex items-center justify-center mb-4 lg:mb-6">
              <Target className="w-6 h-6 lg:w-7 lg:h-7 text-green-600" />
            </div>
            <h3 className="text-lg lg:text-xl font-bold mb-3 lg:mb-4 text-gray-900">Your Limit Grows</h3>
            <p className="text-gray-600 leading-relaxed">
              The more you sell, the more you can borrow for your business
            </p>
          </div>
        </div>
        
        <div className="text-center">
          <Button 
            onClick={() => setShowWaitlistModal(true)}
            className="bg-nipay-green hover:bg-nipay-dark-green text-lg lg:text-xl px-8 lg:px-12 py-6 lg:py-8 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Join the Waitlist
            <ArrowRight className="ml-3 h-5 w-5 lg:h-6 lg:w-6" />
          </Button>
        </div>
      </div>
      
      <WaitlistModal isOpen={showWaitlistModal} onClose={() => setShowWaitlistModal(false)} />
    </SectionWrapper>
  );
};

export default SmeBenefitsSection;
