import { HTMLAttributes, useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/password-input";
import { Textarea } from "@/components/ui/textarea";
import { useAuth } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";
import { Checkbox } from "@/components/ui/checkbox";

type SignUpFormProps = HTMLAttributes<HTMLDivElement>;

const formSchema = z
	.object({
		name: z.string().min(1, { message: "Please enter your name" }),
		email_pri: z
			.string()
			.min(1, { message: "Please enter your email" })
			.email({ message: "Invalid email address" }),
		email_sec: z
			.string()
			.min(1, { message: "Please enter your email" })
			.email({ message: "Invalid email address" }),
		password: z
			.string()
			.min(1, {
				message: "Please enter your password",
			})
			.min(7, {
				message: "Password must be at least 7 characters long",
			}),
		confirmPassword: z.string(),
		phone_no: z
			.string()
			.min(10, { message: "Phone number must include 10 digits" })
			.max(10, { message: "Phone number must include 10 digits" }),
		alt_phone_no: z
			.string()
			.min(10, { message: "Phone number must include 10 digits" })
			.max(10, { message: "Phone number must include 10 digits" }),
		curr_address: z.string().min(1, { message: "Please enter your address" }),
		perm_address: z.string().min(1, { message: "Please enter your address" }),
		isAlumni: z.boolean().default(false).optional(),
		alumniCurrOrg: z.string().optional(),
		alumniBrief: z.string().optional(),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "Passwords don't match.",
		path: ["confirmPassword"],
	});

export function SignUpForm({ className, ...props }: SignUpFormProps) {
	const navigate = useNavigate();

	const [isLoading, setIsLoading] = useState(false);
	const { login } = useAuth();

	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: "",
			email_pri: "",
			email_sec: "",
			phone_no: "",
			alt_phone_no: "",
			curr_address: "",
			perm_address: "",
			password: "",
			confirmPassword: "",
			isAlumni: false,
			alumniCurrOrg: "",
			alumniBrief: "",
		},
	});

	async function onSubmit(data: z.infer<typeof formSchema>) {
		setIsLoading(true);
		console.table(data);

		try {
			const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/user/`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ ...data, role: "admin" }), // ! EVERY USER IS SET TO ADMIN. CHANGE IN PRODUCTION
			});

			const res_json = await res.json();
			console.log("data", res_json);
			if (res.ok) {
				login(res_json.user, res_json.access_token); // TODO: Send user object from the server
				navigate("/admin");
			}
		} catch (error) {
			console.error(error);
		} finally {
			setIsLoading(false);
		}
	}

	return (
		<div className={cn("grid gap-6", className)} {...props}>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)}>
					<div className="grid gap-2">
						<FormField
							control={form.control}
							name="name"
							render={({ field }) => (
								<FormItem className="space-y-1">
									<FormLabel>Name</FormLabel>
									<FormControl>
										<Input placeholder="Dhruv Anand" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="email_pri"
							render={({ field }) => (
								<FormItem className="space-y-1">
									<FormLabel>Primary Email</FormLabel>
									<FormControl>
										<Input placeholder="name@example.com" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="email_sec"
							render={({ field }) => (
								<FormItem className="space-y-1">
									<FormLabel>Secondary Email</FormLabel>
									<FormControl>
										<Input placeholder="name@example.com" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="phone_no"
							render={({ field }) => (
								<FormItem className="space-y-1">
									<FormLabel>Phone Number</FormLabel>
									<FormControl>
										<Input placeholder="+91 9358520775" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="alt_phone_no"
							render={({ field }) => (
								<FormItem className="space-y-1">
									<FormLabel>Alternate Phone Number</FormLabel>
									<FormControl>
										<Input placeholder="+91 9358520775" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="curr_address"
							render={({ field }) => (
								<FormItem className="space-y-1">
									<FormLabel>Current Address</FormLabel>
									<FormControl>
										<Textarea
											placeholder="Your current residence address"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="perm_address"
							render={({ field }) => (
								<FormItem className="space-y-1">
									<FormLabel>Permanent Address</FormLabel>
									<FormControl>
										<Textarea
											placeholder="Your permanent residence address"
											{...field}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="password"
							render={({ field }) => (
								<FormItem className="space-y-1">
									<FormLabel>Password</FormLabel>
									<FormControl>
										<PasswordInput placeholder="********" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="confirmPassword"
							render={({ field }) => (
								<FormItem className="space-y-1">
									<FormLabel>Confirm Password</FormLabel>
									<FormControl>
										<PasswordInput placeholder="********" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="isAlumni"
							render={({ field }) => (
								<FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border py-4">
									<FormLabel>Are you an alumni?</FormLabel>
									<FormControl>
										<Checkbox
											checked={field.value}
											onCheckedChange={field.onChange}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						{form.watch("isAlumni") && (
							<>
								<FormField
									control={form.control}
									name="alumniCurrOrg"
									render={({ field }) => (
										<FormItem className="space-y-1">
											<FormLabel>Where do you work</FormLabel>
											<FormControl>
												<Input placeholder="Organisation name" {...field} />
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
								<FormField
									control={form.control}
									name="alumniBrief"
									render={({ field }) => (
										<FormItem className="space-y-1">
											<FormLabel>Brief</FormLabel>
											<FormControl>
												<Input
													placeholder="Provide a brief information"
													{...field}
												/>
											</FormControl>
											<FormMessage />
										</FormItem>
									)}
								/>
							</>
						)}

						<Button
							className="mt-2 bg-accent-foreground text-foreground"
							disabled={isLoading}>
							Create Account
						</Button>
					</div>
				</form>
			</Form>
		</div>
	);
}
