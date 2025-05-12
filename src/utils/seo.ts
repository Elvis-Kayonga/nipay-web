
/**
 * Generates JSON-LD structured data for common schemas used in NiPay
 */

export const generateOrganizationSchema = () => {
  return {
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
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+250700000000",
      "email": "info@nipay.rw",
      "contactType": "customer service"
    }
  };
};

export const generateServiceSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "SME Credit Service",
    "provider": {
      "@type": "Organization",
      "name": "NiPay"
    },
    "name": "NiPay SME Overdraft",
    "description": "Instant access to working capital for small businesses in Rwanda based on mobile-money transaction history",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "price": "0",
      "priceCurrency": "RWF",
      "areaServed": "Rwanda"
    }
  };
};

export const generateFaqSchema = (faqs: { question: string; answer: string }[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
};
