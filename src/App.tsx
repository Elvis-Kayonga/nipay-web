
/**
 * NiPay Application Root Component
 * 
 * This is the main application entry point for NiPay, Rwanda's #1 mobile money loan platform.
 * The app provides instant business loans to SMEs based on their mobile money sales data.
 * 
 * Architecture Overview:
 * - React Router for client-side routing (/, /investors, /waitlist, /contact)
 * - React Query for server state management and data fetching
 * - Supabase for backend services (database, auth, edge functions)
 * - Lazy loading for performance optimization
 * - Google Analytics for user behavior tracking
 * - Error boundaries for graceful error handling
 * - Toast notifications for user feedback
 * - Offline detection for mobile-first users
 * 
 * Business Context:
 * - Target users: Small and Medium Enterprises (SMEs) in Rwanda
 * - Core value proposition: Instant loans from mobile money sales
 * - Secondary users: Investors interested in fintech opportunities
 * - Market: African mobile-first economy (85% of transactions via USSD)
 */

import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { useEffect, useState, lazy, Suspense } from "react";
import NotFound from "./pages/NotFound";
import NiPayLoading from "@/components/ui/loading";

// Lazy load pages to improve initial load time for mobile users in Rwanda
// This is crucial for users on slower internet connections
const Index = lazy(() => import("./pages/Index"));
const Investors = lazy(() => import("./pages/Investors"));
const Waitlist = lazy(() => import("./pages/Waitlist"));
const Contact = lazy(() => import("./pages/Contact"));

/**
 * Google Analytics tracking function
 * Tracks user journeys through the NiPay funnel for conversion optimization
 * Essential for understanding SME user behavior and improving loan application flow
 */
const trackPageView = (path: string) => {
  try {
    if (typeof window.gtag !== 'undefined') {
      window.gtag('config', 'G-4W8M75RHXN', {
        page_path: path,
      });
    }
  } catch (error) {
    console.warn('Failed to track page view:', error);
  }
};

/**
 * Network Status Monitor Component
 * Critical for mobile money users who may have intermittent connectivity
 * Provides user feedback when offline to prevent form submission errors
 */
const ConnectionStatus = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  
  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    
    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);
    
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);
  
  if (isOnline) return null;
  
  return (
    <div className="fixed top-0 left-0 right-0 bg-yellow-500 text-white p-2 text-center z-50">
      You are currently offline. Some features may be unavailable.
    </div>
  );
};

/**
 * Route Analytics Tracker
 * Automatically tracks page views for funnel analysis
 * Helps understand user journey from landing page to loan application
 */
const RouteTracker = () => {
  const location = useLocation();
  
  useEffect(() => {
    trackPageView(location.pathname);
  }, [location]);
  
  return null;
};

/**
 * React Query Client Configuration
 * Optimized for mobile connections with intelligent retry logic
 * Handles API failures gracefully for better UX in Rwanda's network conditions
 */
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3, // Retry failed requests (important for mobile networks)
      retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000),
      staleTime: 5 * 60 * 1000, // Cache data for 5 minutes to reduce API calls
    },
  },
});

/**
 * Main App Component
 * Wraps the entire application with necessary providers and error boundaries
 * Sets up the foundation for NiPay's fintech services
 */
const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ConnectionStatus />
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <RouteTracker />
          <Suspense fallback={<NiPayLoading />}>
            <Routes>
              {/* Main landing page - showcases NiPay's value proposition */}
              <Route path="/" element={<Index />} />
              {/* Investor relations page - for fundraising and partnerships */}
              <Route path="/investors" element={<Investors />} />
              {/* SME onboarding page - core business conversion funnel */}
              <Route path="/waitlist" element={<Waitlist />} />
              {/* Contact page - support and sales inquiries */}
              <Route path="/contact" element={<Contact />} />
              {/* 404 handler - maintains professional appearance */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
