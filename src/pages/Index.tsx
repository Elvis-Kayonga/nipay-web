
import SEO from "@/components/SEO";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ProblemSection from "@/components/sections/ProblemSection";
import SolutionSection from "@/components/sections/SolutionSection";
import SmeBenefitsSection from "@/components/sections/SmeBenefitsSection";
import HowItWorksSection from "@/components/sections/HowItWorksSection";
import ValidationSection from "@/components/sections/ValidationSection";
import FaqSection from "@/components/sections/FaqSection";
import { generateOrganizationSchema, generateServiceSchema } from "@/utils/seo";

const Index = () => {
  // Schema.org structured data for organization
  const organizationSchema = generateOrganizationSchema();
  const serviceSchema = generateServiceSchema();
  
  return (
    <>
      <SEO 
        title="NiPay | Business Loans via Mobile Money in Rwanda"
        description="NiPay provides instant loans based on your mobile money transaction history for SMEs in Rwanda — no collateral, no paperwork. Access working capital instantly."
        keywords="NiPay, mobile money Rwanda, SME finance Rwanda, instant loans Rwanda, business loans Rwanda, fintech Rwanda, working capital, small business funding"
        canonicalUrl="/"
        ogImage="/placeholder.svg"
        structuredData={{
          ...organizationSchema,
          "@graph": [organizationSchema, serviceSchema]
        }}
        robots="index, follow"
        revisitAfter="7 days"
        author="NiPay Rwanda"
      />
      
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
