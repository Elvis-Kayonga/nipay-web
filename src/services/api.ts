
import statsData from '../data/stats.json';
import faqData from '../data/faq.json';
import testimonialsData from '../data/testimonials.json';
import partnersData from '../data/partners.json';

export interface WaitlistFormData {
  name: string;
  businessName: string;
  email: string;
  monthlyVolume: string;
}

export interface InvestorFormData {
  fundName: string;
  aum: string;
  email: string;
  meetingSlots: string[];
}

// Simulated API calls with promises to mimic real API behavior
export const api = {
  getStats: async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(statsData);
      }, 300);
    });
  },
  
  getFAQs: async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(faqData);
      }, 300);
    });
  },
  
  getTestimonials: async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(testimonialsData);
      }, 300);
    });
  },
  
  getPartners: async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(partnersData);
      }, 300);
    });
  },
  
  submitToWaitlist: async (data: WaitlistFormData) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Simulate server validation
        if (!data.email || !data.name) {
          reject(new Error('Please provide all required fields'));
          return;
        }
        
        console.log('Waitlist submission:', data);
        resolve({
          success: true,
          message: 'Thank you for joining our waitlist!'
        });
      }, 800);
    });
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
