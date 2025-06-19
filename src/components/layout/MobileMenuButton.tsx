
/**
 * Mobile Menu Toggle Button Component
 * 
 * The hamburger menu button that controls mobile navigation visibility.
 * Essential for mobile users in Rwanda who primarily use feature phones and smartphones.
 * 
 * Design Considerations:
 * - Large touch target (40x40px) accommodates various finger sizes and device types
 * - Dynamic styling adapts to different page contexts (hero overlay vs. scrolled)
 * - Smooth icon transition (hamburger to X) provides clear state feedback
 * - Rounded background improves visibility over complex backgrounds
 * 
 * Accessibility:
 * - Proper ARIA label for screen readers
 * - Clear visual states for different interactions
 * - High contrast maintained in all contexts
 */

import { Menu, X } from 'lucide-react';

interface MobileMenuButtonProps {
  isOpen: boolean; // Current menu state
  isScrolled: boolean; // Whether page has been scrolled (affects background)
  isOverHero: boolean; // Whether button is over hero section (affects text color)
  onClick: () => void; // Menu toggle handler
}

const MobileMenuButton = ({ isOpen, isScrolled, isOverHero, onClick }: MobileMenuButtonProps) => {
  return (
    <button
      className={`md:hidden flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ${
        // Dynamic background styling based on page state
        isScrolled ? 'bg-muted hover:bg-muted/80' : 'bg-black/20 hover:bg-black/30'
      } ${
        // Dynamic text color for optimal contrast
        isOverHero ? 'text-white' : 'text-foreground'
      }`}
      onClick={onClick}
      aria-label="Toggle menu"
    >
      {/* Icon transition between hamburger and close states */}
      {isOpen ? (
        <X className="h-5 w-5" />
      ) : (
        <Menu className="h-5 w-5" />
      )}
    </button>
  );
};

export default MobileMenuButton;
