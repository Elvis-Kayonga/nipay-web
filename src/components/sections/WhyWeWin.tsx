
import SectionWrapper from "../shared/SectionWrapper";
import { Smartphone, Shield, BarChart3, Zap, CheckCircle } from "lucide-react";

const WhyWeWin = () => {
  const advantages = [
    { icon: <Smartphone className="h-5 w-5" />, text: "USSD-first where 85% of local transactions happen" },
    { icon: <Shield className="h-5 w-5" />, text: "Auto-repayment reduces default risk" },
    { icon: <BarChart3 className="h-5 w-5" />, text: "Transaction-based credit scoring" },
    { icon: <Zap className="h-5 w-5" />, text: "Free ERP = user stickiness" },
    { icon: <CheckCircle className="h-5 w-5" />, text: "Regulatory groundwork done" }
  ];

  return (
    <SectionWrapper backgroundColor="bg-nipay-dark-green" className="py-12 lg:py-14 text-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8">
          Why We Win
        </h2>
        
        <div className="space-y-4 max-w-2xl mx-auto">
          {advantages.map((advantage, index) => (
            <div key={index} className="flex items-center gap-3 bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="text-nipay-green flex-shrink-0">
                {advantage.icon}
              </div>
              <span className="text-base">{advantage.text}</span>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default WhyWeWin;
