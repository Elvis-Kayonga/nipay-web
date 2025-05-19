
import SectionWrapper from '../shared/SectionWrapper';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProblemSection = () => {
  return (
    <SectionWrapper id="problem" className="py-16 md:py-24">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 text-center">
          The Problem: Limited Access to Business Loans
        </h2>
        
        <div className="space-y-6 text-base md:text-lg">
          <div className="bg-muted p-6 rounded-lg mb-8">
            <p className="font-bold text-xl mb-3 text-nipay-green">In Rwanda today:</p>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-nipay-green font-bold">→</span>
                <span>83% of small businesses are rejected by banks for loans</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-nipay-green font-bold">→</span>
                <span>Only 21% of SMEs have access to formal financial services</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-nipay-green font-bold">→</span>
                <span>Most mobile money users can't access credit despite regular transactions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-nipay-green font-bold">→</span>
                <span>Stock-outs cost businesses 15-35% in lost sales monthly</span>
              </li>
            </ul>
          </div>
          
          <p className="text-center">
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
        </div>
        
        <div className="pt-6 md:pt-8 text-center">
          <Link to="/waitlist">
            <Button className="bg-nipay-green hover:bg-nipay-dark-green text-base md:text-lg">
              Join Our Pilot Program
              <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ProblemSection;
