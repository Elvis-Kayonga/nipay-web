
import SectionWrapper from '../shared/SectionWrapper';
import { useIsMobile } from '@/hooks/use-mobile';

const HowItWorksSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <SectionWrapper id="how-it-works" className="text-center py-16 lg:py-20">
      <h2 className="text-2xl lg:text-4xl xl:text-5xl font-bold mb-8 lg:mb-12 leading-tight">
        How NiPay Loans Work
      </h2>
      
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 max-w-5xl mx-auto mb-12 lg:mb-16">
        {/* Step 1 */}
        <div className="flex-1 relative p-5 lg:p-6 rounded-xl bg-card shadow-sm hover:shadow-md transition-shadow">
          <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-nipay-green flex items-center justify-center text-white text-lg lg:text-2xl font-bold mx-auto mb-4 lg:mb-6 shadow-lg">
            1
          </div>
          <h3 className="text-lg lg:text-xl font-bold mb-3 lg:mb-4">Register Your Business</h3>
          <p className="text-muted-foreground text-sm lg:text-base leading-relaxed">
            Sign up in under 2 minutes with your business and mobile money details
          </p>
          
          {/* Arrow (visible only on desktop) */}
          <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-2 transform -translate-y-1/2">
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="2" viewBox="0 0 100 2">
              <line x1="0" y1="1" x2="70" y2="1" stroke="currentColor" strokeWidth="2" strokeDasharray="4,4" className="text-nipay-green" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" className="absolute right-0 top-1/2 -translate-y-1/2 text-nipay-green">
              <polygon points="0,0 8,4 0,8" fill="currentColor" />
            </svg>
          </div>
        </div>
        
        {/* Step 2 */}
        <div className="flex-1 relative p-5 lg:p-6 rounded-xl bg-card shadow-sm hover:shadow-md transition-shadow">
          <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-nipay-green flex items-center justify-center text-white text-lg lg:text-2xl font-bold mx-auto mb-4 lg:mb-6 shadow-lg">
            2
          </div>
          <h3 className="text-lg lg:text-xl font-bold mb-3 lg:mb-4">Get Your Loan Limit</h3>
          <p className="text-muted-foreground text-sm lg:text-base leading-relaxed">
            Our system analyzes your transaction history and approves a loan amount
          </p>
          
          {/* Arrow (visible only on desktop) */}
          <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-2 transform -translate-y-1/2">
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="2" viewBox="0 0 100 2">
              <line x1="0" y1="1" x2="70" y2="1" stroke="currentColor" strokeWidth="2" strokeDasharray="4,4" className="text-nipay-green" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" className="absolute right-0 top-1/2 -translate-y-1/2 text-nipay-green">
              <polygon points="0,0 8,4 0,8" fill="currentColor" />
            </svg>
          </div>
        </div>
        
        {/* Step 3 */}
        <div className="flex-1 p-5 lg:p-6 rounded-xl bg-card shadow-sm hover:shadow-md transition-shadow">
          <div className="w-12 h-12 lg:w-16 lg:h-16 rounded-full bg-nipay-green flex items-center justify-center text-white text-lg lg:text-2xl font-bold mx-auto mb-4 lg:mb-6 shadow-lg">
            3
          </div>
          <h3 className="text-lg lg:text-xl font-bold mb-3 lg:mb-4">Use & Repay Easily</h3>
          <p className="text-muted-foreground text-sm lg:text-base leading-relaxed">
            Get money when you need it, small auto-repayments from your incoming transactions
          </p>
        </div>
      </div>
      
      {/* Additional explanation */}
      <div className="mt-12 lg:mt-16 max-w-3xl mx-auto bg-muted/50 p-6 lg:p-8 rounded-xl shadow-sm">
        <h3 className="text-lg lg:text-xl font-semibold mb-3 lg:mb-4">How Our Loan System Works</h3>
        <p className="text-sm lg:text-base leading-relaxed">
          Like a credit card for your mobile money account - use when you need, pay only for what you use.
          A small percentage of each incoming payment goes toward repayment, matching your business cash flow.
        </p>
      </div>
      
      {/* Example repayment diagram */}
      <div className="mt-10 lg:mt-12 max-w-md lg:max-w-lg mx-auto p-5 lg:p-6 border rounded-xl bg-card shadow-sm">
        <h4 className="font-medium text-base lg:text-lg mb-4 lg:mb-5">Example Repayment</h4>
        <div className="space-y-3 lg:space-y-4 text-sm lg:text-base text-left">
          <div className="flex justify-between pb-2 border-b">
            <span>Loan Amount:</span>
            <span className="font-bold">50,000 RWF</span>
          </div>
          <div className="flex justify-between pb-2 border-b">
            <span>Daily Mobile Money Income:</span>
            <span className="font-bold">~10,000 RWF</span>
          </div>
          <div className="flex justify-between pb-2 border-b">
            <span>Auto-Repayment:</span>
            <span className="font-bold">10% of incoming payments</span>
          </div>
          <div className="flex justify-between pb-2 border-b">
            <span>Average Daily Repayment:</span>
            <span className="font-bold">~1,000 RWF</span>
          </div>
          <div className="flex justify-between font-medium text-nipay-green text-base lg:text-lg">
            <span>Full Repayment:</span>
            <span>~50 days of business</span>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default HowItWorksSection;
