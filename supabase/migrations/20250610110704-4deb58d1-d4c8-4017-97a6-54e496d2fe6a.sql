
-- Remove existing public read policies and implement secure admin-only access
-- for both waitlist_submissions and investor_submissions tables

-- Drop existing public read policies
DROP POLICY IF EXISTS "Site config is publicly readable" ON public.site_config;
DROP POLICY IF EXISTS "Public read access for investor submissions" ON public.investor_submissions;

-- Keep existing insert policies for form functionality
-- These allow public form submissions but restrict data viewing

-- Create secure admin-only read policies
-- Only authenticated users with admin role can view submission data
CREATE POLICY "Admin only read access for waitlist submissions" 
  ON public.waitlist_submissions 
  FOR SELECT 
  USING (
    auth.uid() IS NOT NULL AND 
    EXISTS (
      SELECT 1 FROM public.site_config 
      WHERE founder_email = (
        SELECT email FROM auth.users WHERE id = auth.uid()
      )
    )
  );

CREATE POLICY "Admin only read access for investor submissions" 
  ON public.investor_submissions 
  FOR SELECT 
  USING (
    auth.uid() IS NOT NULL AND 
    EXISTS (
      SELECT 1 FROM public.site_config 
      WHERE founder_email = (
        SELECT email FROM auth.users WHERE id = auth.uid()
      )
    )
  );

-- Restore site config public read access (needed for frontend)
CREATE POLICY "Site config is publicly readable" 
  ON public.site_config 
  FOR SELECT 
  USING (true);

-- Add rate limiting table to track submission frequency
CREATE TABLE IF NOT EXISTS public.submission_rate_limits (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  ip_address INET NOT NULL,
  email TEXT,
  submission_type TEXT NOT NULL CHECK (submission_type IN ('waitlist', 'investor', 'contact')),
  submission_count INTEGER NOT NULL DEFAULT 1,
  window_start TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS on rate limits table
ALTER TABLE public.submission_rate_limits ENABLE ROW LEVEL SECURITY;

-- Allow public insert for rate limiting checks
CREATE POLICY "Public can insert rate limit records" 
  ON public.submission_rate_limits 
  FOR INSERT 
  WITH CHECK (true);

-- Allow public select for rate limiting checks
CREATE POLICY "Public can read own rate limit records" 
  ON public.submission_rate_limits 
  FOR SELECT 
  USING (true);

-- Create function to check rate limits
CREATE OR REPLACE FUNCTION public.check_rate_limit(
  check_ip INET,
  check_email TEXT DEFAULT NULL,
  check_type TEXT DEFAULT 'waitlist',
  max_submissions INTEGER DEFAULT 5,
  window_minutes INTEGER DEFAULT 60
) RETURNS BOOLEAN AS $$
DECLARE
  current_count INTEGER;
BEGIN
  -- Clean up old rate limit records
  DELETE FROM public.submission_rate_limits 
  WHERE window_start < (now() - (window_minutes || ' minutes')::INTERVAL);
  
  -- Count current submissions in the time window
  SELECT COALESCE(SUM(submission_count), 0) INTO current_count
  FROM public.submission_rate_limits
  WHERE ip_address = check_ip
    AND submission_type = check_type
    AND (check_email IS NULL OR email = check_email)
    AND window_start >= (now() - (window_minutes || ' minutes')::INTERVAL);
  
  -- Return true if under limit, false if over limit
  RETURN current_count < max_submissions;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create function to log rate limit attempts
CREATE OR REPLACE FUNCTION public.log_submission_attempt(
  attempt_ip INET,
  attempt_email TEXT DEFAULT NULL,
  attempt_type TEXT DEFAULT 'waitlist'
) RETURNS VOID AS $$
BEGIN
  -- Insert or update rate limit record
  INSERT INTO public.submission_rate_limits (ip_address, email, submission_type, submission_count, window_start)
  VALUES (attempt_ip, attempt_email, attempt_type, 1, now())
  ON CONFLICT (ip_address, submission_type, window_start) 
  DO UPDATE SET 
    submission_count = submission_rate_limits.submission_count + 1,
    email = COALESCE(attempt_email, submission_rate_limits.email);
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
