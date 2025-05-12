
import { useEffect, useState } from 'react';
import SectionWrapper from '../shared/SectionWrapper';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import stats from '@/data/stats.json';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProblemSection = () => {
  // Animation states for the statistics
  const [animateStats, setAnimateStats] = useState(false);
  
  useEffect(() => {
    // Start animation after component mounts
    const timer = setTimeout(() => {
      setAnimateStats(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <SectionWrapper id="problem" className="py-16 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
        <div>
          <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">
            Why Your Business Needs NiPay
          </h2>
          
          <div className="space-y-4 md:space-y-5 text-base md:text-lg">
            <p>
              Running a successful business in Rwanda requires consistent access to capital. 
              With NiPay, your mobile money transactions become your pathway to growth.
            </p>
            
            <ul className="space-y-2 list-disc pl-5">
              <li>
                <span className="font-semibold">Boost inventory by up to 40%</span> without lengthy loan applications
              </li>
              <li>
                <span className="font-semibold">Increase sales by 25-35%</span> with consistent stock availability
              </li>
              <li>
                <span className="font-semibold">Save 15% on emergency purchases</span> by planning ahead with accessible capital
              </li>
              <li>
                <span className="font-semibold">Reduce cash flow gaps by 50%</span> with instant access to working capital
              </li>
            </ul>
            
            <p className="pt-2">
              While traditional banks only approve 17% of SME loan applications, NiPay approves eligible businesses within hours based on your mobile money transaction history.
            </p>
          </div>
          
          <div className="pt-6 md:pt-8">
            <Link to="/waitlist">
              <Button className="bg-nipay-green hover:bg-nipay-dark-green text-base md:text-lg">
                Start Growing Your Business
                <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
              </Button>
            </Link>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4 md:gap-6">
          <Card className={`bg-nipay-green/5 border-nipay-green/20 transition-all duration-1000 ${animateStats ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <CardContent className="p-4 md:p-6">
              <div className="text-3xl md:text-4xl font-bold text-nipay-dark-green mb-2">
                {stats.bankLendingToSMEs}
              </div>
              <p className="text-sm md:text-base">
                Current bank lending to SMEs despite high demand
              </p>
            </CardContent>
          </Card>
          
          <Card className={`bg-nipay-green/5 border-nipay-green/20 transition-all duration-1000 delay-300 ${animateStats ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <CardContent className="p-4 md:p-6">
              <div className="text-3xl md:text-4xl font-bold text-nipay-dark-green mb-2">
                {stats.creditConstrainedPercentage}
              </div>
              <p className="text-sm md:text-base">
                SMEs that are credit constrained in Rwanda
              </p>
            </CardContent>
          </Card>
          
          <Card className={`bg-nipay-green/5 border-nipay-green/20 transition-all duration-1000 delay-150 ${animateStats ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <CardContent className="p-4 md:p-6">
              <div className="text-3xl md:text-4xl font-bold text-nipay-dark-green mb-2">
                {stats.mobileMoneySharOfPayments}
              </div>
              <p className="text-sm md:text-base">
                Business transactions through mobile money
              </p>
            </CardContent>
          </Card>
          
          <Card className={`bg-nipay-green/5 border-nipay-green/20 transition-all duration-1000 delay-450 ${animateStats ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <CardContent className="p-4 md:p-6">
              <div className="text-3xl md:text-4xl font-bold text-nipay-dark-green mb-2">
                2x
              </div>
              <p className="text-sm md:text-base">
                Increase in capital access with NiPay
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ProblemSection;
