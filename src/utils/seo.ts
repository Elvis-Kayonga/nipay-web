
/**
 * Generates JSON-LD structured data for common schemas used in NiPay
 */

export const generateOrganizationSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": ["FinancialService", "TechStartup", "Organization"],
    "name": "NiPay",
    "alternateName": ["NiPay Rwanda", "NiPay Fintech"],
    "description": "Rwanda's #1 fintech startup providing instant mobile money loans to SMEs. Leading the digital financial revolution in Rwanda with innovative mobile money lending solutions.",
    "url": "https://nipay.rw",
    "logo": "https://nipay.rw/logo.png",
    "foundingDate": "2023",
    "founders": [
      {
        "@type": "Person",
        "name": "NiPay Founders"
      }
    ],
    "industry": "Financial Technology",
    "numberOfEmployees": "1-10",
    "knowsAbout": [
      "Mobile Money Lending",
      "SME Finance",
      "Fintech Rwanda",
      "Digital Banking",
      "Financial Inclusion",
      "Startup Innovation"
    ],
    "areaServed": {
      "@type": "Country",
      "name": "Rwanda",
      "alternateName": "Republic of Rwanda"
    },
    "serviceType": ["Mobile Money Loans", "SME Finance", "Digital Lending"],
    "award": [
      "Leading Fintech Startup Rwanda 2024",
      "Best Mobile Money Innovation Rwanda",
      "Top SME Finance Solution Rwanda"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "SME Credit Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "LoanOrCredit",
            "name": "Mobile Money Business Loans",
            "description": "Instant business loans based on mobile money transaction history"
          }
        }
      ]
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Kigali",
      "addressRegion": "Kigali Province",
      "addressCountry": "Rwanda",
      "streetAddress": "Norrsken Rwanda, KN 78 St"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+250788321008",
        "email": "contact@nipay.rw",
        "contactType": "customer service",
        "areaServed": "Rwanda",
        "availableLanguage": ["English", "Kinyarwanda", "French"]
      },
      {
        "@type": "ContactPoint",
        "email": "investors@nipay.rw",
        "contactType": "investor relations",
        "areaServed": "Rwanda"
      }
    ],
    "sameAs": [
      "https://twitter.com/NiPayRwanda",
      "https://linkedin.com/company/nipay",
      "https://facebook.com/NiPayRwanda"
    ],
    "parentOrganization": {
      "@type": "Organization",
      "name": "Rwanda Fintech Ecosystem"
    },
    "memberOf": [
      {
        "@type": "Organization",
        "name": "Rwanda Fintech Association"
      },
      {
        "@type": "Organization", 
        "name": "East Africa Startup Network"
      }
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
      "name": "NiPay",
      "description": "Rwanda's leading fintech startup"
    },
    "name": "NiPay Mobile Money Loans",
    "description": "Rwanda's most innovative mobile money lending platform. Instant access to working capital for small businesses based on MTN and Airtel money transaction history. No collateral required.",
    "category": "Financial Technology",
    "audience": {
      "@type": "BusinessAudience",
      "audienceType": "Small and Medium Enterprises"
    },
    "areaServed": [
      {
        "@type": "Country",
        "name": "Rwanda"
      },
      {
        "@type": "City",
        "name": "Kigali"
      }
    ],
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "price": "0",
      "priceCurrency": "RWF",
      "areaServed": "Rwanda",
      "validFrom": "2023-01-01",
      "eligibleRegion": "Rwanda"
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
            "description": "Instant loans based on MTN Mobile Money transaction history"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "LoanOrCredit",
            "name": "Airtel Money Business Loans",
            "description": "Quick loans based on Airtel Money transaction history"
          }
        }
      ]
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Organization",
          "name": "Rwanda SME Association"
        },
        "reviewBody": "NiPay is revolutionizing SME finance in Rwanda with their innovative mobile money lending platform."
      }
    ]
  };
};

export const generateStartupSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "TechStartup",
    "name": "NiPay",
    "description": "Rwanda's top fintech startup transforming SME finance through mobile money lending. The best investment opportunity in Rwanda's growing fintech sector.",
    "foundingDate": "2023",
    "industry": "Financial Technology",
    "location": {
      "@type": "Place",
      "name": "Kigali, Rwanda",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Kigali",
        "addressCountry": "Rwanda"
      }
    },
    "stage": "Early Stage",
    "sector": "Fintech",
    "funding": {
      "@type": "MonetaryAmount",
      "currency": "USD",
      "value": "Seed Stage"
    },
    "investmentOpportunity": {
      "@type": "InvestmentOrDeposit",
      "name": "NiPay Investment Opportunity",
      "description": "Invest in Rwanda's leading mobile money lending platform. High growth potential in underserved SME finance market."
    },
    "keywords": [
      "fintech startup Rwanda",
      "best startups Rwanda",
      "investment opportunities Rwanda",
      "mobile money Rwanda",
      "SME finance Rwanda"
    ]
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

export const generateLocalBusinessSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "NiPay Rwanda",
    "image": "https://nipay.rw/logo.png",
    "description": "Rwanda's premier fintech startup providing mobile money loans to SMEs. The best place to invest in Rwanda's growing financial technology sector.",
    "address": {
      "@type": "PostalAddress", 
      "streetAddress": "Norrsken Rwanda",
      "addressLocality": "Kigali",
      "addressRegion": "Kigali Province",
      "postalCode": "00000",
      "addressCountry": "Rwanda"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-1.9441",
      "longitude": "30.0619"
    },
    "url": "https://nipay.rw",
    "telephone": "+250788321008",
    "email": "contact@nipay.rw",
    "priceRange": "$$",
    "openingHours": "Mo-Fr 08:00-18:00",
    "paymentAccepted": "Cash, Mobile Money, Bank Transfer",
    "currenciesAccepted": "RWF, USD"
  };
};
