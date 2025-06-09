
import SectionWrapper from '../shared/SectionWrapper';
import { Button } from '@/components/ui/button';
import { ArrowRight, TrendingUp, Clock, Wallet, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

const SmeBenefitsSection = () => {
  return <SectionWrapper id="benefits" className="py-20 lg:py-32">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
        <div className="space-y-8 lg:space-y-12 order-2 xl:order-1">
          <h2 className="text-3xl lg:text-5xl xl:text-6xl font-bold leading-tight">
            How NiPay AI Powers Your Growth
          </h2>
          
          <ul className="space-y-6 lg:space-y-8">
            <li className="flex gap-4 lg:gap-6 items-start p-4 lg:p-6 rounded-xl bg-card shadow-sm hover:shadow-md transition-shadow">
              <div className="flex-shrink-0 text-nipay-green mt-1">
                <TrendingUp className="w-6 h-6 lg:w-8 lg:h-8" />
              </div>
              <div>
                <p className="font-medium text-lg lg:text-xl"><span className="text-nipay-green font-bold">200%</span> instant capital based on your inflows</p>
                <p className="text-base lg:text-lg text-muted-foreground mt-2 leading-relaxed">AI analyzes your transactions to double purchasing power</p>
              </div>
            </li>
            
            <li className="flex gap-4 lg:gap-6 items-start p-4 lg:p-6 rounded-xl bg-card shadow-sm hover:shadow-md transition-shadow">
              <div className="flex-shrink-0 text-nipay-green mt-1">
                <Wallet className="w-6 h-6 lg:w-8 lg:h-8" />
              </div>
              <div>
                <p className="font-medium text-lg lg:text-xl">Pay as you use - <span className="text-nipay-green font-bold">save 30%</span></p>
                <p className="text-base lg:text-lg text-muted-foreground mt-2 leading-relaxed">AI-optimized repayment aligned to your business cycle</p>
              </div>
            </li>
            
            <li className="flex gap-4 lg:gap-6 items-start p-4 lg:p-6 rounded-xl bg-card shadow-sm hover:shadow-md transition-shadow">
              <div className="flex-shrink-0 text-nipay-green mt-1">
                <Clock className="w-6 h-6 lg:w-8 lg:h-8" />
              </div>
              <div>
                <p className="font-medium text-lg lg:text-xl">Access funds <span className="text-nipay-green font-bold">80% faster</span></p>
                <p className="text-base lg:text-lg text-muted-foreground mt-2 leading-relaxed">AI assessment in hours instead of weeks</p>
              </div>
            </li>
            
            <li className="flex gap-4 lg:gap-6 items-start p-4 lg:p-6 rounded-xl bg-card shadow-sm hover:shadow-md transition-shadow">
              <div className="flex-shrink-0 text-nipay-green mt-1">
                <Shield className="w-6 h-6 lg:w-8 lg:h-8" />
              </div>
              <div>
                <p className="font-medium text-lg lg:text-xl"><span className="text-nipay-green font-bold">100% digital</span> with no collateral</p>
                <p className="text-base lg:text-lg text-muted-foreground mt-2 leading-relaxed">AI evaluates your digital financial footprint</p>
              </div>
            </li>
          </ul>
          
          <div className="pt-6 lg:pt-8">
            <Link to="/waitlist">
              <Button className="bg-nipay-green hover:bg-nipay-dark-green w-full sm:w-auto text-lg lg:text-xl py-6 lg:py-8 px-8 lg:px-12 shadow-lg hover:shadow-xl transition-all duration-300">
                Join Waitlist
                <ArrowRight className="ml-3 h-5 w-5 lg:h-6 lg:w-6" />
              </Button>
            </Link>
          </div>
        </div>
        
        <div className="bg-muted rounded-2xl overflow-hidden shadow-xl order-1 xl:order-2">
          <img alt="NiPay mobile app interface" className="w-full h-auto" src="/lovable-uploads/51946dc5-f2c8-440c-9c1b-7671876e207e.png" />
          <div className="p-6 lg:p-8">
            <h3 className="font-bold text-lg lg:text-xl mb-3">NiPay AI Experience</h3>
            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
              Intelligent credit decisions at your fingertips
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>;
};

export default SmeBenefitsSection;
