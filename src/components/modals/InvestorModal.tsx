
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import InvestorForm from '../forms/InvestorForm';

interface InvestorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const InvestorModal = ({ isOpen, onClose }: InvestorModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Partner With Us</DialogTitle>
          <DialogDescription>
            Discover investment opportunities in Rwanda's mobile-money credit market.
          </DialogDescription>
        </DialogHeader>
        <InvestorForm onSuccess={onClose} />
      </DialogContent>
    </Dialog>
  );
};

export default InvestorModal;
