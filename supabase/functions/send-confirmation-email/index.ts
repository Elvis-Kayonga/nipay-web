
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface EmailRequest {
  to: string;
  type: "investor" | "waitlist";
  name: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { to, type, name }: EmailRequest = await req.json();

    // Admin notification email
    await resend.emails.send({
      from: "NiPay <onboarding@resend.dev>", // Update this when domain is verified
      to: ["kayongaelvis@nipay.rw", "elvis.kayonga@jasirifellow.org"],
      subject: `New ${type === "investor" ? "Investor Contact" : "Waitlist Signup"} - NiPay`,
      html: `
        <h1>New ${type === "investor" ? "Investor Contact" : "Waitlist Signup"}</h1>
        <p>Name: ${name}</p>
        <p>Email: ${to}</p>
        <p>Time: ${new Date().toLocaleString()}</p>
      `,
    });

    // User confirmation email
    const emailResponse = await resend.emails.send({
      from: "NiPay <onboarding@resend.dev>", // Update this when domain is verified
      to: [to],
      subject: type === "investor" 
        ? "Thank you for your interest in NiPay" 
        : "Thank you for joining NiPay's waitlist",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
          <div style="text-align: center; margin-bottom: 20px;">
            <h1 style="color: #1e6d43;">NiPay</h1>
          </div>
          <div style="background-color: #f5f5f5; padding: 20px; border-radius: 5px;">
            <h2>Hello ${name},</h2>
            ${type === "investor" 
              ? `<p>Thank you for your interest in partnering with NiPay. We've received your information and our team will review it promptly.</p>
                <p>We're excited about the opportunity to discuss how we can work together to transform SME finance in Rwanda.</p>
                <p>We'll be in touch soon to schedule a conversation.</p>`
              : `<p>Thank you for joining the NiPay waitlist! We're excited to have you on board.</p>
                <p>We're currently developing our service to provide instant loans based on mobile money inflows for SMEs in Rwanda.</p>
                <p>We'll keep you updated on our progress and let you know when we're ready to launch.</p>`
            }
            <p>Best regards,<br>The NiPay Team</p>
          </div>
          <div style="text-align: center; margin-top: 20px; font-size: 12px; color: #777;">
            <p>NiPay Ltd. | Kigali, Rwanda | <a href="mailto:kayongaelvis@nipay.rw">kayongaelvis@nipay.rw</a></p>
          </div>
        </div>
      `,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error sending confirmation email:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
