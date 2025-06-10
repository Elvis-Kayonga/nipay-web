
import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import WaitlistForm from "@/components/forms/WaitlistForm";
import { CheckCircle, Clock, CreditCard, TrendingUp, DollarSign, Handshake, AlarmClock, Bell, Share, Users, Rocket } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Waitlist = () => {
  const isMobile = useIsMobile();
  
  const handleShareClick = () => {
    // Create the absolute URL to ensure valid links when sharing
    const shareUrl = new URL("/waitlist", window.location.origin).toString();
    
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
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(shareUrl).then(() => {
        toast.success("Link copied! Share with friends.");
      }).catch(error => {
        console.error("Error copying link:", error);
      });
    }
  };

  return <>
      <Helmet>
        <title>Join the Waitlist | NiPay</title>
        <meta name="description" content="Limited offer: Be among the first businesses in Rwanda to access instant loans with NiPay." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </Helmet>

      <Header />
      
      <main className="min-h-screen pt-20 pb-12 md:pb-16 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-lg md:max-w-4xl mx-auto">
            <div className="text-center mb-6 md:mb-8">
              <Badge variant="destructive" className="px-3 py-1 mb-2 md:mb-3">
                <AlarmClock className="mr-1 h-3 w-3 inline" /> 
                Limited spots
              </Badge>
              <h1 className="text-2xl md:text-4xl font-bold mb-2 md:mb-3">Join NiPay Today</h1>
              <p className="text-sm md:text-lg text-muted-foreground max-w-xs md:max-w-2xl mx-auto">Get quick access to loans based on your phone history - no collateral needed.</p>
            </div>
            
            {/* Urgency Banner */}
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-2 md:p-3 flex items-center justify-center mb-6 md:mb-10 shadow-sm">
              <Rocket className="text-amber-500 mr-1 md:mr-2 h-4 w-4 md:h-5 md:w-5" />
              <p className="text-amber-800 text-xs md:text-sm font-medium">Launch coming soon! Apply now for early access!</p>
            </div>
            
            {/* Priority for mobile: show form first, benefits second */}
            {isMobile ? <>
                {/* Form - first on mobile */}
                <div className="md:col-span-3">
                  <Card className="border-green-100 shadow-sm">
                    <CardHeader className="pb-3 md:pb-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <CardTitle className="text-lg md:text-xl">Apply Now</CardTitle>
                          <CardDescription className="text-xs md:text-sm">
                            Limited spots
                          </CardDescription>
                        </div>
                        <Badge variant="outline" className="bg-nipay-green/10 text-nipay-dark-green">
                          <Clock className="mr-1 h-3 w-3" /> Urgent
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <WaitlistForm onSuccess={() => {
                    // Success is handled within the form component
                  }} />
                    </CardContent>
                  </Card>
                </div>
                
                {/* Benefits - second on mobile */}
                <div className="mt-6 md:col-span-2">
                  <Card className="border-green-100 h-full shadow-sm">
                    <CardHeader className="bg-nipay-green/5 border-b border-nipay-green/10 pb-3 md:pb-4">
                      <CardTitle className="text-lg md:text-xl text-nipay-dark-green flex items-center">
                        <Clock className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                        Early Access Benefits
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-4 md:pt-6">
                      <ul className="space-y-2 md:space-y-3">
                        <li className="flex items-start gap-2 md:gap-3">
                          <CheckCircle className="h-4 w-4 md:h-5 md:w-5 text-nipay-green mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="font-bold block text-foreground text-sm md:text-base">Priority Access</span>
                          </div>
                        </li>
                        <li className="flex items-start gap-2 md:gap-3">
                          <TrendingUp className="h-4 w-4 md:h-5 md:w-5 text-nipay-green mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="font-bold block text-foreground text-sm md:text-base">Higher Limits</span>
                          </div>
                        </li>
                        <li className="flex items-start gap-2 md:gap-3">
                          <DollarSign className="h-4 w-4 md:h-5 md:w-5 text-nipay-green mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="font-bold block text-foreground text-sm md:text-base">Lower Fees</span>
                          </div>
                        </li>
                        <li className="flex items-start gap-2 md:gap-3">
                          <Handshake className="h-4 w-4 md:h-5 md:w-5 text-nipay-green mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="font-bold block text-foreground text-sm md:text-base">VIP Support</span>
                          </div>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </> : <>
                {/* Desktop layout - benefits first, form second */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-8">
                  <div className="md:col-span-2">
                    <Card className="border-green-100 h-full shadow-sm">
                      <CardHeader className="bg-nipay-green/5 border-b border-nipay-green/10">
                        <CardTitle className="text-xl text-nipay-dark-green flex items-center">
                          <Clock className="mr-2 h-5 w-5" />
                          Early Benefits
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-6">
                        <ul className="space-y-3">
                          <li className="flex items-start gap-3">
                            <CheckCircle className="h-5 w-5 text-nipay-green mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="font-bold block">Priority Access</span>
                            </div>
                          </li>
                          <li className="flex items-start gap-3">
                            <TrendingUp className="h-5 w-5 text-nipay-green mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="font-bold block">Higher Limits</span>
                            </div>
                          </li>
                          <li className="flex items-start gap-3">
                            <DollarSign className="h-5 w-5 text-nipay-green mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="font-bold block">Lower Fees</span>
                            </div>
                          </li>
                          <li className="flex items-start gap-3">
                            <CreditCard className="h-5 w-5 text-nipay-green mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="font-bold block">No Hidden Charges</span>
                            </div>
                          </li>
                          <li className="flex items-start gap-3">
                            <Handshake className="h-5 w-5 text-nipay-green mt-0.5 flex-shrink-0" />
                            <div>
                              <span className="font-bold block">VIP Support</span>
                            </div>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                
                  <div className="md:col-span-3">
                    <Card className="border-green-100 shadow-sm">
                      <CardHeader className="pb-4">
                        <div className="flex justify-between items-center">
                          <div>
                            <CardTitle>Apply Now</CardTitle>
                            <CardDescription>
                              Limited spots available
                            </CardDescription>
                          </div>
                          <Badge variant="outline" className="bg-nipay-green/10 text-nipay-dark-green">
                            <Clock className="mr-1 h-3 w-3" /> Urgent
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <WaitlistForm onSuccess={() => {
                          // Success is handled within the form component
                        }} />
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </>}
            
            {/* Quick Application Process */}
            <div className="mt-8 md:mt-12">
              <h2 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-center">Easy Application</h2>
              <div className="grid grid-cols-3 gap-2 md:gap-5">
                <div className="p-3 md:p-5 rounded-lg bg-card border border-green-100 hover:border-nipay-green/30 hover:shadow-md transition-all">
                  <div className="h-8 w-8 md:h-10 md:w-10 rounded-full bg-nipay-green/10 flex items-center justify-center text-nipay-green mx-auto mb-2 md:mb-3">1</div>
                  <h3 className="font-bold mb-1 text-center text-sm md:text-base">Quick Review</h3>
                  <p className="text-xxs md:text-xs text-muted-foreground text-center">24h approval</p>
                </div>
                
                <div className="p-3 md:p-5 rounded-lg bg-card border border-green-100 hover:border-nipay-green/30 hover:shadow-md transition-all">
                  <div className="h-8 w-8 md:h-10 md:w-10 rounded-full bg-nipay-green/10 flex items-center justify-center text-nipay-green mx-auto mb-2 md:mb-3">2</div>
                  <h3 className="font-bold mb-1 text-center text-sm md:text-base">Activation</h3>
                  <p className="text-xxs md:text-xs text-muted-foreground text-center">At launch</p>
                </div>
                
                <div className="p-3 md:p-5 rounded-lg bg-card border border-green-100 hover:border-nipay-green/30 hover:shadow-md transition-all">
                  <div className="h-8 w-8 md:h-10 md:w-10 rounded-full bg-nipay-green/10 flex items-center justify-center text-nipay-green mx-auto mb-2 md:mb-3">3</div>
                  <h3 className="font-bold mb-1 text-center text-sm md:text-base">Get Funds</h3>
                  <p className="text-xxs md:text-xs text-muted-foreground text-center">Instant access</p>
                </div>
              </div>
            </div>
            
            {/* Refer Friends Section */}
            <div className="mt-8 md:mt-12">
              <Card className="border-amber-100 bg-amber-50/50">
                <CardContent className="pt-6 pb-6">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <Users className="h-10 w-10 text-nipay-green p-2 bg-white rounded-full shadow-sm" />
                      <div>
                        <h3 className="font-bold text-base md:text-lg">Know Other Businesses?</h3>
                        <p className="text-xs md:text-sm text-muted-foreground">
                          Help friends get access.
                        </p>
                      </div>
                    </div>
                    <Button variant="green" className="w-full md:w-auto" onClick={handleShareClick}>
                      <Share className="h-4 w-4 mr-2" />
                      Refer Friends
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>;
};

export default Waitlist;
