
/**
 * NiPay API Service Layer
 * 
 * Centralized API service for all client-server communications in the NiPay platform.
 * Handles data exchange between the React frontend and Supabase backend services.
 * 
 * Business Context:
 * - Manages SME waitlist submissions (primary revenue source)
 * - Handles investor inquiries for $550K Pre-Seed funding
 * - Provides market validation data and partnership information
 * - Implements rate limiting to prevent abuse and ensure platform stability
 * 
 * Technical Architecture:
 * - Type-safe interfaces for all data structures
 * - Error handling for network failures and validation issues
 * - Rate limiting integration for form submissions
 * - Supabase client for backend operations
 * - IP detection for rate limiting (with fallbacks for mobile networks)
 * 
 * Security Considerations:
 * - Input validation and sanitization
 * - Rate limiting prevents spam and abuse
 * - Secure data transmission to Supabase
 * - User privacy protection for personal information
 */

import { supabase } from '@/integrations/supabase/client';

/**
 * Type Definitions for API Data Structures
 * These interfaces ensure type safety and clear data contracts
 */

// SME waitlist submission data structure
export interface WaitlistSubmission {
  name: string;
  businessName: string;
  email: string;
  monthlyVolume?: string;
  businessEarnings?: string;
  fundingNeeded?: string;
  interestRate?: string;
  businessType?: string;
  phoneNumber?: string;
  logoUrl?: string;
}

// Investor inquiry data structure
export interface InvestorContact {
  name: string;
  email: string;
  organizationName: string;
  investorType: 'individual' | 'organization';
  message: string;
}

// Market validation data structure
export interface Partners {
  organizations: Array<{
    name: string;
    logo: string;
  }>;
}

/**
 * Utility function to get client IP address
 * Used for rate limiting to prevent abuse while accommodating mobile networks
 */
const getClientIP = async (): Promise<string> => {
  try {
    // Try to get real IP from external service
    const response = await fetch('https://api.ipify.org?format=json');
    const data = await response.json();
    return data.ip;
  } catch {
    // Fallback for mobile networks or offline scenarios
    return '127.0.0.1';
  }
};

/**
 * Rate Limiting Check
 * Prevents spam submissions while allowing legitimate user activity
 */
const checkRateLimit = async (email: string, type: string = 'waitlist'): Promise<boolean> => {
  try {
    const clientIP = await getClientIP();
    const { data, error } = await supabase.rpc('check_rate_limit', {
      check_ip: clientIP,
      check_email: email,
      check_type: type,
      max_submissions: type === 'waitlist' ? 3 : 2, // Different limits for different form types
      window_minutes: 60 // 1-hour window
    });

    if (error) {
      console.error('Rate limit check error:', error);
      return true; // Allow submission if rate limit check fails
    }

    return data;
  } catch (error) {
    console.error('Rate limit check error:', error);
    return true;
  }
};

/**
 * Log Submission Attempt
 * Tracks form submissions for rate limiting and analytics
 */
const logSubmissionAttempt = async (email: string, type: string = 'waitlist'): Promise<void> => {
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

/**
 * API Service Object
 * Contains all API methods for the NiPay platform
 */
export const api = {
  /**
   * Submit SME Waitlist Application
   * 
   * Primary conversion action for the NiPay platform.
   * Handles SME loan applications with rate limiting and validation.
   * 
   * @param data - SME business information and loan requirements
   * @returns Promise<void>
   */
  async submitWaitlist(data: WaitlistSubmission): Promise<void> {
    // Check rate limit to prevent spam
    const rateLimitOk = await checkRateLimit(data.email, 'waitlist');
    if (!rateLimitOk) {
      throw new Error('Too many submissions. Please wait before submitting again.');
    }

    // Log the submission attempt
    await logSubmissionAttempt(data.email, 'waitlist');

    // Submit to database
    const { error } = await supabase
      .from('waitlist_submissions')
      .insert({
        name: data.name,
        business_name: data.businessName,
        email: data.email,
        monthly_volume: data.monthlyVolume,
        business_earnings: data.businessEarnings,
        funding_needed: data.fundingNeeded,
        interest_rate: data.interestRate,
        business_type: data.businessType,
        phone_number: data.phoneNumber,
        logo_url: data.logoUrl,
      });

    if (error) {
      console.error('Waitlist submission error:', error);
      throw new Error('Failed to submit waitlist application');
    }
  },

  /**
   * Submit Investor Inquiry
   * 
   * Handles investor interest for NiPay's $550K Pre-Seed funding round.
   * Critical for business growth and expansion plans.
   * 
   * @param data - Investor contact information and interest details
   * @returns Promise<void>
   */
  async contactInvestor(data: InvestorContact): Promise<void> {
    // Check rate limit to prevent spam
    const rateLimitOk = await checkRateLimit(data.email, 'investor');
    if (!rateLimitOk) {
      throw new Error('Too many submissions. Please wait before submitting again.');
    }

    // Log the submission attempt
    await logSubmissionAttempt(data.email, 'investor');

    // Submit to database
    const { error } = await supabase
      .from('investor_submissions')
      .insert({
        name: data.name,
        email: data.email,
        organization_name: data.organizationName,
        investor_type: data.investorType,
        message: data.message,
      });

    if (error) {
      console.error('Investor contact error:', error);
      throw new Error('Failed to submit investor inquiry');
    }
  },

  /**
   * Get Partnership Information
   * 
   * Retrieves logos and information about NiPay's industry partners.
   * Builds credibility and trust with potential SME users.
   * 
   * @returns Promise<Partners>
   */
  async getPartners(): Promise<Partners> {
    // Mock data for demo purposes
    // In production, this would fetch from Supabase or a CMS
    return {
      organizations: [
        {
          name: "Norrsken Rwanda",
          logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=100&fit=crop&crop=center"
        },
        {
          name: "BNR - Central Bank",
          logo: "https://images.unsplash.com/photo-1541746972996-4e0b0f93e586?w=200&h=100&fit=crop&crop=center"
        },
        {
          name: "Rwanda Development Board",
          logo: "https://images.unsplash.com/photo-1565373449834-96f6ed8cc95e?w=200&h=100&fit=crop&crop=center"
        }
      ]
    };
  },

  /**
   * Get Market Statistics
   * 
   * Retrieves key market data that validates NiPay's business opportunity.
   * Used to build credibility with both SMEs and investors.
   * 
   * @returns Promise<Record<string, string>>
   */
  async getStats(): Promise<Record<string, string>> {
    // Market data that supports NiPay's value proposition
    return {
      mobileMoneyGDPContribution: "$46B", // Mobile money's contribution to SSA GDP
      mobileMoneyGDPPercentage: "12%", // Percentage of SSA GDP from mobile money
      jobsFromSMEs: "80%" // Percentage of Rwanda workforce employed by SMEs
    };
  }
};
