
/**
 * Desktop Navigation Component for NiPay
 * 
 * Provides the main navigation menu for desktop users visiting the NiPay platform.
 * Each navigation item corresponds to key sections that educate SMEs about the
 * loan platform and guide them through the decision-making process.
 * 
 * Business Logic:
 * - "Our Solution" → Explains the overdraft wallet and USSD system
 * - "Why NiPay" → Competitive advantages in the Rwandan market
 * - "How It Works" → 3-step process to get mobile money loans
 * - "Testimonials" → Social proof from existing SME users
 * - "Investors" → Separate page for fundraising (Pre-Seed $550K)
 * - "FAQ" → Addresses common concerns about mobile money lending
 * - "Contact" → Sales and support inquiries
 * 
 * UX Considerations:
 * - Hover effects build confidence in the platform's professionalism
 * - Smooth animations create a modern, trustworthy feel
 * - Clear hierarchy helps users find relevant information quickly
 * - Strategic placement of "Investors" link for fundraising goals
 */

import { Link } from 'react-router-dom';

interface DesktopNavigationProps {
  navTextColor: string; // Dynamic text color based on hero section overlay
  onNavClick: (id: string) => void; // Handler for smooth scrolling to sections
}

const DesktopNavigation = ({ navTextColor, onNavClick }: DesktopNavigationProps) => {
  return (
    <nav className="hidden md:flex items-center gap-6">
      {/* Core Product Information */}
      <button 
        onClick={() => onNavClick('solution')}
        className={`${navTextColor} hover:text-nipay-green transition-all duration-300 text-sm py-2 px-3 rounded-lg hover:bg-white/10 relative group`}
      >
        Our Solution
        {/* Animated underline for visual feedback */}
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-nipay-green transition-all duration-300 group-hover:w-full"></span>
      </button>
      
      {/* Competitive Advantages */}
      <button 
        onClick={() => onNavClick('benefits')}
        className={`${navTextColor} hover:text-nipay-green transition-all duration-300 text-sm py-2 px-3 rounded-lg hover:bg-white/10 relative group`}
      >
        Why NiPay
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-nipay-green transition-all duration-300 group-hover:w-full"></span>
      </button>
      
      {/* User Journey Explanation */}
      <button 
        onClick={() => onNavClick('how-it-works')}
        className={`${navTextColor} hover:text-nipay-green transition-all duration-300 text-sm py-2 px-3 rounded-lg hover:bg-white/10 relative group`}
      >
        How It Works
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-nipay-green transition-all duration-300 group-hover:w-full"></span>
      </button>
      
      {/* Social Proof and Testimonials */}
      <button 
        onClick={() => onNavClick('testimonials')}
        className={`${navTextColor} hover:text-nipay-green transition-all duration-300 text-sm py-2 px-3 rounded-lg hover:bg-white/10 relative group`}
      >
        Testimonials
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-nipay-green transition-all duration-300 group-hover:w-full"></span>
      </button>
      
      {/* Fundraising and Investment Information - Separate page */}
      <Link 
        to="/investors"
        className="text-nipay-green font-medium hover:underline transition-all duration-300 text-sm py-2 px-3 rounded-lg hover:bg-nipay-green/10"
      >
        Investors
      </Link>
      
      {/* Frequently Asked Questions */}
      <button 
        onClick={() => onNavClick('faq')}
        className={`${navTextColor} hover:text-nipay-green transition-all duration-300 text-sm py-2 px-3 rounded-lg hover:bg-white/10 relative group`}
      >
        FAQ
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-nipay-green transition-all duration-300 group-hover:w-full"></span>
      </button>
      
      {/* Contact and Support - Separate page */}
      <Link 
        to="/contact"
        className={`${navTextColor} hover:text-nipay-green transition-all duration-300 text-sm py-2 px-3 rounded-lg hover:bg-white/10`}
      >
        Contact
      </Link>
    </nav>
  );
};

export default DesktopNavigation;
