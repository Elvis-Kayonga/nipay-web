import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { useEffect } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Investors from "./pages/Investors";
import Waitlist from "./pages/Waitlist";
import Contact from "./pages/Contact";

// Google Analytics tracking function - replace with actual GA ID when available
const trackPageView = (path: string) => {
  if (typeof window.gtag !== 'undefined') {
    window.gtag('config', 'G-XXXXXXXXXX', {
      page_path: path,
    });
  }
};

// Analytics tracker
const RouteTracker = () => {
  const location = useLocation();
  
  useEffect(() => {
    trackPageView(location.pathname);
  }, [location]);
  
  return null;
};

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <RouteTracker />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/investors" element={<Investors />} />
            <Route path="/waitlist" element={<Waitlist />} />
            <Route path="/contact" element={<Contact />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
