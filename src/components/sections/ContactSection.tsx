
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-lg text-muted-foreground">
              Join the waitlist or get in touch with our team
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Join Waitlist Card */}
            <Card className="border-green-100 bg-gradient-to-br from-nipay-green/5 to-nipay-green/10">
              <CardHeader>
                <CardTitle className="text-xl text-nipay-dark-green">
                  Join the Waitlist
                </CardTitle>
                <CardDescription>
                  Be among the first SMEs to access mobile money credit
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-6">
                  Get priority access when we launch, plus early adopter benefits and personalized onboarding.
                </p>
                <Link to="/waitlist">
                  <Button className="w-full btn-gradient">
                    Join Waitlist
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Contact Info Card */}
            <Card className="border-green-100">
              <CardHeader>
                <CardTitle className="text-xl">Get in Touch</CardTitle>
                <CardDescription>
                  Have questions? Our team is here to help
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-nipay-green/10 flex items-center justify-center text-nipay-green">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <a 
                      href="mailto:contact@nipay.rw" 
                      className="text-sm text-muted-foreground hover:text-nipay-green transition-colors"
                    >
                      contact@nipay.rw
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-nipay-green/10 flex items-center justify-center text-nipay-green">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">WhatsApp</p>
                    <a 
                      href="https://wa.me/250788321008" 
                      className="text-sm text-muted-foreground hover:text-nipay-green transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      +250 788 321 008
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-nipay-green/10 flex items-center justify-center text-nipay-green">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-sm text-muted-foreground">
                      Norrsken Rwanda
                    </p>
                  </div>
                </div>

                <Link to="/contact">
                  <Button variant="outline" className="w-full mt-4">
                    Contact Form
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
