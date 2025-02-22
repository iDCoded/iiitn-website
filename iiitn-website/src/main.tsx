import React from "react";
import ReactDOM from "react-dom/client";
import AppRoutes from "./routes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./index.css"; // Tailwind styles

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Navbar />
    <div className="pt-[100pt]"> {/* Adjust padding based on navbar height */}
      <AppRoutes />
    </div>
    <Footer />
  </React.StrictMode>
);
