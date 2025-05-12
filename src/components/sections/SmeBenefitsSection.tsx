
import SectionWrapper from '../shared/SectionWrapper';
import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp, Clock, Wallet, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const SmeBenefitsSection = () => {
  return <SectionWrapper id="benefits" className="py-16 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="space-y-6 md:space-y-8 order-2 lg:order-1">
          <h2 className="text-2xl md:text-4xl font-bold">
            How NiPay AI Powers Your Growth
          </h2>
          
          <ul className="space-y-4 md:space-y-6">
            <li className="flex gap-3 items-start">
              <div className="flex-shrink-0 text-nipay-green mt-1">
                <TrendingUp className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div>
                <p className="font-medium"><span className="text-nipay-green font-bold">200%</span> instant capital based on your inflows</p>
                <p className="text-sm text-muted-foreground mt-1">AI analyzes your transactions to double purchasing power</p>
              </div>
            </li>
            
            <li className="flex gap-3 items-start">
              <div className="flex-shrink-0 text-nipay-green mt-1">
                <Wallet className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div>
                <p className="font-medium">Pay as you use - <span className="text-nipay-green font-bold">save 30%</span></p>
                <p className="text-sm text-muted-foreground mt-1">AI-optimized repayment aligned to your business cycle</p>
              </div>
            </li>
            
            <li className="flex gap-3 items-start">
              <div className="flex-shrink-0 text-nipay-green mt-1">
                <Clock className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div>
                <p className="font-medium">Access funds <span className="text-nipay-green font-bold">80% faster</span></p>
                <p className="text-sm text-muted-foreground mt-1">AI assessment in hours instead of weeks</p>
              </div>
            </li>
            
            <li className="flex gap-3 items-start">
              <div className="flex-shrink-0 text-nipay-green mt-1">
                <Shield className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div>
                <p className="font-medium"><span className="text-nipay-green font-bold">100% digital</span> with no collateral</p>
                <p className="text-sm text-muted-foreground mt-1">AI evaluates your digital financial footprint</p>
              </div>
            </li>
          </ul>
          
          <div className="pt-2 md:pt-4">
            <Link to="/waitlist">
              <Button className="bg-nipay-green hover:bg-nipay-dark-green w-full sm:w-auto text-base md:text-lg py-5 md:py-6 px-6 md:px-8">
                Join Waitlist
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
              </Button>
            </Link>
          </div>
        </div>
        
        <div className="bg-muted rounded-xl overflow-hidden shadow-lg order-1 lg:order-2">
          <img alt="NiPay mobile app interface" className="w-full h-auto" src="/lovable-uploads/51946dc5-f2c8-440c-9c1b-7671876e207e.png" />
          <div className="p-4 md:p-6">
            <h3 className="font-bold mb-2">NiPay AI Experience</h3>
            <p className="text-sm text-muted-foreground">
              Intelligent credit decisions at your fingertips
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>;
};

export default SmeBenefitsSection;
