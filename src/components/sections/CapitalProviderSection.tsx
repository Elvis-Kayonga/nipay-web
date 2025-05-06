
import { useState } from 'react';
import SectionWrapper from '../shared/SectionWrapper';
import IconCard from '../shared/IconCard';
import { Button } from '@/components/ui/button';
import InvestorModal from '../modals/InvestorModal';

const CapitalProviderSection = () => {
  const [showInvestorModal, setShowInvestorModal] = useState(false);
  
  return (
    <SectionWrapper 
      backgroundColor="bg-accent text-accent-foreground" 
      className="text-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-12">
        Why Capital Providers Partner with NiPay
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <IconCard 
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4"/>
              <path d="M3 5v14a2 2 0 0 0 2 2h16v-5"/>
              <path d="M18 12a2 2 0 0 0 0 4h4v-4Z"/>
            </svg>
          }
          title="Diversified Micro-Loans"
          description="High volume of small-ticket loans reduces portfolio volatility."
        />
        
        <IconCard 
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/>
              <polyline points="14 2 14 8 20 8"/>
              <path d="M16 13H8"/>
              <path d="M16 17H8"/>
              <path d="M10 9H8"/>
            </svg>
          }
          title="Data-Driven Underwriting"
          description="Transparent, automated risk scoring from digital footprints."
        />
        
        <IconCard 
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <path d="M16 8h-6.5a2.5 2.5 0 0 0 0 5h3a2.5 2.5 0 0 1 0 5H6"/>
              <path d="M12 18v2"/>
              <path d="M12 4v2"/>
            </svg>
          }
          title="Attractive Yield"
          description="Target 12–15% net returns, backed by partner banks."
        />
        
        <IconCard 
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <path d="m9 12 2 2 4-4"/>
            </svg>
          }
          title="Regulatory Compliance"
          description="Structured SPV ensures clear legal & tax framework."
        />
      </div>
      
      <div className="mt-12">
        <Button 
          variant="outline" 
          onClick={() => setShowInvestorModal(true)}
          className="border-white text-white hover:bg-white/10"
        >
          Talk to Us
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
            <path d="M5 12h14"/>
            <path d="m12 5 7 7-7 7"/>
          </svg>
        </Button>
      </div>
      
      <InvestorModal 
        isOpen={showInvestorModal} 
        onClose={() => setShowInvestorModal(false)}
      />
    </SectionWrapper>
  );
};

export default CapitalProviderSection;
