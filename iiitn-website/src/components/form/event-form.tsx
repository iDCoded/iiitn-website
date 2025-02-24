import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
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
import { ImageIcon } from "lucide-react";
import { Textarea } from "../ui/textarea";

const formSchema = z.object({
	title: z.string().min(1, "Title is required"),
	description: z.string().min(1, "Description is required"),
	caption: z.string().min(1, "Description is required"),
	content: z.string().min(1, "Description is required"),
	location: z.string().min(1, "Location is required"),
	c_category: z.string().min(1, "Category is required"),
	c_sub_category: z.string().min(1, "Sub-category is required"),
	date: z.date(),
	media_img_id: z.number().optional(),
	media_vid_id: z.number().optional(),
	media_doc_id: z.number().optional(),
	updated_by: z.number(),
	added_by: z.number(),
});

export default function CardForm() {
	const form = useForm({
		resolver: zodResolver(formSchema),
		defaultValues: {
			title: "",
			description: "",
			caption: "",
			content: "",
			location: "",
			c_category: "",
			c_sub_category: "",
			media_img_id: 1,
			updated_by: 1,
			added_by: 1,
		},
	});
	const handleSubmit = async (data: z.infer<typeof formSchema>) => {
		const res = await fetch("http://localhost:5000/card/Cards", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});
		const res_json = await res.json();
		console.log("Res", res_json);
	};
	return (
		<div>
			<div className="flex items-center gap-3 mb-8">
				<div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
					<ImageIcon className="h-6 w-6 text-primary" />
				</div>
				<div>
					<h2 className="text-2xl font-semibold">Create a card</h2>
					<p className="text-sm text-gray-500">Add a new card to the website</p>
				</div>
			</div>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
					<FormField
						control={form.control}
						name="title"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Title</FormLabel>
								<FormControl>
									<Input placeholder="Enter the title" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="description"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Description</FormLabel>
								<FormControl>
									<Input placeholder="Enter the description" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="caption"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Caption</FormLabel>
								<FormControl>
									<Input placeholder="Enter the caption" {...field} />
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
									<Textarea
										placeholder="Enter the content for the card"
										{...field}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="location"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Location</FormLabel>
								<FormControl>
									<Input placeholder="Enter the location" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="date"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Date</FormLabel>
								<FormControl>
									<Input
										type="date"
										placeholder="Enter the date"
										{...field}
										value={
											field.value ? field.value.toISOString().split("T")[0] : ""
										}
										onChange={(e) => field.onChange(new Date(e.target.value))}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="c_category"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Category</FormLabel>
								<FormControl>
									<Select
										onValueChange={field.onChange}
										defaultValue={field.value}>
										<SelectTrigger>
											<SelectValue placeholder="Select a category" />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="category1">Category 1</SelectItem>
											<SelectItem value="category2">Category 2</SelectItem>
										</SelectContent>
									</Select>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="c_sub_category"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Sub-category</FormLabel>
								<FormControl>
									<Select
										onValueChange={field.onChange}
										defaultValue={field.value}>
										<SelectTrigger>
											<SelectValue placeholder="Select a sub-category" />
										</SelectTrigger>
										<SelectContent>
											<SelectItem value="sub1">Sub-category 1</SelectItem>
											<SelectItem value="sub2">Sub-category 2</SelectItem>
										</SelectContent>
									</Select>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<Button type="submit">Create Card</Button>
				</form>
			</Form>
		</div>
	);
}
