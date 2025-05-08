
import SectionWrapper from '../shared/SectionWrapper';

const HowItWorksSection = () => {
  return (
    <SectionWrapper id="how-it-works" className="text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-12">
        How It Works
      </h2>
      
      <div className="flex flex-col md:flex-row gap-6 md:gap-0 max-w-4xl mx-auto">
        {/* Step 1 */}
        <div className="flex-1 relative">
          <div className="w-16 h-16 rounded-full bg-nipay-green flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
            1
          </div>
          <h3 className="text-xl font-bold mb-3">Use the NiPay Wallet</h3>
          <p className="text-muted-foreground">
            Sign up through USSD code or app in under 2 minutes.
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
          <div className="w-16 h-16 rounded-full bg-nipay-green flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
            2
          </div>
          <h3 className="text-xl font-bold mb-3">Get Your Credit Line</h3>
          <p className="text-muted-foreground">
            We analyze your activity and instantly approve your limit.
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
          <div className="w-16 h-16 rounded-full bg-nipay-green flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
            3
          </div>
          <h3 className="text-xl font-bold mb-3">Use & Repay Flexibly</h3>
          <p className="text-muted-foreground">
            Draw credit when needed, repay through incoming transactions.
          </p>
        </div>
      </div>
      
      {/* Additional explanation */}
      <div className="mt-12 max-w-2xl mx-auto bg-muted/50 p-6 rounded-lg">
        <h3 className="text-xl font-semibold mb-3">What is Revolving Credit?</h3>
        <p className="text-base">
          Like a credit card for your NiPay wallet based on your business cash flow. 
          Use what you need when you need it, and pay only for what you use.
          Small repayments from incoming transactions match your business rhythm.
        </p>
      </div>
      
      {/* Mobile app illustration */}
      <div className="mt-16 bg-muted p-6 rounded-xl max-w-2xl mx-auto">
        <div className="flex items-center justify-center">
          <div className="w-1/3 border-2 border-border rounded-xl overflow-hidden shadow-md mr-4">
            <img 
              src="/placeholder.svg" 
              alt="USSD interface" 
              className="w-full h-auto"
            />
          </div>
          <div className="w-1/3 border-2 border-nipay-green rounded-xl overflow-hidden shadow-md">
            <img 
              src="/placeholder.svg" 
              alt="NiPay app" 
              className="w-full h-auto"
            />
          </div>
          <div className="w-1/3 border-2 border-border rounded-xl overflow-hidden shadow-md ml-4">
            <img 
              src="/placeholder.svg" 
              alt="Repayment flow" 
              className="w-full h-auto"
            />
          </div>
        </div>
        <p className="text-sm text-muted-foreground mt-4">
          Available via USSD code *123# or our mobile app.
        </p>
      </div>
    </SectionWrapper>
  );
};

export default HowItWorksSection;
