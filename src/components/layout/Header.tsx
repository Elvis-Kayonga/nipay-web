
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import WaitlistModal from '../modals/WaitlistModal';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useIsMobile } from '@/hooks/use-mobile';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showWaitlistModal, setShowWaitlistModal] = useState(false);
  const [isOverHero, setIsOverHero] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
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
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  const handleWaitlistClick = () => {
    setMobileMenuOpen(false);
    navigate('/waitlist');
  };

  const handleInvestorsClick = () => {
    setMobileMenuOpen(false);
    navigate('/investors');
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
              <button 
                onClick={() => handleNavClick('solution')}
                className={`${navTextColor} hover:text-nipay-green transition-colors text-sm py-1`}
              >
                Our Solution
              </button>
              <button 
                onClick={() => handleNavClick('benefits')}
                className={`${navTextColor} hover:text-nipay-green transition-colors text-sm py-1`}
              >
                Why NiPay
              </button>
              <button 
                onClick={() => handleNavClick('how-it-works')}
                className={`${navTextColor} hover:text-nipay-green transition-colors text-sm py-1`}
              >
                How It Works
              </button>
              <button 
                onClick={() => handleNavClick('testimonials')}
                className={`${navTextColor} hover:text-nipay-green transition-colors text-sm py-1`}
              >
                Testimonials
              </button>
              <Link 
                to="/investors"
                className="text-nipay-green font-medium hover:underline transition-colors text-sm py-1"
              >
                Investors
              </Link>
              <button 
                onClick={() => handleNavClick('faq')}
                className={`${navTextColor} hover:text-nipay-green transition-colors text-sm py-1`}
              >
                FAQ
              </button>
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
                <Button onClick={handleWaitlistClick} variant="green" size="sm" className="h-8 text-sm px-3">Join Waitlist</Button>
                <Button onClick={handleInvestorsClick} variant={isOverHero ? "outline-white" : "outline-dark"} size="sm" className="h-8 text-sm px-3">Invest</Button>
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
              <button
                onClick={() => handleNavClick('solution')}
                className="block w-full text-left py-2 text-foreground hover:text-nipay-green transition-colors border-b border-border text-sm"
              >
                Our Solution
              </button>
              <button
                onClick={() => handleNavClick('benefits')}
                className="block w-full text-left py-2 text-foreground hover:text-nipay-green transition-colors border-b border-border text-sm"
              >
                Why NiPay
              </button>
              <button
                onClick={() => handleNavClick('how-it-works')}
                className="block w-full text-left py-2 text-foreground hover:text-nipay-green transition-colors border-b border-border text-sm"
              >
                How It Works
              </button>
              <button
                onClick={() => handleNavClick('testimonials')}
                className="block w-full text-left py-2 text-foreground hover:text-nipay-green transition-colors border-b border-border text-sm"
              >
                Testimonials
              </button>
              <Link 
                to="/investors"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-nipay-green font-medium hover:underline border-b border-border text-sm"
              >
                Investors
              </Link>
              <button
                onClick={() => handleNavClick('faq')}
                className="block w-full text-left py-2 text-foreground hover:text-nipay-green transition-colors border-b border-border text-sm"
              >
                FAQ
              </button>
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-foreground hover:text-nipay-green transition-colors text-sm"
              >
                Contact
              </Link>
              
              <div className="flex flex-col gap-2 pt-3">
                <Button 
                  onClick={handleWaitlistClick}
                  variant="green"
                  className="w-full py-4 text-sm"
                >
                  Join Waitlist
                </Button>
                <Button 
                  onClick={handleInvestorsClick}
                  variant="outline"
                  className="w-full py-4 text-sm"
                >
                  Invest
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
    </>
  );
};

export default Header;
