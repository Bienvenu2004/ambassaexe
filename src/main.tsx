import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { RouterProvider } from "./lib/router";
import { PrefsProvider } from "./lib/prefs";
import { watchReveals } from "./lib/reveal";

watchReveals();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PrefsProvider>
      <RouterProvider>
        <App />
      </RouterProvider>
    </PrefsProvider>
  </StrictMode>,
);
