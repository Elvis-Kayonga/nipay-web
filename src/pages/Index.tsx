
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
  // Schema.org structured data for organization
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "name": "NiPay",
    "description": "Instant credit for SMEs in Rwanda based on mobile money transaction history",
    "url": "https://nipay.rw",
    "logo": "https://nipay.rw/logo.png",
    "areaServed": "Rwanda",
    "serviceType": "SME Credit",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Kigali",
      "addressRegion": "Kigali",
      "addressCountry": "Rwanda"
    }
  };
  
  return (
    <>
      <Helmet>
        <title>NiPay | Instant Credit for SMEs in Rwanda</title>
        <meta name="description" content="NiPay provides instant credit against mobile-money inflows for SMEs in Rwanda—no paperwork, no waiting. Access working capital instantly." />
        <meta name="keywords" content="NiPay, mobile money Rwanda, SME finance Rwanda, instant credit Rwanda, business loans Rwanda, fintech Rwanda, working capital, small business funding" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        
        {/* Canonical URL */}
        <link rel="canonical" href="https://nipay.rw/" />
        
        {/* Open Graph / Social */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="NiPay | Instant Credit for SMEs in Rwanda" />
        <meta property="og:description" content="Access working capital instantly through your mobile-money history with NiPay - Rwanda's leading SME credit solution." />
        <meta property="og:url" content="https://nipay.rw/" />
        <meta property="og:site_name" content="NiPay" />
        <meta property="og:image" content="/placeholder.svg" />
        <meta property="og:locale" content="en_RW" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="NiPay | Instant SME Credit in Rwanda" />
        <meta name="twitter:description" content="Get instant access to working capital based on your mobile-money history with NiPay." />
        <meta name="twitter:image" content="/placeholder.svg" />
        
        {/* Structured data */}
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
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
