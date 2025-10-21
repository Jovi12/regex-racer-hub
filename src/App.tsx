import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import JSONFormatter from "./pages/JSONFormatter";
import Base64Tool from "./pages/Base64Tool";
import CodeMinifier from "./pages/CodeMinifier";
import ColorPicker from "./pages/ColorPicker";
import RegexTester from "./pages/RegexTester";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/json-formatter" element={<JSONFormatter />} />
            <Route path="/base64" element={<Base64Tool />} />
            <Route path="/minifier" element={<CodeMinifier />} />
            <Route path="/color-picker" element={<ColorPicker />} />
            <Route path="/regex-tester" element={<RegexTester />} />
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
