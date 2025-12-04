"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { LanguageTransition } from "@/components/LanguageTransition";
import { useState } from "react";

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <LanguageProvider>
          <LanguageTransition>
            {children}
          </LanguageTransition>
        </LanguageProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

