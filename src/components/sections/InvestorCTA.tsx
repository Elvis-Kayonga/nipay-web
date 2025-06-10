
import SectionWrapper from "../shared/SectionWrapper";
import InvestorForm from "../forms/InvestorForm";
import { CheckCircle } from "lucide-react";

const InvestorCTA = () => {
  return (
    <SectionWrapper id="investor-form" backgroundColor="bg-gray-50" className="py-12 lg:py-14">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-nipay-dark-green">
            Ready to Invest?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join us in transforming SME finance across Africa. Get in touch to learn more about our investment opportunity.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div className="space-y-5">
            <div className="bg-white rounded-xl p-5 shadow-md border border-gray-100">
              <h3 className="text-lg font-bold mb-4 text-nipay-dark-green">Investment Highlights</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-4 w-4 text-nipay-green flex-shrink-0" />
                  <span className="text-sm">Proven traction with 400+ SMEs</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-4 w-4 text-nipay-green flex-shrink-0" />
                  <span className="text-sm">Large addressable market ($1.8B gap)</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-4 w-4 text-nipay-green flex-shrink-0" />
                  <span className="text-sm">Scalable technology platform</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-4 w-4 text-nipay-green flex-shrink-0" />
                  <span className="text-sm">Experienced founding team</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <h3 className="text-xl font-bold mb-5 text-nipay-dark-green text-center">
              Contact Our Team
            </h3>
            <InvestorForm onSuccess={() => {}} />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default InvestorCTA;
