
import SectionWrapper from "../shared/SectionWrapper";
import AnimatedCounter from "../shared/AnimatedCounter";
import { Users, DollarSign, TrendingUp, Target } from "lucide-react";

const TractionSnapshot = () => {
  const metrics = [
    { icon: <Users className="h-6 w-6" />, value: "400+", label: "SMEs onboarded", color: "text-blue-500" },
    { icon: <DollarSign className="h-6 w-6" />, value: "174K", label: "requested in loan book", color: "text-green-500", prefix: "$" },
    { icon: <TrendingUp className="h-6 w-6" />, value: "1.8B", label: "SME funding gap in Rwanda", color: "text-orange-500", prefix: "$" },
    { icon: <Target className="h-6 w-6" />, value: "16.8M", label: "projected ARR at scale", color: "text-purple-500", prefix: "$" }
  ];

  return (
    <SectionWrapper className="py-12 lg:py-14">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-nipay-dark-green">
            Traction Snapshot
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Real numbers driving our growth in Rwanda's fintech landscape
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100 hover-lift group">
              <div className={`flex justify-center mb-4 ${metric.color} group-hover:scale-110 transition-transform duration-300`}>
                {metric.icon}
              </div>
              <div className="text-3xl lg:text-4xl font-bold text-nipay-dark-green mb-3 group-hover:scale-105 transition-transform">
                {metric.prefix && <span className="text-2xl">{metric.prefix}</span>}
                <AnimatedCounter value={metric.value} />
              </div>
              <p className="text-gray-600 font-medium text-sm leading-relaxed">{metric.label}</p>
            </div>
          ))}
        </div>
        
        {/* Additional context */}
        <div className="mt-10 text-center">
          <div className="inline-flex items-center bg-nipay-green/10 text-nipay-green px-6 py-3 rounded-full text-sm font-semibold">
            <TrendingUp className="w-4 h-4 mr-2" />
            Growing 40% month-over-month
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default TractionSnapshot;
