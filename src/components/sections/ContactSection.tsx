
import SectionWrapper from '../shared/SectionWrapper';
import { Button } from '@/components/ui/button';
import { MessageCircle, Mail, MapPin } from 'lucide-react';

const ContactSection = () => {
  return (
    <SectionWrapper id="contact" className="py-20 lg:py-32 bg-nipay-green text-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Founder message */}
          <div>
            <div className="flex items-center space-x-4 mb-6 lg:mb-8">
              <div className="w-16 h-16 lg:w-20 lg:h-20 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-2xl lg:text-3xl font-bold">NP</span>
              </div>
              <div>
                <h3 className="text-xl lg:text-2xl font-bold">NiPay Team</h3>
                <p className="text-white/80">Founders & SME Specialists</p>
              </div>
            </div>
            
            <blockquote className="text-xl lg:text-2xl mb-8 lg:mb-10 leading-relaxed italic">
              "We built NiPay to help Rwandan SMEs grow — even when banks say no."
            </blockquote>
            
            <p className="text-lg lg:text-xl leading-relaxed text-white/90">
              Every day, we see hardworking business owners who need just a little working capital to grow. 
              NiPay makes that possible through the mobile money system you already use.
            </p>
          </div>
          
          {/* Right side - Contact options */}
          <div className="space-y-6 lg:space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8 lg:mb-12">
              Get in Touch
            </h2>
            
            <div className="space-y-4 lg:space-y-6">
              <Button 
                onClick={() => window.open('https://wa.me/250788321008?text=Hi%20NiPay%2C%20I%20want%20to%20learn%20more', '_blank')}
                className="w-full bg-green-600 hover:bg-green-700 text-white text-lg lg:text-xl py-6 lg:py-8 justify-start"
              >
                <MessageCircle className="mr-4 h-6 w-6 lg:h-7 lg:w-7" />
                Chat on WhatsApp
              </Button>
              
              <a 
                href="mailto:contact@nipay.rw"
                className="flex items-center w-full bg-white/10 hover:bg-white/20 text-white p-4 lg:p-6 rounded-lg transition-colors"
              >
                <Mail className="mr-4 h-6 w-6 lg:h-7 lg:w-7" />
                <div className="text-left">
                  <div className="font-semibold text-lg lg:text-xl">Email Us</div>
                  <div className="text-white/80">contact@nipay.rw</div>
                </div>
              </a>
              
              <div className="flex items-center w-full bg-white/10 text-white p-4 lg:p-6 rounded-lg">
                <MapPin className="mr-4 h-6 w-6 lg:h-7 lg:w-7" />
                <div className="text-left">
                  <div className="font-semibold text-lg lg:text-xl">Visit Us</div>
                  <div className="text-white/80">Norrsken Rwanda, Kigali</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;
