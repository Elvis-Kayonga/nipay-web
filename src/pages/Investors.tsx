
import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { Button } from "@/components/ui/button";
import InvestorForm from "@/components/forms/InvestorForm";
import IconCard from "@/components/shared/IconCard";
import { ArrowRight, ChartBarIcon, DollarSign, TrendingUp, Users } from "lucide-react";

const InvestorHero = () => {
  return (
    <section className="relative min-h-[60vh] flex items-center text-white">
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
        <div className="max-w-2xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 animate-fade-in">
            Fund NiPay's Mission to Transform SME Finance in Rwanda
          </h1>
          
          <p className="text-lg mb-6">Join us in closing Rwanda's $1.2B SME financing gap with mobile-based loans.</p>
          
          <Button 
            size="lg" 
            className="bg-white text-nipay-dark-green hover:bg-white/90 text-lg px-6" 
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
  );
};

const ImpactStatistics = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
      <div className="bg-card p-5 rounded-lg border">
        <div className="text-3xl font-bold text-nipay-green mb-1">$1.2B</div>
        <p className="text-muted-foreground text-sm">SME financing gap in Rwanda</p>
      </div>
      <div className="bg-card p-5 rounded-lg border">
        <div className="text-3xl font-bold text-nipay-green mb-1">79%</div>
        <p className="text-muted-foreground text-sm">of SMEs lack access to finance</p>
      </div>
      <div className="bg-card p-5 rounded-lg border">
        <div className="text-3xl font-bold text-nipay-green mb-1">91%</div>
        <p className="text-muted-foreground text-sm">of Rwandans use mobile money</p>
      </div>
    </div>
  );
};

const Investors = () => {
  return (
    <>
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
        
        <SectionWrapper className="py-10 md:py-16">
          <div className="mb-10 md:mb-12">
            <h2 className="text-2xl font-bold mb-6 text-center">The Market Opportunity</h2>
            <ImpactStatistics />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-bold mb-4">Why Support NiPay?</h2>
              <p className="text-base mb-4">
                NiPay provides critical financing to small businesses in Rwanda through mobile-money loans.
              </p>
              
              <div className="space-y-4">
                <div className="flex gap-3 items-start">
                  <div className="bg-nipay-green p-2 rounded-full text-white">
                    <Users size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-base">Financial Inclusion</h3>
                    <p className="text-sm text-muted-foreground">Reaching SMEs that lack access to formal financial services</p>
                  </div>
                </div>
                
                <div className="flex gap-3 items-start">
                  <div className="bg-nipay-green p-2 rounded-full text-white">
                    <ChartBarIcon size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-base">Data-Driven Approach</h3>
                    <p className="text-sm text-muted-foreground">AI algorithm analyzes mobile money patterns to assess risk accurately</p>
                  </div>
                </div>
                
                <div className="flex gap-3 items-start">
                  <div className="bg-nipay-green p-2 rounded-full text-white">
                    <TrendingUp size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-base">Scalable Model</h3>
                    <p className="text-sm text-muted-foreground">Digital-first approach enables rapid scaling across Rwanda</p>
                  </div>
                </div>
                
                <div className="flex gap-3 items-start">
                  <div className="bg-nipay-green p-2 rounded-full text-white">
                    <DollarSign size={20} />
                  </div>
                  <div>
                    <h3 className="font-bold text-base">Sustainable Impact</h3>
                    <p className="text-sm text-muted-foreground">Self-sustaining loan model that continues to serve communities</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="text-lg font-bold mb-3">Our Roadmap</h3>
              
              <div className="space-y-5">
                <div className="relative pl-6 border-l-2 border-nipay-green">
                  <div className="absolute w-3 h-3 bg-nipay-green rounded-full -left-[7px] top-1"></div>
                  <h4 className="font-bold text-sm">Pilot Program (Current)</h4>
                  <p className="text-xs text-muted-foreground">100 selected SMEs to validate our model</p>
                </div>
                
                <div className="relative pl-6 border-l-2 border-accent">
                  <div className="absolute w-3 h-3 bg-accent rounded-full -left-[7px] top-1"></div>
                  <h4 className="font-bold text-sm">Limited Market Launch</h4>
                  <p className="text-xs text-muted-foreground">1,000 businesses in Kigali</p>
                </div>
                
                <div className="relative pl-6 border-l-2 border-accent">
                  <div className="absolute w-3 h-3 bg-accent rounded-full -left-[7px] top-1"></div>
                  <h4 className="font-bold text-sm">Full Market Rollout</h4>
                  <p className="text-xs text-muted-foreground">Nationwide availability</p>
                </div>
                
                <div className="relative pl-6">
                  <div className="absolute w-3 h-3 bg-accent rounded-full -left-[7px] top-1"></div>
                  <h4 className="font-bold text-sm">Regional Expansion</h4>
                  <p className="text-xs text-muted-foreground">East African countries</p>
                </div>
              </div>
            </div>
          </div>
        </SectionWrapper>
        
        <SectionWrapper backgroundColor="bg-nipay-dark-green" className="text-white">
          <h2 className="text-2xl font-bold mb-8 text-center">Funding Needs</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <IconCard 
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path>
                <path d="M13 5v2"></path>
                <path d="M13 17v2"></path>
                <path d="M13 11v2"></path>
              </svg>} 
              title="Seed Capital" 
              description="$250,000 to fund our pilot program" 
              className="bg-white/10 text-white hover:bg-white/20"
            />
            
            <IconCard 
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path>
              </svg>} 
              title="Grant Funding" 
              description="Partnerships with NGOs and foundations" 
              className="bg-white/10 text-white hover:bg-white/20"
            />
            
            <IconCard 
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5.3 18a9 9 0 1 1 13.4 0"></path>
                <path d="M16 22l-4-9-4 9"></path>
                <circle cx="12" cy="10" r="1"></circle>
              </svg>} 
              title="Technical Partnerships" 
              description="Mobile money and AI development support" 
              className="bg-white/10 text-white hover:bg-white/20"
            />
          </div>
        </SectionWrapper>
        
        <SectionWrapper id="contact-form" className="py-10 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-4">Partner With Us</h2>
              <p className="text-base mb-4">
                Ready to help transform SME financing in Rwanda? Contact us to discuss partnership opportunities.
              </p>
              
              <div className="bg-muted p-5 rounded-lg mb-4">
                <h3 className="font-bold mb-2">Our Team</h3>
                <p className="mb-3 text-sm">
                  NiPay combines local market expertise with fintech innovation, led by a team experienced in:
                </p>
                <ul className="space-y-1">
                  <li className="flex items-start gap-2 text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-nipay-green mt-1 flex-shrink-0">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    <span>Rwandan financial services</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-nipay-green mt-1 flex-shrink-0">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    <span>Mobile money systems</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-nipay-green mt-1 flex-shrink-0">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    <span>Fintech product development</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-nipay-green mt-1 flex-shrink-0">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    <span>SME business operations</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="bg-card p-5 rounded-lg border">
              <h3 className="text-xl font-bold mb-3">Get in Touch</h3>
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
