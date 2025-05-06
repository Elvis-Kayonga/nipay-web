
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { InvestorFormData, api } from '@/services/api';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { Checkbox } from '@/components/ui/checkbox';

const formSchema = z.object({
  fundName: z.string().min(2, { message: 'Fund name must be at least 2 characters' }),
  aum: z.string().min(1, { message: 'Please enter your assets under management' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  meetingSlots: z.array(z.string()).min(1, { message: 'Please select at least one meeting slot' })
});

type FormData = z.infer<typeof formSchema>;

interface InvestorFormProps {
  onSuccess?: () => void;
}

const meetingOptions = [
  { id: 'morning', label: 'Morning (9AM - 12PM)' },
  { id: 'afternoon', label: 'Afternoon (1PM - 5PM)' },
  { id: 'evening', label: 'Evening (6PM - 9PM)' }
];

const InvestorForm = ({ onSuccess }: InvestorFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { 
    register, 
    handleSubmit, 
    formState: { errors },
    setValue,
    watch,
    reset
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fundName: '',
      aum: '',
      email: '',
      meetingSlots: []
    }
  });
  
  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      await api.contactInvestor(data as InvestorFormData);
      
      toast.success("Thank you for your interest! Our team will contact you shortly.");
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
  
  const selectedSlots = watch('meetingSlots');
  
  const handleCheckboxChange = (id: string, checked: boolean) => {
    const currentSlots = [...selectedSlots];
    
    if (checked) {
      setValue('meetingSlots', [...currentSlots, id]);
    } else {
      setValue('meetingSlots', currentSlots.filter(slot => slot !== id));
    }
  };
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="fundName">Fund/Institution Name</Label>
        <Input 
          id="fundName" 
          placeholder="Acme Capital" 
          {...register('fundName')}
        />
        {errors.fundName && (
          <p className="text-destructive text-sm">{errors.fundName.message}</p>
        )}
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="aum">Assets Under Management (USD)</Label>
        <Input 
          id="aum" 
          placeholder="10M+" 
          {...register('aum')}
        />
        {errors.aum && (
          <p className="text-destructive text-sm">{errors.aum.message}</p>
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
      
      <div className="space-y-3">
        <Label>Preferred Meeting Times</Label>
        <div className="space-y-2">
          {meetingOptions.map((option) => (
            <div key={option.id} className="flex items-center space-x-2">
              <Checkbox 
                id={option.id} 
                checked={selectedSlots.includes(option.id)}
                onCheckedChange={(checked) => {
                  handleCheckboxChange(option.id, checked === true);
                }}
              />
              <Label 
                htmlFor={option.id} 
                className="text-sm font-normal cursor-pointer"
              >
                {option.label}
              </Label>
            </div>
          ))}
        </div>
        {errors.meetingSlots && (
          <p className="text-destructive text-sm">{errors.meetingSlots.message}</p>
        )}
      </div>
      
      <Button 
        type="submit" 
        className="w-full bg-nipay-green hover:bg-nipay-dark-green"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting..." : "Send Request"}
      </Button>
    </form>
  );
};

export default InvestorForm;
