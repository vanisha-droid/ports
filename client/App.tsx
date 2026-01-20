import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Placeholder from "./pages/Placeholder";
import Software from "./pages/software";

const queryClient = new QueryClient();

const ExternalRedirect = () => {
  window.open("https://vanisha241204.wixsite.com/vanisha-1", "_blank", "noopener,noreferrer");
  return null;
};


const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/software-portfolio" element={<Software/>} />
          <Route path="/design-portfolio" element={<ExternalRedirect />}/>
          <Route path="/about" element={<Placeholder pageName="About" />} />
          <Route path="/projects" element={<Software />} />
          <Route path="/skills-tools" element={<Placeholder pageName="Skills & Tools" />} />
          <Route path="/extracurriculars" element={<Placeholder pageName="Extracurriculars" />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
