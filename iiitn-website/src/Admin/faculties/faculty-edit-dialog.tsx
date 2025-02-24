import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Faculty } from "@/interfaces/types";
import { Input } from "@/components/ui/input";
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

// ! Editing faculty details not working
const formSchema = z.object({
	f_id: z.string(),
	p_id: z.string(),
	d_id: z.string(),
	pub_id: z.string(),
	media_img_id: z.number(),
	join_year: z.coerce
		.number()
		.int()
		.gte(1900)
		.lte(new Date().getFullYear())
		.default(new Date().getFullYear()),
	positions: z.string().min(1, { message: "Please enter the positions" }),
	f_or_s: z.enum(["Faculty", "Staff"], {
		message: "Please select Faculty or Staff",
	}),
	education: z.string().min(1, { message: "Please enter the education" }),
	experience: z.coerce
		.number()
		.min(1, { message: "Please enter the experience" })
		.default(0),
	teaching: z.string().min(1, { message: "Please enter the teaching" }),
	research: z.string().min(1, { message: "Please enter the research" }),
});

type FormData = z.infer<typeof formSchema>;

const FacultyEditDialog = ({ faculty }: { faculty: Faculty }) => {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: { ...faculty },
	});

	const onSubmit = async (data: FormData) => {
		console.log("please wokr");
		const facultyData: Faculty = {
			f_id: "1",
			p_id: "1",
			d_id: "2",
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
		console.table(facultyData);

		await fetch(`http://localhost:5000/faculty/faculty_staff/${faculty.f_id}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(facultyData),
		});
	};

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant="ghost">Edit Faculty</Button>
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Edit Faculty</DialogTitle>
				</DialogHeader>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
									<FormLabel htmlFor="positions">Education</FormLabel>
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
									<FormLabel htmlFor="positions">Experience</FormLabel>
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
									<FormLabel htmlFor="positions">Teaching</FormLabel>
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
									<FormLabel htmlFor="positions">Research</FormLabel>
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
							Save
						</Button>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	);
};

export default FacultyEditDialog;
