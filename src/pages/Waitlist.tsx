
import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import WaitlistForm from "@/components/forms/WaitlistForm";
import { CheckCircle, Phone, Mail, Users, Share, Shield } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useState } from "react";

const Waitlist = () => {
  const isMobile = useIsMobile();
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleShareClick = () => {
    const shareUrl = new URL("/waitlist", window.location.origin).toString();
    const message = "Join NiPay for business loans without collateral! Get credit from your own mobile money sales. " + shareUrl;
    
    if (navigator.share) {
      navigator.share({
        title: "Join the NiPay Waitlist",
        text: "Join NiPay for business loans without collateral!",
        url: shareUrl
      }).then(() => {
        toast.success("Thanks for sharing!");
      }).catch(error => {
        console.error("Error sharing:", error);
      });
    } else {
      // WhatsApp share fallback
      const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
      toast.success("Opening WhatsApp to share!");
    }
  };

  const handleFormSuccess = () => {
    setIsSubmitted(true);
  };

  return (
    <>
      <Helmet>
        <title>Join the Waitlist | NiPay - Get Credit from Your Mobile Money Sales</title>
        <meta name="description" content="Be the first to access NiPay's SME overdraft wallet powered by mobile money. No paperwork, no collateral. Join Rwandan businesses already on the waitlist." />
        <meta name="keywords" content="NiPay waitlist, Rwanda SME loans, mobile money credit, business overdraft, MTN money loans, Airtel money loans" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </Helmet>

      <Header />
      
      <main className="min-h-screen pt-20 pb-12 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            
            {/* Hero Section */}
            <div className="text-center mb-8 md:mb-12">
              <h1 className="text-3xl md:text-5xl font-bold mb-4 text-foreground leading-tight">
                Get credit from your own sales — join the NiPay waitlist today
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-6 leading-relaxed">
                Be the first to access our SME overdraft wallet powered by mobile money. No paperwork. No collateral.
              </p>
              
              {/* Trust indicators */}
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <Badge variant="outline" className="bg-nipay-green/10 text-nipay-dark-green border-nipay-green/20">
                  <CheckCircle className="mr-2 h-4 w-4" />
                  No Collateral Required
                </Badge>
                <Badge variant="outline" className="bg-nipay-green/10 text-nipay-dark-green border-nipay-green/20">
                  <CheckCircle className="mr-2 h-4 w-4" />
                  No Paperwork
                </Badge>
                <Badge variant="outline" className="bg-nipay-green/10 text-nipay-dark-green border-nipay-green/20">
                  <CheckCircle className="mr-2 h-4 w-4" />
                  Instant Access
                </Badge>
              </div>
            </div>

            {!isSubmitted ? (
              <>
                {/* Waitlist Form */}
                <Card className="border-green-100 shadow-lg">
                  <CardHeader className="text-center pb-6">
                    <CardTitle className="text-2xl md:text-3xl text-nipay-dark-green">
                      Join the Waitlist
                    </CardTitle>
                    <CardDescription className="text-base">
                      Limited spots available for early access
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <WaitlistForm onSuccess={handleFormSuccess} />
                  </CardContent>
                </Card>

                {/* Privacy Notice */}
                <div className="flex items-center justify-center gap-2 mt-6 text-sm text-muted-foreground">
                  <Shield className="h-4 w-4 text-nipay-green" />
                  <span>We'll never share your contact or business info without permission.</span>
                </div>
              </>
            ) : (
              /* Post-Submission Confirmation */
              <Card className="border-green-200 bg-green-50/50 shadow-lg">
                <CardContent className="pt-8 pb-8 text-center">
                  <div className="text-6xl mb-4">🎉</div>
                  <h2 className="text-2xl md:text-3xl font-bold text-nipay-dark-green mb-4">
                    You're on the waitlist!
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8">
                    Our team will contact you soon to bring NiPay to your business.
                  </p>
                  
                  {/* Contact Information */}
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center justify-center gap-3 text-base">
                      <Phone className="h-5 w-5 text-nipay-green" />
                      <span>Questions? Contact us on WhatsApp:</span>
                      <a 
                        href="https://wa.me/250788321008" 
                        className="font-semibold text-nipay-dark-green hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        +250 788 321 008
                      </a>
                    </div>
                    <div className="flex items-center justify-center gap-3 text-base">
                      <Mail className="h-5 w-5 text-nipay-green" />
                      <span>Or email:</span>
                      <a 
                        href="mailto:contact@nipay.rw" 
                        className="font-semibold text-nipay-dark-green hover:underline"
                      >
                        contact@nipay.rw
                      </a>
                    </div>
                  </div>

                  {/* Share Button */}
                  <Button 
                    onClick={handleShareClick}
                    variant="green" 
                    size="lg"
                    className="w-full md:w-auto"
                  >
                    <Share className="h-5 w-5 mr-2" />
                    Invite a friend on WhatsApp
                  </Button>
                </CardContent>
              </Card>
            )}

            {/* Benefits Section */}
            {!isSubmitted && (
              <div className="mt-12">
                <h2 className="text-xl md:text-2xl font-bold mb-6 text-center">
                  Why Join the Waitlist?
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-6 rounded-lg bg-card border border-green-100">
                    <div className="h-12 w-12 rounded-full bg-nipay-green/10 flex items-center justify-center text-nipay-green mx-auto mb-4">
                      <CheckCircle className="h-6 w-6" />
                    </div>
                    <h3 className="font-bold mb-2">Priority Access</h3>
                    <p className="text-sm text-muted-foreground">
                      Be among the first SMEs to access NiPay when we launch
                    </p>
                  </div>
                  
                  <div className="text-center p-6 rounded-lg bg-card border border-green-100">
                    <div className="h-12 w-12 rounded-full bg-nipay-green/10 flex items-center justify-center text-nipay-green mx-auto mb-4">
                      <Users className="h-6 w-6" />
                    </div>
                    <h3 className="font-bold mb-2">Personal Onboarding</h3>
                    <p className="text-sm text-muted-foreground">
                      Our team will visit your business for setup and training
                    </p>
                  </div>
                  
                  <div className="text-center p-6 rounded-lg bg-card border border-green-100">
                    <div className="h-12 w-12 rounded-full bg-nipay-green/10 flex items-center justify-center text-nipay-green mx-auto mb-4">
                      <Phone className="h-6 w-6" />
                    </div>
                    <h3 className="font-bold mb-2">Direct Support</h3>
                    <p className="text-sm text-muted-foreground">
                      WhatsApp support and dedicated customer care
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default Waitlist;
