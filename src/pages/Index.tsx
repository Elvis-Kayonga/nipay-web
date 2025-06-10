
import SEO from "@/components/SEO";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import NiPaySolutionsSection from "@/components/sections/NiPaySolutionsSection";
import SolutionSection from "@/components/sections/SolutionSection";
import SmeBenefitsSection from "@/components/sections/SmeBenefitsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FaqSection from "@/components/sections/FaqSection";
import ContactSection from "@/components/sections/ContactSection";
import { generateOrganizationSchema, generateServiceSchema, generateStartupSchema, generateLocalBusinessSchema, generateBreadcrumbSchema } from "@/utils/seo";

const Index = () => {
  // Schema.org structured data for organization
  const organizationSchema = generateOrganizationSchema();
  const serviceSchema = generateServiceSchema();
  const startupSchema = generateStartupSchema();
  const localBusinessSchema = generateLocalBusinessSchema();
  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://nipay.rw/" },
    { name: "Fintech Rwanda", url: "https://nipay.rw/#solution" },
    { name: "Fintech Africa", url: "https://nipay.rw/#solution" },
    { name: "Startups Africa", url: "https://nipay.rw/#solution" },
    { name: "East Africa Startups", url: "https://nipay.rw/#solution" },
    { name: "Mobile Money Africa", url: "https://nipay.rw/#solution" },
    { name: "SME Finance Rwanda", url: "https://nipay.rw/#benefits" },
    { name: "SME Finance Africa", url: "https://nipay.rw/#benefits" },
    { name: "Grants for SMEs Rwanda", url: "https://nipay.rw/#benefits" },
    { name: "Investment Opportunities Africa", url: "https://nipay.rw/investors" }
  ]);
  
  return (
    <>
      <SEO 
        title="NiPay | #1 Fintech Startup Africa Rwanda - Best Investment Startups Africa | SME Finance Grants"
        description="NiPay is Africa's leading fintech startup revolutionizing SME finance across Rwanda and East Africa. Top investment opportunity among African startups. Instant mobile money loans, SME grants, and business funding for small companies in Rwanda. Join 400+ SMEs already growing with Africa's best fintech innovation and startup ecosystem."
        keywords="NiPay Rwanda, NiPay Africa, fintech startup Rwanda, fintech startup Africa, best startups Rwanda, best startups Africa, startups Africa, startups East Africa, East Africa startups, Kenya startups, Uganda startups, Tanzania startups, startups to invest in Rwanda, startups to invest in Africa, places to invest Rwanda, places to invest Africa, mobile money Rwanda, mobile money Africa, SME finance Rwanda, SME finance Africa, fintech investment Africa, Rwanda startup ecosystem, Africa startup ecosystem, best fintech Africa, mobile money loans Africa, MTN money loans, Airtel money credit, digital banking Africa, financial technology Africa, startup funding Africa, venture capital Africa, angel investment Africa, business loans Africa, microfinance Africa, financial inclusion Africa, innovation Africa, tech startups Africa, emerging markets fintech, East Africa fintech, Kigali startups, Rwanda investment opportunities, Africa investment opportunities, best ROI startups Africa, high growth startups Africa, Series A startups Africa, seed funding Africa, unicorn potential Africa, funds for SME Rwanda, funds for SME Africa, grants for SMEs Rwanda, grants for SMEs Africa, grants for small companies Rwanda, grants for small companies Africa, small business grants Africa, SME funding Africa, SME loans Africa, business grants Rwanda, startup grants Africa, government grants SME Rwanda, donor funding SME Africa, development finance Africa"
        canonicalUrl="/"
        ogImage="/placeholder.svg"
        structuredData={{
          "@graph": [
            organizationSchema, 
            serviceSchema, 
            startupSchema,
            localBusinessSchema,
            breadcrumbSchema
          ]
        }}
        robots="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        revisitAfter="1 day"
        author="NiPay Rwanda - Leading Fintech Startup Africa"
      />
      
      <Header />
      
      <main className="min-h-screen">
        <HeroSection />
        <div id="solution">
          <NiPaySolutionsSection />
          <SolutionSection />
        </div>
        <div id="benefits">
          <SmeBenefitsSection />
        </div>
        <div id="how-it-works">
          <SolutionSection />
        </div>
        <div id="testimonials">
          <TestimonialsSection />
        </div>
        <div id="faq">
          <FaqSection />
        </div>
        <ContactSection />
      </main>
      
      <Footer />
    </>
  );
};

export default Index;
