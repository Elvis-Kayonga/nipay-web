
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
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  subject: z.string().min(5, { message: "Subject must be at least 5 characters" }),
  message: z.string().min(10, { message: "Message must be at least 10 characters" }),
});

const Contact = () => {
  const { toast } = useToast();
  
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

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
    
    // This would normally send the contact form to a server
    setTimeout(() => {
      toast({
        title: "Message sent",
        description: "We'll get back to you as soon as possible!",
      });
      form.reset();
    }, 1000);
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
        <SectionWrapper className="bg-gradient-to-b from-accent to-background py-16 md:py-24">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Have questions about NiPay? We're here to help.
            </p>
          </div>
        </SectionWrapper>
        
        {/* Contact Form & Info */}
        <SectionWrapper className="py-12 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <div className="flex flex-col gap-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Get in Touch</h2>
                <p className="text-muted-foreground mb-8">
                  Have questions about how NiPay can help your business? Or interested in partnering with us? 
                  Fill out the form or reach out directly through one of our channels below.
                </p>
              </div>
              
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="bg-accent p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-nipay-green" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Visit Us</h3>
                      <p className="text-muted-foreground">Norrsken House Kigali</p>
                      <p className="text-muted-foreground">Kigali, Rwanda</p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="bg-accent p-3 rounded-full">
                      <Mail className="h-6 w-6 text-nipay-green" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Email Us</h3>
                      <p className="text-muted-foreground">
                        <a href="mailto:info@nipay.rw" className="hover:text-nipay-green transition-colors">
                          info@nipay.rw
                        </a>
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="bg-accent p-3 rounded-full">
                      <Phone className="h-6 w-6 text-nipay-green" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-1">Call Us</h3>
                      <p className="text-muted-foreground">
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
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Full Name</FormLabel>
                          <FormControl>
                            <Input placeholder="John Doe" {...field} />
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
                            <Input type="email" placeholder="john.doe@example.com" {...field} />
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
                            <Input placeholder="How can we help you?" {...field} />
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
                              placeholder="Tell us more about your inquiry..." 
                              className="min-h-[120px]"
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button type="submit" variant="green" className="w-full">
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
