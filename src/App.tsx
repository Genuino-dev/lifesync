
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import CollectionPoints from "./pages/CollectionPoints";
import NotFound from "./pages/NotFound";
import DonorRegistration from "./pages/DonorRegistration";
import InstitutionRegistration from "./pages/InstitutionRegistration";
import Entrar from "./pages/Entrar";
import Login from "./pages/Login";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/pontos" element={<CollectionPoints />} />
          <Route path="/cadastro-doador" element={<DonorRegistration />} />
          <Route path="/cadastro-centro" element={<InstitutionRegistration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/entrar" element={<Entrar />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
