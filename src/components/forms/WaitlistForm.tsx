import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { WaitlistFormData, api, ApiResponse } from '@/services/api';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { toast } from 'sonner';
import { CheckCircle, MessageCircle } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters' }),
  businessName: z.string().optional(),
  phoneNumber: z.string().min(10, { message: 'Please enter a valid phone number' }),
  loanNeeded: z.string().min(1, { message: 'Please specify loan amount needed' }),
  businessLocation: z.string().min(1, { message: 'Please select your location' }),
  preferredLanguage: z.string().min(1, { message: 'Please select your preferred language' }),
  fieldVisit: z.string().min(1, { message: 'Please select if you want a field visit' }),
  email: z.string().email().optional(),
});

type FormData = z.infer<typeof formSchema>;

interface WaitlistFormProps {
  onSuccess?: () => void;
  onClose?: () => void;
}

const rwandanDistricts = [
  'Kigali City',
  'Nyarugenge',
  'Gasabo', 
  'Kicukiro',
  'Huye',
  'Musanze',
  'Rubavu',
  'Rusizi',
  'Karongi',
  'Nyanza',
  'Ruhango',
  'Muhanga',
  'Kayonza',
  'Rwamagana',
  'Kirehe',
  'Ngoma',
  'Bugesera',
  'Nyagatare',
  'Gatsibo',
  'Other District'
];

const WaitlistForm = ({ onSuccess, onClose }: WaitlistFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const { 
    register, 
    handleSubmit, 
    formState: { errors },
    reset,
    setValue,
    watch
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      businessName: '',
      phoneNumber: '',
      loanNeeded: '',
      businessLocation: '',
      preferredLanguage: '',
      fieldVisit: '',
      email: '',
    }
  });

  const fieldVisit = watch('fieldVisit');
  
  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      const result: ApiResponse = await api.submitToWaitlist({
        name: data.name,
        businessName: data.businessName || '',
        email: data.email || '',
        phoneNumber: data.phoneNumber,
        monthlyVolume: data.loanNeeded,
        businessEarnings: data.businessLocation,
        fundingNeeded: data.preferredLanguage,
        interestRate: data.fieldVisit,
        businessType: 'SME'
      });
      
      // Send confirmation email if email is provided
      if (data.email) {
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
        }
      }
      
      setIsSubmitted(true);
      reset();
      
      if (onSuccess) {
        onSuccess();
      }
    } catch (error: any) {
      toast.error(error.message || "There was a problem submitting your information.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-8">
        <div className="mb-6">
          <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-green-600 mb-2">
            🎉 You're on the waitlist!
          </h3>
          <p className="text-lg text-muted-foreground mb-6">
            Our team will contact you soon to bring NiPay to your business.
          </p>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <MessageCircle className="h-4 w-4" />
            📞 Questions? Contact us on WhatsApp: <strong>+250 788 321 008</strong>
          </div>
          <div className="text-sm text-muted-foreground">
            📩 Or email: <strong>support@nipay.rw</strong>
          </div>
        </div>

        <Button 
          onClick={() => setIsSubmitted(false)}
          variant="outline" 
          className="mt-6"
        >
          Submit Another Application
        </Button>
      </div>
    );
  }
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Full Name - Required */}
      <div className="space-y-2">
        <Label htmlFor="name" className="text-base font-medium">
          Full Name <span className="text-red-500">*</span>
        </Label>
        <Input 
          id="name" 
          placeholder="Jean Uwimana" 
          {...register('name')}
          className="h-12"
        />
        {errors.name && (
          <p className="text-destructive text-sm">{errors.name.message}</p>
        )}
      </div>

      {/* Business Name - Optional */}
      <div className="space-y-2">
        <Label htmlFor="businessName" className="text-base font-medium">
          Business Name <span className="text-muted-foreground">(Optional)</span>
        </Label>
        <Input 
          id="businessName" 
          placeholder="Uwimana Shop" 
          {...register('businessName')}
          className="h-12"
        />
        {errors.businessName && (
          <p className="text-destructive text-sm">{errors.businessName.message}</p>
        )}
      </div>

      {/* Email - Optional */}
      <div className="space-y-2">
        <Label htmlFor="email" className="text-base font-medium">
          Email <span className="text-muted-foreground">(Optional - for confirmation email)</span>
        </Label>
        <Input 
          id="email" 
          type="email"
          placeholder="jean@example.com" 
          {...register('email')}
          className="h-12"
        />
        {errors.email && (
          <p className="text-destructive text-sm">{errors.email.message}</p>
        )}
      </div>
      
      {/* Phone Number - Required */}
      <div className="space-y-2">
        <Label htmlFor="phoneNumber" className="text-base font-medium">
          Phone Number <span className="text-red-500">*</span>
        </Label>
        <Input 
          id="phoneNumber" 
          placeholder="+250 788 123 456" 
          {...register('phoneNumber')}
          className="h-12"
        />
        {errors.phoneNumber && (
          <p className="text-destructive text-sm">{errors.phoneNumber.message}</p>
        )}
        <p className="text-xs text-muted-foreground">Used for WhatsApp follow-up</p>
      </div>

      {/* Loan Needed */}
      <div className="space-y-2">
        <Label htmlFor="loanNeeded" className="text-base font-medium">
          Loan Amount Needed <span className="text-red-500">*</span>
        </Label>
        <Select onValueChange={(value) => setValue('loanNeeded', value)}>
          <SelectTrigger className="h-12">
            <SelectValue placeholder="Select loan amount" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="50k-200k">50K - 200K RWF</SelectItem>
            <SelectItem value="200k-500k">200K - 500K RWF</SelectItem>
            <SelectItem value="500k-1m">500K - 1M RWF</SelectItem>
            <SelectItem value="1m-2m">1M - 2M RWF</SelectItem>
            <SelectItem value="2m+">2M+ RWF</SelectItem>
          </SelectContent>
        </Select>
        {errors.loanNeeded && (
          <p className="text-destructive text-sm">{errors.loanNeeded.message}</p>
        )}
      </div>

      {/* Business Location */}
      <div className="space-y-2">
        <Label htmlFor="businessLocation" className="text-base font-medium">
          Business Location <span className="text-red-500">*</span>
        </Label>
        <Select onValueChange={(value) => setValue('businessLocation', value)}>
          <SelectTrigger className="h-12">
            <SelectValue placeholder="Select your district" />
          </SelectTrigger>
          <SelectContent>
            {rwandanDistricts.map((district) => (
              <SelectItem key={district} value={district}>
                {district}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        {errors.businessLocation && (
          <p className="text-destructive text-sm">{errors.businessLocation.message}</p>
        )}
      </div>

      {/* Preferred Language */}
      <div className="space-y-2">
        <Label htmlFor="preferredLanguage" className="text-base font-medium">
          Preferred Language <span className="text-red-500">*</span>
        </Label>
        <Select onValueChange={(value) => setValue('preferredLanguage', value)}>
          <SelectTrigger className="h-12">
            <SelectValue placeholder="Select language" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="english">English</SelectItem>
            <SelectItem value="kinyarwanda">Kinyarwanda</SelectItem>
          </SelectContent>
        </Select>
        {errors.preferredLanguage && (
          <p className="text-destructive text-sm">{errors.preferredLanguage.message}</p>
        )}
      </div>

      {/* Optional Field Visit */}
      <div className="space-y-3">
        <Label className="text-base font-medium">
          Would you like us to visit your shop? <span className="text-red-500">*</span>
        </Label>
        <RadioGroup value={fieldVisit} onValueChange={(value) => setValue('fieldVisit', value)}>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="yes" id="visit-yes" />
            <Label htmlFor="visit-yes">Yes, please visit my business</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="no" id="visit-no" />
            <Label htmlFor="visit-no">No, phone/WhatsApp contact is fine</Label>
          </div>
        </RadioGroup>
        {errors.fieldVisit && (
          <p className="text-destructive text-sm">{errors.fieldVisit.message}</p>
        )}
      </div>
      
      <Button 
        type="submit" 
        className="w-full h-12 text-lg bg-nipay-green hover:bg-nipay-dark-green rounded-xl font-bold"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Joining..." : "✅ Join the Waitlist"}
      </Button>
    </form>
  );
};

export default WaitlistForm;
