
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin } from "lucide-react";

const ContactInfo = () => {
  return (
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
              <p className="text-muted-foreground text-sm">Norrsken Rwanda</p>
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
                <a href="mailto:contact@nipay.rw" className="hover:text-nipay-green transition-colors">
                  contact@nipay.rw
                </a>
              </p>
              <p className="text-muted-foreground text-sm">
                <a href="mailto:sales@nipay.rw" className="hover:text-nipay-green transition-colors">
                  sales@nipay.rw
                </a>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ContactInfo;
