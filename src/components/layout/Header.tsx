
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import WaitlistModal from '../modals/WaitlistModal';
import { Link, useLocation } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showWaitlistModal, setShowWaitlistModal] = useState(false);
  const [isOverHero, setIsOverHero] = useState(true);
  const location = useLocation();
  const isMobile = useIsMobile();
  
  // Track scroll position to add background to header when scrolled
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 5);
      
      // Check if we're still over the hero section
      setIsOverHero(window.scrollY < window.innerHeight * 0.6);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    if (location.pathname === '/') {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.location.href = `/#${id}`;
    }
  };

  const navTextColor = isOverHero ? 'text-white' : 'text-foreground';
  
  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-background/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-between h-12">
            <Link to="/" className="flex items-center gap-2">
              <span className={`text-xl font-bold ${isOverHero ? 'text-nipay-green' : 'text-nipay-green'}`}>NiPay</span>
            </Link>
            
            {/* Desktop Navigation - smaller and thinner */}
            <nav className="hidden md:flex items-center gap-4">
              <a 
                href="#solution"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('solution');
                }}
                className={`${navTextColor} hover:text-nipay-green transition-colors text-sm py-1`}
              >
                Our Solution
              </a>
              <a 
                href="#benefits"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('benefits');
                }}
                className={`${navTextColor} hover:text-nipay-green transition-colors text-sm py-1`}
              >
                Why NiPay
              </a>
              <a 
                href="#how-it-works"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('how-it-works');
                }}
                className={`${navTextColor} hover:text-nipay-green transition-colors text-sm py-1`}
              >
                How It Works
              </a>
              <a 
                href="#validation"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('validation');
                }}
                className={`${navTextColor} hover:text-nipay-green transition-colors text-sm py-1`}
              >
                Proven Results
              </a>
              <Link 
                to="/investors"
                className="text-nipay-green font-medium hover:underline transition-colors text-sm py-1"
              >
                Investors
              </Link>
              <a 
                href="#faq"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('faq');
                }}
                className={`${navTextColor} hover:text-nipay-green transition-colors text-sm py-1`}
              >
                FAQ
              </a>
              <Link 
                to="/contact"
                className={`${navTextColor} hover:text-nipay-green transition-colors text-sm py-1`}
              >
                Contact
              </Link>
            </nav>
            
            <div className="flex items-center gap-2">
              {/* Desktop buttons - smaller */}
              <div className="hidden md:flex items-center gap-2">
                <Link to="/waitlist">
                  <Button variant="green" size="sm" className="h-8 text-sm px-3">Join Waitlist</Button>
                </Link>
                <Link to="/investors">
                  <Button variant={isOverHero ? "outline-white" : "outline-dark"} size="sm" className="h-8 text-sm px-3">Invest</Button>
                </Link>
              </div>
              
              {/* Mobile menu button */}
              <button
                className={`md:hidden flex items-center justify-center w-8 h-8 rounded-full ${
                  isScrolled ? 'bg-muted' : 'bg-black/20'
                } ${isOverHero ? 'text-white' : 'text-foreground'}`}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <X className="h-4 w-4" />
                ) : (
                  <Menu className="h-4 w-4" />
                )}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu - smaller */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-md animate-fade-in shadow-lg border-t border-border">
            <div className="py-3 px-4 space-y-2">
              <a
                href="#solution"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('solution');
                }}
                className="block py-2 text-foreground hover:text-nipay-green transition-colors border-b border-border text-sm"
              >
                Our Solution
              </a>
              <a
                href="#benefits"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('benefits');
                }}
                className="block py-2 text-foreground hover:text-nipay-green transition-colors border-b border-border text-sm"
              >
                Why NiPay
              </a>
              <a
                href="#how-it-works"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('how-it-works');
                }}
                className="block py-2 text-foreground hover:text-nipay-green transition-colors border-b border-border text-sm"
              >
                How It Works
              </a>
              <a
                href="#validation"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('validation');
                }}
                className="block py-2 text-foreground hover:text-nipay-green transition-colors border-b border-border text-sm"
              >
                Proven Results
              </a>
              <Link 
                to="/investors"
                className="block py-2 text-nipay-green font-medium hover:underline border-b border-border text-sm"
              >
                Investors
              </Link>
              <a
                href="#faq"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('faq');
                }}
                className="block py-2 text-foreground hover:text-nipay-green transition-colors border-b border-border text-sm"
              >
                FAQ
              </a>
              <Link
                to="/contact"
                className="block py-2 text-foreground hover:text-nipay-green transition-colors text-sm"
              >
                Contact
              </Link>
              
              <div className="flex flex-col gap-2 pt-3">
                <Link to="/waitlist" className="w-full">
                  <Button 
                    variant="green"
                    className="w-full py-4 text-sm"
                  >
                    Join Waitlist
                  </Button>
                </Link>
                <Link to="/investors" className="w-full">
                  <Button 
                    variant="outline"
                    className="w-full py-4 text-sm"
                  >
                    Invest
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
      
      <WaitlistModal 
        isOpen={showWaitlistModal} 
        onClose={() => setShowWaitlistModal(false)} 
      />
    </>
  );
};

export default Header;
