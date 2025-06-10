
-- Create a table for investor submissions
CREATE TABLE public.investor_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  organization_name TEXT,
  investor_type TEXT NOT NULL CHECK (investor_type IN ('individual', 'organization')),
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security (we'll make it public readable for admin purposes)
ALTER TABLE public.investor_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy for public insert (so the form can submit)
CREATE POLICY "Anyone can insert investor submissions" 
  ON public.investor_submissions 
  FOR INSERT 
  WITH CHECK (true);

-- Create policy for admin read access (you can modify this later if you add admin authentication)
CREATE POLICY "Public read access for investor submissions" 
  ON public.investor_submissions 
  FOR SELECT 
  USING (true);

-- Add updated_at trigger for investor_submissions
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_investor_submissions_updated_at 
    BEFORE UPDATE ON public.investor_submissions 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- Also add the same trigger for waitlist_submissions if it doesn't exist
CREATE TRIGGER update_waitlist_submissions_updated_at 
    BEFORE UPDATE ON public.waitlist_submissions 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- Enable realtime for both tables so you can get notifications
ALTER PUBLICATION supabase_realtime ADD TABLE public.investor_submissions;
ALTER PUBLICATION supabase_realtime ADD TABLE public.waitlist_submissions;
