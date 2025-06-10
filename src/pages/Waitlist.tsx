
import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import WaitlistForm from "@/components/forms/WaitlistForm";
import { CheckCircle, Clock, CreditCard, TrendingUp, DollarSign, Handshake, Shield, Users, Share, MessageCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Waitlist = () => {
  const isMobile = useIsMobile();
  
  const handleShareClick = () => {
    const shareUrl = new URL("/waitlist", window.location.origin).toString();
    const shareText = "Join NiPay for business loans without collateral! Get credit from your own mobile money sales.";
    
    if (navigator.share) {
      navigator.share({
        title: "Join the NiPay Waitlist",
        text: shareText,
        url: shareUrl
      }).then(() => {
        toast.success("Thanks for sharing!");
      }).catch(error => {
        console.error("Error sharing:", error);
      });
    } else {
      const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareText + " " + shareUrl)}`;
      window.open(whatsappUrl, '_blank');
    }
  };

  return <>
    <Helmet>
      <title>Get Credit from Your Sales | Join NiPay Waitlist Rwanda</title>
      <meta name="description" content="Join NiPay waitlist today! Get credit from your own mobile money sales. SME overdraft wallet - no paperwork, no collateral. Early access for Rwanda businesses." />
      <meta name="keywords" content="NiPay waitlist, SME overdraft Rwanda, mobile money credit, business loans no collateral, MTN money loans Rwanda" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
    </Helmet>

    <Header />
    
    <main className="min-h-screen pt-20 pb-12 md:pb-16 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight">
              Get credit from your own sales — 
              <span className="block text-nipay-green">join the NiPay waitlist today.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-6 md:mb-8 leading-relaxed">
              Be the first to access our SME overdraft wallet powered by mobile money. 
              <span className="font-semibold text-foreground"> No paperwork. No collateral.</span>
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge variant="outline" className="px-4 py-2 text-sm">
                <TrendingUp className="mr-2 h-4 w-4" />
                400+ SMEs Ready
              </Badge>
              <Badge variant="outline" className="px-4 py-2 text-sm">
                <DollarSign className="mr-2 h-4 w-4" />
                258M RWF Volume
              </Badge>
              <Badge variant="outline" className="px-4 py-2 text-sm">
                <Clock className="mr-2 h-4 w-4" />
                Launching Soon
              </Badge>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Benefits Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              <Card className="border-green-100 shadow-lg">
                <CardHeader className="bg-nipay-green/5 border-b border-nipay-green/10">
                  <CardTitle className="text-lg text-nipay-dark-green flex items-center">
                    <CheckCircle className="mr-2 h-5 w-5" />
                    Early Benefits
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <CreditCard className="h-5 w-5 text-nipay-green mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-semibold block">Priority Access</span>
                        <span className="text-sm text-muted-foreground">First to get approved</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <TrendingUp className="h-5 w-5 text-nipay-green mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-semibold block">Higher Limits</span>
                        <span className="text-sm text-muted-foreground">More credit available</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <DollarSign className="h-5 w-5 text-nipay-green mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-semibold block">Lower Fees</span>
                        <span className="text-sm text-muted-foreground">Special early rates</span>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Handshake className="h-5 w-5 text-nipay-green mt-0.5 flex-shrink-0" />
                      <div>
                        <span className="font-semibold block">VIP Support</span>
                        <span className="text-sm text-muted-foreground">Direct founder access</span>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Share Section */}
              <Card className="border-amber-100 bg-amber-50/50">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <Users className="h-8 w-8 text-nipay-green mx-auto mb-3" />
                    <h3 className="font-bold mb-2">Know Other Businesses?</h3>
                    <p className="text-sm text-muted-foreground mb-4">
                      Help friends get early access too.
                    </p>
                    <Button variant="outline" size="sm" onClick={handleShareClick} className="w-full">
                      <Share className="h-4 w-4 mr-2" />
                      Invite Friends
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Form */}
            <div className="lg:col-span-2">
              <Card className="border-green-100 shadow-xl">
                <CardHeader className="text-center pb-4">
                  <CardTitle className="text-2xl md:text-3xl">Join the Waitlist</CardTitle>
                  <CardDescription className="text-base">
                    Secure your spot for early access to NiPay
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <WaitlistForm onSuccess={() => {
                    // Success handled in form component
                  }} />
                  
                  {/* Privacy Notice */}
                  <div className="mt-6 p-4 bg-muted/30 rounded-lg border border-muted">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Shield className="h-4 w-4 text-nipay-green" />
                      🔒 We'll never share your contact or business info without permission.
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Contact Info */}
          <div className="mt-12 text-center">
            <h3 className="text-xl font-bold mb-4">Questions?</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                variant="outline" 
                onClick={() => window.open('https://wa.me/250788321008?text=Hi%20NiPay%2C%20I%20have%20questions%20about%20the%20waitlist', '_blank')}
                className="flex items-center gap-2"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp Us
              </Button>
              <Button 
                variant="outline" 
                onClick={() => window.location.href = 'mailto:support@nipay.rw'}
                className="flex items-center gap-2"
              >
                📩 Email: support@nipay.rw
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
    
    <Footer />
  </>;
};

export default Waitlist;
