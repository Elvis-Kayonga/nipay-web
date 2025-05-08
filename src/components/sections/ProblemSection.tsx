
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
            Rwanda's SME sector faces a massive financing gap limiting growth.
          </p>

          <ul className="space-y-8">
            <li className="flex gap-4">
              <div className="flex-shrink-0">
                <span className="bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center">
                  !
                </span>
              </div>
              <div>
                <p className="font-medium">
                  {stats.mobileMoneySharOfPayments} of all payments—yet no overdraft options
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
                <p className="font-medium">
                  {stats.gdpShareFromSMEs} of GDP & {stats.jobsFromSMEs} of jobs from SMEs
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
                <p className="font-medium">
                  Banks lend only {stats.bankLendingToSMEs} to SMEs
                </p>
              </div>
            </li>
          </ul>

          <div className="pt-8">
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
              <p className="text-lg">of Rwandan SMEs can't access financing</p>
            </div>
            
            <div className="border-t border-border pt-6 grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-nipay-green mb-2">{stats.smeFinanceGap}</div>
                <p className="text-sm">Finance Gap</p>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold text-nipay-green mb-2">{stats.mobileMoneyUsers}</div>
                <p className="text-sm">Mobile Money Users</p>
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
