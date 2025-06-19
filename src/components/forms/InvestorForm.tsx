
/**
 * Investor Interest Form Component
 * 
 * Captures investor inquiries for NiPay's $550K Pre-Seed funding round.
 * This form is critical for the fundraising process and business growth.
 * 
 * Business Context:
 * - NiPay is raising $550K Pre-Seed for 18-month runway
 * - Target investors include VCs, angel investors, and institutions
 * - Form data feeds into investor relations pipeline
 * - Follow-up process includes pitch deck and due diligence materials
 * 
 * Form Strategy:
 * - Minimal friction to maximize submission rates
 * - Differentiation between individual and institutional investors
 * - Message field captures specific investor interests and requirements
 * - Email confirmation builds professional relationship from first contact
 * 
 * Technical Implementation:
 * - React Hook Form for optimal user experience
 * - Zod validation ensures data quality
 * - Supabase backend for secure data storage
 * - Rate limiting prevents spam and abuse
 * - Resend integration for professional email confirmations
 */

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

/**
 * Form Validation Schema
 * Ensures data quality for investor pipeline management
 */
const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  organizationName: z.string().optional(), // Only required for organizations
  email: z.string().email({ message: 'Please enter a valid email address' }),
  investorType: z.enum(['individual', 'organization']), // Helps tailor follow-up approach
  message: z.string().min(10, { message: 'Please provide a brief message about your interest' }),
});

type FormData = z.infer<typeof formSchema>;

interface InvestorFormProps {
  onSuccess?: () => void; // Optional success callback
}

const InvestorForm = ({ onSuccess }: InvestorFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // React Hook Form setup with validation
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
      investorType: 'organization', // Default to organization (common case)
      message: '',
    }
  });
  
  // Watch investor type to show/hide organization name field
  const investorType = watch('investorType');
  
  /**
   * Form Submission Handler
   * 
   * Processes investor inquiry through the following steps:
   * 1. Submit data to Supabase for storage and CRM integration
   * 2. Send confirmation email to investor
   * 3. Trigger internal notifications for follow-up
   * 4. Provide user feedback and reset form
   */
  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      // Store investor inquiry in database
      await api.contactInvestor({
        name: data.name,
        email: data.email,
        organizationName: data.organizationName || '',
        investorType: data.investorType,
        message: data.message
      });
      
      // Send professional confirmation email
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
        // Don't block form submission if email fails
      }
      
      // Success feedback and form reset
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
      {/* Investor Name - Personal identification */}
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
      
      {/* Investor Type Selection - Helps tailor communication */}
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
      
      {/* Organization Name - Conditional field for institutional investors */}
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
      
      {/* Email Contact - Primary communication channel */}
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
      
      {/* Investment Interest Details */}
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
      
      {/* Submit Button - Primary conversion action */}
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
