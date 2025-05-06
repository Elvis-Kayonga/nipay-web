
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import ThemeToggle from '../ui/ThemeToggle';
import WaitlistModal from '../modals/WaitlistModal';
import InvestorModal from '../modals/InvestorModal';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showWaitlistModal, setShowWaitlistModal] = useState(false);
  const [showInvestorModal, setShowInvestorModal] = useState(false);
  
  // Track scroll position to add background to header when scrolled
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-background/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <a href="#" className="flex items-center gap-2">
              <span className="text-2xl font-bold text-nipay-green">NiPay</span>
            </a>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <a 
                href="#problem" 
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('problem');
                }}
                className="text-foreground hover:text-nipay-green transition-colors"
              >
                Problem
              </a>
              <a 
                href="#solution"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('solution');
                }}
                className="text-foreground hover:text-nipay-green transition-colors"
              >
                Solution
              </a>
              <a 
                href="#benefits"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('benefits');
                }}
                className="text-foreground hover:text-nipay-green transition-colors"
              >
                Benefits
              </a>
              <a 
                href="#how-it-works"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('how-it-works');
                }}
                className="text-foreground hover:text-nipay-green transition-colors"
              >
                How It Works
              </a>
              <a 
                href="#faq"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('faq');
                }}
                className="text-foreground hover:text-nipay-green transition-colors"
              >
                FAQ
              </a>
            </nav>
            
            <div className="flex items-center gap-4">
              <ThemeToggle />
              
              <div className="hidden md:flex items-center gap-3">
                <Button 
                  variant="outline"
                  onClick={() => setShowInvestorModal(true)}
                >
                  Talk to Us
                </Button>
                <Button 
                  variant="default"
                  onClick={() => setShowWaitlistModal(true)}
                >
                  Join Waitlist
                </Button>
              </div>
              
              {/* Mobile menu button */}
              <button
                className="md:hidden flex items-center"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {mobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-md">
            <div className="py-4 px-6 space-y-3">
              <a
                href="#problem"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('problem');
                }}
                className="block py-2 text-foreground hover:text-nipay-green transition-colors"
              >
                Problem
              </a>
              <a
                href="#solution"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('solution');
                }}
                className="block py-2 text-foreground hover:text-nipay-green transition-colors"
              >
                Solution
              </a>
              <a
                href="#benefits"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('benefits');
                }}
                className="block py-2 text-foreground hover:text-nipay-green transition-colors"
              >
                Benefits
              </a>
              <a
                href="#how-it-works"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('how-it-works');
                }}
                className="block py-2 text-foreground hover:text-nipay-green transition-colors"
              >
                How It Works
              </a>
              <a
                href="#faq"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('faq');
                }}
                className="block py-2 text-foreground hover:text-nipay-green transition-colors"
              >
                FAQ
              </a>
              
              <div className="flex flex-col gap-2 pt-3 border-t border-border">
                <Button 
                  variant="default"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setShowWaitlistModal(true);
                  }}
                  className="w-full"
                >
                  Join Waitlist
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setShowInvestorModal(true);
                  }}
                  className="w-full"
                >
                  Talk to Us
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>
      
      <WaitlistModal 
        isOpen={showWaitlistModal} 
        onClose={() => setShowWaitlistModal(false)} 
      />
      <InvestorModal
        isOpen={showInvestorModal}
        onClose={() => setShowInvestorModal(false)}
      />
    </>
  );
};

export default Header;
