
/**
 * Navigation Action Buttons Component
 * 
 * Contains the primary and secondary call-to-action buttons for NiPay's conversion funnel.
 * These buttons are strategically designed to drive SME sign-ups and investor interest.
 * 
 * Business Context:
 * - "Join Waitlist" is the primary conversion goal for SME onboarding
 * - "Invest" button targets potential investors for the $550K Pre-Seed round
 * - Button styling adapts to maintain visibility over hero content
 * - Hidden on mobile to save space (available in mobile menu)
 * 
 * Conversion Optimization:
 * - Green primary button aligns with NiPay brand and suggests money/growth
 * - Hover animations provide feedback and encourage interaction
 * - Outline style for secondary button prevents overwhelming the primary CTA
 * - Strategic placement in header ensures visibility throughout user journey
 */

import { Button } from '@/components/ui/button';

interface NavigationButtonsProps {
  isOverHero: boolean; // Determines button styling based on background
  onWaitlistClick: () => void; // Primary conversion action
  onInvestorsClick: () => void; // Secondary conversion action (fundraising)
}

const NavigationButtons = ({ isOverHero, onWaitlistClick, onInvestorsClick }: NavigationButtonsProps) => {
  return (
    <div className="hidden md:flex items-center gap-3">
      {/* Primary CTA - SME Loan Application */}
      <Button 
        onClick={onWaitlistClick} 
        variant="green" 
        size="sm" 
        className="h-9 text-sm px-4 hover:scale-105 transition-transform"
      >
        Join Waitlist
      </Button>
      
      {/* Secondary CTA - Investor Interest */}
      <Button 
        onClick={onInvestorsClick} 
        variant={isOverHero ? "outline-white" : "outline-dark"} 
        size="sm" 
        className="h-9 text-sm px-4 hover:scale-105 transition-transform"
      >
        Invest
      </Button>
    </div>
  );
};

export default NavigationButtons;
