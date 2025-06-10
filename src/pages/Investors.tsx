
import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import InvestorHero from "@/components/sections/InvestorHero";
import TractionSnapshot from "@/components/sections/TractionSnapshot";
import WhatWereBuilding from "@/components/sections/WhatWereBuilding";
import BusinessModel from "@/components/sections/BusinessModel";
import WhyWeWin from "@/components/sections/WhyWeWin";
import TheRaise from "@/components/sections/TheRaise";
import InvestorCTA from "@/components/sections/InvestorCTA";

const Investors = () => {
  return (
    <>
      <Helmet>
        <title>Investors | NiPay - SME Finance Innovation</title>
        <meta name="description" content="Join NiPay's $550K Pre-Seed round. Invest in the future of SME liquidity in Africa with our USSD-first overdraft wallet and automatic repayments." />
        <meta name="keywords" content="investment opportunity, SME finance, Rwanda, fintech funding, pre-seed round, africa fintech" />
        
        {/* Open Graph / Social */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="NiPay Investors | SME Finance Innovation" />
        <meta property="og:description" content="Join our $550K Pre-Seed round to transform SME finance in Africa." />
        <meta property="og:image" content="/placeholder.svg" />
      </Helmet>
      
      <Header />
      
      <main className="min-h-screen pt-16">
        <InvestorHero />
        <TractionSnapshot />
        <WhatWereBuilding />
        <BusinessModel />
        <WhyWeWin />
        <TheRaise />
        <InvestorCTA />
      </main>
      
      <Footer />
    </>
  );
};

export default Investors;
