
import { ReactNode } from 'react';

interface IconCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}

const IconCard = ({ 
  icon, 
  title, 
  description, 
  className = "" 
}: IconCardProps) => {
  return (
    <div className={`flex flex-col items-center text-center ${className}`}>
      <div className="mb-4 text-4xl">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default IconCard;
