
import SectionWrapper from '../shared/SectionWrapper';
import { Smartphone, CreditCard, Zap, ArrowRight } from 'lucide-react';

const NiPaySolutionsSection = () => {
  return (
    <SectionWrapper id="solutions" className="py-24 lg:py-32 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <div className="space-y-6">
            <div className="inline-flex items-center bg-nipay-green/10 text-nipay-green px-4 py-2 rounded-full text-sm font-semibold">
              <Zap className="w-4 h-4 mr-2" />
              The Solution
            </div>
            
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
              <span className="text-nipay-green">Mobile Wallet</span>
              <br />
              <span className="text-gray-400">+</span>
              <br />
              <span className="text-nipay-green">Credit</span>
            </h2>
            
            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed">
              A mobile wallet-based payment credit system that allows SMEs to borrow instantly from banks against future inflows.
            </p>
          </div>

          {/* Key Features */}
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-full bg-nipay-green/10 flex items-center justify-center flex-shrink-0">
                <Smartphone className="w-6 h-6 text-nipay-green" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Mobile Wallet Integration</h3>
                <p className="text-gray-600">Seamlessly connects with your existing MTN and Airtel mobile money accounts</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-full bg-nipay-green/10 flex items-center justify-center flex-shrink-0">
                <CreditCard className="w-6 h-6 text-nipay-green" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Instant Credit Access</h3>
                <p className="text-gray-600">Borrow against your future sales with no paperwork or collateral required</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 rounded-full bg-nipay-green/10 flex items-center justify-center flex-shrink-0">
                <ArrowRight className="w-6 h-6 text-nipay-green" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Automatic Repayment</h3>
                <p className="text-gray-600">Small percentages deducted from each transaction - stress-free repayment</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Phone Mockup */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            {/* Phone Frame */}
            <div className="relative w-72 h-[600px] bg-gray-900 rounded-[3rem] p-2 shadow-2xl">
              <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                {/* Phone Screen Content */}
                <img 
                  src="/lovable-uploads/aa9f70e7-8334-47c4-91ca-df7ba5727907.png"
                  alt="NiPay Mobile App Interface"
                  className="w-full h-full object-cover"
                />
                
                {/* Subtle overlay to indicate it's a demo */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent pointer-events-none"></div>
              </div>
              
              {/* Phone Details */}
              <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gray-800 rounded-full"></div>
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gray-800 rounded-full"></div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-nipay-green/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-yellow-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default NiPaySolutionsSection;
