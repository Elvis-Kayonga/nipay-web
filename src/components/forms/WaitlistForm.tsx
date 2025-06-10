
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { WaitlistFormData, api, ApiResponse } from '@/services/api';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { toast } from 'sonner';

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
  const [mobileMoneyProvider, setMobileMoneyProvider] = useState('');
  const [location, setLocation] = useState('');
  const [wantVisit, setWantVisit] = useState(false);
  
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
        businessEarnings: mobileMoneyProvider,
        fundingNeeded: location,
        interestRate: wantVisit ? 'yes' : 'no',
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
      
      toast.success("Thanks! You're on the waitlist. Our team will contact you soon to onboard your business.");
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
          placeholder="Jean Uwimana" 
          {...register('name')}
        />
        {errors.name && (
          <p className="text-destructive text-sm">{errors.name.message}</p>
        )}
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="phoneNumber">Phone Number</Label>
        <Input 
          id="phoneNumber" 
          placeholder="078 888 8888" 
          {...register('phoneNumber')}
        />
        {errors.phoneNumber && (
          <p className="text-destructive text-sm">{errors.phoneNumber.message}</p>
        )}
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="businessName">Business Name</Label>
        <Input 
          id="businessName" 
          placeholder="Uwimana Shop" 
          {...register('businessName')}
        />
        {errors.businessName && (
          <p className="text-destructive text-sm">{errors.businessName.message}</p>
        )}
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="mobile-money">Mobile Money Provider</Label>
        <Select onValueChange={(value) => setMobileMoneyProvider(value)}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select provider" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="mtn">MTN Mobile Money</SelectItem>
            <SelectItem value="airtel">Airtel Money</SelectItem>
            <SelectItem value="bank">Bank Account</SelectItem>
            <SelectItem value="multiple">Multiple providers</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="businessType">Type of Business</Label>
        <Select onValueChange={(value) => setValue('businessType', value)}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select business type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="retail">Retail Shop</SelectItem>
            <SelectItem value="boutique">Boutique/Clothing</SelectItem>
            <SelectItem value="groceries">Groceries/Food</SelectItem>
            <SelectItem value="pharmacy">Pharmacy</SelectItem>
            <SelectItem value="electronics">Electronics</SelectItem>
            <SelectItem value="salon">Salon/Beauty</SelectItem>
            <SelectItem value="restaurant">Restaurant/Bar</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
        {errors.businessType && (
          <p className="text-destructive text-sm">{errors.businessType.message}</p>
        )}
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="location">Location/District</Label>
        <Select onValueChange={(value) => setLocation(value)}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select location" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="kigali">Kigali</SelectItem>
            <SelectItem value="nyarugenge">Nyarugenge</SelectItem>
            <SelectItem value="gasabo">Gasabo</SelectItem>
            <SelectItem value="kicukiro">Kicukiro</SelectItem>
            <SelectItem value="other">Other District</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="monthlyVolume">Monthly Mobile Money Sales</Label>
        <Select onValueChange={(value) => setValue('monthlyVolume', value)}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select volume" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="50-200k">50K - 200K RWF</SelectItem>
            <SelectItem value="200-500k">200K - 500K RWF</SelectItem>
            <SelectItem value="500k-1m">500K - 1M RWF</SelectItem>
            <SelectItem value="1m+">1M+ RWF</SelectItem>
          </SelectContent>
        </Select>
        {errors.monthlyVolume && (
          <p className="text-destructive text-sm">{errors.monthlyVolume.message}</p>
        )}
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="email">Email (Optional)</Label>
        <Input 
          id="email" 
          type="email" 
          placeholder="jean@example.com" 
          {...register('email')}
        />
        {errors.email && (
          <p className="text-destructive text-sm">{errors.email.message}</p>
        )}
      </div>
      
      <div className="flex items-center space-x-2">
        <Checkbox 
          id="visit" 
          checked={wantVisit}
          onCheckedChange={(checked) => setWantVisit(checked as boolean)}
        />
        <Label htmlFor="visit" className="text-sm">
          Would you like us to visit your business?
        </Label>
      </div>
      
      <Button 
        type="submit" 
        className="w-full bg-nipay-green hover:bg-nipay-dark-green"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Joining..." : "Join the Waitlist"}
      </Button>
    </form>
  );
};

export default WaitlistForm;
