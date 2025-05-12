
import SectionWrapper from '../shared/SectionWrapper';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProblemSection = () => {
  return (
    <SectionWrapper id="problem" className="py-16 md:py-24">
      <div className="max-w-3xl mx-auto text-center mb-8">
        <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">
          Why Your Business Needs NiPay
        </h2>
        
        <div className="space-y-6 text-base md:text-lg">
          <p>
            Our AI-powered platform transforms your mobile money history into instant growth capital.
          </p>
          
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto mt-8 text-left">
            <li className="flex items-center gap-2">
              <span className="text-nipay-green font-bold text-xl">↑40%</span>
              <span>Boost inventory without paperwork</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-nipay-green font-bold text-xl">↑35%</span>
              <span>Increase sales with consistent stock</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-nipay-green font-bold text-xl">↓15%</span>
              <span>Save on emergency purchases</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-nipay-green font-bold text-xl">↓50%</span>
              <span>Reduce cash flow gaps</span>
            </li>
          </ul>
          
          <p className="pt-2 font-medium">
            While banks reject 83% of SMEs, our AI approves eligible businesses in hours.
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
    </SectionWrapper>
  );
};

export default ProblemSection;
