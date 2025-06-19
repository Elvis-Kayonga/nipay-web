
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
      setIsScrolled(window.scrollY > 10);
      
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
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    } else {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'bg-background/95 backdrop-blur-md shadow-lg border-b border-border/50' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between h-12">
            <Link to="/" className="flex items-center gap-2 group">
              <span className={`text-xl font-bold transition-colors duration-300 ${isOverHero ? 'text-nipay-green' : 'text-nipay-green'} group-hover:scale-105`}>NiPay</span>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <button 
                onClick={() => handleNavClick('solution')}
                className={`${navTextColor} hover:text-nipay-green transition-all duration-300 text-sm py-2 px-3 rounded-lg hover:bg-white/10 relative group`}
              >
                Our Solution
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-nipay-green transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button 
                onClick={() => handleNavClick('benefits')}
                className={`${navTextColor} hover:text-nipay-green transition-all duration-300 text-sm py-2 px-3 rounded-lg hover:bg-white/10 relative group`}
              >
                Why NiPay
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-nipay-green transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button 
                onClick={() => handleNavClick('how-it-works')}
                className={`${navTextColor} hover:text-nipay-green transition-all duration-300 text-sm py-2 px-3 rounded-lg hover:bg-white/10 relative group`}
              >
                How It Works
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-nipay-green transition-all duration-300 group-hover:w-full"></span>
              </button>
              <button 
                onClick={() => handleNavClick('testimonials')}
                className={`${navTextColor} hover:text-nipay-green transition-all duration-300 text-sm py-2 px-3 rounded-lg hover:bg-white/10 relative group`}
              >
                Testimonials
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-nipay-green transition-all duration-300 group-hover:w-full"></span>
              </button>
              <Link 
                to="/investors"
                className="text-nipay-green font-medium hover:underline transition-all duration-300 text-sm py-2 px-3 rounded-lg hover:bg-nipay-green/10"
              >
                Investors
              </Link>
              <button 
                onClick={() => handleNavClick('faq')}
                className={`${navTextColor} hover:text-nipay-green transition-all duration-300 text-sm py-2 px-3 rounded-lg hover:bg-white/10 relative group`}
              >
                FAQ
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-nipay-green transition-all duration-300 group-hover:w-full"></span>
              </button>
              <Link 
                to="/contact"
                className={`${navTextColor} hover:text-nipay-green transition-all duration-300 text-sm py-2 px-3 rounded-lg hover:bg-white/10`}
              >
                Contact
              </Link>
            </nav>
            
            <div className="flex items-center gap-3">
              {/* Desktop buttons */}
              <div className="hidden md:flex items-center gap-3">
                <Button onClick={handleWaitlistClick} variant="green" size="sm" className="h-9 text-sm px-4 hover:scale-105 transition-transform">Join Waitlist</Button>
                <Button onClick={handleInvestorsClick} variant={isOverHero ? "outline-white" : "outline-dark"} size="sm" className="h-9 text-sm px-4 hover:scale-105 transition-transform">Invest</Button>
              </div>
              
              {/* Mobile menu button */}
              <button
                className={`md:hidden flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ${
                  isScrolled ? 'bg-muted hover:bg-muted/80' : 'bg-black/20 hover:bg-black/30'
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
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-md animate-fade-in shadow-xl border-t border-border">
            <div className="py-4 px-4 space-y-1">
              <button
                onClick={() => handleNavClick('solution')}
                className="block w-full text-left py-3 px-3 text-foreground hover:text-nipay-green hover:bg-nipay-green/10 transition-all duration-300 rounded-lg border-b border-border/50 text-sm"
              >
                Our Solution
              </button>
              <button
                onClick={() => handleNavClick('benefits')}
                className="block w-full text-left py-3 px-3 text-foreground hover:text-nipay-green hover:bg-nipay-green/10 transition-all duration-300 rounded-lg border-b border-border/50 text-sm"
              >
                Why NiPay
              </button>
              <button
                onClick={() => handleNavClick('how-it-works')}
                className="block w-full text-left py-3 px-3 text-foreground hover:text-nipay-green hover:bg-nipay-green/10 transition-all duration-300 rounded-lg border-b border-border/50 text-sm"
              >
                How It Works
              </button>
              <button
                onClick={() => handleNavClick('testimonials')}
                className="block w-full text-left py-3 px-3 text-foreground hover:text-nipay-green hover:bg-nipay-green/10 transition-all duration-300 rounded-lg border-b border-border/50 text-sm"
              >
                Testimonials
              </button>
              <Link 
                to="/investors"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-3 px-3 text-nipay-green font-medium hover:bg-nipay-green/10 transition-all duration-300 rounded-lg border-b border-border/50 text-sm"
              >
                Investors
              </Link>
              <button
                onClick={() => handleNavClick('faq')}
                className="block w-full text-left py-3 px-3 text-foreground hover:text-nipay-green hover:bg-nipay-green/10 transition-all duration-300 rounded-lg border-b border-border/50 text-sm"
              >
                FAQ
              </button>
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block py-3 px-3 text-foreground hover:text-nipay-green hover:bg-nipay-green/10 transition-all duration-300 rounded-lg text-sm"
              >
                Contact
              </Link>
              
              <div className="flex flex-col gap-3 pt-4">
                <Button 
                  onClick={handleWaitlistClick}
                  variant="green"
                  className="w-full py-4 text-sm hover:scale-105 transition-transform"
                >
                  Join Waitlist
                </Button>
                <Button 
                  onClick={handleInvestorsClick}
                  variant="outline"
                  className="w-full py-4 text-sm hover:scale-105 transition-transform"
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
