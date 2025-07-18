import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/global.css";
import Index from "./pages/Home";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Index />
  </StrictMode>
);
