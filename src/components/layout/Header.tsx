
/**
 * NiPay Application Header Component
 * 
 * This is the main navigation header for the NiPay platform. It adapts to different
 * user contexts and page states to optimize the user experience for SME loan applications.
 * 
 * Key Features:
 * - Dynamic styling based on scroll position and page content
 * - Mobile-first responsive design for USSD-familiar users
 * - Smooth scroll navigation for single-page experience
 * - Call-to-action buttons strategically placed for conversion
 * - Professional appearance that builds trust for financial services
 * 
 * Business Context:
 * - Header visibility affects loan application conversion rates
 * - Mobile menu is crucial for 85% of users who access via mobile
 * - Navigation clarity directly impacts user trust in financial platform
 * - Waitlist CTA is primary conversion goal for SME onboarding
 */

import { useState, useEffect } from 'react';
import WaitlistModal from '../modals/WaitlistModal';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import DesktopNavigation from './DesktopNavigation';
import NavigationButtons from './NavigationButtons';
import MobileMenu from './MobileMenu';
import MobileMenuButton from './MobileMenuButton';

const Header = () => {
  // State management for header behavior and user interactions
  const [isScrolled, setIsScrolled] = useState(false); // Controls header background opacity
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false); // Mobile menu toggle state
  const [showWaitlistModal, setShowWaitlistModal] = useState(false); // Waitlist modal state
  const [isOverHero, setIsOverHero] = useState(true); // Determines text color for hero overlay
  
  const location = useLocation();
  const navigate = useNavigate();
  
  /**
   * Scroll Event Handler
   * 
   * Tracks scroll position to create dynamic header behavior:
   * - Adds background when scrolled for better readability
   * - Changes text color when over hero section for contrast
   * - Provides visual feedback for user's position on page
   * 
   * This improves UX by maintaining header visibility while preserving
   * the impact of the hero section for loan application conversion.
   */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      // Check if we're still over the hero section (affects text color)
      setIsOverHero(window.scrollY < window.innerHeight * 0.6);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  /**
   * Navigation Click Handler
   * 
   * Handles smooth scrolling to sections within the single-page application.
   * This creates a seamless user experience that keeps users engaged with
   * the loan application process rather than navigating away from the page.
   * 
   * @param id - The section ID to scroll to
   */
  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    if (location.pathname === '/') {
      // Smooth scroll to section if already on home page
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
    } else {
      // Navigate to home page then scroll to section
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

  /**
   * Waitlist Click Handler
   * 
   * Primary conversion action for SME onboarding.
   * Directs users to the waitlist page where they can apply for loans.
   * This is the main business goal of the website.
   */
  const handleWaitlistClick = () => {
    setMobileMenuOpen(false);
    navigate('/waitlist');
  };

  /**
   * Investors Click Handler
   * 
   * Secondary conversion action for fundraising and partnerships.
   * Directs potential investors to learn about investment opportunities.
   */
  const handleInvestorsClick = () => {
    setMobileMenuOpen(false);
    navigate('/investors');
  };

  // Dynamic text color based on hero section overlay
  const navTextColor = isOverHero ? 'text-white' : 'text-foreground';
  
  return (
    <>
      {/* Main Header Container */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'bg-background/95 backdrop-blur-md shadow-lg border-b border-border/50' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between h-12">
            {/* NiPay Logo - Brand Recognition */}
            <Link to="/" className="flex items-center gap-2 group">
              <span className={`text-xl font-bold transition-colors duration-300 ${isOverHero ? 'text-nipay-green' : 'text-nipay-green'} group-hover:scale-105`}>NiPay</span>
            </Link>
            
            {/* Desktop Navigation - Hidden on mobile */}
            <DesktopNavigation navTextColor={navTextColor} onNavClick={handleNavClick} />
            
            {/* Action Buttons and Mobile Menu */}
            <div className="flex items-center gap-3">
              {/* Primary and Secondary CTAs */}
              <NavigationButtons 
                isOverHero={isOverHero}
                onWaitlistClick={handleWaitlistClick}
                onInvestorsClick={handleInvestorsClick}
              />
              
              {/* Mobile Menu Toggle - Essential for mobile users */}
              <MobileMenuButton
                isOpen={mobileMenuOpen}
                isScrolled={isScrolled}
                isOverHero={isOverHero}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              />
            </div>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        <MobileMenu
          isOpen={mobileMenuOpen}
          onNavClick={handleNavClick}
          onWaitlistClick={handleWaitlistClick}
          onInvestorsClick={handleInvestorsClick}
          onClose={() => setMobileMenuOpen(false)}
        />
      </header>
      
      {/* Waitlist Modal - Quick access to loan application */}
      <WaitlistModal 
        isOpen={showWaitlistModal} 
        onClose={() => setShowWaitlistModal(false)} 
      />
    </>
  );
};

export default Header;
