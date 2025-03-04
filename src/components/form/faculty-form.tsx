import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { User } from "lucide-react";
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
import { Person } from "@/interfaces/types";

const formSchema = z.object({
	f_id: z.string(),
	p_id: z.string(),
	d_id: z.string(),
	pub_id: z.string(),
	media_img_id: z.string(),
	join_year: z.coerce.number().int().gte(1900).lte(new Date().getFullYear()),
	positions: z.string().min(1, { message: "Please enter the positions" }),
	f_or_s: z.enum(["Faculty", "Staff"], {
		message: "Please select Faculty or Staff",
	}),
	education: z.string().min(1, { message: "Please enter the education" }),
	experience: z.coerce.number(),
	teaching: z.string().min(1, { message: "Please enter the teaching" }),
	research: z.string().min(1, { message: "Please enter the research" }),
});

export function FacultyForm({ user }: { user: Person }) {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			f_id: "",
			p_id: "",
			d_id: (Math.floor(Math.random() * 2) + 1).toString(), // Random number b/w 1 - 2.
			pub_id: "",
			media_img_id: "",
			join_year: new Date().getFullYear(),
			positions: "",
			f_or_s: "Faculty",
			education: "",
			experience: 0,
			teaching: "",
			research: "",
		},
	});

	const handleSubmit = async (data: z.infer<typeof formSchema>) => {
		const facultyData = {
			p_id: user.p_id.toString(),
			d_id: (Math.floor(Math.random() * 2) + 1).toString(), // ! Remove in production -> Random number b/w 1 - 2
			pub_id: "1",
			media_img_id: 1,
			join_year: data.join_year,
			positions: data.positions,
			f_or_s: data.f_or_s,
			education: data.education,
			experience: data.experience,
			teaching: data.teaching,
			research: data.research,
		};

		const res = await fetch(
			`${import.meta.env.VITE_API_BASE_URL}/faculty/faculty_staff`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(facultyData),
			}
		);
		const res_json = await res.json();
		console.log("res_json", res_json);
	};

	return (
		<div className=" mx-auto">
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
						name="education"
						render={({ field }) => (
							<FormItem className="space-y-2">
								<FormLabel htmlFor="education">Education</FormLabel>
								<FormControl>
									<Input
										id="education"
										placeholder="Enter education"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="experience"
						render={({ field }) => (
							<FormItem className="space-y-2">
								<FormLabel htmlFor="experience">Experience</FormLabel>
								<FormControl>
									<Input
										id="experience"
										placeholder="Enter experience"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="teaching"
						render={({ field }) => (
							<FormItem className="space-y-2">
								<FormLabel htmlFor="teaching">Teaching</FormLabel>
								<FormControl>
									<Input
										id="teaching"
										placeholder="Enter teaching"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="research"
						render={({ field }) => (
							<FormItem className="space-y-2">
								<FormLabel htmlFor="research">Research</FormLabel>
								<FormControl>
									<Input
										id="research"
										placeholder="Enter research"
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
									<Select onValueChange={field.onChange} value={field.value}>
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
