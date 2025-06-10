
import SectionWrapper from "../shared/SectionWrapper";
import { CreditCard, Smartphone, BarChart3 } from "lucide-react";

const WhatWereBuilding = () => {
  const features = [
    {
      icon: <CreditCard className="h-8 w-8" />,
      title: "Overdraft Wallet",
      description: "Borrow against sales with automatic repayment"
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "USSD + App",
      description: "Works on any phone, anywhere in Rwanda"
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Free ERP",
      description: "Helps SMEs track finances and repay faster"
    }
  ];

  return (
    <SectionWrapper backgroundColor="bg-gray-50" className="py-12 lg:py-14">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4 text-nipay-dark-green">
          What We're Building
        </h2>
        <p className="text-lg text-center text-gray-600 mb-8 max-w-2xl mx-auto">
          A comprehensive financial ecosystem designed for Africa's mobile-first economy
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
              <div className="flex justify-center mb-4 text-nipay-green">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold mb-3 text-nipay-dark-green">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default WhatWereBuilding;
