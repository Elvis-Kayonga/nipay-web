
/**
 * Generates JSON-LD structured data for common schemas used in NiPay
 */

export const generateOrganizationSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": ["FinancialService", "TechStartup", "Organization"],
    "name": "NiPay",
    "alternateName": ["NiPay Rwanda", "NiPay Africa", "NiPay Fintech", "NiPay East Africa"],
    "description": "Africa's #1 fintech startup providing instant mobile money loans to SMEs across Rwanda and East Africa. Leading the digital financial revolution in Africa with innovative mobile money lending solutions, SME grants, and business funding.",
    "url": "https://nipay.rw",
    "logo": "https://nipay.rw/logo.png",
    "foundingDate": "2023",
    "founders": [
      {
        "@type": "Person",
        "name": "NiPay Founders"
      }
    ],
    "industry": "Financial Technology Africa",
    "numberOfEmployees": "1-10",
    "knowsAbout": [
      "Mobile Money Lending Africa",
      "SME Finance Africa",
      "Fintech Rwanda",
      "Fintech Africa",
      "Digital Banking Africa",
      "Financial Inclusion Africa",
      "Startup Innovation Africa",
      "East Africa Startups",
      "SME Grants Rwanda",
      "Business Funding Africa",
      "Funds for SMEs Africa",
      "Grants for Small Companies"
    ],
    "areaServed": [
      {
        "@type": "Country",
        "name": "Rwanda",
        "alternateName": "Republic of Rwanda"
      },
      {
        "@type": "Place",
        "name": "East Africa",
        "containsPlace": ["Rwanda", "Kenya", "Uganda", "Tanzania"]
      },
      {
        "@type": "Continent",
        "name": "Africa"
      }
    ],
    "serviceType": ["Mobile Money Loans Africa", "SME Finance Africa", "Digital Lending Africa", "SME Grants", "Business Funding"],
    "award": [
      "Leading Fintech Startup Africa 2024",
      "Best Mobile Money Innovation Africa",
      "Top SME Finance Solution Africa",
      "Best Startup Rwanda 2024",
      "Top East Africa Fintech 2024"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "SME Credit and Grant Services Africa",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "LoanOrCredit",
            "name": "Mobile Money Business Loans Africa",
            "description": "Instant business loans based on mobile money transaction history across Africa"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Grant",
            "name": "SME Grants Rwanda",
            "description": "Business grants and funding for small and medium enterprises in Rwanda"
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
        "areaServed": ["Rwanda", "East Africa", "Africa"],
        "availableLanguage": ["English", "Kinyarwanda", "French", "Swahili"]
      },
      {
        "@type": "ContactPoint",
        "email": "investors@nipay.rw",
        "contactType": "investor relations",
        "areaServed": ["Rwanda", "East Africa", "Africa"]
      }
    ],
    "sameAs": [
      "https://twitter.com/NiPayRwanda",
      "https://linkedin.com/company/nipay",
      "https://facebook.com/NiPayRwanda"
    ],
    "parentOrganization": {
      "@type": "Organization",
      "name": "Africa Fintech Ecosystem"
    },
    "memberOf": [
      {
        "@type": "Organization",
        "name": "Rwanda Fintech Association"
      },
      {
        "@type": "Organization", 
        "name": "East Africa Startup Network"
      },
      {
        "@type": "Organization",
        "name": "Africa Fintech Network"
      }
    ]
  };
};

export const generateServiceSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Mobile Money Credit Service Africa",
    "provider": {
      "@type": "Organization",
      "name": "NiPay",
      "description": "Africa's leading fintech startup"
    },
    "name": "NiPay Mobile Money Loans Africa",
    "description": "Africa's most innovative mobile money lending platform. Instant access to working capital for small businesses across Rwanda and East Africa based on MTN and Airtel money transaction history. SME grants and funding solutions. No collateral required.",
    "category": "Financial Technology Africa",
    "audience": {
      "@type": "BusinessAudience",
      "audienceType": "Small and Medium Enterprises Africa"
    },
    "areaServed": [
      {
        "@type": "Country",
        "name": "Rwanda"
      },
      {
        "@type": "Place",
        "name": "East Africa"
      },
      {
        "@type": "Continent",
        "name": "Africa"
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
      "areaServed": ["Rwanda", "East Africa", "Africa"],
      "validFrom": "2023-01-01",
      "eligibleRegion": ["Rwanda", "East Africa"]
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Business Loan and Grant Options Africa",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "LoanOrCredit",
            "name": "MTN Mobile Money Business Loans Africa",
            "description": "Instant loans based on MTN Mobile Money transaction history across Africa"
          }
        },
        {
          "@type": "Offer", 
          "itemOffered": {
            "@type": "LoanOrCredit",
            "name": "Airtel Money Business Loans Africa",
            "description": "Quick loans based on Airtel Money transaction history across Africa"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Grant",
            "name": "SME Grants Rwanda",
            "description": "Business grants and funding for small companies in Rwanda"
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
          "name": "Africa SME Association"
        },
        "reviewBody": "NiPay is revolutionizing SME finance across Africa with their innovative mobile money lending platform and grant solutions."
      }
    ]
  };
};

export const generateStartupSchema = () => {
  return {
    "@context": "https://schema.org",
    "@type": "TechStartup",
    "name": "NiPay",
    "description": "Africa's top fintech startup transforming SME finance through mobile money lending across Rwanda and East Africa. The best investment opportunity in Africa's growing fintech sector with SME grants and funding solutions.",
    "foundingDate": "2023",
    "industry": "Financial Technology Africa",
    "location": {
      "@type": "Place",
      "name": "Kigali, Rwanda, East Africa",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Kigali",
        "addressRegion": "East Africa",
        "addressCountry": "Rwanda"
      }
    },
    "stage": "Early Stage Africa",
    "sector": "Fintech Africa",
    "funding": {
      "@type": "MonetaryAmount",
      "currency": "USD",
      "value": "Seed Stage Africa"
    },
    "investmentOpportunity": {
      "@type": "InvestmentOrDeposit",
      "name": "NiPay Investment Opportunity Africa",
      "description": "Invest in Africa's leading mobile money lending platform. High growth potential in underserved SME finance market across East Africa."
    },
    "keywords": [
      "fintech startup Rwanda",
      "fintech startup Africa",
      "best startups Rwanda",
      "best startups Africa",
      "startups Africa",
      "East Africa startups",
      "investment opportunities Africa",
      "mobile money Africa",
      "SME finance Africa",
      "funds for SME Rwanda",
      "grants for SMEs Africa",
      "small business grants Africa"
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
    "name": "NiPay Rwanda Africa",
    "image": "https://nipay.rw/logo.png",
    "description": "Africa's premier fintech startup providing mobile money loans to SMEs across Rwanda and East Africa. The best place to invest in Africa's growing financial technology sector with SME grants and funding solutions.",
    "address": {
      "@type": "PostalAddress", 
      "streetAddress": "Norrsken Rwanda",
      "addressLocality": "Kigali",
      "addressRegion": "East Africa",
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
    "currenciesAccepted": "RWF, USD, KES, UGX, TZS",
    "areaServed": [
      {
        "@type": "Country",
        "name": "Rwanda"
      },
      {
        "@type": "Place", 
        "name": "East Africa"
      },
      {
        "@type": "Continent",
        "name": "Africa"
      }
    ]
  };
};
