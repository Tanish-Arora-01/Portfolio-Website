import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import ViewportHeight from "./ViewportHeight";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <>
      <ViewportHeight />
      <App />
    </>
  </StrictMode>,
);
