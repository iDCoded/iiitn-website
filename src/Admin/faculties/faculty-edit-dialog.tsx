import { useEffect } from "react";
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
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Faculty } from "@/interfaces/types";
import MDEditor from "@uiw/react-md-editor";

const formSchema = z.object({
	join_year: z.coerce.number().int().gte(1900).lte(new Date().getFullYear()),
	content: z.string().min(1, "Content is required"),
	positions: z.string().min(1, "Please enter the positions"),
	education: z.string().min(1, "Please enter the education"),
	experience: z.coerce.number().min(0, "Please enter the experience"),
	teaching: z.string().min(1, "Please enter the teaching"),
	research: z.string().min(1, "Please enter the research"),
	f_or_s: z.enum(["Faculty", "Staff"], {
		message: "Please select Faculty or Staff",
	}),
});

type FormData = z.infer<typeof formSchema>;

const FacultyEditDialog = ({ faculty }: { faculty: Faculty }) => {
	const form = useForm<FormData>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			...faculty,
		},
	});

	useEffect(() => {
		form.reset(faculty);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [faculty]);

	const onSubmit = async (data: FormData) => {
		console.table(data);
		await fetch(
			`${import.meta.env.VITE_API_BASE_URL}/faculty/faculty_staff/${
				faculty.f_id
			}`,
			{
				method: "PUT",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(data),
			}
		);
	};

	return (
		<Dialog>
			<DialogTrigger asChild>
				<Button variant="outline" className="bg-primary">
					Edit Faculty
				</Button>
			</DialogTrigger>
			<DialogContent className="max-h-[80vh] overflow-y-auto">
				<DialogHeader>
					<DialogTitle>Edit Faculty</DialogTitle>
				</DialogHeader>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
						<FormField
							control={form.control}
							name="join_year"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Year of Joining</FormLabel>
									<FormControl>
										<Input
											type="number"
											{...field}
											onChange={(e) => field.onChange(Number(e.target.value))}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="content"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Content</FormLabel>
									<FormControl>
										<MDEditor
											value={field.value}
											onChange={field.onChange}
											data-color-mode="light"
											preview="edit"
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="positions"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Positions</FormLabel>
									<FormControl>
										<Input {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="education"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Education</FormLabel>
									<FormControl>
										<Input {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="experience"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Experience</FormLabel>
									<FormControl>
										<Input
											type="number"
											{...field}
											onChange={(e) => field.onChange(Number(e.target.value))}
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
								<FormItem>
									<FormLabel>Teaching</FormLabel>
									<FormControl>
										<Input {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="research"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Research</FormLabel>
									<FormControl>
										<Input {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="f_or_s"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Faculty or Staff</FormLabel>
									<FormControl>
										<Select
											onValueChange={field.onChange}
											defaultValue={field.value}>
											<SelectTrigger>
												<SelectValue placeholder="Select" />
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
						<Button type="submit" className="w-full">
							Save
						</Button>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	);
};

export default FacultyEditDialog;
