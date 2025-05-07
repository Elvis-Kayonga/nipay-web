
import { Helmet } from "react-helmet";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import SolutionSection from "@/components/sections/SolutionSection";
import SmeBenefitsSection from "@/components/sections/SmeBenefitsSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import ValidationSection from "@/components/sections/ValidationSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FaqSection from "@/components/sections/FaqSection";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>NiPay | Instant Overdrafts for SMEs in Rwanda</title>
        <meta name="description" content="NiPay provides instant overdrafts against mobile-money inflows for SMEs in Rwanda—no paperwork, no delays." />
        <meta name="keywords" content="mobile money, SME finance, Rwanda, overdraft, credit, fintech, business loans" />
        
        {/* Open Graph / Social */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="NiPay | Instant Overdrafts for SMEs in Rwanda" />
        <meta property="og:description" content="Get instant access to working capital through your mobile-money transaction history. No paperwork, same-day approval." />
        <meta property="og:image" content="/placeholder.svg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="NiPay | Instant Overdrafts for SMEs in Rwanda" />
        <meta name="twitter:description" content="Get instant access to working capital through your mobile-money transaction history. No paperwork, same-day approval." />
        <meta name="twitter:image" content="/placeholder.svg" />
      </Helmet>
      
      <Header />
      
      <main className="min-h-screen">
        <HeroSection />
        <SolutionSection />
        <SmeBenefitsSection />
        <HowItWorksSection />
        <ProblemSection />
        <ValidationSection />
        <TestimonialsSection />
        <FaqSection />
      </main>
      
      <Footer />
    </>
  );
};

export default Index;
