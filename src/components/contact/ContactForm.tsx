
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "sonner";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { supabase } from '@/integrations/supabase/client';

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }).max(100, { message: "Name must be less than 100 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters" }).max(200, { message: "Subject must be less than 200 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }).max(1000, { message: "Message must be less than 1000 characters" }),
});

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  // Rate limiting check
  const checkRateLimit = async (email: string): Promise<boolean> => {
    try {
      const { data, error } = await supabase.rpc('check_rate_limit', {
        check_ip: '127.0.0.1', // Fallback IP
        check_email: email,
        check_type: 'contact',
        max_submissions: 2, // Allow 2 contact messages per hour
        window_minutes: 60
      });

      if (error) {
        console.error('Rate limit check error:', error);
        return true; // Allow submission if rate limit check fails
      }

      return data;
    } catch (error) {
      console.error('Rate limit check error:', error);
      return true;
    }
  };

  const logSubmissionAttempt = async (email: string): Promise<void> => {
    try {
      await supabase.rpc('log_submission_attempt', {
        attempt_ip: '127.0.0.1', // Fallback IP
        attempt_email: email,
        attempt_type: 'contact'
      });
    } catch (error) {
      console.error('Failed to log submission attempt:', error);
    }
  };

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsSubmitting(true);
    
    try {
      // Check rate limit
      const rateLimitOk = await checkRateLimit(data.email);
      if (!rateLimitOk) {
        toast.error('Too many submissions', {
          description: 'Please wait before sending another message.'
        });
        return;
      }

      // Log submission attempt
      await logSubmissionAttempt(data.email);
      
      // Send confirmation email
      await fetch('https://alkjgogriwshdpkuwqhp.functions.supabase.co/send-confirmation-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: data.email,
          type: 'investor', // We're using the investor template for contact messages
          name: data.name,
        }),
      });
      
      toast.success("Message sent", {
        description: "We'll get back to you as soon as possible!"
      });
      form.reset();
    } catch (error) {
      console.error("Failed to send message:", error);
      toast.error("Error", {
        description: "Failed to send your message. Please try again."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="shadow-md">
      <CardHeader className="pb-3">
        <CardTitle>Send a Message</CardTitle>
        <CardDescription>
          We'll get back to you as soon as possible.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Your name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="Your email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Subject</FormLabel>
                  <FormControl>
                    <Input placeholder="What is this about?" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Your message" 
                      className="min-h-[100px]"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <Button 
              type="submit" 
              className="w-full bg-nipay-green hover:bg-nipay-dark-green"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Submit Message"}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
