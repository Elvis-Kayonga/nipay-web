
import { useEffect, useState } from 'react';
import SectionWrapper from '../shared/SectionWrapper';
import { api, Partners } from '@/services/api';
import { useIsMobile } from '@/hooks/use-mobile';

const ValidationSection = () => {
  const [partners, setPartners] = useState<Partners>({
    organizations: []
  });
  
  const [stats, setStats] = useState<Record<string, string>>({
    mobileMoneyGDPContribution: '',
    mobileMoneyGDPPercentage: '',
    jobsFromSMEs: ''
  });
  
  const isMobile = useIsMobile();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [partnersData, statsData] = await Promise.all([
          api.getPartners(),
          api.getStats()
        ]);
        
        setPartners(partnersData);
        setStats(statsData);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <SectionWrapper 
      id="validation" 
      backgroundColor="bg-muted"
      className="py-16 md:py-24"
    >
      <h2 className="text-2xl md:text-4xl font-bold mb-8 md:mb-12 text-center">
        Backed by Market Data & Partners
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mb-10 md:mb-16">
        <div className="bg-card shadow-md rounded-xl p-6 md:p-8">
          <div className="flex flex-col items-center text-center">
            <div className="text-3xl md:text-4xl font-bold mb-2 md:mb-3 text-nipay-green">
              {stats.mobileMoneyGDPContribution}
            </div>
            <p className="text-base md:text-lg mb-1 md:mb-2">
              Mobile-money is {stats.mobileMoneyGDPPercentage} of SSA GDP
            </p>
            <p className="text-xs md:text-sm text-muted-foreground">GSMA</p>
          </div>
        </div>
        
        <div className="bg-card shadow-md rounded-xl p-6 md:p-8">
          <div className="flex flex-col items-center text-center">
            <div className="text-3xl md:text-4xl font-bold mb-2 md:mb-3 text-nipay-green">
              {stats.jobsFromSMEs}
            </div>
            <p className="text-base md:text-lg mb-1 md:mb-2">
              SMEs employ {stats.jobsFromSMEs} of Rwanda's workforce
            </p>
            <p className="text-xs md:text-sm text-muted-foreground">IFC</p>
          </div>
        </div>
      </div>
      
      {/* Partners logos */}
      <div>
        <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-center">Industry Partners</h3>
        <div className="flex flex-wrap justify-center gap-6 md:gap-12 items-center">
          {partners.organizations.map((org, index) => (
            <div 
              key={`org-${index}`} 
              className={`bg-white p-4 md:p-6 rounded-lg shadow-md flex flex-col items-center justify-center`}
            >
              <img 
                src={org.logo} 
                alt={org.name} 
                className="h-16 md:h-20 object-contain mb-3 md:mb-4"
              />
              <p className="text-center font-medium text-xs md:text-sm">{org.name}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ValidationSection;
