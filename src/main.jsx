import { StrictMode } from "react";
import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Navigation from "./Component/Footer1.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Navigation />
  </StrictMode>
);
