import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import JSX from "./basics/JSX.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}

    <JSX />
  </StrictMode>
);
