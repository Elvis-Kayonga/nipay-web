
import SEO from "@/components/SEO";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import SolutionSection from "@/components/sections/SolutionSection";
import SmeBenefitsSection from "@/components/sections/SmeBenefitsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FaqSection from "@/components/sections/FaqSection";
import ContactSection from "@/components/sections/ContactSection";
import { generateOrganizationSchema, generateServiceSchema } from "@/utils/seo";

const Index = () => {
  // Schema.org structured data for organization
  const organizationSchema = generateOrganizationSchema();
  const serviceSchema = generateServiceSchema();
  
  return (
    <>
      <SEO 
        title="NiPay | Loans from Your Mobile Money Sales - No Collateral Needed"
        description="Cash tight? NiPay helps Rwandan SMEs borrow from their mobile money sales automatically. No paperwork, no stress, no collateral. Join 400+ businesses already using NiPay."
        keywords="NiPay, mobile money loans Rwanda, SME credit Rwanda, business loans no collateral, MTN mobile money loans, Airtel money credit, instant business loans Rwanda"
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
        <SolutionSection />
        <SmeBenefitsSection />
        <TestimonialsSection />
        <FaqSection />
        <ContactSection />
      </main>
      
      <Footer />
    </>
  );
};

export default Index;
