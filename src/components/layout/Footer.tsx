
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const isMobile = useIsMobile();
  
  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="container mx-auto py-10 md:py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-3 md:mb-4">
              <span className="text-xl md:text-2xl font-bold text-nipay-green">NiPay</span>
            </div>
            <p className="mb-4 md:mb-6 max-w-md text-sm md:text-base">
              Revolutionizing SME finance in Rwanda with instant credit against mobile-money inflows.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="hover:text-nipay-green transition-colors"
                aria-label="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a 
                href="#" 
                className="hover:text-nipay-green transition-colors"
                aria-label="Twitter"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a 
                href="mailto:info@nipay.rw" 
                className="hover:text-nipay-green transition-colors"
                aria-label="Email"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail">
                  <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                </svg>
              </a>
            </div>
          </div>
          
          {/* For mobile, show the two columns side by side */}
          <div className={`${isMobile ? 'grid grid-cols-2 gap-4 col-span-1' : ''}`}>
            <div>
              <h3 className="font-bold text-base md:text-lg mb-3 md:mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-nipay-green transition-colors text-sm md:text-base">Home</a>
                </li>
                <li>
                  <a href="#solution" className="hover:text-nipay-green transition-colors text-sm md:text-base">Solution</a>
                </li>
                <li>
                  <a href="#benefits" className="hover:text-nipay-green transition-colors text-sm md:text-base">Benefits</a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-nipay-green transition-colors text-sm md:text-base">FAQ</a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-bold text-base md:text-lg mb-3 md:mb-4">Contact Us</h3>
              <address className="not-italic text-sm md:text-base">
                <p className="mb-1 md:mb-2">Kigali Heights</p>
                <p className="mb-1 md:mb-2">Kigali, Rwanda</p>
                <p className="mb-1 md:mb-2">
                  <a href="mailto:info@nipay.rw" className="hover:text-nipay-green transition-colors">
                    info@nipay.rw
                  </a>
                </p>
                <p>
                  <a href="tel:+250700000000" className="hover:text-nipay-green transition-colors">
                    +250 700 000 000
                  </a>
                </p>
              </address>
            </div>
          </div>
          
          {!isMobile && (
            <div>
              <h3 className="font-bold text-lg mb-4">Contact Us</h3>
              <address className="not-italic">
                <p className="mb-2">Kigali Heights</p>
                <p className="mb-2">Kigali, Rwanda</p>
                <p className="mb-2">
                  <a href="mailto:info@nipay.rw" className="hover:text-nipay-green transition-colors">
                    info@nipay.rw
                  </a>
                </p>
                <p>
                  <a href="tel:+250700000000" className="hover:text-nipay-green transition-colors">
                    +250 700 000 000
                  </a>
                </p>
              </address>
            </div>
          )}
        </div>
        
        <div className="border-t border-accent/20 mt-6 md:mt-8 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs md:text-sm text-muted-foreground">
            &copy; {currentYear} NiPay Ltd. All rights reserved.
          </p>
          <p className="text-xs md:text-sm text-muted-foreground mt-2 md:mt-0">
            NiPay Ltd. is a fintech partner of XYZ Bank, regulated by BNR.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
