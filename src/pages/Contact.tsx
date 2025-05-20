
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import SEO from "@/components/SEO";
import SectionWrapper from "@/components/shared/SectionWrapper";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { Mail, Phone, MapPin } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    console.log(data);
    
    try {
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
      
      toast({
        title: "Message sent",
        description: "We'll get back to you as soon as possible!",
      });
      form.reset();
    } catch (error) {
      console.error("Failed to send message:", error);
      toast({
        title: "Error",
        description: "Failed to send your message. Please try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <>
      <SEO
        title="Contact Us | NiPay"
        description="Reach out to our team for questions about NiPay's instant credit solutions for SMEs in Rwanda."
        keywords="contact NiPay, Rwanda fintech support, SME credit contact"
        canonicalUrl="/contact"
      />
      <Header />
      
      <main>
        {/* Hero Section */}
        <SectionWrapper className="bg-gradient-to-b from-accent to-background py-12 md:py-16">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-2xl md:text-4xl font-bold mb-3">Contact Us</h1>
            <p className="text-lg text-muted-foreground">
              We're here to help with any questions about NiPay.
            </p>
          </div>
        </SectionWrapper>
        
        {/* Contact Form & Info */}
        <SectionWrapper className="py-10 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="flex flex-col gap-6">
              <div>
                <h2 className="text-xl md:text-2xl font-bold mb-4">Get in Touch</h2>
                <p className="text-muted-foreground mb-6">
                  Have questions about NiPay? Interested in partnering with us? 
                  Reach out directly or fill out the form.
                </p>
              </div>
              
              <div className="space-y-4">
                <Card>
                  <CardContent className="p-5 flex items-start gap-4">
                    <div className="bg-accent p-3 rounded-full">
                      <MapPin className="h-5 w-5 text-nipay-green" />
                    </div>
                    <div>
                      <h3 className="font-bold text-base mb-1">Visit Us</h3>
                      <p className="text-muted-foreground text-sm">Norrsken House Kigali</p>
                      <p className="text-muted-foreground text-sm">Kigali, Rwanda</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-5 flex items-start gap-4">
                    <div className="bg-accent p-3 rounded-full">
                      <Mail className="h-5 w-5 text-nipay-green" />
                    </div>
                    <div>
                      <h3 className="font-bold text-base mb-1">Email Us</h3>
                      <p className="text-muted-foreground text-sm">
                        <a href="mailto:kayongaelvis@nipay.rw" className="hover:text-nipay-green transition-colors">
                          kayongaelvis@nipay.rw
                        </a>
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-5 flex items-start gap-4">
                    <div className="bg-accent p-3 rounded-full">
                      <Phone className="h-5 w-5 text-nipay-green" />
                    </div>
                    <div>
                      <h3 className="font-bold text-base mb-1">Call Us</h3>
                      <p className="text-muted-foreground text-sm">
                        <a href="tel:+250788321008" className="hover:text-nipay-green transition-colors">
                          +250 788 321 008
                        </a>
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            {/* Contact Form */}
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
                    
                    <Button type="submit" className="w-full bg-nipay-green hover:bg-nipay-dark-green">
                      Submit Message
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </SectionWrapper>
      </main>
      
      <Footer />
    </>
  );
};

export default Contact;
