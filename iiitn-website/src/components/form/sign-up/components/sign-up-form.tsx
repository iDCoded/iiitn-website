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
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "Passwords don't match.",
		path: ["confirmPassword"],
	});

export function SignUpForm({ className, ...props }: SignUpFormProps) {
	const [isLoading, setIsLoading] = useState(false);

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
		},
	});

	async function onSubmit(data: z.infer<typeof formSchema>) {
		setIsLoading(true);
		console.table(data);

		try {
			const res = await fetch("http://localhost:5000/user/", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ ...data, role: "admin" }), // ! EVERY USER IS SET TO ADMIN. CHANGE IN PRODUCTION
			});

			const res_json = await res.json();
			console.log("data", res_json);
		} catch (error) {
			console.error(error);
		}

		setTimeout(() => {
			setIsLoading(false);
		}, 3000);
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
						<Button className="mt-2" disabled={isLoading}>
							Create Account
						</Button>
					</div>
				</form>
			</Form>
		</div>
	);
}
