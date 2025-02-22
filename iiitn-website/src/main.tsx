import React from "react";
import ReactDOM from "react-dom/client";
import AppRoutes from "./routes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./index.css"; // Tailwind styles

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Navbar />
    <AppRoutes />
    <Footer />
  </React.StrictMode>
);
