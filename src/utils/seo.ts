
/**
 * Generates JSON-LD structured data for common schemas used in NiPay
 */

export const generateOrganizationSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    "name": "NiPay",
    "description": "Rwanda's #1 mobile money loan platform. Instant business loans from MTN/Airtel money sales. No paperwork, no collateral needed.",
    "url": "https://nipay.rw",
    "logo": "https://nipay.rw/logo.png",
    "areaServed": {
      "@type": "Country",
      "name": "Rwanda"
    },
    "serviceType": "Mobile Money Loans",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "SME Credit Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "LoanOrCredit",
            "name": "Mobile Money Business Loans"
          }
        }
      ]
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Kigali",
      "addressRegion": "Kigali",
      "addressCountry": "Rwanda",
      "streetAddress": "Norrsken Rwanda"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+250788321008",
        "email": "contact@nipay.rw",
        "contactType": "customer service",
        "areaServed": "Rwanda",
        "availableLanguage": ["English", "Kinyarwanda"]
      },
      {
        "@type": "ContactPoint",
        "email": "sales@nipay.rw",
        "contactType": "sales",
        "areaServed": "Rwanda"
      }
    ],
    "sameAs": [
      "https://twitter.com/NiPayRwanda",
      "https://linkedin.com/company/nipay"
    ]
  };
};

export const generateServiceSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Mobile Money Credit Service",
    "provider": {
      "@type": "Organization",
      "name": "NiPay"
    },
    "name": "NiPay Mobile Money Loans",
    "description": "Instant access to working capital for small businesses in Rwanda based on mobile-money transaction history. No collateral required.",
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "price": "0",
      "priceCurrency": "RWF",
      "areaServed": "Rwanda"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Business Loan Options",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "LoanOrCredit",
            "name": "MTN Mobile Money Business Loans",
            "description": "Loans based on MTN Mobile Money transaction history"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "LoanOrCredit",
            "name": "Airtel Money Business Loans",
            "description": "Loans based on Airtel Money transaction history"
          }
        }
      ]
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

export const generateBreadcrumbSchema = (items: { name: string; url: string }[]) => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
};
