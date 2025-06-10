
import { supabase } from '@/integrations/supabase/client';
import statsData from '../data/stats.json';
import faqData from '../data/faq.json';
import testimonialsData from '../data/testimonials.json';
import partnersData from '../data/partners.json';

export interface Testimonial {
  id: number;
  name: string;
  title: string;
  quote: string;
  image: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Partner {
  name: string;
  logo: string;
}

export interface Partners {
  organizations: Partner[];
}

export interface WaitlistFormData {
  name: string;
  businessName: string;
  email: string;
  phoneNumber: string;
  monthlyVolume: string;
  businessEarnings?: string;
  fundingNeeded?: string;
  interestRate?: string;
  businessType?: string;
  logoUrl?: string;
}

export interface InvestorFormData {
  name: string;
  email: string;
  organizationName?: string;
  investorType: 'individual' | 'organization';
  message: string;
}

export interface ApiResponse {
  success: boolean;
  message: string;
}

// Input validation utilities
const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const validatePhoneNumber = (phone: string): boolean => {
  // Accept Rwanda phone numbers and international formats
  const phoneRegex = /^(\+?25[07]|0[07])\d{8}$|^(\+?\d{10,15})$/;
  return phoneRegex.test(phone.replace(/\s/g, ''));
};

const sanitizeInput = (input: string): string => {
  return input.trim().replace(/[<>]/g, '');
};

const validateName = (name: string): boolean => {
  return name.length >= 2 && name.length <= 100 && /^[a-zA-Z\s'-]+$/.test(name);
};

// Get client IP address (best effort)
const getClientIP = async (): Promise<string> => {
  try {
    // This is a fallback - in production you'd want proper IP detection
    return '127.0.0.1';
  } catch {
    return '127.0.0.1';
  }
};

// Check rate limit before submission
const checkRateLimit = async (email: string, type: string): Promise<boolean> => {
  try {
    const clientIP = await getClientIP();
    const { data, error } = await supabase.rpc('check_rate_limit', {
      check_ip: clientIP,
      check_email: email,
      check_type: type,
      max_submissions: 3, // Allow 3 submissions per hour
      window_minutes: 60
    });

    if (error) {
      console.error('Rate limit check error:', error);
      return true; // Allow submission if rate limit check fails
    }

    return data;
  } catch (error) {
    console.error('Rate limit check error:', error);
    return true; // Allow submission if rate limit check fails
  }
};

// Log submission attempt for rate limiting
const logSubmissionAttempt = async (email: string, type: string): Promise<void> => {
  try {
    const clientIP = await getClientIP();
    await supabase.rpc('log_submission_attempt', {
      attempt_ip: clientIP,
      attempt_email: email,
      attempt_type: type
    });
  } catch (error) {
    console.error('Failed to log submission attempt:', error);
  }
};

// Simulated API calls with promises to mimic real API behavior
export const api = {
  getStats: async (): Promise<Record<string, string>> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(statsData);
      }, 300);
    });
  },
  
  getFAQs: async (): Promise<FAQItem[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(faqData);
      }, 300);
    });
  },
  
  getTestimonials: async (): Promise<Testimonial[]> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(testimonialsData);
      }, 300);
    });
  },
  
  getPartners: async (): Promise<Partners> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(partnersData);
      }, 300);
    });
  },
  
  submitToWaitlist: async (data: WaitlistFormData): Promise<ApiResponse> => {
    // Enhanced input validation
    if (!data.email || !data.name || !data.businessName || !data.phoneNumber) {
      throw new Error('Please provide all required fields');
    }

    if (!validateEmail(data.email)) {
      throw new Error('Please enter a valid email address');
    }

    if (!validateName(data.name)) {
      throw new Error('Please enter a valid name (2-100 characters, letters only)');
    }

    if (!validatePhoneNumber(data.phoneNumber)) {
      throw new Error('Please enter a valid phone number');
    }

    // Check rate limit
    const rateLimitOk = await checkRateLimit(data.email, 'waitlist');
    if (!rateLimitOk) {
      throw new Error('Too many submissions. Please wait before submitting again.');
    }

    try {
      console.log('Submitting to waitlist:', data);
      
      // Log submission attempt
      await logSubmissionAttempt(data.email, 'waitlist');
      
      // Sanitize inputs
      const sanitizedData = {
        name: sanitizeInput(data.name),
        business_name: sanitizeInput(data.businessName),
        email: sanitizeInput(data.email),
        phone_number: sanitizeInput(data.phoneNumber),
        monthly_volume: sanitizeInput(data.monthlyVolume),
        business_earnings: data.businessEarnings ? sanitizeInput(data.businessEarnings) : null,
        funding_needed: data.fundingNeeded ? sanitizeInput(data.fundingNeeded) : null,
        interest_rate: data.interestRate ? sanitizeInput(data.interestRate) : null,
        business_type: data.businessType ? sanitizeInput(data.businessType) : null,
        logo_url: data.logoUrl ? sanitizeInput(data.logoUrl) : null
      };

      // Insert into Supabase waitlist_submissions table
      const { error } = await supabase
        .from('waitlist_submissions')
        .insert(sanitizedData);

      if (error) {
        console.error('Supabase error:', error);
        throw error;
      }
      
      // Send admin notification email
      try {
        await fetch('https://alkjgogriwshdpkuwqhp.functions.supabase.co/send-notification-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            type: 'waitlist',
            data: sanitizedData,
          }),
        });
      } catch (emailError) {
        console.error("Failed to send notification email:", emailError);
        // Don't block the form submission if email fails
      }
      
      return {
        success: true,
        message: 'Thank you for joining our waitlist!'
      };
    } catch (error) {
      console.error('Waitlist submission error:', error);
      throw error;
    }
  },
  
  contactInvestor: async (data: InvestorFormData): Promise<ApiResponse> => {
    // Enhanced input validation
    if (!data.email || !data.name || !data.message) {
      throw new Error('Please provide all required fields');
    }

    if (!validateEmail(data.email)) {
      throw new Error('Please enter a valid email address');
    }

    if (!validateName(data.name)) {
      throw new Error('Please enter a valid name (2-100 characters, letters only)');
    }

    if (data.message.length < 10 || data.message.length > 1000) {
      throw new Error('Message must be between 10 and 1000 characters');
    }

    // Check rate limit
    const rateLimitOk = await checkRateLimit(data.email, 'investor');
    if (!rateLimitOk) {
      throw new Error('Too many submissions. Please wait before submitting again.');
    }
    
    try {
      console.log('Submitting investor contact:', data);
      
      // Log submission attempt
      await logSubmissionAttempt(data.email, 'investor');
      
      // Sanitize inputs
      const sanitizedData = {
        name: sanitizeInput(data.name),
        email: sanitizeInput(data.email),
        organization_name: data.organizationName ? sanitizeInput(data.organizationName) : null,
        investor_type: data.investorType,
        message: sanitizeInput(data.message)
      };

      // Insert into Supabase investor_submissions table
      const { error } = await supabase
        .from('investor_submissions')
        .insert(sanitizedData);

      if (error) {
        console.error('Supabase error:', error);
        throw error;
      }
      
      // Send admin notification email
      try {
        await fetch('https://alkjgogriwshdpkuwqhp.functions.supabase.co/send-notification-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            type: 'investor',
            data: sanitizedData,
          }),
        });
      } catch (emailError) {
        console.error("Failed to send notification email:", emailError);
        // Don't block the form submission if email fails
      }
      
      return {
        success: true,
        message: 'Thank you for your interest! Our team will contact you shortly.'
      };
    } catch (error) {
      console.error('Investor submission error:', error);
      throw error;
    }
  }
};
