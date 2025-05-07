
import { useState } from 'react';
import SectionWrapper from '../shared/SectionWrapper';
import IconCard from '../shared/IconCard';
import { Button } from '@/components/ui/button';
import InvestorModal from '../modals/InvestorModal';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';

const CapitalProviderSection = () => {
  const [showInvestorModal, setShowInvestorModal] = useState(false);
  
  return (
    <SectionWrapper 
      backgroundColor="bg-accent text-accent-foreground" 
      className="text-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-6">
        Why Capital Providers Partner with NiPay
      </h2>
      
      <p className="text-lg mb-12 max-w-3xl mx-auto">
        Deploy capital efficiently with minimal acquisition costs and earn <span className="font-semibold">10-12% quarterly returns</span>
        <Badge variant="outline" className="ml-2 bg-primary/10 border-primary/30">Minimum $10,000 USD</Badge>
      </p>
      
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
          description="Target 10–12% quarterly returns, backed by partner banks."
        />
        
        <IconCard 
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M8.8 20v-4.1l1.9.2a2.3 2.3 0 0 0 2.164-2.1V8.3A5.37 5.37 0 0 0 2 8.25c0 2.8.656 3.85 4 7.55V20"/>
              <path d="M19.8 17.8a7.5 7.5 0 0 0-2.4-11.8"/>
              <path d="M22 12a10 10 0 0 0-3.1-7.3"/>
            </svg>
          }
          title="Customer Acquisition Savings"
          description="Save millions in sourcing and onboarding costs."
        />
      </div>
      
      <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
        <Link to="/investors">
          <Button 
            variant="green"
            size="lg"
            className="font-semibold"
          >
            Learn More About Investing
          </Button>
        </Link>
        <Button 
          variant="outline-white"
          size="lg"
          onClick={() => setShowInvestorModal(true)}
          className="font-semibold"
        >
          Talk to Our Team
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
