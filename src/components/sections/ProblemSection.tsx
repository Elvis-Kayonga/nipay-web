
import { useEffect, useState } from 'react';
import SectionWrapper from '../shared/SectionWrapper';
import { api } from '@/services/api';
import { Button } from '@/components/ui/button';
import { useState as useStateHook } from 'react';
import WaitlistModal from '../modals/WaitlistModal';

const ProblemSection = () => {
  const [stats, setStats] = useState<Record<string, string>>({
    mobileMoneySharOfPayments: '',
    gdpShareFromSMEs: '',
    jobsFromSMEs: '',
    bankLendingToSMEs: '',
    creditConstrainedPercentage: '',
    smeFinanceGap: '',
    mobileMoneyUsers: '',
  });
  const [showWaitlistModal, setShowWaitlistModal] = useStateHook(false);

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
    <SectionWrapper id="problem" className="py-20 bg-muted">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">
        Why Rwanda Needs NiPay
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <p className="text-xl mb-6">
            Rwanda's SME sector is the backbone of the economy, yet faces a massive financing gap that limits growth and job creation.
          </p>

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

          <div className="pt-8">
            <p className="text-lg font-medium mb-4">
              NiPay bridges this gap, helping your business thrive while transforming Rwanda's financial landscape.
            </p>
            <Button 
              className="bg-nipay-green hover:bg-nipay-dark-green"
              onClick={() => setShowWaitlistModal(true)}
            >
              Get Your Overdraft Today
            </Button>
          </div>
        </div>
        
        <div className="bg-white p-8 rounded-xl shadow-md">
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

      <WaitlistModal 
        isOpen={showWaitlistModal} 
        onClose={() => setShowWaitlistModal(false)} 
      />
    </SectionWrapper>
  );
};

export default ProblemSection;
