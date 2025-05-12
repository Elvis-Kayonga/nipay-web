
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { WaitlistFormData, api } from '@/services/api';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Building, Clock, DollarSign, Percent, User } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  businessName: z.string().min(2, { message: 'Business name must be at least 2 characters' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  monthlyVolume: z.string().min(1, { message: 'Please enter your monthly mobile money volume' }),
  businessEarnings: z.string().min(1, { message: 'Please enter your monthly business earnings' }),
  fundingNeeded: z.string().min(1, { message: 'Please enter how much funding you need' }),
  interestRate: z.string().min(1, { message: 'Please select your preferred interest rate' }),
  businessType: z.string().min(1, { message: 'Please select your business type' })
});

type FormData = z.infer<typeof formSchema>;

interface WaitlistFormProps {
  onSuccess?: () => void;
}

const BUSINESS_TYPES = [
  "Retail Shop",
  "Restaurant/Food Vendor",
  "Transportation",
  "Agriculture",
  "Manufacturing",
  "Technology",
  "Professional Services",
  "Construction",
  "Healthcare",
  "Education",
  "Other"
];

const WaitlistForm = ({ onSuccess }: WaitlistFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [interestRateValue, setInterestRateValue] = useState(10);
  
  const { 
    register, 
    handleSubmit, 
    setValue,
    formState: { errors },
    reset
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      businessName: '',
      email: '',
      monthlyVolume: '',
      businessEarnings: '',
      fundingNeeded: '',
      interestRate: '10',
      businessType: ''
    }
  });
  
  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      await api.submitToWaitlist(data as unknown as WaitlistFormData);
      
      toast.success("You've successfully joined our waitlist!");
      reset();
      
      if (onSuccess) {
        onSuccess();
      }
    } catch (error) {
      toast.error("There was a problem submitting your information. Please try again.");
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const handleInterestRateChange = (value: number[]) => {
    const rate = value[0];
    setInterestRateValue(rate);
    setValue('interestRate', rate.toString());
  };
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name" className="flex items-center gap-2">
          <User className="h-4 w-4" /> Your Name
        </Label>
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
        <Label htmlFor="businessName" className="flex items-center gap-2">
          <Building className="h-4 w-4" /> Business Name
        </Label>
        <Input 
          id="businessName" 
          placeholder="Your Business Ltd." 
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
        <Label htmlFor="businessType" className="flex items-center gap-2">
          <Building className="h-4 w-4" /> Type of Business
        </Label>
        <Select onValueChange={(value) => setValue('businessType', value)}>
          <SelectTrigger>
            <SelectValue placeholder="Select your business type" />
          </SelectTrigger>
          <SelectContent>
            {BUSINESS_TYPES.map((type) => (
              <SelectItem key={type} value={type}>{type}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.businessType && (
          <p className="text-destructive text-sm">{errors.businessType.message}</p>
        )}
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="businessEarnings" className="flex items-center gap-2">
          <DollarSign className="h-4 w-4" /> Monthly Business Earnings (RWF)
        </Label>
        <Input 
          id="businessEarnings" 
          placeholder="1,000,000" 
          {...register('businessEarnings')}
        />
        {errors.businessEarnings && (
          <p className="text-destructive text-sm">{errors.businessEarnings.message}</p>
        )}
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="monthlyVolume">Monthly Mobile Money Volume (RWF)</Label>
        <Input 
          id="monthlyVolume" 
          placeholder="500,000" 
          {...register('monthlyVolume')}
        />
        {errors.monthlyVolume && (
          <p className="text-destructive text-sm">{errors.monthlyVolume.message}</p>
        )}
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="fundingNeeded" className="flex items-center gap-2">
          <DollarSign className="h-4 w-4" /> Funding Amount Needed (RWF)
        </Label>
        <Input 
          id="fundingNeeded" 
          placeholder="2,000,000" 
          {...register('fundingNeeded')}
        />
        {errors.fundingNeeded && (
          <p className="text-destructive text-sm">{errors.fundingNeeded.message}</p>
        )}
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="interestRate" className="flex items-center gap-2">
          <Percent className="h-4 w-4" /> Preferred Interest Rate: {interestRateValue}%
        </Label>
        <Slider 
          id="interestRate"
          min={5}
          max={20}
          step={1}
          defaultValue={[10]}
          onValueChange={handleInterestRateChange}
          className="py-4"
        />
        <input type="hidden" {...register('interestRate')} value={interestRateValue} />
        {errors.interestRate && (
          <p className="text-destructive text-sm">{errors.interestRate.message}</p>
        )}
      </div>
      
      <Button 
        type="submit" 
        className="w-full bg-nipay-green hover:bg-nipay-dark-green"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting..." : "Join Waitlist Now"}
      </Button>
      
      <p className="text-center text-sm text-muted-foreground">
        <Clock className="inline h-3 w-3 mr-1" />
        Limited spots available. Apply today to secure your place.
      </p>
    </form>
  );
};

export default WaitlistForm;
