
import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import WaitlistForm from "@/components/forms/WaitlistForm";
import { CheckCircle, Clock, CreditCard, TrendingUp, DollarSign, HandshakeIcon, Handshake } from "lucide-react";

const Waitlist = () => {
  return (
    <>
      <Helmet>
        <title>Join the Waitlist | NiPay</title>
        <meta name="description" content="Be among the first businesses in Rwanda to access instant revolving credit with NiPay." />
      </Helmet>

      <Header />
      
      <main className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <span className="px-3 py-1 text-xs font-semibold bg-green-100 text-green-800 rounded-full inline-block mb-3">Limited Pilot Spots Available</span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Stop Missing Business Opportunities Due To Cash Flow</h1>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Get a revolving credit line that grows with your business — access cash when you need it, without the paperwork and delays of traditional loans.
              </p>
            </div>
            
            {/* Urgency Banner */}
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-center justify-center mb-12">
              <Clock className="text-amber-500 mr-2 h-5 w-5" />
              <p className="text-amber-800 text-sm font-medium">Our pilot program is limited to 200 businesses in Rwanda. Secure your spot before we're fully booked!</p>
            </div>
            
            <div className="grid md:grid-cols-5 gap-8">
              <div className="md:col-span-2">
                <Card className="border-green-100 h-full">
                  <CardHeader className="bg-nipay-green/5 border-b border-nipay-green/10">
                    <CardTitle className="text-xl text-nipay-dark-green">Our Promise To You</CardTitle>
                    <CardDescription>What you'll get as an early adopter</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-nipay-green mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="font-bold block text-foreground">Priority Access</span>
                          <span className="text-sm text-muted-foreground">Be among the first to use our mobile money credit service</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <TrendingUp className="h-5 w-5 text-nipay-green mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="font-bold block text-foreground">Higher Credit Limits</span>
                          <span className="text-sm text-muted-foreground">Pilot users get up to 2x their monthly mobile money volume</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <DollarSign className="h-5 w-5 text-nipay-green mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="font-bold block text-foreground">Reduced Fees</span>
                          <span className="text-sm text-muted-foreground">Early adopters enjoy our lowest rates</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <CreditCard className="h-5 w-5 text-nipay-green mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="font-bold block text-foreground">No Hidden Charges</span>
                          <span className="text-sm text-muted-foreground">Transparent pricing with no surprise fees</span>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <Handshake className="h-5 w-5 text-nipay-green mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="font-bold block text-foreground">Dedicated Support</span>
                          <span className="text-sm text-muted-foreground">Direct line to our team for any questions</span>
                        </div>
                      </li>
                    </ul>
                    
                    <div className="mt-8 p-4 bg-nipay-green/5 rounded-lg border border-nipay-green/10">
                      <p className="text-sm italic">
                        "<strong>Real stories:</strong> A small shop owner in Kigali used our revolving credit to double their inventory during high season, increasing their monthly profit by 45%."
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="md:col-span-3">
                <Card className="border-green-100">
                  <CardHeader>
                    <CardTitle>Register Your Business</CardTitle>
                    <CardDescription>
                      Complete this form to secure your spot in our pilot program
                    </CardDescription>
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
            
            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-8 text-center">What You Can Expect</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 rounded-lg bg-card border border-green-100 hover:border-nipay-green/30 hover:shadow-md transition-all">
                  <div className="h-12 w-12 rounded-full bg-nipay-green/10 flex items-center justify-center text-nipay-green mx-auto mb-4">1</div>
                  <h3 className="font-bold mb-2 text-center">Quick Review</h3>
                  <p className="text-muted-foreground text-center">We'll check your business details and mobile money volume within 24-48 hours.</p>
                </div>
                
                <div className="p-6 rounded-lg bg-card border border-green-100 hover:border-nipay-green/30 hover:shadow-md transition-all">
                  <div className="h-12 w-12 rounded-full bg-nipay-green/10 flex items-center justify-center text-nipay-green mx-auto mb-4">2</div>
                  <h3 className="font-bold mb-2 text-center">Activation SMS</h3>
                  <p className="text-muted-foreground text-center">Qualified businesses receive an activation code via SMS to start using your credit line.</p>
                </div>
                
                <div className="p-6 rounded-lg bg-card border border-green-100 hover:border-nipay-green/30 hover:shadow-md transition-all">
                  <div className="h-12 w-12 rounded-full bg-nipay-green/10 flex items-center justify-center text-nipay-green mx-auto mb-4">3</div>
                  <h3 className="font-bold mb-2 text-center">Start Growing</h3>
                  <p className="text-muted-foreground text-center">Access your funds immediately and use them for inventory, equipment, or any business needs.</p>
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
