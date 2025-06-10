
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, CreditCard, TrendingUp, Clock, Shield, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const SmeBenefitsSection = () => {
  const benefits = [
    {
      icon: <CheckCircle className="h-6 w-6" />,
      title: "No Collateral Required",
      description: "Get credit based on your mobile money transaction history, not your assets."
    },
    {
      icon: <CreditCard className="h-6 w-6" />,
      title: "Instant Approval",
      description: "Get approved in minutes, not weeks. Your sales history speaks for itself."
    },
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: "Grow Your Business",
      description: "Access working capital to stock inventory, expand operations, or seize opportunities."
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "24/7 Access",
      description: "Apply anytime from your phone. Credit when you need it, where you need it."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Secure & Trusted",
      description: "Bank-level security with transparent terms. No hidden fees or surprises."
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Local Support",
      description: "Dedicated support team in Kinyarwanda and English. We're here to help you succeed."
    }
  ];

  return (
    <section id="benefits" className="py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 md:mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <img 
                src="/lovable-uploads/51946dc5-f2c8-440c-9c1b-7671876e207e.png" 
                alt="NiPay Logo" 
                className="h-10 w-10 object-contain"
              />
              <Badge variant="outline" className="bg-nipay-green/10 text-nipay-dark-green border-nipay-green/20">
                <TrendingUp className="mr-1 h-3 w-3" />
                SME Benefits
              </Badge>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Why SMEs Choose <span className="text-gradient">NiPay</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join hundreds of Rwandan businesses already using mobile money credit to grow faster
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12">
            {benefits.map((benefit, index) => (
              <Card key={index} className="card-hover border-green-100 bg-card/50 backdrop-blur-sm">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="h-10 w-10 rounded-lg bg-nipay-green/10 flex items-center justify-center text-nipay-green">
                      {benefit.icon}
                    </div>
                    <CardTitle className="text-lg">{benefit.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-sm leading-relaxed">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-nipay-green/10 to-nipay-dark-green/10 rounded-2xl p-6 md:p-8 border border-nipay-green/20">
              <h3 className="text-xl md:text-2xl font-bold mb-3 text-foreground">
                Ready to grow your business with mobile money credit?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Join the waitlist today and be among the first SMEs to access NiPay when we launch.
              </p>
              <Link to="/waitlist">
                <Button 
                  size="lg" 
                  className="btn-gradient px-8 py-3 text-lg font-semibold rounded-xl"
                >
                  Join Waitlist Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmeBenefitsSection;
