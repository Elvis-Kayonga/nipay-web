
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { WaitlistFormData, api, ApiResponse } from '@/services/api';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import { DialogClose } from "@/components/ui/dialog"

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  businessName: z.string().min(2, { message: 'Business name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  phoneNumber: z.string().min(8, { message: 'Please enter a valid phone number' }),
  monthlyVolume: z.string().min(1, { message: 'Please select your monthly volume' }),
  businessType: z.string().min(1, { message: 'Please select your business type' }),
});

type FormData = z.infer<typeof formSchema>;

interface WaitlistFormProps {
  onSuccess?: () => void;
  onClose?: () => void;
}

const WaitlistForm = ({ onSuccess, onClose }: WaitlistFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [businessEarnings, setBusinessEarnings] = useState('');
  const [fundingNeeded, setFundingNeeded] = useState('');
  const [interestRate, setInterestRate] = useState('');
  
  const { 
    register, 
    handleSubmit, 
    formState: { errors },
    reset,
    setValue
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      businessName: '',
      email: '',
      phoneNumber: '',
      monthlyVolume: '',
      businessType: '',
    }
  });
  
  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      const result: ApiResponse = await api.submitToWaitlist({
        name: data.name,
        businessName: data.businessName,
        email: data.email,
        phoneNumber: data.phoneNumber,
        monthlyVolume: data.monthlyVolume,
        businessEarnings: businessEarnings,
        fundingNeeded: fundingNeeded,
        interestRate: interestRate,
        businessType: data.businessType
      });
      
      // Send confirmation email
      try {
        await fetch('https://alkjgogriwshdpkuwqhp.functions.supabase.co/send-confirmation-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            to: data.email,
            type: 'waitlist',
            name: data.name,
          }),
        });
      } catch (emailError) {
        console.error("Failed to send confirmation email:", emailError);
        // Don't block the form submission if email fails
      }
      
      toast.success(result.message);
      reset();
      
      if (onSuccess) {
        onSuccess();
      }
      
      if (onClose) {
        onClose();
      }
    } catch (error: any) {
      toast.error(error.message || "There was a problem submitting your information.");
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Your Name</Label>
        <Input 
          id="name" 
          placeholder="John Doe" 
          {...register('name')}
        />
        {errors.name && (
          <p className="text-destructive text-sm">{errors.name.message}</p>
        )}
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="businessName">Business Name</Label>
        <Input 
          id="businessName" 
          placeholder="Acme Corp" 
          {...register('businessName')}
        />
        {errors.businessName && (
          <p className="text-destructive text-sm">{errors.businessName.message}</p>
        )}
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input 
          id="email" 
          type="email" 
          placeholder="you@example.com" 
          {...register('email')}
        />
        {errors.email && (
          <p className="text-destructive text-sm">{errors.email.message}</p>
        )}
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="phoneNumber">Phone Number</Label>
        <Input 
          id="phoneNumber" 
          placeholder="+250788123456" 
          {...register('phoneNumber')}
        />
        {errors.phoneNumber && (
          <p className="text-destructive text-sm">{errors.phoneNumber.message}</p>
        )}
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="monthlyVolume">Monthly Mobile Money Volume</Label>
        <Select 
          onValueChange={(value) => setValue('monthlyVolume', value)}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select volume" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="0-1000">$0 - $1,000</SelectItem>
            <SelectItem value="1000-5000">$1,000 - $5,000</SelectItem>
            <SelectItem value="5000-10000">$5,000 - $10,000</SelectItem>
            <SelectItem value="10000+">$10,000+</SelectItem>
          </SelectContent>
        </Select>
        {errors.monthlyVolume && (
          <p className="text-destructive text-sm">{errors.monthlyVolume.message}</p>
        )}
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="businessType">Type of Business</Label>
        <Select 
          onValueChange={(value) => setValue('businessType', value)}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select business type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="retail">Retail</SelectItem>
            <SelectItem value="wholesale">Wholesale</SelectItem>
            <SelectItem value="services">Services</SelectItem>
            <SelectItem value="agriculture">Agriculture</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
        {errors.businessType && (
          <p className="text-destructive text-sm">{errors.businessType.message}</p>
        )}
      </div>
      
      <Button 
        type="submit" 
        className="w-full bg-nipay-green hover:bg-nipay-dark-green"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting..." : "Join Waitlist"}
      </Button>
    </form>
  );
};

export default WaitlistForm;
