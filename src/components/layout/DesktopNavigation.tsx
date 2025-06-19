
import { Link } from 'react-router-dom';

interface DesktopNavigationProps {
  navTextColor: string;
  onNavClick: (id: string) => void;
}

const DesktopNavigation = ({ navTextColor, onNavClick }: DesktopNavigationProps) => {
  return (
    <nav className="hidden md:flex items-center gap-6">
      <button 
        onClick={() => onNavClick('solution')}
        className={`${navTextColor} hover:text-nipay-green transition-all duration-300 text-sm py-2 px-3 rounded-lg hover:bg-white/10 relative group`}
      >
        Our Solution
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-nipay-green transition-all duration-300 group-hover:w-full"></span>
      </button>
      <button 
        onClick={() => onNavClick('benefits')}
        className={`${navTextColor} hover:text-nipay-green transition-all duration-300 text-sm py-2 px-3 rounded-lg hover:bg-white/10 relative group`}
      >
        Why NiPay
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-nipay-green transition-all duration-300 group-hover:w-full"></span>
      </button>
      <button 
        onClick={() => onNavClick('how-it-works')}
        className={`${navTextColor} hover:text-nipay-green transition-all duration-300 text-sm py-2 px-3 rounded-lg hover:bg-white/10 relative group`}
      >
        How It Works
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-nipay-green transition-all duration-300 group-hover:w-full"></span>
      </button>
      <button 
        onClick={() => onNavClick('testimonials')}
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
        onClick={() => onNavClick('faq')}
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
  );
};

export default DesktopNavigation;
