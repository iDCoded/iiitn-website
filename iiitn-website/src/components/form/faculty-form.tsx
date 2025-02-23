import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { User } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
	p_id: z.number().int().nonnegative({ message: "Please enter a valid ID" }),
	join_year: z
		.string()
		.regex(/^\d{4}$/, { message: "Please enter a valid year" }),
	positions: z.string().min(1, { message: "Please enter the positions" }),
	f_or_s: z.enum(["Faculty", "Staff"], {
		message: "Please select Faculty or Staff",
	}),
});

export function FacultyForm() {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			p_id: 0,
			join_year: "",
			positions: "",
			f_or_s: "Faculty",
		},
	});

	const handleSubmit = (data: z.infer<typeof formSchema>) => {
		// Send `data` to the backend as plain markdown text
		console.log("Submitted content:", data);
		toast({
			title: "Created faculty",
			description: "The faculty has been successfully uploaded.",
		});
	};

	return (
		<div className="max-w-3xl mx-auto">
			<div className="flex items-center gap-3 mb-8">
				<div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
					<User className="h-6 w-6 text-primary" />
				</div>
				<div>
					<h2 className="text-2xl font-semibold">Create faculty</h2>
					<p className="text-sm text-gray-500">Add a new faculty member</p>
				</div>
			</div>

			<Form {...form}>
				<form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
					<FormField
						control={form.control}
						name="p_id"
						render={({ field }) => (
							<FormItem className="space-y-2">
								<FormLabel htmlFor="p_id">ID</FormLabel>
								<FormControl>
									<Input id="p_id" placeholder="Enter ID" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="join_year"
						render={({ field }) => (
							<FormItem className="space-y-2">
								<FormLabel htmlFor="join_year">Year of Joining</FormLabel>
								<FormControl>
									<Input id="join_year" placeholder="Enter year" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="positions"
						render={({ field }) => (
							<FormItem className="space-y-2">
								<FormLabel htmlFor="positions">Positions</FormLabel>
								<FormControl>
									<Input
										id="positions"
										placeholder="Enter positions"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="f_or_s"
						render={({ field }) => (
							<FormItem className="space-y-2">
								<FormLabel htmlFor="f_or_s">Faculty or Staff</FormLabel>
								<FormControl>
									<Select
										onValueChange={field.onChange}
										defaultValue={field.value}>
										<SelectTrigger>
											<SelectValue placeholder="Select Faculty or Staff" />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="Faculty">Faculty</SelectItem>
											<SelectItem value="Staff">Staff</SelectItem>
										</SelectContent>
									</Select>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<Button type="submit" size="lg" className="w-full">
						Submit
					</Button>
				</form>
			</Form>
		</div>
	);
}
