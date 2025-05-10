import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/global.css";
import "./styles/theme.css";
import "./index.css";
import { App } from "./App";
import { PageContextProvider } from "./contexts/PageContext/PageContextProvider";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PageContextProvider>
      <App />
    </PageContextProvider>
  </StrictMode>
);
