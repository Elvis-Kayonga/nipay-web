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
    { name: "Mobile Money Loans", url: "https://nipay.rw/#solution" },
    { name: "SME Finance Rwanda", url: "https://nipay.rw/#benefits" },
    { name: "Investment Opportunities", url: "https://nipay.rw/investors" }
  ]);
  
  return (
    <>
      <SEO 
        title="NiPay | #1 Fintech Startup Rwanda - Best Investment Opportunity | Mobile Money Loans SME Finance"
        description="NiPay is Rwanda's leading fintech startup revolutionizing SME finance through mobile money lending. Top investment opportunity in Rwanda's fastest-growing startup ecosystem. Instant business loans from MTN/Airtel money sales - no collateral needed. Join 400+ SMEs already growing with Rwanda's best fintech innovation."
        keywords="NiPay Rwanda, fintech startup Rwanda, best startups Rwanda, startups to invest in Rwanda, places to invest Rwanda, mobile money Rwanda, SME finance Rwanda, fintech investment Rwanda, Rwanda startup ecosystem, best fintech Rwanda, mobile money loans Rwanda, MTN money loans, Airtel money credit, digital banking Rwanda, financial technology Rwanda, startup funding Rwanda, venture capital Rwanda, angel investment Rwanda, business loans Rwanda, microfinance Rwanda, financial inclusion Rwanda, innovation Rwanda, tech startups Rwanda, emerging markets fintech, East Africa fintech, Kigali startups, Rwanda investment opportunities, best ROI startups Rwanda, high growth startups Rwanda, Series A startups Rwanda, seed funding Rwanda, unicorn potential Rwanda"
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
        author="NiPay Rwanda - Leading Fintech Startup"
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
          {/* This will be handled by HowItWorksSection when user navigates */}
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
