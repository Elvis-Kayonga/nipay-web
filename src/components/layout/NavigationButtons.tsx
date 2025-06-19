
import { Button } from '@/components/ui/button';

interface NavigationButtonsProps {
  isOverHero: boolean;
  onWaitlistClick: () => void;
  onInvestorsClick: () => void;
}

const NavigationButtons = ({ isOverHero, onWaitlistClick, onInvestorsClick }: NavigationButtonsProps) => {
  return (
    <div className="hidden md:flex items-center gap-3">
      <Button onClick={onWaitlistClick} variant="green" size="sm" className="h-9 text-sm px-4 hover:scale-105 transition-transform">Join Waitlist</Button>
      <Button onClick={onInvestorsClick} variant={isOverHero ? "outline-white" : "outline-dark"} size="sm" className="h-9 text-sm px-4 hover:scale-105 transition-transform">Invest</Button>
    </div>
  );
};

export default NavigationButtons;
