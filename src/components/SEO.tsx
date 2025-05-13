
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
  robots = "index, follow",
  revisitAfter = "7 days",
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
      
      {/* Mobile Specific */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      <meta name="theme-color" content="#4CAF50" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullCanonicalUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullCanonicalUrl} />
      <meta property="og:site_name" content="NiPay" />
      <meta property="og:image" content={fullOgImage} />
      <meta property="og:locale" content={language} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@NiPayRwanda" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullOgImage} />
      <meta name="twitter:creator" content="@NiPayRwanda" />
      
      {/* Google / Search Engine Tags */}
      <meta itemProp="name" content={title} />
      <meta itemProp="description" content={description} />
      <meta itemProp="image" content={fullOgImage} />
      
      {/* For returning visitors - link to web app if applicable */}
      <link rel="manifest" href="/manifest.json" />
      
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
