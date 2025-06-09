
import SectionWrapper from '../shared/SectionWrapper';
import { useIsMobile } from '@/hooks/use-mobile';

const HowItWorksSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <SectionWrapper id="how-it-works" className="text-center py-20 lg:py-32">
      <h2 className="text-3xl lg:text-5xl xl:text-6xl font-bold mb-12 lg:mb-16 leading-tight">
        How NiPay Loans Work
      </h2>
      
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16 max-w-6xl mx-auto mb-16 lg:mb-20">
        {/* Step 1 */}
        <div className="flex-1 relative p-6 lg:p-8 rounded-2xl bg-card shadow-sm hover:shadow-md transition-shadow">
          <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-nipay-green flex items-center justify-center text-white text-2xl lg:text-3xl font-bold mx-auto mb-6 lg:mb-8 shadow-lg">
            1
          </div>
          <h3 className="text-xl lg:text-2xl font-bold mb-4 lg:mb-6">Register Your Business</h3>
          <p className="text-muted-foreground text-base lg:text-lg leading-relaxed">
            Sign up in under 2 minutes with your business and mobile money details
          </p>
          
          {/* Arrow (visible only on desktop) */}
          <div className="hidden lg:block absolute top-1/2 -right-6 xl:-right-8 w-12 xl:w-16 h-2 transform -translate-y-1/2">
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="2" viewBox="0 0 100 2">
              <line x1="0" y1="1" x2="80" y2="1" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" className="text-nipay-green" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 10 10" className="absolute right-0 top-1/2 -translate-y-1/2 text-nipay-green">
              <polygon points="0,0 10,5 0,10" fill="currentColor" />
            </svg>
          </div>
        </div>
        
        {/* Step 2 */}
        <div className="flex-1 relative p-6 lg:p-8 rounded-2xl bg-card shadow-sm hover:shadow-md transition-shadow">
          <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-nipay-green flex items-center justify-center text-white text-2xl lg:text-3xl font-bold mx-auto mb-6 lg:mb-8 shadow-lg">
            2
          </div>
          <h3 className="text-xl lg:text-2xl font-bold mb-4 lg:mb-6">Get Your Loan Limit</h3>
          <p className="text-muted-foreground text-base lg:text-lg leading-relaxed">
            Our system analyzes your transaction history and approves a loan amount
          </p>
          
          {/* Arrow (visible only on desktop) */}
          <div className="hidden lg:block absolute top-1/2 -right-6 xl:-right-8 w-12 xl:w-16 h-2 transform -translate-y-1/2">
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="2" viewBox="0 0 100 2">
              <line x1="0" y1="1" x2="80" y2="1" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" className="text-nipay-green" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 10 10" className="absolute right-0 top-1/2 -translate-y-1/2 text-nipay-green">
              <polygon points="0,0 10,5 0,10" fill="currentColor" />
            </svg>
          </div>
        </div>
        
        {/* Step 3 */}
        <div className="flex-1 p-6 lg:p-8 rounded-2xl bg-card shadow-sm hover:shadow-md transition-shadow">
          <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-nipay-green flex items-center justify-center text-white text-2xl lg:text-3xl font-bold mx-auto mb-6 lg:mb-8 shadow-lg">
            3
          </div>
          <h3 className="text-xl lg:text-2xl font-bold mb-4 lg:mb-6">Use & Repay Easily</h3>
          <p className="text-muted-foreground text-base lg:text-lg leading-relaxed">
            Get money when you need it, small auto-repayments from your incoming transactions
          </p>
        </div>
      </div>
      
      {/* Additional explanation */}
      <div className="mt-16 lg:mt-20 max-w-4xl mx-auto bg-muted/50 p-8 lg:p-12 rounded-2xl shadow-sm">
        <h3 className="text-xl lg:text-2xl font-semibold mb-4 lg:mb-6">How Our Loan System Works</h3>
        <p className="text-base lg:text-lg leading-relaxed">
          Like a credit card for your mobile money account - use when you need, pay only for what you use.
          A small percentage of each incoming payment goes toward repayment, matching your business cash flow.
        </p>
      </div>
      
      {/* Example repayment diagram */}
      <div className="mt-12 lg:mt-16 max-w-lg lg:max-w-xl mx-auto p-6 lg:p-8 border rounded-2xl bg-card shadow-sm">
        <h4 className="font-medium text-lg lg:text-xl mb-6">Example Repayment</h4>
        <div className="space-y-4 lg:space-y-5 text-base lg:text-lg text-left">
          <div className="flex justify-between pb-3 border-b">
            <span>Loan Amount:</span>
            <span className="font-bold">50,000 RWF</span>
          </div>
          <div className="flex justify-between pb-3 border-b">
            <span>Daily Mobile Money Income:</span>
            <span className="font-bold">~10,000 RWF</span>
          </div>
          <div className="flex justify-between pb-3 border-b">
            <span>Auto-Repayment:</span>
            <span className="font-bold">10% of incoming payments</span>
          </div>
          <div className="flex justify-between pb-3 border-b">
            <span>Average Daily Repayment:</span>
            <span className="font-bold">~1,000 RWF</span>
          </div>
          <div className="flex justify-between font-medium text-nipay-green text-lg lg:text-xl">
            <span>Full Repayment:</span>
            <span>~50 days of business</span>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default HowItWorksSection;
