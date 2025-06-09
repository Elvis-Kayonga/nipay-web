
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
}

export interface InvestorFormData {
  name: string;
  email: string;
  organizationName?: string;
  investorType: 'individual' | 'organization';
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
  
  submitToWaitlist: async (data: WaitlistFormData) => {
    // Validate required fields
    if (!data.email || !data.name || !data.businessName || !data.phoneNumber) {
      throw new Error('Please provide all required fields');
    }
    
    try {
      // Log the submission for debugging purposes
      console.log('Submitting to waitlist:', data);
      
      // For now, we'll use a simulated response since the Supabase tables may not be set up
      // TODO: Replace with actual Supabase call when tables are created
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            success: true,
            message: 'Thank you for joining our waitlist!'
          });
        }, 800);
      });
    } catch (error) {
      console.error('Waitlist submission error:', error);
      throw error;
    }
  },
  
  contactInvestor: async (data: InvestorFormData) => {
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
          message: 'Thank you for your interest! Our team will contact you shortly.'
        });
      }, 800);
    });
  }
};
