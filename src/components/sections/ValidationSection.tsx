
import { useEffect, useState } from 'react';
import SectionWrapper from '../shared/SectionWrapper';
import { api, Partners } from '@/services/api';

const ValidationSection = () => {
  const [partners, setPartners] = useState<Partners>({
    organizations: []
  });
  
  const [stats, setStats] = useState<Record<string, string>>({
    mobileMoneyGDPContribution: '',
    mobileMoneyGDPPercentage: '',
    jobsFromSMEs: ''
  });

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
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        Backed by Market Data & Trusted Partners
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16">
        <div className="bg-card shadow-md rounded-xl p-8">
          <div className="flex flex-col items-center text-center">
            <div className="text-4xl font-bold mb-3 text-nipay-green">
              {stats.mobileMoneyGDPContribution}
            </div>
            <p className="text-lg mb-2">
              Mobile-money contributed {stats.mobileMoneyGDPPercentage} to SSA GDP in 2023
            </p>
            <p className="text-sm text-muted-foreground">GSMA</p>
          </div>
        </div>
        
        <div className="bg-card shadow-md rounded-xl p-8">
          <div className="flex flex-col items-center text-center">
            <div className="text-4xl font-bold mb-3 text-nipay-green">
              {stats.jobsFromSMEs}
            </div>
            <p className="text-lg mb-2">
              SMEs employ {stats.jobsFromSMEs} of Rwanda's workforce
            </p>
            <p className="text-sm text-muted-foreground">IFC</p>
          </div>
        </div>
      </div>
      
      {/* Partners logos */}
      <div>
        <h3 className="text-xl font-bold mb-6 text-center">Industry Partners</h3>
        <div className="flex flex-wrap justify-center gap-12 items-center">
          {partners.organizations.map((org, index) => (
            <div 
              key={`org-${index}`} 
              className="bg-white p-6 rounded-lg shadow-md w-48 h-48 flex flex-col items-center justify-center"
            >
              <img 
                src={org.logo} 
                alt={org.name} 
                className="max-w-full max-h-24 mb-4"
              />
              <p className="text-center font-medium text-sm">{org.name}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ValidationSection;
