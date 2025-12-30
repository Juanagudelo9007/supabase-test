import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import UserAuth from "./context/UserAuth.jsx";
import { BrowserRouter } from "react-router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <UserAuth>
        <App />
      </UserAuth>
    </BrowserRouter>
  </StrictMode>
);
