
import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { Button } from "@/components/ui/button";
import InvestorForm from "@/components/forms/InvestorForm";
import { 
  ArrowRight, 
  Users, 
  DollarSign, 
  TrendingUp, 
  Smartphone, 
  CreditCard, 
  BarChart3,
  CheckCircle,
  Target,
  Shield,
  Zap
} from "lucide-react";

const InvestorHero = () => {
  return (
    <section className="relative min-h-[75vh] flex items-center text-white overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0" 
        style={{
          backgroundImage: "linear-gradient(135deg, #1a5c38 0%, #2ecc71 100%)"
        }} 
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10 max-w-5xl">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 animate-fade-in leading-tight">
            Invest in the future of SME liquidity in Africa
          </h1>
          
          <p className="text-xl lg:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed opacity-95">
            NiPay unlocks working capital for mobile money-driven SMEs in Rwanda via a USSD-first overdraft wallet with automatic repayments.
          </p>
          
          <Button 
            size="lg" 
            className="bg-white text-nipay-dark-green hover:bg-white/90 text-xl px-12 py-6 shadow-2xl hover:shadow-xl transition-all duration-300 font-bold" 
            onClick={() => {
              const element = document.getElementById("investor-form");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Join Our Pre-Seed Round
            <ArrowRight className="ml-3 h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

const TractionSnapshot = () => {
  const metrics = [
    { icon: <Users className="h-7 w-7" />, value: "400+", label: "SMEs onboarded" },
    { icon: <DollarSign className="h-7 w-7" />, value: "$174K", label: "requested in loan book" },
    { icon: <TrendingUp className="h-7 w-7" />, value: "$1.8B", label: "SME funding gap in Rwanda" },
    { icon: <Target className="h-7 w-7" />, value: "$16.8M", label: "projected ARR at scale" }
  ];

  return (
    <SectionWrapper className="py-14 lg:py-16">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-10 text-nipay-dark-green">
          Traction Snapshot
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <div key={index} className="text-center bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
              <div className="flex justify-center mb-3 text-nipay-green">
                {metric.icon}
              </div>
              <div className="text-3xl font-bold text-nipay-dark-green mb-2">
                {metric.value}
              </div>
              <p className="text-gray-600 font-medium text-sm">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

const WhatWereBuilding = () => {
  const features = [
    {
      icon: <CreditCard className="h-8 w-8" />,
      title: "Overdraft Wallet",
      description: "Borrow against sales with automatic repayment"
    },
    {
      icon: <Smartphone className="h-8 w-8" />,
      title: "USSD + App",
      description: "Works on any phone, anywhere in Rwanda"
    },
    {
      icon: <BarChart3 className="h-8 w-8" />,
      title: "Free ERP",
      description: "Helps SMEs track finances and repay faster"
    }
  ];

  return (
    <SectionWrapper backgroundColor="bg-gray-50" className="py-14 lg:py-16">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-4 text-nipay-dark-green">
          What We're Building
        </h2>
        <p className="text-lg text-center text-gray-600 mb-10 max-w-2xl mx-auto">
          A comprehensive financial ecosystem designed for Africa's mobile-first economy
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
              <div className="flex justify-center mb-4 text-nipay-green">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold mb-3 text-nipay-dark-green">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

const BusinessModel = () => {
  const revenueStreams = [
    { stream: "Loan Fees (2%)", estimate: "$7.2M" },
    { stream: "Wallet Fees", estimate: "$8.76M" },
    { stream: "ERP SaaS ($3/mo)", estimate: "$540K" },
    { stream: "Merchant Commissions", estimate: "$300K" }
  ];

  return (
    <SectionWrapper className="py-14 lg:py-16">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-10 text-nipay-dark-green">
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

const WhyWeWin = () => {
  const advantages = [
    { icon: <Smartphone className="h-5 w-5" />, text: "USSD-first where 85% of local transactions happen" },
    { icon: <Shield className="h-5 w-5" />, text: "Auto-repayment reduces default risk" },
    { icon: <BarChart3 className="h-5 w-5" />, text: "Transaction-based credit scoring" },
    { icon: <Zap className="h-5 w-5" />, text: "Free ERP = user stickiness" },
    { icon: <CheckCircle className="h-5 w-5" />, text: "Regulatory groundwork done" }
  ];

  return (
    <SectionWrapper backgroundColor="bg-nipay-dark-green" className="py-14 lg:py-16 text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-bold text-center mb-10">
          Why We Win
        </h2>
        
        <div className="space-y-4 max-w-2xl mx-auto">
          {advantages.map((advantage, index) => (
            <div key={index} className="flex items-center gap-3 bg-white/10 rounded-lg p-4 backdrop-blur-sm">
              <div className="text-nipay-green flex-shrink-0">
                {advantage.icon}
              </div>
              <span className="text-base">{advantage.text}</span>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

const TheRaise = () => {
  return (
    <SectionWrapper className="py-14 lg:py-16">
      <div className="max-w-3xl mx-auto text-center">
        <div className="bg-gradient-to-r from-nipay-green to-nipay-dark-green rounded-2xl p-10 text-white shadow-xl">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">The Raise</h2>
          <div className="text-5xl lg:text-6xl font-bold mb-4">$550K</div>
          <p className="text-lg mb-6">Pre-Seed Round</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-xl font-bold mb-1">18 months</div>
              <div className="text-sm opacity-90">Runway</div>
            </div>
            <div>
              <div className="text-xl font-bold mb-1">Series A</div>
              <div className="text-sm opacity-90">Next milestone</div>
            </div>
            <div>
              <div className="text-xl font-bold mb-1">10,000+</div>
              <div className="text-sm opacity-90">SMEs target</div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

const InvestorCTA = () => {
  return (
    <SectionWrapper id="investor-form" backgroundColor="bg-gray-50" className="py-14 lg:py-16">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-nipay-dark-green">
            Ready to Invest?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join us in transforming SME finance across Africa. Get in touch to learn more about our investment opportunity.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div className="space-y-5">
            <div className="bg-white rounded-xl p-5 shadow-md border border-gray-100">
              <h3 className="text-lg font-bold mb-4 text-nipay-dark-green">Investment Highlights</h3>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-4 w-4 text-nipay-green flex-shrink-0" />
                  <span className="text-sm">Proven traction with 400+ SMEs</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-4 w-4 text-nipay-green flex-shrink-0" />
                  <span className="text-sm">Large addressable market ($1.8B gap)</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-4 w-4 text-nipay-green flex-shrink-0" />
                  <span className="text-sm">Scalable technology platform</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="h-4 w-4 text-nipay-green flex-shrink-0" />
                  <span className="text-sm">Experienced founding team</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
            <h3 className="text-xl font-bold mb-5 text-nipay-dark-green text-center">
              Contact Our Team
            </h3>
            <InvestorForm onSuccess={() => {}} />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

const Investors = () => {
  return (
    <>
      <Helmet>
        <title>Investors | NiPay - SME Finance Innovation</title>
        <meta name="description" content="Join NiPay's $550K Pre-Seed round. Invest in the future of SME liquidity in Africa with our USSD-first overdraft wallet and automatic repayments." />
        <meta name="keywords" content="investment opportunity, SME finance, Rwanda, fintech funding, pre-seed round, africa fintech" />
        
        {/* Open Graph / Social */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="NiPay Investors | SME Finance Innovation" />
        <meta property="og:description" content="Join our $550K Pre-Seed round to transform SME finance in Africa." />
        <meta property="og:image" content="/placeholder.svg" />
      </Helmet>
      
      <Header />
      
      <main className="min-h-screen pt-16">
        <InvestorHero />
        <TractionSnapshot />
        <WhatWereBuilding />
        <BusinessModel />
        <WhyWeWin />
        <TheRaise />
        <InvestorCTA />
      </main>
      
      <Footer />
    </>
  );
};

export default Investors;
