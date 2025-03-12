import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
import MDEditor from "@uiw/react-md-editor";
import { NotebookText } from "lucide-react";

const formSchema = z.object({
	title: z.string().min(1, "Title is required"),
	content: z.string().min(1, "Content is required"),
	link: z.string().url("Invalid URL").optional(),
	status: z.enum(["ongoing", "completed", "proposed"], {
		message: "Please select a status",
	}),
	type: z.string().min(1, "Type is required"),
	branch: z.enum(["CSE", "ECE", "BS"], {
		message: "Please select a branch",
	}),
	lead_name: z.string().optional(),
	published_in: z.string().optional(),
});

export default function PublicationForm() {
	const form = useForm<z.infer<typeof formSchema>>({
		resolver: zodResolver(formSchema),
		defaultValues: {
			title: "",
			content: "",
			link: "",
			status: "ongoing",
			type: "",
			branch: "CSE",
			lead_name: "",
			published_in: "",
		},
	});

	const handleSubmit = async (data: z.infer<typeof formSchema>) => {
		console.log(data);
		const res = await fetch(
			`${import.meta.env.VITE_API_BASE_URL}/publication/`,
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			}
		);
		const res_json = await res.json();
		console.log("res_json", res_json);
	};

	return (
		<div className="max-h-[80vh] mx-auto">
			<div className="flex items-center gap-3 mb-8">
				<div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
					<NotebookText className="h-6 w-6 text-primary" />
				</div>
				<div>
					<h2 className="text-2xl font-semibold">Create Publication</h2>
					<p className="text-sm text-gray-500">Add a new publication entry</p>
				</div>
			</div>

			<Form {...form}>
				<form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
					<FormField
						control={form.control}
						name="title"
						render={({ field }) => (
							<FormItem className="space-y-2">
								<FormLabel htmlFor="title">Title</FormLabel>
								<FormControl>
									<Input id="title" placeholder="Enter title" {...field} />
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
						name="link"
						render={({ field }) => (
							<FormItem className="space-y-2">
								<FormLabel htmlFor="link">Publication Link</FormLabel>
								<FormControl>
									<Input id="link" placeholder="Enter link" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="status"
						render={({ field }) => (
							<FormItem className="space-y-2">
								<FormLabel htmlFor="status">Status</FormLabel>
								<FormControl>
									<Select onValueChange={field.onChange} value={field.value}>
										<SelectTrigger>
											<SelectValue placeholder="Select Status" />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="ongoing">Ongoing</SelectItem>
											<SelectItem value="completed">Completed</SelectItem>
											<SelectItem value="proposed">Proposed</SelectItem>
										</SelectContent>
									</Select>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="branch"
						render={({ field }) => (
							<FormItem className="space-y-2">
								<FormLabel htmlFor="branch">Branch</FormLabel>
								<FormControl>
									<Select onValueChange={field.onChange} value={field.value}>
										<SelectTrigger>
											<SelectValue placeholder="Select Branch" />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="CSE">CSE</SelectItem>
											<SelectItem value="ECE">ECE</SelectItem>
											<SelectItem value="BS">BS</SelectItem>
										</SelectContent>
									</Select>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="type"
						render={({ field }) => (
							<FormItem className="space-y-2">
								<FormLabel htmlFor="type">Type</FormLabel>
								<FormControl>
									<Input
										id="type"
										placeholder="Enter publication type"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="lead_name"
						render={({ field }) => (
							<FormItem className="space-y-2">
								<FormLabel htmlFor="lead_name">Lead Name</FormLabel>
								<FormControl>
									<Input
										id="lead_name"
										placeholder="Enter lead name"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="published_in"
						render={({ field }) => (
							<FormItem className="space-y-2">
								<FormLabel htmlFor="published_in">Published In</FormLabel>
								<FormControl>
									<Input
										id="published_in"
										placeholder="Enter publication source"
										{...field}
									/>
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
		</div>
	);
}
