
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { useEffect, useState, lazy, Suspense } from "react";
import NotFound from "./pages/NotFound";

// Lazy load pages to improve initial load time
const Index = lazy(() => import("./pages/Index"));
const Investors = lazy(() => import("./pages/Investors"));
const Waitlist = lazy(() => import("./pages/Waitlist"));
const Contact = lazy(() => import("./pages/Contact"));

// Google Analytics tracking function with actual GA ID
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

// Loading fallback component
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="text-center">
      <h2 className="text-xl font-medium mb-2">Loading...</h2>
      <p className="text-gray-500">Please wait while we prepare the page for you.</p>
    </div>
  </div>
);

// Network status monitoring component
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

// Analytics tracker
const RouteTracker = () => {
  const location = useLocation();
  
  useEffect(() => {
    trackPageView(location.pathname);
  }, [location]);
  
  return null;
};

// Create a query client with retry logic
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3,
      retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000),
      staleTime: 5 * 60 * 1000, // 5 minutes
    },
  },
});

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ConnectionStatus />
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <RouteTracker />
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/investors" element={<Investors />} />
              <Route path="/waitlist" element={<Waitlist />} />
              <Route path="/contact" element={<Contact />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
