
-- Add a logo_url column to the waitlist_submissions table to track logo visibility
ALTER TABLE waitlist_submissions 
ADD COLUMN logo_url TEXT;

-- Create a table for site configuration including logo and SEO settings
CREATE TABLE public.site_config (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  logo_url TEXT,
  site_title TEXT,
  site_description TEXT,
  meta_keywords TEXT,
  contact_email TEXT DEFAULT 'contact@nipay.rw',
  sales_email TEXT DEFAULT 'sales@nipay.rw',
  founder_email TEXT DEFAULT 'kayongaelvis@nipay.rw',
  phone_number TEXT DEFAULT '+250788321008',
  location TEXT DEFAULT 'Norrsken Rwanda',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Insert default configuration
INSERT INTO public.site_config (
  site_title,
  site_description,
  meta_keywords,
  contact_email,
  sales_email,
  founder_email,
  phone_number,
  location
) VALUES (
  'NiPay | #1 Mobile Money Loans Rwanda - No Collateral Needed',
  'NiPay is Rwanda''s leading mobile money loan platform. Get instant business loans from your MTN/Airtel money sales. No paperwork, no collateral. Join 400+ SMEs already growing with NiPay.',
  'NiPay Rwanda, mobile money loans Rwanda, MTN money loans, Airtel money credit, SME loans Rwanda, business loans no collateral, instant loans Rwanda, mobile money lending, Rwanda fintech, small business credit',
  'contact@nipay.rw',
  'sales@nipay.rw',
  'kayongaelvis@nipay.rw',
  '+250788321008',
  'Norrsken Rwanda'
);

-- Enable RLS on site_config (public read access)
ALTER TABLE public.site_config ENABLE ROW LEVEL SECURITY;

-- Create policy for public read access to site config
CREATE POLICY "Site config is publicly readable" 
  ON public.site_config 
  FOR SELECT 
  USING (true);
