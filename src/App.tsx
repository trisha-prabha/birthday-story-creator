import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useRef } from "react";

import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => {
  const audioRef = useRef(null);

  const playMusic = () => {
    audioRef.current.play();
  };

  return (
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />

          {/* 🎵 Play Button */}
          <button
              onClick={playMusic}
              className="fixed bottom-4 right-4 z-50 bg-pink-500 text-white px-4 py-2 rounded-full shadow-lg"
          >
            🎂 Play Music
          </button>

          {/* 🎵 Audio */}
          <audio ref={audioRef} loop>
            <source src="src\assets\Song.mp3" type="audio/mpeg" />
          </audio>

          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
  );
};

export default App;