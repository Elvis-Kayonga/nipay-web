
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import ThemeToggle from '../ui/ThemeToggle';
import WaitlistModal from '../modals/WaitlistModal';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showWaitlistModal, setShowWaitlistModal] = useState(false);
  const [isOverHero, setIsOverHero] = useState(true);
  const location = useLocation();
  
  // Track scroll position to add background to header when scrolled
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // Check if we're still over the hero section
      // Hero section usually takes up the first viewport height (100vh)
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
      // If on another page, navigate to home with hash
      window.location.href = `/#${id}`;
    }
  };

  // Set text color based on scroll position
  const navTextColor = isOverHero ? 'text-white' : 'text-foreground';
  
  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-background/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <span className={`text-2xl font-bold ${isOverHero ? 'text-nipay-green' : 'text-nipay-green'}`}>NiPay</span>
            </Link>
            
            {/* Desktop Navigation */}
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
            
            <div className="flex items-center gap-4">
              <ThemeToggle />
              
              <div className="hidden md:flex items-center gap-3">
                <Link to="/waitlist">
                  <Button 
                    variant="green"
                  >
                    Join Waitlist
                  </Button>
                </Link>
                <Link to="/investors">
                  <Button 
                    variant={isOverHero ? "outline-white" : "outline-dark"}
                  >
                    For Investors
                  </Button>
                </Link>
              </div>
              
              {/* Mobile menu button */}
              <button
                className={`md:hidden flex items-center ${isOverHero ? 'text-white' : 'text-foreground'}`}
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
                href="#problem"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('problem');
                }}
                className="block py-2 text-foreground hover:text-nipay-green transition-colors"
              >
                Why It Matters
              </a>
              <Link 
                to="/investors"
                className="block py-2 text-nipay-green font-medium hover:underline"
              >
                For Investors
              </Link>
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
                <Link to="/waitlist" className="w-full">
                  <Button 
                    variant="green"
                    className="w-full"
                  >
                    Join Waitlist
                  </Button>
                </Link>
                <Link to="/investors" className="w-full">
                  <Button 
                    variant="outline"
                    className="w-full"
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
