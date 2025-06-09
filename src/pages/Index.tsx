
import SEO from "@/components/SEO";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import SolutionSection from "@/components/sections/SolutionSection";
import SmeBenefitsSection from "@/components/sections/SmeBenefitsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FaqSection from "@/components/sections/FaqSection";
import ContactSection from "@/components/sections/ContactSection";
import { generateOrganizationSchema, generateServiceSchema, generateBreadcrumbSchema } from "@/utils/seo";

const Index = () => {
  // Schema.org structured data for organization
  const organizationSchema = generateOrganizationSchema();
  const serviceSchema = generateServiceSchema();
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://nipay.rw/" },
    { name: "Mobile Money Loans", url: "https://nipay.rw/#solution" },
    { name: "Benefits", url: "https://nipay.rw/#benefits" }
  ]);
  
  return (
    <>
      <SEO 
        title="NiPay | #1 Mobile Money Loans Rwanda - No Collateral Needed"
        description="NiPay is Rwanda's leading mobile money loan platform. Get instant business loans from your MTN/Airtel money sales. No paperwork, no collateral. Join 400+ SMEs already growing with NiPay."
        keywords="NiPay Rwanda, mobile money loans Rwanda, MTN money loans, Airtel money credit, SME loans Rwanda, business loans no collateral, instant loans Rwanda, mobile money lending, Rwanda fintech, small business credit, best business loans Rwanda, quick loans Rwanda"
        canonicalUrl="/"
        ogImage="/placeholder.svg"
        structuredData={{
          "@graph": [organizationSchema, serviceSchema, breadcrumbSchema]
        }}
        robots="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        revisitAfter="3 days"
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
