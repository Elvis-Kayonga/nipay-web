
import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import SolutionSection from "@/components/sections/SolutionSection";
import SmeBenefitsSection from "@/components/sections/SmeBenefitsSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import ValidationSection from "@/components/sections/ValidationSection";
import FaqSection from "@/components/sections/FaqSection";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>NiPay | Urgent Credit for SMEs in Rwanda</title>
        <meta name="description" content="NiPay provides instant credit against mobile-money inflows for SMEs in Rwanda—no paperwork, no waiting." />
        <meta name="keywords" content="mobile money, SME finance, Rwanda, credit, fintech, business loans, urgent funding" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        
        {/* Open Graph / Social */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="NiPay | Urgent Credit for SMEs in Rwanda" />
        <meta property="og:description" content="Don't wait - get instant access to working capital now through your mobile-money history." />
        <meta property="og:image" content="/placeholder.svg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="NiPay | Urgent Credit for SMEs in Rwanda" />
        <meta name="twitter:description" content="Don't wait - get instant access to working capital now through your mobile-money history." />
        <meta name="twitter:image" content="/placeholder.svg" />
      </Helmet>
      
      <Header />
      
      <main className="min-h-screen">
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <SmeBenefitsSection />
        <HowItWorksSection />
        <ValidationSection />
        <FaqSection />
      </main>
      
      <Footer />
    </>
  );
};

export default Index;
