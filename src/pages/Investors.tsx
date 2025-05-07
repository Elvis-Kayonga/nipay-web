
import { Helmet } from "react-helmet";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import InvestorForm from "@/components/forms/InvestorForm";
import IconCard from "@/components/shared/IconCard";
import { ArrowRight, ChartBarIcon, DollarSign, TrendingUp, Users } from "lucide-react";

const InvestorHero = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center text-white">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3')",
          backgroundAttachment: "fixed"
        }}
        aria-hidden="true"
      >
        <div className="absolute inset-0 hero-gradient"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Partner With NiPay to Transform SME Financing in Rwanda
          </h1>
          
          <p className="text-xl mb-8">
            Deploy capital at 10-12% quarterly returns while dramatically reducing customer acquisition costs. Tap into Rwanda's $1.2 billion SME finance gap with our data-driven approach.
          </p>
          
          <Button 
            size="lg"
            className="bg-white text-nipay-dark-green hover:bg-white/90 text-lg px-8"
            onClick={() => {
              const element = document.getElementById("contact-form");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Partner With Us
            <ArrowRight className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}

const ROICalculator = () => {
  const [capital, setCapital] = useState(500000);
  const [years, setYears] = useState(3);
  const quarterlyRate = 0.11;
  
  const calculateReturns = () => {
    let totalReturns = capital;
    for (let i = 0; i < years * 4; i++) {
      totalReturns *= (1 + quarterlyRate);
    }
    return totalReturns;
  }
  
  const totalReturns = calculateReturns();
  const profit = totalReturns - capital;
  
  return (
    <div className="p-6 border rounded-lg bg-card">
      <h3 className="text-xl font-bold mb-4">Capital Deployment Simulation</h3>
      
      <div className="space-y-6">
        <div>
          <label className="block mb-2 text-sm">Initial Capital (USD)</label>
          <input 
            type="range" 
            min="100000" 
            max="5000000" 
            step="50000" 
            value={capital} 
            onChange={(e) => setCapital(parseInt(e.target.value))}
            className="w-full"
          />
          <div className="flex justify-between text-sm mt-1">
            <span>$100k</span>
            <span>${(capital/1000).toFixed(0)}k</span>
            <span>$5M</span>
          </div>
        </div>
        
        <div>
          <label className="block mb-2 text-sm">Investment Period (Years)</label>
          <input 
            type="range" 
            min="1" 
            max="5" 
            step="0.5" 
            value={years} 
            onChange={(e) => setYears(parseFloat(e.target.value))}
            className="w-full"
          />
          <div className="flex justify-between text-sm mt-1">
            <span>1 yr</span>
            <span>{years} yrs</span>
            <span>5 yrs</span>
          </div>
        </div>
        
        <div className="p-4 rounded-lg bg-muted space-y-2">
          <div className="flex justify-between">
            <span>Quarterly Interest Rate:</span>
            <span className="font-bold">{(quarterlyRate * 100).toFixed(1)}%</span>
          </div>
          <div className="flex justify-between">
            <span>Annual Interest Rate:</span>
            <span className="font-bold">{(Math.pow(1 + quarterlyRate, 4) - 1) * 100 > 50 ? 50 : ((Math.pow(1 + quarterlyRate, 4) - 1) * 100).toFixed(1)}%</span>
          </div>
          <div className="flex justify-between">
            <span>Final Capital:</span>
            <span className="font-bold">${totalReturns.toLocaleString('en-US', { maximumFractionDigits: 0 })}</span>
          </div>
          <div className="flex justify-between text-nipay-green font-bold">
            <span>Total Profit:</span>
            <span>${profit.toLocaleString('en-US', { maximumFractionDigits: 0 })}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

const Investors = () => {
  return (
    <>
      <Helmet>
        <title>For Capital Providers | NiPay</title>
        <meta name="description" content="Partner with NiPay to deploy capital at 10-12% quarterly returns while reducing customer acquisition costs and reaching underserved SMEs in Rwanda." />
        <meta name="keywords" content="investment opportunity, SME finance, Rwanda, fintech investment, capital deployment" />
        
        {/* Open Graph / Social */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="NiPay | Partnership Opportunity" />
        <meta property="og:description" content="Deploy capital at 10-12% quarterly returns to Rwandan SMEs through our data-driven platform." />
        <meta property="og:image" content="/placeholder.svg" />
      </Helmet>
      
      <Header />
      
      <main className="min-h-screen pt-16">
        <InvestorHero />
        
        <SectionWrapper>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Partner With NiPay?</h2>
              <p className="text-lg mb-6">
                NiPay offers a unique opportunity to invest in Rwanda's underserved SME market with reduced risk and higher returns.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="bg-nipay-green p-3 rounded-full text-white">
                    <DollarSign size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Attractive Returns</h3>
                    <p>10-12% quarterly interest rate on deployed capital, with regular distribution schedules.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="bg-nipay-green p-3 rounded-full text-white">
                    <Users size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Low Customer Acquisition Cost</h3>
                    <p>Save millions in customer acquisition costs through our digital distribution model.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="bg-nipay-green p-3 rounded-full text-white">
                    <ChartBarIcon size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Risk Reduction</h3>
                    <p>Data-driven underwriting and automatic repayments from mobile money flows reduce default risks.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="bg-nipay-green p-3 rounded-full text-white">
                    <TrendingUp size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Scalable Model</h3>
                    <p>Easily scale your capital deployment as the platform grows, with transparent performance metrics.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <ROICalculator />
            </div>
          </div>
        </SectionWrapper>
        
        <SectionWrapper backgroundColor="bg-accent">
          <h2 className="text-3xl font-bold mb-12 text-center">How Capital Deployment Works</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <IconCard
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M16 8h-6.5a2.5 2.5 0 0 0 0 5h3a2.5 2.5 0 0 1 0 5H6"/>
                  <path d="M12 18v2"/>
                  <path d="M12 4v2"/>
                </svg>
              }
              title="Capital Deployment"
              description="Fund the SPV with your chosen investment amount, starting from $100,000."
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
              title="Automated Lending"
              description="Our algorithm identifies qualified SMEs and disburses loans based on data-driven risk assessment."
            />
            
            <IconCard
              icon={
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="m9 12 2 2 4-4"/>
                </svg>
              }
              title="Returns Distribution"
              description="Receive quarterly distributions of principal and interest directly to your account."
            />
          </div>
        </SectionWrapper>
        
        <SectionWrapper id="contact-form">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Partner With Us</h2>
              <p className="text-lg mb-6">
                Ready to explore how NiPay can help you deploy capital in Rwanda's growing SME market? Fill out the form, and our team will contact you to discuss partnership opportunities.
              </p>
              
              <div className="bg-muted p-6 rounded-lg mb-6">
                <h3 className="font-bold mb-3">Partnership Requirements</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-nipay-green mt-1 flex-shrink-0">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    <span>Minimum investment of $100,000</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-nipay-green mt-1 flex-shrink-0">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    <span>Commitment period of at least 12 months</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-nipay-green mt-1 flex-shrink-0">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    <span>Compliance with KYC/AML regulations</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-card p-6 rounded-lg border">
              <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
              <InvestorForm onSuccess={() => {}} />
            </div>
          </div>
        </SectionWrapper>
      </main>
      
      <Footer />
    </>
  );
};

export default Investors;
