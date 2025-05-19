
import SectionWrapper from '../shared/SectionWrapper';
import { useIsMobile } from '@/hooks/use-mobile';

const HowItWorksSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <SectionWrapper id="how-it-works" className="text-center py-16 md:py-24">
      <h2 className="text-2xl md:text-4xl font-bold mb-8 md:mb-12">
        How NiPay Loans Work
      </h2>
      
      <div className="flex flex-col md:flex-row gap-8 md:gap-0 max-w-4xl mx-auto">
        {/* Step 1 */}
        <div className="flex-1 relative">
          <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-nipay-green flex items-center justify-center text-white text-xl md:text-2xl font-bold mx-auto mb-4 md:mb-6">
            1
          </div>
          <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">Register Your Business</h3>
          <p className="text-muted-foreground text-sm md:text-base px-4">
            Sign up in under 2 minutes with your business and mobile money details
          </p>
          
          {/* Arrow (visible only on desktop) */}
          <div className="hidden md:block absolute top-8 right-0 w-1/4 h-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="2" viewBox="0 0 100 2">
              <line x1="0" y1="1" x2="100" y2="1" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" className="absolute right-0 top-1/2 -translate-y-1/2">
              <polygon points="0,0 10,5 0,10" fill="currentColor" />
            </svg>
          </div>
        </div>
        
        {/* Step 2 */}
        <div className="flex-1 relative">
          <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-nipay-green flex items-center justify-center text-white text-xl md:text-2xl font-bold mx-auto mb-4 md:mb-6">
            2
          </div>
          <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">Get Your Loan Limit</h3>
          <p className="text-muted-foreground text-sm md:text-base px-4">
            Our system analyzes your transaction history and approves a loan amount
          </p>
          
          {/* Arrow (visible only on desktop) */}
          <div className="hidden md:block absolute top-8 right-0 w-1/4 h-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="2" viewBox="0 0 100 2">
              <line x1="0" y1="1" x2="100" y2="1" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" className="absolute right-0 top-1/2 -translate-y-1/2">
              <polygon points="0,0 10,5 0,10" fill="currentColor" />
            </svg>
          </div>
        </div>
        
        {/* Step 3 */}
        <div className="flex-1">
          <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-nipay-green flex items-center justify-center text-white text-xl md:text-2xl font-bold mx-auto mb-4 md:mb-6">
            3
          </div>
          <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">Use & Repay Easily</h3>
          <p className="text-muted-foreground text-sm md:text-base px-4">
            Get money when you need it, small auto-repayments from your incoming transactions
          </p>
        </div>
      </div>
      
      {/* Additional explanation */}
      <div className="mt-10 md:mt-12 max-w-md md:max-w-2xl mx-auto bg-muted/50 p-4 md:p-6 rounded-lg">
        <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">How Our Loan System Works</h3>
        <p className="text-sm md:text-base">
          Like a credit card for your mobile money account - use when you need, pay only for what you use.
          A small percentage of each incoming payment goes toward repayment, matching your business cash flow.
        </p>
      </div>
      
      {/* Example repayment diagram */}
      <div className="mt-10 max-w-md mx-auto p-5 border rounded-lg bg-card">
        <h4 className="font-medium mb-3">Example Repayment</h4>
        <div className="space-y-3 text-sm text-left">
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
          <div className="flex justify-between font-medium text-nipay-green">
            <span>Full Repayment:</span>
            <span>~50 days of business</span>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default HowItWorksSection;
