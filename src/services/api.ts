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
  fundName: string;
  aum: string;
  email: string;
  meetingSlots: string[];
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
      
      // Insert the submission into Supabase
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
          business_type: data.businessType
        });
      
      // Check for errors from Supabase
      if (error) {
        console.error('Supabase error:', error);
        throw new Error('Failed to submit your information. Please try again.');
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
  
  contactInvestor: async (data: InvestorFormData) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server validation
        if (!data.email || !data.fundName) {
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
