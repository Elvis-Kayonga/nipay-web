
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
    // Validate required fields
    if (!data.email || !data.name || !data.businessName || !data.phoneNumber) {
      throw new Error('Please provide all required fields');
    }
    
    try {
      // Log the submission for debugging purposes
      console.log('Submitting to waitlist:', data);
      
      // Insert into Supabase waitlist_submissions table
      const { error } = await supabase
        .from('waitlist_submissions')
        .insert({
          name: data.name,
          business_name: data.businessName,
          email: data.email,
          phone_number: data.phoneNumber,
          monthly_volume: data.monthlyVolume,
          business_earnings: data.businessEarnings,
          funding_needed: data.fundingNeeded,
          interest_rate: data.interestRate,
          business_type: data.businessType,
          logo_url: data.logoUrl
        });

      if (error) {
        console.error('Supabase error:', error);
        // Fallback to simulated response for now
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve({
              success: true,
              message: 'Thank you for joining our waitlist!'
            });
          }, 800);
        });
      }
      
      return {
        success: true,
        message: 'Thank you for joining our waitlist!'
      };
    } catch (error) {
      console.error('Waitlist submission error:', error);
      // Fallback to simulated response
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            success: true,
            message: 'Thank you for joining our waitlist!'
          });
        }, 800);
      });
    }
  },
  
  contactInvestor: async (data: InvestorFormData): Promise<ApiResponse> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server validation
        if (!data.email || !data.name) {
          reject(new Error('Please provide all required fields'));
          return;
        }
        
        console.log('Investor contact:', data);
        resolve({
          success: true,
          message: 'Thank you for your interest! Our team will contact you at kayongaelvis@nipay.rw shortly.'
        });
      }, 800);
    });
  }
};
