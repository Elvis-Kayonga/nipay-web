
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import WaitlistModal from '../modals/WaitlistModal';
import { ArrowRight, MessageCircle } from "lucide-react";
import { useIsMobile } from '@/hooks/use-mobile';

const HeroSection = () => {
  const [showWaitlistModal, setShowWaitlistModal] = useState(false);
  const isMobile = useIsMobile();
  
  return (
    <section className="relative min-h-screen flex items-center justify-center text-white bg-gradient-to-br from-nipay-green via-nipay-dark-green to-green-800">
      {/* Background pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      {/* Content */}
      <div className="container mx-auto px-6 lg:px-8 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Pain Point Callout */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 lg:p-6 mb-8 lg:mb-12 border border-white/20">
            <p className="text-lg lg:text-xl italic text-white/90 leading-relaxed">
              "You run your business with mobile money — but no one will lend you even 20K when you need it most."
            </p>
          </div>
          
          <h1 className="text-3xl lg:text-5xl xl:text-6xl font-bold mb-6 lg:mb-8 leading-tight">
            Cash tight? NiPay helps you borrow small amounts — <span className="text-yellow-300">automatically</span> — from your mobile money sales.
          </h1>
          
          <p className="text-xl lg:text-2xl mb-8 lg:mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
            No paperwork. No stress. No collateral.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 lg:gap-6 justify-center mb-12 lg:mb-16">
            <Button 
              onClick={() => setShowWaitlistModal(true)}
              size="lg" 
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold text-lg lg:text-xl py-6 lg:py-8 px-8 lg:px-12 shadow-xl hover:shadow-2xl transition-all duration-300 w-full sm:w-auto"
            >
              Join the Waitlist
              <ArrowRight className="ml-3 h-5 w-5 lg:h-6 lg:w-6" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-white text-white hover:bg-white/10 text-lg lg:text-xl py-6 lg:py-8 px-8 lg:px-12 w-full sm:w-auto"
              onClick={() => window.open('https://wa.me/250788123456?text=Hi%20NiPay%2C%20I%20have%20a%20question', '_blank')}
            >
              <MessageCircle className="mr-3 h-5 w-5 lg:h-6 lg:w-6" />
              Ask a Question
            </Button>
          </div>
          
          {/* Early Traction */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 lg:p-8 border border-white/20">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 text-center">
              <div>
                <div className="text-2xl lg:text-3xl font-bold text-yellow-300">400+</div>
                <div className="text-sm lg:text-base text-white/80">SMEs Signed Up</div>
              </div>
              <div>
                <div className="text-2xl lg:text-3xl font-bold text-yellow-300">258M RWF</div>
                <div className="text-sm lg:text-base text-white/80">Requested in Pilot</div>
              </div>
              <div className="col-span-2 lg:col-span-1">
                <div className="text-2xl lg:text-3xl font-bold text-yellow-300">100%</div>
                <div className="text-sm lg:text-base text-white/80">Built for Rwanda</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <WaitlistModal isOpen={showWaitlistModal} onClose={() => setShowWaitlistModal(false)} />
    </section>
  );
};

export default HeroSection;
