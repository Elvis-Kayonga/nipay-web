
import SectionWrapper from "../shared/SectionWrapper";
import { Users, DollarSign, TrendingUp, Target } from "lucide-react";

const TractionSnapshot = () => {
  const metrics = [
    { icon: <Users className="h-7 w-7" />, value: "400+", label: "SMEs onboarded" },
    { icon: <DollarSign className="h-7 w-7" />, value: "$174K", label: "requested in loan book" },
    { icon: <TrendingUp className="h-7 w-7" />, value: "$1.8B", label: "SME funding gap in Rwanda" },
    { icon: <Target className="h-7 w-7" />, value: "$16.8M", label: "projected ARR at scale" }
  ];

  return (
    <SectionWrapper className="py-12 lg:py-14">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8 text-nipay-dark-green">
          Traction Snapshot
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
              <div className="flex justify-center mb-3 text-nipay-green">
                {metric.icon}
              </div>
              <div className="text-3xl font-bold text-nipay-dark-green mb-2">
                {metric.value}
              </div>
              <p className="text-gray-600 font-medium text-sm">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default TractionSnapshot;
