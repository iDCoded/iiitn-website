import React from "react";
import ReactDOM from "react-dom/client";
import AppRoutes from "./routes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import "./index.css"; // Tailwind styles

export function App() {
	const location = useLocation(); // Get the current route path
	const isExcludedRoute = ["/admin", "/login", "/signup"].some((path) =>
		location.pathname.startsWith(path)
	);
	return (
		<React.StrictMode>
			{!isExcludedRoute && <Navbar />}
			<AppRoutes />
			{!isExcludedRoute && <Footer />}
		</React.StrictMode>
	);
}

// Wrap the entire app with Router here
ReactDOM.createRoot(document.getElementById("root")!).render(
	<Router>
		<App />
	</Router>
);
