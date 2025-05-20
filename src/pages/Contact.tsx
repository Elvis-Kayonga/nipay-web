
import { useEffect } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import SectionWrapper from "@/components/shared/SectionWrapper";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <SEO
        title="Contact Us | NiPay"
        description="Reach out to our team for questions about NiPay's instant credit solutions for SMEs in Rwanda."
        keywords="contact NiPay, Rwanda fintech support, SME credit contact"
        canonicalUrl="/contact"
      />
      <Header />
      
      <main>
        {/* Hero Section */}
        <SectionWrapper className="bg-gradient-to-b from-accent to-background py-12 md:py-16">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-2xl md:text-4xl font-bold mb-3">Contact Us</h1>
            <p className="text-lg text-muted-foreground">
              We're here to help with any questions about NiPay.
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
