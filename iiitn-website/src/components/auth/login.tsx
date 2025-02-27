import { Card } from "../ui/card";
import { LoginForm } from "../form/sign-in/components/login-form";
import { Link } from "react-router-dom";

function Login() {
	return (
		<Card className="p-6">
			<div className="flex flex-col space-y-2 text-left">
				<h1 className="text-2xl font-semibold tracking-tight">Login</h1>
				<p className="text-sm text-muted">
					Enter your email and password below <br />
					to log into your account
				</p>
				<p className="text-sm text-muted">
					Don't have an account?{" "}
					<Link
						to="/signup"
						className="underline underline-offset-4 hover:text-primary">
						Sign Up
					</Link>
				</p>
			</div>
			<LoginForm />
			<p className="mt-4 px-8 text-center text-sm text-muted">
				By clicking login, you agree to our{" "}
				<a
					href="/terms"
					className="underline underline-offset-4 hover:text-primary">
					Terms of Service
				</a>{" "}
				and{" "}
				<a
					href="/privacy"
					className="underline underline-offset-4 hover:text-primary">
					Privacy Policy
				</a>
				.
			</p>
		</Card>
	);
}

export default Login;
