
import SectionWrapper from '../shared/SectionWrapper';
import IconCard from '../shared/IconCard';

const SolutionSection = () => {
  return (
    <SectionWrapper 
      id="solution" 
      backgroundColor="bg-nipay-green" 
      className="text-white"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        NiPay: Overdrafts Powered by Your Mobile-Money Receipts
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
        <IconCard 
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="18" height="18" x="3" y="3" rx="2" />
              <path d="M7 7h.01" />
              <path d="M12 7h.01" />
              <path d="M17 7h.01" />
              <path d="M7 12h.01" />
              <path d="M12 12h.01" />
              <path d="M17 12h.01" />
              <path d="M7 17h.01" />
              <path d="M12 17h.01" />
              <path d="M17 17h.01" />
            </svg>
          }
          title="Real-Time Approval"
          description="Instant credit scoring from 6 months of transaction history."
          className="text-white"
        />
        
        <IconCard 
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2v20" />
              <path d="m4.93 15.93 14.14-14.14" />
              <path d="m19.07 15.93-14.14-14.14" />
            </svg>
          }
          title="Auto-Repay on Receipts"
          description="Small % per wallet payment; never miss a deadline."
          className="text-white"
        />
        
        <IconCard 
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0" />
              <path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2" />
              <path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8" />
              <path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15" />
            </svg>
          }
          title="Partner-Bank Risk Cover"
          description="We match you with banks who underwrite your overdraft."
          className="text-white"
        />
      </div>
    </SectionWrapper>
  );
};

export default SolutionSection;
