import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { RouterProvider } from "react-router-dom";

import { createReactQueryConfig } from "../config/react-query";
import { AuthProvider } from "./providers/auth.context";
import { RoomsProvider } from "./providers/rooms.context";
import { router } from "./routes";

export function App() {
  const [queryClient] = useState(
    () => new QueryClient(createReactQueryConfig()),
  );

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RoomsProvider>
          <RouterProvider router={router} />
        </RoomsProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}
