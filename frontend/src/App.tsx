import { DestinationProvider } from "hooks/useDestination";
import Home from "pages/home";
import React from "react";

export default function App() {
  return (
    <DestinationProvider>
      <Home />
    </DestinationProvider>
  );
}
