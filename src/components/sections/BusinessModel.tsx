
import SectionWrapper from "../shared/SectionWrapper";

const BusinessModel = () => {
  const revenueStreams = [
    { stream: "Loan Fees (2%)", estimate: "$7.2M" },
    { stream: "Wallet Fees", estimate: "$8.76M" },
    { stream: "ERP SaaS ($3/mo)", estimate: "$540K" },
    { stream: "Merchant Commissions", estimate: "$300K" }
  ];

  return (
    <SectionWrapper className="py-12 lg:py-14">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8 text-nipay-dark-green">
          Business Model
        </h2>
        
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden max-w-2xl mx-auto">
          <div className="bg-nipay-green text-white p-5">
            <h3 className="text-lg font-bold text-center">Annual Revenue Projections</h3>
          </div>
          
          <div className="p-5">
            {revenueStreams.map((item, index) => (
              <div key={index} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0">
                <span className="font-medium text-gray-700 text-sm">{item.stream}</span>
                <span className="text-lg font-bold text-nipay-dark-green">{item.estimate}</span>
              </div>
            ))}
            
            <div className="flex justify-between items-center pt-4 mt-4 border-t-2 border-nipay-green">
              <span className="text-lg font-bold text-nipay-dark-green">Total ARR</span>
              <span className="text-xl font-bold text-nipay-green">$16.8M</span>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default BusinessModel;
