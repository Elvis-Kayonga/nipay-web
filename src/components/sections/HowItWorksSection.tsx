import SectionWrapper from '../shared/SectionWrapper';
import { useIsMobile } from '@/hooks/use-mobile';
const HowItWorksSection = () => {
  const isMobile = useIsMobile();
  return <SectionWrapper id="how-it-works" className="text-center py-16 md:py-24">
      <h2 className="text-2xl md:text-4xl font-bold mb-8 md:mb-12">
        How It Works
      </h2>
      
      <div className="flex flex-col md:flex-row gap-8 md:gap-0 max-w-4xl mx-auto">
        {/* Step 1 */}
        <div className="flex-1 relative">
          <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-nipay-green flex items-center justify-center text-white text-xl md:text-2xl font-bold mx-auto mb-4 md:mb-6">
            1
          </div>
          <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">Use NiPay Wallet</h3>
          <p className="text-muted-foreground text-sm md:text-base">
            Sign up in under 2 minutes.
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
          <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">Get Credit Line</h3>
          <p className="text-muted-foreground text-sm md:text-base">
            Instant limit approval.
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
          <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3">Use & Repay</h3>
          <p className="text-muted-foreground text-sm md:text-base">
            Draw when needed, auto-repay.
          </p>
        </div>
      </div>
      
      {/* Additional explanation */}
      <div className="mt-10 md:mt-12 max-w-md md:max-w-2xl mx-auto bg-muted/50 p-4 md:p-6 rounded-lg">
        <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">What is Revolving Credit?</h3>
        <p className="text-sm md:text-base">
          Like a credit card for your NiPay wallet. 
          Use what you need, pay only for what you use.
          Small auto-repayments match your business flow.
        </p>
      </div>
      
      {/* Mobile app illustration */}
      
    </SectionWrapper>;
};
export default HowItWorksSection;