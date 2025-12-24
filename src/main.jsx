import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import JSX from "./basics/JSX.jsx";
import Conditional from "./rendering/Conditional.jsx";
import Loading from "./rendering/Loading.jsx";
import LoadingLangepage from "./practice/LoadingLandpage.jsx";
import LoginPractice from "./practice/LoginPractice.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App /> */}

    {/* <JSX /> */}
    {/* <Conditional /> */}
    {/* <Loading /> */}
    {/* <LoadingLangepage /> */}
    <LoginPractice />
  </StrictMode>
);
