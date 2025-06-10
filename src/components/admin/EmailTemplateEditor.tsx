
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { toast } from 'sonner';

interface EmailTemplate {
  subject: string;
  html: string;
}

interface EmailTemplates {
  investor: EmailTemplate;
  waitlist: EmailTemplate;
}

const EmailTemplateEditor = () => {
  const [templates, setTemplates] = useState<EmailTemplates>({
    investor: {
      subject: "Thank you for your interest in NiPay",
      html: `<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
        <div style="text-align: center; margin-bottom: 20px;">
          <h1 style="color: #1e6d43;">NiPay</h1>
        </div>
        <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px;">
          <h2>Hello {{name}},</h2>
          <p>Thank you for your interest in partnering with NiPay. We've received your information and our team will review it promptly.</p>
          <p>We're excited about the opportunity to discuss how we can work together to transform SME finance in Rwanda.</p>
          <p>We'll be in touch soon to schedule a conversation.</p>
          <p>Best regards,<br>The NiPay Team</p>
        </div>
        <div style="text-align: center; margin-top: 20px; font-size: 12px; color: #777;">
          <p>NiPay Ltd. | Kigali, Rwanda | <a href="mailto:support@nipay.rw">support@nipay.rw</a></p>
        </div>
      </div>`
    },
    waitlist: {
      subject: "Thank you for joining NiPay's waitlist",
      html: `<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
        <div style="text-align: center; margin-bottom: 20px;">
          <h1 style="color: #1e6d43;">NiPay</h1>
        </div>
        <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px;">
          <h2>Hello {{name}},</h2>
          <p>Thank you for joining the NiPay waitlist! We're excited to have you on board.</p>
          <p>We're currently developing our service to provide instant loans based on mobile money inflows for SMEs in Rwanda.</p>
          <p>We'll keep you updated on our progress and let you know when we're ready to launch.</p>
          <p>Best regards,<br>The NiPay Team</p>
        </div>
        <div style="text-align: center; margin-top: 20px; font-size: 12px; color: #777;">
          <p>NiPay Ltd. | Kigali, Rwanda | <a href="mailto:support@nipay.rw">support@nipay.rw</a></p>
        </div>
      </div>`
    }
  });

  const [isSaving, setIsSaving] = useState(false);

  const updateTemplate = (type: 'investor' | 'waitlist', field: 'subject' | 'html', value: string) => {
    setTemplates(prev => ({
      ...prev,
      [type]: {
        ...prev[type],
        [field]: value
      }
    }));
  };

  const saveTemplates = async () => {
    setIsSaving(true);
    try {
      // Here you would typically save to your database or configuration
      // For now, we'll just show a success message
      toast.success("Email templates saved successfully!");
      
      // In a real implementation, you might want to:
      // 1. Save to Supabase database
      // 2. Update the edge function configuration
      // 3. Or store in a configuration table
      
      console.log("Templates to save:", templates);
    } catch (error) {
      toast.error("Failed to save templates");
      console.error("Error saving templates:", error);
    } finally {
      setIsSaving(false);
    }
  };

  const testEmail = async (type: 'investor' | 'waitlist') => {
    try {
      await fetch('https://alkjgogriwshdpkuwqhp.functions.supabase.co/send-confirmation-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: 'test@example.com',
          type: type,
          name: 'Test User',
        }),
      });
      toast.success(`Test ${type} email sent!`);
    } catch (error) {
      toast.error("Failed to send test email");
      console.error("Error sending test email:", error);
    }
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Email Template Editor</CardTitle>
        <CardDescription>
          Customize the email templates sent to users after form submission. Use {{name}} as a placeholder for the user's name.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="investor" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="investor">Investor Email</TabsTrigger>
            <TabsTrigger value="waitlist">Waitlist Email</TabsTrigger>
          </TabsList>
          
          <TabsContent value="investor" className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="investor-subject">Subject Line</Label>
              <Input
                id="investor-subject"
                value={templates.investor.subject}
                onChange={(e) => updateTemplate('investor', 'subject', e.target.value)}
                placeholder="Email subject"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="investor-html">Email Content (HTML)</Label>
              <Textarea
                id="investor-html"
                value={templates.investor.html}
                onChange={(e) => updateTemplate('investor', 'html', e.target.value)}
                placeholder="Email HTML content"
                className="min-h-[300px] font-mono text-sm"
              />
            </div>
            
            <div className="flex gap-2">
              <Button onClick={() => testEmail('investor')} variant="outline">
                Send Test Email
              </Button>
            </div>
          </TabsContent>
          
          <TabsContent value="waitlist" className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="waitlist-subject">Subject Line</Label>
              <Input
                id="waitlist-subject"
                value={templates.waitlist.subject}
                onChange={(e) => updateTemplate('waitlist', 'subject', e.target.value)}
                placeholder="Email subject"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="waitlist-html">Email Content (HTML)</Label>
              <Textarea
                id="waitlist-html"
                value={templates.waitlist.html}
                onChange={(e) => updateTemplate('waitlist', 'html', e.target.value)}
                placeholder="Email HTML content"
                className="min-h-[300px] font-mono text-sm"
              />
            </div>
            
            <div className="flex gap-2">
              <Button onClick={() => testEmail('waitlist')} variant="outline">
                Send Test Email
              </Button>
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="flex justify-end mt-6">
          <Button onClick={saveTemplates} disabled={isSaving}>
            {isSaving ? "Saving..." : "Save Templates"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default EmailTemplateEditor;
