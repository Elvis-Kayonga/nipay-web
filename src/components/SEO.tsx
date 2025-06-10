
import { FC } from "react";
import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  structuredData?: Record<string, any>;
  children?: React.ReactNode;
  author?: string;
  language?: string;
  robots?: string;
  revisitAfter?: string;
}

const SEO: FC<SEOProps> = ({
  title,
  description,
  keywords,
  canonicalUrl = "/",
  ogImage = "/placeholder.svg",
  structuredData,
  children,
  author = "NiPay Rwanda",
  language = "en_RW",
  robots = "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  revisitAfter = "3 days",
}) => {
  const baseUrl = "https://nipay.rw";
  const fullCanonicalUrl = canonicalUrl.startsWith('http') 
    ? canonicalUrl 
    : `${baseUrl}${canonicalUrl}`;
  
  const fullOgImage = ogImage.startsWith('http')
    ? ogImage
    : `${baseUrl}${ogImage}`;
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content={author} />
      <meta name="language" content={language} />
      <meta name="robots" content={robots} />
      <meta name="revisit-after" content={revisitAfter} />
      <meta name="generator" content="NiPay Platform" />
      
      {/* Enhanced SEO Meta Tags for Africa and East Africa Market */}
      <meta name="geo.region" content="RW" />
      <meta name="geo.country" content="Rwanda" />
      <meta name="geo.placename" content="Kigali" />
      <meta name="geo.position" content="-1.9441;30.0619" />
      <meta name="ICBM" content="-1.9441, 30.0619" />
      <meta name="classification" content="Business, Financial Services, Mobile Money, Loans, Fintech Rwanda, Fintech Africa, Startups Rwanda, Startups Africa, SME Finance Africa, Grants SME Rwanda" />
      <meta name="subject" content="Fintech Rwanda, Fintech Africa, Startups Africa, Mobile Money Loans, SME Finance Rwanda, SME Finance Africa, Best Startups Rwanda, Best Startups Africa, East Africa Startups, Funds for SMEs Rwanda, Grants for SMEs Rwanda, Small Business Grants Africa" />
      <meta name="copyright" content="NiPay Ltd" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />
      <meta name="category" content="Business, Finance, Technology, Startups, Africa, East Africa, SME Funding, Grants" />
      <meta name="coverage" content="Rwanda, East Africa, Africa, Emerging Markets" />
      <meta name="target" content="SMEs, Small Business Owners, Entrepreneurs, Investors, African Startups, East African Businesses" />
      
      {/* Business specific meta tags */}
      <meta name="business.type" content="Financial Technology" />
      <meta name="business.sector" content="Fintech Africa" />
      <meta name="business.location" content="Rwanda, East Africa" />
      <meta name="business.founded" content="2023" />
      <meta name="business.stage" content="Startup Africa" />
      <meta name="business.market" content="Africa, East Africa, Rwanda, SME Finance" />
      
      {/* Investment and funding related meta tags */}
      <meta name="investment.stage" content="Early Stage Africa" />
      <meta name="investment.sector" content="Fintech Africa" />
      <meta name="investment.region" content="Rwanda, East Africa, Africa" />
      <meta name="investment.type" content="Equity, Grants, SME Funding" />
      <meta name="funding.type" content="SME Grants, Small Business Funds, Startup Funding Africa" />
      <meta name="grants.sector" content="SME Rwanda, Small Companies Africa" />
      <meta name="sme.funding" content="Rwanda SME Finance, Africa SME Grants, East Africa Business Loans" />
      
      {/* Africa and East Africa specific tags */}
      <meta name="africa.startups" content="Best Startups Africa, Top Fintech Africa, Leading Startups East Africa" />
      <meta name="east.africa.business" content="East Africa Fintech, Rwanda Business, Kenya Uganda Tanzania Startups" />
      <meta name="africa.finance" content="Africa SME Finance, Mobile Money Africa, Digital Banking Africa" />
      
      {/* Mobile Specific */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes" />
      <meta name="theme-color" content="#4CAF50" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="NiPay Africa" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullCanonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:site_name" content="NiPay Africa" />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:locale" content={language} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="NiPay - Leading Fintech Startup in Rwanda and Africa" />
      <meta property="business:contact_data:street_address" content="Norrsken Rwanda, Kigali" />
      <meta property="business:contact_data:locality" content="Kigali" />
      <meta property="business:contact_data:region" content="East Africa" />
      <meta property="business:contact_data:country_name" content="Rwanda" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@NiPayRwanda" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />
      <meta name="twitter:creator" content="@NiPayRwanda" />
      <meta name="twitter:image:alt" content="NiPay - Best Fintech Startup Rwanda Africa" />
      
      {/* Google / Search Engine Tags */}
      <meta itemProp="name" content={title} />
      <meta itemProp="description" content={description} />
      <meta itemProp="image" content={fullOgImage} />
      
      {/* Hreflang for multilingual SEO */}
      <link rel="alternate" hrefLang="en" href={fullCanonicalUrl} />
      <link rel="alternate" hrefLang="rw" href={fullCanonicalUrl} />
      <link rel="alternate" hrefLang="fr" href={fullCanonicalUrl} />
      <link rel="alternate" hrefLang="sw" href={fullCanonicalUrl} />
      
      {/* For returning visitors - link to web app if applicable */}
      <link rel="manifest" href="/manifest.json" />
      
      {/* Preconnect to important domains for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://www.googletagmanager.com" />
      <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      
      {/* Rich snippets helpers */}
      <meta name="news_keywords" content="Rwanda fintech, Africa fintech, East Africa startups, mobile money Africa, startup funding Africa, SME loans Africa, SME grants Rwanda, small business funding Africa, digital banking Africa, fintech investment Africa" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
      
      {/* Apple Touch Icons */}
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      
      {children}
    </Helmet>
  );
};

export default SEO;
