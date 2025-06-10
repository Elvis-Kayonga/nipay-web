
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import InvestorForm from '../forms/InvestorForm';

interface InvestorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const InvestorModal = ({ isOpen, onClose }: InvestorModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[480px] p-0">
        <DialogHeader className="px-6 pt-6 pb-4">
          <DialogTitle className="text-2xl font-bold text-nipay-dark-green">Partner With Us</DialogTitle>
          <DialogDescription className="text-gray-600 text-base">
            Discover investment opportunities in Rwanda's mobile-money credit market.
          </DialogDescription>
        </DialogHeader>
        <div className="px-6 pb-6">
          <InvestorForm onSuccess={onClose} />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default InvestorModal;
