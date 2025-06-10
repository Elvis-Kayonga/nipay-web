
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const InvestorHero = () => {
  return (
    <section className="relative min-h-[75vh] flex items-center text-white overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0" 
        style={{
          backgroundImage: "linear-gradient(135deg, #1a5c38 0%, #2ecc71 100%)"
        }} 
        aria-hidden="true"
      >
        <div className="absolute inset-0 bg-black/20"></div>
      </div>
      
      <div className="container mx-auto px-6 lg:px-8 relative z-10 max-w-5xl">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 animate-fade-in leading-tight">
            Invest in the future of SME liquidity in Africa
          </h1>
          
          <p className="text-xl lg:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed opacity-95">
            NiPay unlocks working capital for mobile money-driven SMEs in Rwanda via a USSD-first overdraft wallet with automatic repayments.
          </p>
          
          <Button 
            size="lg" 
            className="bg-white text-nipay-dark-green hover:bg-white/90 text-xl px-12 py-6 shadow-2xl hover:shadow-xl transition-all duration-300 font-bold" 
            onClick={() => {
              const element = document.getElementById("investor-form");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Join Our Pre-Seed Round
            <ArrowRight className="ml-3 h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InvestorHero;
