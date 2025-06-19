
import SectionWrapper from '../shared/SectionWrapper';
import { Button } from '@/components/ui/button';
import { Mail, MapPin } from 'lucide-react';

const ContactSection = () => {
  return (
    <SectionWrapper id="contact" className="py-16 lg:py-20 bg-nipay-green text-white">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left side - Founder message */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-14 h-14 lg:w-16 lg:h-16 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-xl lg:text-2xl font-bold">NP</span>
              </div>
              <div>
                <h3 className="text-lg lg:text-xl font-bold">NiPay Team</h3>
                <p className="text-white/80 text-sm">Founders & SME Specialists</p>
              </div>
            </div>
            
            <blockquote className="text-lg lg:text-xl mb-6 lg:mb-8 leading-relaxed italic">
              "We built NiPay to help Rwandan SMEs grow — even when banks say no."
            </blockquote>
            
            <p className="text-base lg:text-lg leading-relaxed text-white/90">
              Every day, we see hardworking business owners who need just a little working capital to grow. 
              NiPay makes that possible through the mobile money system you already use.
            </p>
          </div>
          
          {/* Right side - Contact options */}
          <div className="space-y-5 lg:space-y-6">
            <h2 className="text-2xl lg:text-3xl font-bold mb-6 lg:mb-8">
              Get in Touch
            </h2>
            
            <div className="space-y-4">
              <a 
                href="mailto:contact@nipay.rw"
                className="flex items-center w-full bg-white/10 hover:bg-white/20 text-white p-4 lg:p-5 rounded-lg transition-colors"
              >
                <Mail className="mr-4 h-5 w-5 lg:h-6 lg:w-6" />
                <div className="text-left">
                  <div className="font-semibold text-base lg:text-lg">Email Us</div>
                  <div className="text-white/80 text-sm">contact@nipay.rw</div>
                </div>
              </a>
              
              <div className="flex items-center w-full bg-white/10 text-white p-4 lg:p-5 rounded-lg">
                <MapPin className="mr-4 h-5 w-5 lg:h-6 lg:w-6" />
                <div className="text-left">
                  <div className="font-semibold text-base lg:text-lg">Visit Us</div>
                  <div className="text-white/80 text-sm">Norrsken Rwanda, Kigali</div>
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
