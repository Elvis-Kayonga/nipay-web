
import { useState, useEffect } from 'react';
import WaitlistModal from '../modals/WaitlistModal';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import DesktopNavigation from './DesktopNavigation';
import NavigationButtons from './NavigationButtons';
import MobileMenu from './MobileMenu';
import MobileMenuButton from './MobileMenuButton';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showWaitlistModal, setShowWaitlistModal] = useState(false);
  const [isOverHero, setIsOverHero] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();
  
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
            
            <DesktopNavigation navTextColor={navTextColor} onNavClick={handleNavClick} />
            
            <div className="flex items-center gap-3">
              <NavigationButtons 
                isOverHero={isOverHero}
                onWaitlistClick={handleWaitlistClick}
                onInvestorsClick={handleInvestorsClick}
              />
              
              <MobileMenuButton
                isOpen={mobileMenuOpen}
                isScrolled={isScrolled}
                isOverHero={isOverHero}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              />
            </div>
          </div>
        </div>
        
        <MobileMenu
          isOpen={mobileMenuOpen}
          onNavClick={handleNavClick}
          onWaitlistClick={handleWaitlistClick}
          onInvestorsClick={handleInvestorsClick}
          onClose={() => setMobileMenuOpen(false)}
        />
      </header>
      
      <WaitlistModal 
        isOpen={showWaitlistModal} 
        onClose={() => setShowWaitlistModal(false)} 
      />
    </>
  );
};

export default Header;
