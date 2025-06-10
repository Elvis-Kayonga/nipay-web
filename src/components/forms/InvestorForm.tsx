
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
    setValue,
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
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="space-y-2">
        <Label htmlFor="name" className="text-sm font-medium text-gray-700">Your Name</Label>
        <Input 
          id="name" 
          placeholder="John Doe" 
          {...register('name')}
          className="h-11 border-gray-200 focus:border-nipay-green focus:ring-nipay-green"
        />
        {errors.name && (
          <p className="text-destructive text-sm">{errors.name.message}</p>
        )}
      </div>
      
      <div className="space-y-3">
        <Label className="text-sm font-medium text-gray-700">I am an</Label>
        <div className="space-y-2">
          <label className="flex items-center space-x-3 cursor-pointer group">
            <input
              type="radio"
              value="individual"
              checked={investorType === 'individual'}
              onChange={(e) => setValue('investorType', e.target.value as 'individual' | 'organization')}
              className="w-4 h-4 text-nipay-green border-gray-300 focus:ring-nipay-green focus:ring-2"
            />
            <span className="text-sm text-gray-700 group-hover:text-nipay-dark-green">Individual Investor</span>
          </label>
          <label className="flex items-center space-x-3 cursor-pointer group">
            <input
              type="radio"
              value="organization"
              checked={investorType === 'organization'}
              onChange={(e) => setValue('investorType', e.target.value as 'individual' | 'organization')}
              className="w-4 h-4 text-nipay-green border-gray-300 focus:ring-nipay-green focus:ring-2"
            />
            <span className="text-sm text-gray-700 group-hover:text-nipay-dark-green">Organization/Institution</span>
          </label>
        </div>
      </div>
      
      {investorType === 'organization' && (
        <div className="space-y-2">
          <Label htmlFor="organizationName" className="text-sm font-medium text-gray-700">Organization Name</Label>
          <Input 
            id="organizationName" 
            placeholder="Acme Capital" 
            {...register('organizationName')}
            className="h-11 border-gray-200 focus:border-nipay-green focus:ring-nipay-green"
          />
        </div>
      )}
      
      <div className="space-y-2">
        <Label htmlFor="email" className="text-sm font-medium text-gray-700">Email</Label>
        <Input 
          id="email" 
          type="email" 
          placeholder="you@example.com" 
          {...register('email')}
          className="h-11 border-gray-200 focus:border-nipay-green focus:ring-nipay-green"
        />
        {errors.email && (
          <p className="text-destructive text-sm">{errors.email.message}</p>
        )}
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="message" className="text-sm font-medium text-gray-700">Interest</Label>
        <Textarea 
          id="message" 
          placeholder="Tell us about your interest in NiPay..." 
          className="min-h-[100px] border-gray-200 focus:border-nipay-green focus:ring-nipay-green resize-none"
          {...register('message')}
        />
        {errors.message && (
          <p className="text-destructive text-sm">{errors.message.message}</p>
        )}
      </div>
      
      <Button 
        type="submit" 
        className="w-full h-12 bg-nipay-green hover:bg-nipay-dark-green text-white font-semibold text-base shadow-sm"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting..." : "Send Request"}
      </Button>
    </form>
  );
};

export default InvestorForm;
