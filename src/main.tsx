import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import AppRoutes from "./routes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { GlobalProvider } from "./context/GlobalContext";
import "./index.css";

export function App() {
	const location = useLocation();
	const isExcludedRoute = ["/admin", "/login", "/signup", "/fportal"].some(
		(path) => location.pathname.startsWith(path)
	);

	return (
		<React.StrictMode>
			<div className="flex flex-col min-h-screen">
				{/* Navbar (Sticky at top) */}
				{!isExcludedRoute && <Navbar />}

				{/* Main Content */}
				<div
					className={`${
						isExcludedRoute ? "" : "flex-grow pt-20 md:pt-24 lg:pt-30"
					}`}>
					{" "}
					{/* Adjust padding for different screen sizes */}
					<AppRoutes />
				</div>

				{/* Footer at the bottom */}
				{!isExcludedRoute && <Footer />}
			</div>
		</React.StrictMode>
	);
}

export default function ScrollToTop() {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return null;
}

// Wrap the entire app with Router and AuthProvider
ReactDOM.createRoot(document.getElementById("root")!).render(
	<Router>
		<GlobalProvider>
		<ScrollToTop />
		<AuthProvider>
			<App />
		</AuthProvider>
		</GlobalProvider>
	</Router>
);
