
import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import SectionWrapper from "@/components/shared/SectionWrapper";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import { generateBreadcrumbSchema } from "@/utils/seo";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://nipay.rw/" },
    { name: "Contact", url: "https://nipay.rw/contact" }
  ]);

  return (
    <>
      <SEO
        title="Contact NiPay | Get Mobile Money Loans Support Rwanda"
        description="Contact NiPay for mobile money loan support in Rwanda. Email: contact@nipay.rw, sales@nipay.rw. Phone: +250 788 321 008. Located at Norrsken Rwanda, Kigali."
        keywords="contact NiPay Rwanda, mobile money loans support, NiPay customer service, Rwanda fintech contact, SME credit support"
        canonicalUrl="/contact"
        structuredData={breadcrumbSchema}
      />
      <Header />
      
      <main>
        {/* Hero Section */}
        <SectionWrapper className="bg-gradient-to-b from-accent to-background py-12 md:py-16">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-2xl md:text-4xl font-bold mb-3">Contact NiPay</h1>
            <p className="text-lg text-muted-foreground">
              Get support for mobile money loans and business growth solutions in Rwanda.
            </p>
          </div>
        </SectionWrapper>
        
        {/* Contact Form & Info */}
        <SectionWrapper className="py-10 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 max-w-6xl mx-auto">
            {/* Contact Information */}
            <ContactInfo />
            
            {/* Contact Form */}
            <ContactForm />
          </div>
        </SectionWrapper>
      </main>
      
      <Footer />
    </>
  );
};

export default Contact;
