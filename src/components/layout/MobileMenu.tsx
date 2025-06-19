
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface MobileMenuProps {
  isOpen: boolean;
  onNavClick: (id: string) => void;
  onWaitlistClick: () => void;
  onInvestorsClick: () => void;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onNavClick, onWaitlistClick, onInvestorsClick, onClose }: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
    <div className="md:hidden bg-background/95 backdrop-blur-md animate-fade-in shadow-xl border-t border-border">
      <div className="py-4 px-4 space-y-1">
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
        
        <div className="flex flex-col gap-3 pt-4">
          <Button 
            onClick={onWaitlistClick}
            variant="green"
            className="w-full py-4 text-sm hover:scale-105 transition-transform"
          >
            Join Waitlist
          </Button>
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
