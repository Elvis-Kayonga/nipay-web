
import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import WaitlistForm from "@/components/forms/WaitlistForm";
import { CheckCircle, Clock, CreditCard, TrendingUp, DollarSign, Handshake, AlarmClock, Bell } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Waitlist = () => {
  return (
    <>
      <Helmet>
        <title>Join the Waitlist | NiPay</title>
        <meta name="description" content="Limited time offer: Be among the first businesses in Rwanda to access instant revolving credit with NiPay." />
      </Helmet>

      <Header />
      
      <main className="min-h-screen pt-20 pb-16 bg-gradient-to-b from-background to-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <Badge variant="destructive" className="px-3 py-1 mb-3">
                <AlarmClock className="mr-1 h-3 w-3 inline" /> 
                Only 43 spots remaining
              </Badge>
              <h1 className="text-3xl md:text-4xl font-bold mb-3">Don't Miss This Opportunity</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Get quick access to funds based on your mobile money transactions.
              </p>
            </div>
            
            {/* Urgency Banner */}
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 flex items-center justify-center mb-10 shadow-sm">
              <Bell className="text-amber-500 mr-2 h-5 w-5" />
              <p className="text-amber-800 text-sm font-medium">Application deadline: May 30th - Apply now!</p>
            </div>
            
            <div className="grid md:grid-cols-5 gap-6">
              <div className="md:col-span-2">
                <Card className="border-green-100 h-full shadow-sm">
                  <CardHeader className="bg-nipay-green/5 border-b border-nipay-green/10">
                    <CardTitle className="text-xl text-nipay-dark-green flex items-center">
                      <Clock className="mr-2 h-5 w-5" />
                      Act Fast
                    </CardTitle>
                    <CardDescription>Early applicants get:</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-nipay-green mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="font-bold block text-foreground">Priority Access</span>
                          <span className="text-xs text-muted-foreground">Skip the queue</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <TrendingUp className="h-5 w-5 text-nipay-green mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="font-bold block text-foreground">Higher Limits</span>
                          <span className="text-xs text-muted-foreground">Up to 2x your volume</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <DollarSign className="h-5 w-5 text-nipay-green mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="font-bold block text-foreground">Lower Fees</span>
                          <span className="text-xs text-muted-foreground">Best rates available</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CreditCard className="h-5 w-5 text-nipay-green mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="font-bold block text-foreground">No Hidden Charges</span>
                          <span className="text-xs text-muted-foreground">Total transparency</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Handshake className="h-5 w-5 text-nipay-green mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="font-bold block text-foreground">VIP Support</span>
                          <span className="text-xs text-muted-foreground">Direct access to team</span>
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
                    <WaitlistForm 
                      onSuccess={() => {
                        // Success is handled within the form component
                      }}
                    />
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div className="mt-12">
              <h2 className="text-xl font-bold mb-6 text-center">Quick Application Process</h2>
              <div className="grid md:grid-cols-3 gap-5">
                <div className="p-5 rounded-lg bg-card border border-green-100 hover:border-nipay-green/30 hover:shadow-md transition-all">
                  <div className="h-10 w-10 rounded-full bg-nipay-green/10 flex items-center justify-center text-nipay-green mx-auto mb-3">1</div>
                  <h3 className="font-bold mb-1 text-center">Quick Review</h3>
                  <p className="text-xs text-muted-foreground text-center">Approval in 24 hours</p>
                </div>
                
                <div className="p-5 rounded-lg bg-card border border-green-100 hover:border-nipay-green/30 hover:shadow-md transition-all">
                  <div className="h-10 w-10 rounded-full bg-nipay-green/10 flex items-center justify-center text-nipay-green mx-auto mb-3">2</div>
                  <h3 className="font-bold mb-1 text-center">Activation</h3>
                  <p className="text-xs text-muted-foreground text-center">Instant SMS activation</p>
                </div>
                
                <div className="p-5 rounded-lg bg-card border border-green-100 hover:border-nipay-green/30 hover:shadow-md transition-all">
                  <div className="h-10 w-10 rounded-full bg-nipay-green/10 flex items-center justify-center text-nipay-green mx-auto mb-3">3</div>
                  <h3 className="font-bold mb-1 text-center">Get Funded</h3>
                  <p className="text-xs text-muted-foreground text-center">Access cash immediately</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default Waitlist;
