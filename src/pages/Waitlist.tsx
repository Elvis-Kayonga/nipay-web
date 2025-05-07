
import { Helmet } from "react-helmet-async";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import WaitlistForm from "@/components/forms/WaitlistForm";
import { CheckCircle } from "lucide-react";

const Waitlist = () => {
  return (
    <>
      <Helmet>
        <title>Join the Waitlist | NiPay</title>
        <meta name="description" content="Be among the first businesses in Rwanda to access instant overdraft capital with NiPay." />
      </Helmet>

      <Header />
      
      <main className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Join Our Waitlist</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Be among the first businesses in Rwanda to access instant overdraft funding based on your mobile money transactions.
              </p>
            </div>
            
            <div className="grid md:grid-cols-5 gap-8">
              <div className="md:col-span-2">
                <Card>
                  <CardHeader className="bg-nipay-green/5 border-b border-nipay-green/10">
                    <CardTitle className="text-xl text-nipay-dark-green">Our Promise to You</CardTitle>
                    <CardDescription>What you can expect when you join</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <ul className="space-y-4">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-nipay-green mt-0.5 flex-shrink-0" />
                        <span>Priority access to our <strong>pilot program</strong> in Rwanda</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-nipay-green mt-0.5 flex-shrink-0" />
                        <span>Up to 2x your monthly mobile money volume in <strong>instant overdraft</strong></span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-nipay-green mt-0.5 flex-shrink-0" />
                        <span><strong>No paperwork</strong> - we analyze your mobile money transactions automatically</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-nipay-green mt-0.5 flex-shrink-0" />
                        <span><strong>Same-day approval</strong> for qualifying businesses</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-nipay-green mt-0.5 flex-shrink-0" />
                        <span>Flexible repayment terms aligned with your <strong>business cash flow</strong></span>
                      </li>
                    </ul>
                    
                    <div className="mt-8 p-4 bg-muted rounded-lg">
                      <p className="text-sm italic">
                        "Our pilot program is starting soon with a limited number of businesses in Rwanda. Join the waitlist to secure your spot."
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="md:col-span-3">
                <Card>
                  <CardHeader>
                    <CardTitle>Register Your Interest</CardTitle>
                    <CardDescription>
                      Tell us about your business to get early access to NiPay's overdraft service
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
            
            <div className="mt-16 text-center">
              <h2 className="text-2xl font-bold mb-6">What Happens Next?</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="p-6 rounded-lg bg-card border">
                  <div className="h-12 w-12 rounded-full bg-nipay-green/10 flex items-center justify-center text-nipay-green mx-auto mb-4">1</div>
                  <h3 className="font-bold mb-2">Application Review</h3>
                  <p className="text-muted-foreground">We'll review your business information and transaction volume.</p>
                </div>
                
                <div className="p-6 rounded-lg bg-card border">
                  <div className="h-12 w-12 rounded-full bg-nipay-green/10 flex items-center justify-center text-nipay-green mx-auto mb-4">2</div>
                  <h3 className="font-bold mb-2">Pilot Invitation</h3>
                  <p className="text-muted-foreground">Selected businesses will receive an invitation to join our pilot program.</p>
                </div>
                
                <div className="p-6 rounded-lg bg-card border">
                  <div className="h-12 w-12 rounded-full bg-nipay-green/10 flex items-center justify-center text-nipay-green mx-auto mb-4">3</div>
                  <h3 className="font-bold mb-2">Get Funded</h3>
                  <p className="text-muted-foreground">Connect your mobile money account and access your overdraft limit.</p>
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
