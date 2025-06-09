
import SectionWrapper from '../shared/SectionWrapper';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProblemSection = () => {
  return (
    <SectionWrapper id="problem" className="py-20 lg:py-32">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl lg:text-5xl xl:text-6xl font-bold mb-8 lg:mb-12 text-center leading-tight">
          The Problem: Limited Access to Business Loans
        </h2>
        
        <div className="space-y-8 lg:space-y-12 text-lg lg:text-xl">
          <div className="bg-muted p-8 lg:p-12 rounded-2xl mb-12 lg:mb-16 shadow-sm">
            <p className="font-bold text-2xl lg:text-3xl mb-6 text-nipay-green">In Rwanda today:</p>
            <ul className="space-y-4 lg:space-y-6">
              <li className="flex items-start gap-4">
                <span className="text-nipay-green font-bold text-xl">→</span>
                <span className="leading-relaxed">83% of small businesses are rejected by banks for loans</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-nipay-green font-bold text-xl">→</span>
                <span className="leading-relaxed">Only 21% of SMEs have access to formal financial services</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-nipay-green font-bold text-xl">→</span>
                <span className="leading-relaxed">Most mobile money users can't access credit despite regular transactions</span>
              </li>
              <li className="flex items-start gap-4">
                <span className="text-nipay-green font-bold text-xl">→</span>
                <span className="leading-relaxed">Stock-outs cost businesses 15-35% in lost sales monthly</span>
              </li>
            </ul>
          </div>
          
          <p className="text-center text-xl lg:text-2xl leading-relaxed">
            Our AI-powered platform transforms your mobile money history into instant growth capital.
          </p>
          
          <ul className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto mt-12 lg:mt-16 text-left">
            <li className="flex items-center gap-4 p-4 rounded-lg bg-card shadow-sm">
              <span className="text-nipay-green font-bold text-2xl lg:text-3xl">↑40%</span>
              <span className="text-lg lg:text-xl">Boost inventory without paperwork</span>
            </li>
            <li className="flex items-center gap-4 p-4 rounded-lg bg-card shadow-sm">
              <span className="text-nipay-green font-bold text-2xl lg:text-3xl">↑35%</span>
              <span className="text-lg lg:text-xl">Increase sales with consistent stock</span>
            </li>
            <li className="flex items-center gap-4 p-4 rounded-lg bg-card shadow-sm">
              <span className="text-nipay-green font-bold text-2xl lg:text-3xl">↓15%</span>
              <span className="text-lg lg:text-xl">Save on emergency purchases</span>
            </li>
            <li className="flex items-center gap-4 p-4 rounded-lg bg-card shadow-sm">
              <span className="text-nipay-green font-bold text-2xl lg:text-3xl">↓50%</span>
              <span className="text-lg lg:text-xl">Reduce cash flow gaps</span>
            </li>
          </ul>
        </div>
        
        <div className="pt-12 lg:pt-16 text-center">
          <Link to="/waitlist">
            <Button className="bg-nipay-green hover:bg-nipay-dark-green text-lg lg:text-xl py-6 lg:py-8 px-8 lg:px-12 shadow-lg hover:shadow-xl transition-all duration-300">
              Join Our Pilot Program
              <ArrowRight className="ml-3 h-5 w-5 lg:h-6 lg:w-6" />
            </Button>
          </Link>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ProblemSection;
