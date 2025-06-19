
import { Menu, X } from 'lucide-react';

interface MobileMenuButtonProps {
  isOpen: boolean;
  isScrolled: boolean;
  isOverHero: boolean;
  onClick: () => void;
}

const MobileMenuButton = ({ isOpen, isScrolled, isOverHero, onClick }: MobileMenuButtonProps) => {
  return (
    <button
      className={`md:hidden flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 ${
        isScrolled ? 'bg-muted hover:bg-muted/80' : 'bg-black/20 hover:bg-black/30'
      } ${isOverHero ? 'text-white' : 'text-foreground'}`}
      onClick={onClick}
      aria-label="Toggle menu"
    >
      {isOpen ? (
        <X className="h-5 w-5" />
      ) : (
        <Menu className="h-5 w-5" />
      )}
    </button>
  );
};

export default MobileMenuButton;
