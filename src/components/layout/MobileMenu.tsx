
/**
 * Mobile Navigation Menu Component
 * 
 * Provides a full mobile navigation experience for NiPay users.
 * Critical for the 85% of African users who access via mobile devices.
 * 
 * Business Considerations:
 * - Mobile-first design reflects user behavior in Rwanda's mobile money ecosystem
 * - Large touch targets accommodate various device sizes and user dexterity
 * - Clear visual hierarchy guides users through the loan application funnel
 * - Prominent CTA buttons maximize conversion opportunities
 * 
 * UX Features:
 * - Smooth animations create professional feel that builds financial trust
 * - Backdrop blur maintains context while focusing attention on menu
 * - Auto-close on navigation maintains smooth user flow
 * - Separated action buttons emphasize conversion goals
 */

import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface MobileMenuProps {
  isOpen: boolean; // Controls menu visibility
  onNavClick: (id: string) => void; // Smooth scroll navigation handler
  onWaitlistClick: () => void; // Primary conversion action
  onInvestorsClick: () => void; // Secondary conversion action (fundraising)
  onClose: () => void; // Menu close handler
}

const MobileMenu = ({ isOpen, onNavClick, onWaitlistClick, onInvestorsClick, onClose }: MobileMenuProps) => {
  // Don't render if menu is closed
  if (!isOpen) return null;

  return (
    <div className="md:hidden bg-background/95 backdrop-blur-md animate-fade-in shadow-xl border-t border-border">
      <div className="py-4 px-4 space-y-1">
        {/* Main Navigation Items */}
        {/* Each button represents a key section in the SME education journey */}
        
        <button
          onClick={() => onNavClick('solution')}
          className="block w-full text-left py-3 px-3 text-foreground hover:text-nipay-green hover:bg-nipay-green/10 transition-all duration-300 rounded-lg border-b border-border/50 text-sm"
        >
          Our Solution
        </button>
        
        <button
          onClick={() => onNavClick('benefits')}
          className="block w-full text-left py-3 px-3 text-foreground hover:text-nipay-green hover:bg-nipay-green/10 transition-all duration-300 rounded-lg border-b border-border/50 text-sm"
        >
          Why NiPay
        </button>
        
        <button
          onClick={() => onNavClick('how-it-works')}
          className="block w-full text-left py-3 px-3 text-foreground hover:text-nipay-green hover:bg-nipay-green/10 transition-all duration-300 rounded-lg border-b border-border/50 text-sm"
        >
          How It Works
        </button>
        
        <button
          onClick={() => onNavClick('testimonials')}
          className="block w-full text-left py-3 px-3 text-foreground hover:text-nipay-green hover:bg-nipay-green/10 transition-all duration-300 rounded-lg border-b border-border/50 text-sm"
        >
          Testimonials
        </button>
        
        {/* Investor Relations - Highlighted for fundraising visibility */}
        <Link 
          to="/investors"
          onClick={onClose}
          className="block py-3 px-3 text-nipay-green font-medium hover:bg-nipay-green/10 transition-all duration-300 rounded-lg border-b border-border/50 text-sm"
        >
          Investors
        </Link>
        
        <button
          onClick={() => onNavClick('faq')}
          className="block w-full text-left py-3 px-3 text-foreground hover:text-nipay-green hover:bg-nipay-green/10 transition-all duration-300 rounded-lg border-b border-border/50 text-sm"
        >
          FAQ
        </button>
        
        <Link
          to="/contact"
          onClick={onClose}
          className="block py-3 px-3 text-foreground hover:text-nipay-green hover:bg-nipay-green/10 transition-all duration-300 rounded-lg text-sm"
        >
          Contact
        </Link>
        
        {/* Primary and Secondary Action Buttons */}
        {/* Prominently placed to maximize mobile conversion rates */}
        <div className="flex flex-col gap-3 pt-4">
          {/* Primary CTA - SME Loan Applications */}
          <Button 
            onClick={onWaitlistClick}
            variant="green"
            className="w-full py-4 text-sm hover:scale-105 transition-transform"
          >
            Join Waitlist
          </Button>
          
          {/* Secondary CTA - Investor Interest */}
          <Button 
            onClick={onInvestorsClick}
            variant="outline"
            className="w-full py-4 text-sm hover:scale-105 transition-transform"
          >
            Invest
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
