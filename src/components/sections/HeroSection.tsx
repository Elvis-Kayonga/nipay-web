
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Star } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-background via-background to-muted/20 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Main content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Trust badge */}
          <div className="inline-flex items-center gap-2 bg-nipay-green/10 text-nipay-dark-green px-4 py-2 rounded-full mb-6 border border-nipay-green/20">
            <Star className="h-4 w-4 fill-current" />
            <span className="text-sm font-medium">Trusted by 400+ Rwandan SMEs</span>
          </div>
          
          {/* Main headline */}
          <h1 className="text-4xl md:text-6xl xl:text-7xl font-bold mb-6 text-foreground leading-tight">
            Get instant loans from your{" "}
            <span className="text-gradient">mobile money sales</span>
          </h1>
          
          {/* Subheadline */}
          <p className="text-lg md:text-xl xl:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            NiPay provides instant business credit based on your MTN/Airtel money transaction history. 
            No paperwork, no collateral, no stress.
          </p>
          
          {/* Key benefits */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <div className="flex items-center gap-2 bg-card border border-green-100 px-4 py-2 rounded-full">
              <CheckCircle className="h-4 w-4 text-nipay-green" />
              <span className="text-sm font-medium">No Collateral</span>
            </div>
            <div className="flex items-center gap-2 bg-card border border-green-100 px-4 py-2 rounded-full">
              <CheckCircle className="h-4 w-4 text-nipay-green" />
              <span className="text-sm font-medium">Instant Approval</span>
            </div>
            <div className="flex items-center gap-2 bg-card border border-green-100 px-4 py-2 rounded-full">
              <CheckCircle className="h-4 w-4 text-nipay-green" />
              <span className="text-sm font-medium">Mobile Money Based</span>
            </div>
          </div>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/waitlist">
              <Button 
                size="lg" 
                className="btn-gradient px-8 py-4 text-lg font-semibold rounded-xl h-auto min-w-[200px]"
              >
                Join Waitlist
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            
            <Link to="/investors">
              <Button 
                variant="outline" 
                size="lg"
                className="px-8 py-4 text-lg font-semibold rounded-xl h-auto min-w-[200px] border-2"
              >
                For Investors
              </Button>
            </Link>
          </div>
          
          {/* Social proof */}
          <div className="mt-12 flex flex-col items-center gap-4">
            <p className="text-sm text-muted-foreground">Join thousands of SMEs already growing with mobile credit</p>
            <div className="flex items-center gap-6 opacity-60">
              <img 
                src="/lovable-uploads/51946dc5-f2c8-440c-9c1b-7671876e207e.png" 
                alt="MTN Logo" 
                className="h-8 object-contain grayscale hover:grayscale-0 transition-all"
              />
              <img 
                src="/lovable-uploads/6934a696-0341-4ece-9e56-325938e60d5f.png" 
                alt="Airtel Logo" 
                className="h-8 object-contain grayscale hover:grayscale-0 transition-all"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Floating animation elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-nipay-green/10 rounded-full animate-float"></div>
      <div className="absolute bottom-20 right-10 w-16 h-16 bg-nipay-green/20 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-5 w-12 h-12 bg-nipay-green/15 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default HeroSection;
