import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { EnrollmentProvider } from "./EnrollmentContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <EnrollmentProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </EnrollmentProvider>
  </React.StrictMode>
);