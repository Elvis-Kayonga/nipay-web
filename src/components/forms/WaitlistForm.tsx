
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

const formSchema = z.object({
  name: z.string().min(2, { message: 'Full name must be at least 2 characters' }),
  businessName: z.string().optional(),
  phoneNumber: z.string().min(8, { message: 'Please enter a valid phone number' }),
  monthlyVolume: z.string().min(1, { message: 'Please select mobile money provider' }),
  businessType: z.string().min(1, { message: 'Please select business location' }),
});

type FormData = z.infer<typeof formSchema>;

interface WaitlistFormProps {
  onSuccess?: () => void;
  onClose?: () => void;
}

const WaitlistForm = ({ onSuccess, onClose }: WaitlistFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [mobileMoneyProvider, setMobileMoneyProvider] = useState('');
  const [businessLocation, setBusinessLocation] = useState('');
  const [preferredLanguage, setPreferredLanguage] = useState('');
  const [wantVisit, setWantVisit] = useState('');
  
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
        businessName: data.businessName || '',
        email: '', // Not required for this form
        phoneNumber: data.phoneNumber,
        monthlyVolume: mobileMoneyProvider,
        businessEarnings: preferredLanguage,
        fundingNeeded: businessLocation,
        interestRate: wantVisit,
        businessType: 'waitlist'
      });
      
      // Send confirmation via WhatsApp (optional)
      try {
        const whatsappMessage = `Hello ${data.name}! 🎉 Welcome to the NiPay waitlist. Our team will contact you soon to bring mobile money credit to your business. Questions? Reply to this number.`;
        // This would typically integrate with a WhatsApp Business API
        console.log('WhatsApp confirmation would be sent:', whatsappMessage);
      } catch (whatsappError) {
        console.error("WhatsApp confirmation failed:", whatsappError);
      }
      
      toast.success("🎉 You're on the waitlist! Our team will contact you soon.");
      reset();
      
      if (onSuccess) {
        onSuccess();
      }
      
      if (onClose) {
        onClose();
      }
    } catch (error: any) {
      toast.error(error.message || "There was a problem joining the waitlist. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  
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
          className="h-12 text-base"
          {...register('name')}
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
          className="h-12 text-base"
          {...register('businessName')}
        />
      </div>
      
      {/* Phone Number - Required */}
      <div className="space-y-2">
        <Label htmlFor="phoneNumber" className="text-base font-medium">
          Phone Number <span className="text-red-500">*</span>
        </Label>
        <Input 
          id="phoneNumber" 
          type="tel"
          placeholder="+250 788 321 008" 
          className="h-12 text-base"
          {...register('phoneNumber')}
        />
        {errors.phoneNumber && (
          <p className="text-destructive text-sm">{errors.phoneNumber.message}</p>
        )}
      </div>
      
      {/* Mobile Money Provider */}
      <div className="space-y-2">
        <Label className="text-base font-medium">Mobile Money Provider</Label>
        <Select onValueChange={(value) => {
          setMobileMoneyProvider(value);
          setValue('monthlyVolume', value);
        }}>
          <SelectTrigger className="h-12 text-base">
            <SelectValue placeholder="Select your provider" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="mtn">MTN Mobile Money</SelectItem>
            <SelectItem value="airtel">Airtel Money</SelectItem>
            <SelectItem value="bank">Bank Account</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
        {errors.monthlyVolume && (
          <p className="text-destructive text-sm">Please select a mobile money provider</p>
        )}
      </div>
      
      {/* Business Location */}
      <div className="space-y-2">
        <Label className="text-base font-medium">Business Location</Label>
        <Select onValueChange={(value) => {
          setBusinessLocation(value);
          setValue('businessType', value);
        }}>
          <SelectTrigger className="h-12 text-base">
            <SelectValue placeholder="Select your district" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="gasabo">Gasabo</SelectItem>
            <SelectItem value="kicukiro">Kicukiro</SelectItem>
            <SelectItem value="nyarugenge">Nyarugenge</SelectItem>
            <SelectItem value="bugesera">Bugesera</SelectItem>
            <SelectItem value="gatsibo">Gatsibo</SelectItem>
            <SelectItem value="kayonza">Kayonza</SelectItem>
            <SelectItem value="kirehe">Kirehe</SelectItem>
            <SelectItem value="ngoma">Ngoma</SelectItem>
            <SelectItem value="nyagatare">Nyagatare</SelectItem>
            <SelectItem value="rwamagana">Rwamagana</SelectItem>
            <SelectItem value="gicumbi">Gicumbi</SelectItem>
            <SelectItem value="musanze">Musanze</SelectItem>
            <SelectItem value="burera">Burera</SelectItem>
            <SelectItem value="gakenke">Gakenke</SelectItem>
            <SelectItem value="rulindo">Rulindo</SelectItem>
            <SelectItem value="kamonyi">Kamonyi</SelectItem>
            <SelectItem value="muhanga">Muhanga</SelectItem>
            <SelectItem value="nyamagabe">Nyamagabe</SelectItem>
            <SelectItem value="nyanza">Nyanza</SelectItem>
            <SelectItem value="nyaruguru">Nyaruguru</SelectItem>
            <SelectItem value="ruhango">Ruhango</SelectItem>
            <SelectItem value="huye">Huye</SelectItem>
            <SelectItem value="gisagara">Gisagara</SelectItem>
            <SelectItem value="karongi">Karongi</SelectItem>
            <SelectItem value="rutsiro">Rutsiro</SelectItem>
            <SelectItem value="rubavu">Rubavu</SelectItem>
            <SelectItem value="nyabihu">Nyabihu</SelectItem>
            <SelectItem value="ngororero">Ngororero</SelectItem>
            <SelectItem value="rusizi">Rusizi</SelectItem>
            <SelectItem value="nyamasheke">Nyamasheke</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
        {errors.businessType && (
          <p className="text-destructive text-sm">Please select your business location</p>
        )}
      </div>
      
      {/* Preferred Language */}
      <div className="space-y-2">
        <Label className="text-base font-medium">Preferred Language</Label>
        <Select onValueChange={setPreferredLanguage}>
          <SelectTrigger className="h-12 text-base">
            <SelectValue placeholder="Select your preferred language" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="english">English</SelectItem>
            <SelectItem value="kinyarwanda">Kinyarwanda</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      {/* Optional Field Visit */}
      <div className="space-y-3">
        <Label className="text-base font-medium">Would you like us to visit your shop?</Label>
        <RadioGroup value={wantVisit} onValueChange={setWantVisit} className="flex flex-row space-x-6">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="yes" id="visit-yes" />
            <Label htmlFor="visit-yes" className="text-base">Yes</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="no" id="visit-no" />
            <Label htmlFor="visit-no" className="text-base">No</Label>
          </div>
        </RadioGroup>
      </div>
      
      {/* Submit Button */}
      <Button 
        type="submit" 
        className="w-full h-14 text-lg font-semibold bg-nipay-green hover:bg-nipay-dark-green rounded-xl"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Joining Waitlist..." : "✅ Join the Waitlist"}
      </Button>
    </form>
  );
};

export default WaitlistForm;
