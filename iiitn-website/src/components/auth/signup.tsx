import { Link } from "react-router-dom";
import { SignUpForm } from "../form/sign-up/components/sign-up-form";
import { Card } from "../ui/card";

function Signup() {
	return (
		<Card className="p-6">
			<div className="mb-2 flex flex-col space-y-2 text-left">
				<h1 className="text-lg font-semibold tracking-tight">
					Create an account
				</h1>
				<p className="text-sm ">
					Enter your email and password to create an account. <br />
					Already have an account?{" "}
					<Link
						to="/login"
						className="underline underline-offset-4 hover:text-primary">
						Sign In
					</Link>
				</p>
			</div>
			<SignUpForm />
			<p className="mt-4 px-8 text-center text-sm ">
				By creating an account, you agree to our{" "}
				<a
					href="/terms"
					className="underline underline-offset-4 hover:text-muted/80">
					Terms of Service
				</a>{" "}
				and{" "}
				<a
					href="/privacy"
					className="underline underline-offset-4 hover:text-muted/80">
					Privacy Policy
				</a>
				.
			</p>
		</Card>
	);
}

export default Signup;
