import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Navigation from "./nav/nav";
import Home from "./home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createRoot } from "react-dom/client";
import ToDo from "./to-do/App";
import App from "./date/Appdate";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dates" element={<App />} />
        <Route path="/todo" element={<ToDo />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
