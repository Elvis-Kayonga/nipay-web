
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { api } from '@/services/api';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  organizationName: z.string().optional(),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  investorType: z.enum(['individual', 'organization']),
  message: z.string().min(10, { message: 'Please provide a brief message about your interest' }),
});

type FormData = z.infer<typeof formSchema>;

interface InvestorFormProps {
  onSuccess?: () => void;
}

const InvestorForm = ({ onSuccess }: InvestorFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { 
    register, 
    handleSubmit, 
    formState: { errors },
    watch,
    reset
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      organizationName: '',
      email: '',
      investorType: 'organization',
      message: '',
    }
  });
  
  const investorType = watch('investorType');
  
  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      await api.contactInvestor({
        name: data.name,
        email: data.email,
        organizationName: data.organizationName || '',
        investorType: data.investorType,
        message: data.message
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
            type: 'investor',
            name: data.name,
          }),
        });
      } catch (emailError) {
        console.error("Failed to send confirmation email:", emailError);
        // Don't block the form submission if email fails
      }
      
      toast.success("Thank you for your interest! We'll be in touch soon.");
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
      
      <div className="space-y-3">
        <Label>I am an</Label>
        <RadioGroup
          defaultValue="organization"
          value={investorType}
          onValueChange={(value) => {
            if (value === 'individual' || value === 'organization') {
              register('investorType').onChange({ target: { value } });
            }
          }}
          className="flex flex-col space-y-1"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="individual" id="individual" />
            <Label htmlFor="individual" className="cursor-pointer">Individual Investor</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="organization" id="organization" />
            <Label htmlFor="organization" className="cursor-pointer">Organization/Institution</Label>
          </div>
        </RadioGroup>
      </div>
      
      {investorType === 'organization' && (
        <div className="space-y-2">
          <Label htmlFor="organizationName">Organization Name</Label>
          <Input 
            id="organizationName" 
            placeholder="Acme Capital" 
            {...register('organizationName')}
          />
        </div>
      )}
      
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
        <Label htmlFor="message">Interest</Label>
        <Textarea 
          id="message" 
          placeholder="Tell us about your interest in NiPay..." 
          className="min-h-[100px]"
          {...register('message')}
        />
        {errors.message && (
          <p className="text-destructive text-sm">{errors.message.message}</p>
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
