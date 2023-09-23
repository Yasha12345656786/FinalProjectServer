import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import setupLocatorUI from "@locator/runtime";
import { BrowserRouter } from "react-router-dom";
if ("development" === "development") {
  setupLocatorUI({
    adapter: "vue",
  });
}
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    
    <App />
  </React.StrictMode>
);
