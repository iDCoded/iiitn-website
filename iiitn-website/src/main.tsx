import React from "react";
import ReactDOM from "react-dom/client";
import AppRoutes from "./routes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import "./index.css"; // Tailwind styles

export function App() {
	const location = useLocation();
	const isExcludedRoute = ["/admin", "/login", "/signup"].some((path) =>
		location.pathname.startsWith(path)
	);

	return (
		<React.StrictMode>
			<div className="flex flex-col min-h-screen">
				{/* Navbar (Sticky at top) */}
				{!isExcludedRoute && <Navbar />}

				{/* Main Content */}
				<div className="flex-grow pt-20 md:pt-24 lg:pt-48"> {/* Adjust padding for different screen sizes */}
					<AppRoutes />
				</div>

				{/* Footer at the bottom */}
				{!isExcludedRoute && <Footer />}
			</div>
		</React.StrictMode>
	);
}

// Wrap the entire app with Router
ReactDOM.createRoot(document.getElementById("root")!).render(
	<Router>
		<App />
	</Router>
);
