
import { ReactNode } from 'react';

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
  backgroundColor?: string;
}

const SectionWrapper = ({ 
  children, 
  className = "", 
  id, 
  backgroundColor 
}: SectionWrapperProps) => {
  return (
    <section 
      id={id}
      className={`w-full ${backgroundColor ? backgroundColor : ''} ${className}`}
    >
      <div className="container mx-auto section-padding">
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
