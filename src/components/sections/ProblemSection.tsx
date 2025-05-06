
import { useEffect, useState } from 'react';
import SectionWrapper from '../shared/SectionWrapper';
import { api } from '@/services/api';

const ProblemSection = () => {
  const [stats, setStats] = useState<Record<string, string>>({
    mobileMoneySharOfPayments: '',
    gdpShareFromSMEs: '',
    jobsFromSMEs: '',
    bankLendingToSMEs: '',
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const data = await api.getStats();
        setStats(data);
      } catch (error) {
        console.error('Failed to fetch stats:', error);
      }
    };

    fetchStats();
  }, []);

  return (
    <SectionWrapper id="problem" className="py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            SMEs Are Stuck Between Mobile-Money & No Credit
          </h2>

          <ul className="space-y-8">
            <li className="flex gap-4">
              <div className="flex-shrink-0">
                <span className="bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center">
                  !
                </span>
              </div>
              <div>
                <p className="font-medium mb-1">
                  Mobile-money processes {stats.mobileMoneySharOfPayments} of all payments in Rwanda—yet offers no overdraft.
                </p>
              </div>
            </li>
            
            <li className="flex gap-4">
              <div className="flex-shrink-0">
                <span className="bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center">
                  !
                </span>
              </div>
              <div>
                <p className="font-medium mb-1">
                  {stats.gdpShareFromSMEs} of GDP & {stats.jobsFromSMEs} of jobs come from SMEs, but 79% remain under-served.
                </p>
                <p className="text-sm text-muted-foreground">IFC</p>
              </div>
            </li>
            
            <li className="flex gap-4">
              <div className="flex-shrink-0">
                <span className="bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center">
                  !
                </span>
              </div>
              <div>
                <p className="font-medium mb-1">
                  Banks lend only {stats.bankLendingToSMEs} of their portfolio to SMEs; credit-scoring is opaque.
                </p>
                <p className="text-sm text-muted-foreground">World Finance</p>
              </div>
            </li>
          </ul>
        </div>
        
        <div className="bg-muted p-8 rounded-xl">
          <div className="space-y-6">
            <div className="flex flex-col items-center text-center">
              <div className="text-6xl font-bold text-nipay-green mb-2">{stats.creditConstrainedPercentage}</div>
              <p className="text-lg">of Rwandan SMEs can't access adequate financing</p>
            </div>
            
            <div className="border-t border-border pt-6 grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-nipay-green mb-2">{stats.smeFinanceGap}</div>
                <p className="text-sm">Finance Gap</p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold text-nipay-green mb-2">{stats.mobileMoneyUsers}</div>
                <p className="text-sm">Active Mobile Money Users</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ProblemSection;
