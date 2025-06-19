
import SectionWrapper from "../shared/SectionWrapper";
import { Smartphone, Shield, BarChart3, Zap, CheckCircle } from "lucide-react";

const WhyWeWin = () => {
  const advantages = [
    { icon: <Smartphone className="h-4 w-4" />, text: "USSD-first where 85% of local transactions happen" },
    { icon: <Shield className="h-4 w-4" />, text: "Auto-repayment reduces default risk" },
    { icon: <BarChart3 className="h-4 w-4" />, text: "Transaction-based credit scoring" },
    { icon: <Zap className="h-4 w-4" />, text: "Free ERP = user stickiness" },
    { icon: <CheckCircle className="h-4 w-4" />, text: "Regulatory groundwork done" }
  ];

  return (
    <SectionWrapper backgroundColor="bg-nipay-dark-green" className="py-16 lg:py-18 text-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl lg:text-3xl font-bold text-center mb-8">
          Why We Win
        </h2>
        
        <div className="space-y-3 max-w-2xl mx-auto">
          {advantages.map((advantage, index) => (
            <div key={index} className="flex items-center gap-3 bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="text-nipay-green flex-shrink-0">
                {advantage.icon}
              </div>
              <span className="text-sm">{advantage.text}</span>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default WhyWeWin;
