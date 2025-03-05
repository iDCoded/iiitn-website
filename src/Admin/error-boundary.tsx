import { Component, ReactNode } from "react";
import Fallback from "./fallback";

interface ErrorBoundaryProps {
	children: ReactNode;
}

interface ErrorBoundaryState {
	hasError: boolean;
	error?: Error;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
	constructor(props: ErrorBoundaryProps) {
		super(props);
		this.state = { hasError: false, error: undefined };
	}

	static getDerivedStateFromError(error: Error): ErrorBoundaryState {
		return { hasError: true, error };
	}

	componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
		console.error("Error caught by ErrorBoundary:", error, errorInfo);
	}

	render() {
		if (this.state.hasError) {
			return <Fallback error={this.state.error} />;
		}
		return this.props.children;
	}
}

export default ErrorBoundary;
