
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import WaitlistForm from '../forms/WaitlistForm';

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const WaitlistModal = ({ isOpen, onClose }: WaitlistModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Join Our Waitlist</DialogTitle>
          <DialogDescription>
            Get early access to NiPay's SME overdraft solutions.
          </DialogDescription>
        </DialogHeader>
        <WaitlistForm onSuccess={onClose} />
      </DialogContent>
    </Dialog>
  );
};

export default WaitlistModal;
