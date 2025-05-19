import { Helmet } from "react-helmet-async";
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
  return <section className="relative min-h-[70vh] flex items-center text-white">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0" style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3')",
      backgroundAttachment: "fixed"
    }} aria-hidden="true">
        <div className="absolute inset-0 hero-gradient"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
            Fund NiPay's Mission to Transform SME Finance in Rwanda
          </h1>
          
          <p className="text-xl mb-8">Join us in closing Rwanda's $1.2 billion SME financing gap while achieving social impact and sustainable returns. We're seeking investment ,grant funding and partnerships.</p>
          
          <Button size="lg" className="bg-white text-nipay-dark-green hover:bg-white/90 text-lg px-8" onClick={() => {
          const element = document.getElementById("contact-form");
          element?.scrollIntoView({
            behavior: "smooth"
          });
        }}>
            Partner With Us
            <ArrowRight className="ml-2" />
          </Button>
        </div>
      </div>
    </section>;
};
const ImpactStatistics = () => {
  return <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
      <div className="bg-card p-6 rounded-lg border">
        <div className="text-4xl font-bold text-nipay-green mb-2">$1.2B</div>
        <p className="text-muted-foreground">SME financing gap in Rwanda</p>
      </div>
      <div className="bg-card p-6 rounded-lg border">
        <div className="text-4xl font-bold text-nipay-green mb-2">79%</div>
        <p className="text-muted-foreground">of SMEs lack access to finance</p>
      </div>
      <div className="bg-card p-6 rounded-lg border">
        <div className="text-4xl font-bold text-nipay-green mb-2">91%</div>
        <p className="text-muted-foreground">of Rwandans use mobile money</p>
      </div>
    </div>;
};
const Investors = () => {
  return <>
      <Helmet>
        <title>For Funders & Partners | NiPay</title>
        <meta name="description" content="Partner with NiPay to fund our mission of providing loans to underserved SMEs in Rwanda through our mobile-money based credit solution." />
        <meta name="keywords" content="investment opportunity, SME finance, Rwanda, fintech funding, grant funding" />
        
        {/* Open Graph / Social */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="NiPay | Partnership Opportunity" />
        <meta property="og:description" content="Fund our mission to provide loans to Rwandan SMEs through our data-driven platform." />
        <meta property="og:image" content="/placeholder.svg" />
      </Helmet>
      
      <Header />
      
      <main className="min-h-screen pt-16">
        <InvestorHero />
        
        <SectionWrapper>
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-6 text-center">The Market Opportunity</h2>
            <ImpactStatistics />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Why Support NiPay?</h2>
              <p className="text-lg mb-6">
                NiPay is addressing a critical financing gap for small businesses in Rwanda through an innovative mobile-money based loan system.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="bg-nipay-green p-3 rounded-full text-white">
                    <Users size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Financial Inclusion</h3>
                    <p>Reaching the 79% of SMEs that currently lack access to formal financial services.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="bg-nipay-green p-3 rounded-full text-white">
                    <ChartBarIcon size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Data-Driven Approach</h3>
                    <p>Our AI algorithm analyzes mobile money transaction patterns to assess risk more accurately than traditional methods.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="bg-nipay-green p-3 rounded-full text-white">
                    <TrendingUp size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Scalable Model</h3>
                    <p>Digital-first approach enables rapid scaling across Rwanda and potentially East Africa.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="bg-nipay-green p-3 rounded-full text-white">
                    <DollarSign size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Sustainable Impact</h3>
                    <p>Creating a self-sustaining loan model that can continue to serve communities long-term.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-muted p-8 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Our Roadmap</h3>
              
              <div className="space-y-8">
                <div className="relative pl-8 border-l-2 border-nipay-green">
                  <div className="absolute w-4 h-4 bg-nipay-green rounded-full -left-[9px] top-0"></div>
                  <h4 className="font-bold">Phase 1: Pilot Program (Current)</h4>
                  <p className="text-sm text-muted-foreground mb-2">Q2-Q3 2023</p>
                  <p className="text-sm">Launch with 100 selected SMEs to validate our model and technology.</p>
                </div>
                
                <div className="relative pl-8 border-l-2 border-accent">
                  <div className="absolute w-4 h-4 bg-accent rounded-full -left-[9px] top-0"></div>
                  <h4 className="font-bold">Phase 2: Limited Market Launch</h4>
                  <p className="text-sm text-muted-foreground mb-2">Q4 2023</p>
                  <p className="text-sm">Expand to 1,000 businesses in select regions of Kigali.</p>
                </div>
                
                <div className="relative pl-8 border-l-2 border-accent">
                  <div className="absolute w-4 h-4 bg-accent rounded-full -left-[9px] top-0"></div>
                  <h4 className="font-bold">Phase 3: Full Market Rollout</h4>
                  <p className="text-sm text-muted-foreground mb-2">2024</p>
                  <p className="text-sm">Nationwide availability with expanded product offerings.</p>
                </div>
                
                <div className="relative pl-8">
                  <div className="absolute w-4 h-4 bg-accent rounded-full -left-[9px] top-0"></div>
                  <h4 className="font-bold">Phase 4: Regional Expansion</h4>
                  <p className="text-sm text-muted-foreground mb-2">2025</p>
                  <p className="text-sm">Expand to neighboring East African countries.</p>
                </div>
              </div>
            </div>
          </div>
        </SectionWrapper>
        
        <SectionWrapper backgroundColor="bg-accent">
          <h2 className="text-3xl font-bold mb-12 text-center">Funding Needs</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <IconCard icon={<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path>
                  <path d="M13 5v2"></path>
                  <path d="M13 17v2"></path>
                  <path d="M13 11v2"></path>
                </svg>} title="Seed Capital" description="$250,000 to fund our pilot program and technology development" />
            
            <IconCard icon={<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path>
                </svg>} title="Grant Funding" description="Partnerships with NGOs and foundations focused on financial inclusion" />
            
            <IconCard icon={<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5.3 18a9 9 0 1 1 13.4 0"></path>
                  <path d="M16 22l-4-9-4 9"></path>
                  <circle cx="12" cy="10" r="1"></circle>
                </svg>} title="Technical Partnerships" description="Support with mobile money integrations, AI development, and scaling infrastructure" />
          </div>
        </SectionWrapper>
        
        <SectionWrapper id="contact-form">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Partner With Us</h2>
              <p className="text-lg mb-6">
                Ready to help transform SME financing in Rwanda? Contact us to discuss partnership opportunities, grant funding, or investment options.
              </p>
              
              <div className="bg-muted p-6 rounded-lg mb-6">
                <h3 className="font-bold mb-3">Our Team</h3>
                <p className="mb-4">
                  NiPay combines local market expertise with fintech innovation, led by a team with experience in:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-nipay-green mt-1 flex-shrink-0">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    <span>Rwandan financial services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-nipay-green mt-1 flex-shrink-0">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    <span>Mobile money systems development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-nipay-green mt-1 flex-shrink-0">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    <span>Fintech product development</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-nipay-green mt-1 flex-shrink-0">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    <span>SME business operations</span>
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
    </>;
};
export default Investors;