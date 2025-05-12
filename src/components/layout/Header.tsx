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
      setIsScrolled(window.scrollY > 10);
      
      // Check if we're still over the hero section
      setIsOverHero(window.scrollY < window.innerHeight * 0.8);
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
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <span className={`text-2xl font-bold ${isOverHero ? 'text-nipay-green' : 'text-nipay-green'}`}>NiPay</span>
            </Link>
            
            {/* Desktop Navigation - hidden on mobile */}
            <nav className="hidden md:flex items-center gap-6">
              <a 
                href="#solution"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('solution');
                }}
                className={`${navTextColor} hover:text-nipay-green transition-colors`}
              >
                Solution
              </a>
              <a 
                href="#benefits"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('benefits');
                }}
                className={`${navTextColor} hover:text-nipay-green transition-colors`}
              >
                Benefits
              </a>
              <a 
                href="#how-it-works"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('how-it-works');
                }}
                className={`${navTextColor} hover:text-nipay-green transition-colors`}
              >
                How It Works
              </a>
              <a 
                href="#problem"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('problem');
                }}
                className={`${navTextColor} hover:text-nipay-green transition-colors`}
              >
                Why It Matters
              </a>
              <Link 
                to="/investors"
                className="text-nipay-green font-medium hover:underline transition-colors"
              >
                For Investors
              </Link>
              <a 
                href="#faq"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('faq');
                }}
                className={`${navTextColor} hover:text-nipay-green transition-colors`}
              >
                FAQ
              </a>
            </nav>
            
            <div className="flex items-center gap-3">
              {/* Removed ThemeToggle component reference */}
              
              {/* Desktop buttons - hidden on mobile */}
              <div className="hidden md:flex items-center gap-3">
                <Link to="/waitlist">
                  <Button variant="green">Join Waitlist</Button>
                </Link>
                <Link to="/investors">
                  <Button variant={isOverHero ? "outline-white" : "outline-dark"}>For Investors</Button>
                </Link>
              </div>
              
              {/* Mobile menu button */}
              <button
                className={`md:hidden flex items-center justify-center w-10 h-10 rounded-full ${
                  isScrolled ? 'bg-muted' : 'bg-black/20'
                } ${isOverHero ? 'text-white' : 'text-foreground'}`}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu - improved styling and transitions */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-md animate-fade-in shadow-lg border-t border-border">
            <div className="py-4 px-6 space-y-4">
              <a
                href="#solution"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('solution');
                }}
                className="block py-3 text-foreground hover:text-nipay-green transition-colors border-b border-border"
              >
                Solution
              </a>
              <a
                href="#benefits"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('benefits');
                }}
                className="block py-3 text-foreground hover:text-nipay-green transition-colors border-b border-border"
              >
                Benefits
              </a>
              <a
                href="#how-it-works"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('how-it-works');
                }}
                className="block py-3 text-foreground hover:text-nipay-green transition-colors border-b border-border"
              >
                How It Works
              </a>
              <a
                href="#problem"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('problem');
                }}
                className="block py-3 text-foreground hover:text-nipay-green transition-colors border-b border-border"
              >
                Why It Matters
              </a>
              <Link 
                to="/investors"
                className="block py-3 text-nipay-green font-medium hover:underline border-b border-border"
              >
                For Investors
              </Link>
              <a
                href="#faq"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('faq');
                }}
                className="block py-3 text-foreground hover:text-nipay-green transition-colors"
              >
                FAQ
              </a>
              
              <div className="flex flex-col gap-3 pt-4">
                <Link to="/waitlist" className="w-full">
                  <Button 
                    variant="green"
                    className="w-full py-6 text-base"
                  >
                    Join Waitlist
                  </Button>
                </Link>
                <Link to="/investors" className="w-full">
                  <Button 
                    variant="outline"
                    className="w-full py-6 text-base"
                  >
                    For Investors
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
