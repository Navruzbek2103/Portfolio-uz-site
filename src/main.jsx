import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { PortfolioProvider } from "./context/context";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <PortfolioProvider>
      <App />
    </PortfolioProvider>
  </BrowserRouter>
);
