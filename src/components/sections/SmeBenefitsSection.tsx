
import SectionWrapper from '../shared/SectionWrapper';
import { Button } from '@/components/ui/button';
import { ArrowRight, Smartphone, FileText, Shield, Target, MapPin, Star } from 'lucide-react';
import { useState } from 'react';
import WaitlistModal from '../modals/WaitlistModal';

const SmeBenefitsSection = () => {
  const [showWaitlistModal, setShowWaitlistModal] = useState(false);
  
  const benefits = [
    {
      icon: Smartphone,
      title: "Works with Basic Phones",
      description: "Use USSD codes or our simple app — no smartphone needed",
      color: "from-green-500 to-green-600",
      bgColor: "from-green-50 to-green-100"
    },
    {
      icon: FileText,
      title: "No Bank Account Needed",
      description: "No paperwork, no collateral, no bank visits required",
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-50 to-blue-100"
    },
    {
      icon: ArrowRight,
      title: "Borrow from Your Sales",
      description: "Get small amounts when you need them, repay from daily transactions",
      color: "from-yellow-500 to-yellow-600",
      bgColor: "from-yellow-50 to-yellow-100"
    },
    {
      icon: Shield,
      title: "Free Business Tools",
      description: "Track sales, stock, and invoices for free (6-month ERP access)",
      color: "from-purple-500 to-purple-600",
      bgColor: "from-purple-50 to-purple-100"
    },
    {
      icon: MapPin,
      title: "100% Built for Rwanda",
      description: "Designed for how Rwandan SMEs actually do business",
      color: "from-red-500 to-red-600",
      bgColor: "from-red-50 to-red-100"
    },
    {
      icon: Target,
      title: "Your Limit Grows",
      description: "The more you sell, the more you can borrow for your business",
      color: "from-emerald-500 to-emerald-600",
      bgColor: "from-emerald-50 to-emerald-100"
    }
  ];
  
  return (
    <SectionWrapper id="benefits" className="py-24 lg:py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-nipay-green/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-yellow-400/5 rounded-full blur-3xl"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20 lg:mb-24">
          <div className="inline-flex items-center bg-nipay-green/10 text-nipay-green px-6 py-3 rounded-full text-sm font-semibold mb-6">
            <Star className="w-4 h-4 mr-2" />
            Why Choose NiPay
          </div>
          <h2 className="text-4xl lg:text-6xl xl:text-7xl font-bold mb-8 text-gray-900 leading-tight">
            Built specifically for 
            <br />
            <span className="bg-gradient-to-r from-nipay-green to-nipay-dark-green bg-clip-text text-transparent">
              Rwandan SMEs
            </span>
          </h2>
          <p className="text-xl lg:text-2xl max-w-3xl mx-auto leading-relaxed text-gray-600 font-medium">
            Who hustle every day and deserve financial tools that work for them
          </p>
        </div>
        
        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 mb-20 lg:mb-24">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="group relative">
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.bgColor} rounded-3xl transform group-hover:scale-105 transition-all duration-300 opacity-0 group-hover:opacity-100`}></div>
                
                {/* Card content */}
                <div className="relative bg-white p-5 lg:p-6 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group-hover:border-gray-200 h-full">
                  <div className={`w-12 h-12 lg:w-14 lg:h-14 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
                  </div>
                  <h3 className="text-lg lg:text-xl font-bold mb-3 text-gray-900 group-hover:text-nipay-green transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-base">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        
        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-block bg-white rounded-3xl p-10 lg:p-14 shadow-2xl border border-gray-100 max-w-2xl mx-auto">
            <h3 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900">
              Ready to transform your business?
            </h3>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Join hundreds of SMEs already using NiPay to grow their businesses
            </p>
            <Button 
              onClick={() => setShowWaitlistModal(true)}
              className="bg-gradient-to-r from-nipay-green to-nipay-dark-green hover:from-nipay-dark-green hover:to-nipay-green text-xl lg:text-2xl px-12 lg:px-16 py-6 lg:py-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 rounded-2xl group"
            >
              Join the Waitlist
              <ArrowRight className="ml-3 h-6 w-6 lg:h-7 lg:w-7 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
      
      <WaitlistModal isOpen={showWaitlistModal} onClose={() => setShowWaitlistModal(false)} />
    </SectionWrapper>
  );
};

export default SmeBenefitsSection;
