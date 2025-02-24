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
import MDEditor from "@uiw/react-md-editor";

const formSchema = z.object({
	title: z.string().min(1, "Title is required"),
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
	media: z
		.instanceof(FileList)
		.refine((fileList) => fileList.length > 0, { message: "No file selected" }),
});

export function CardForm() {
	const form = useForm({
		resolver: zodResolver(formSchema),
		defaultValues: {
			title: "",
			caption: "",
			content: "",
			location: "",
			c_category: "",
			c_sub_category: "",
			media_img_id: 1,
			updated_by: 1,
			added_by: 1,
			media: undefined,
		},
	});

	const fileRef = form.register("media");

	const handleSubmit = async (data: z.infer<typeof formSchema>) => {
		const file = data.media[0];

		const formData = new FormData();
		formData.append("file", file);
		formData.append("media_type", "image");

		try {
			const media_request = await fetch("http://localhost:5000/media/upload", {
				method: "POST",
				body: formData,
			});
			const media_res = await media_request.json();

			if (media_request.ok) {
				const card_data = {
					c_category: data.c_category,
					c_sub_category: data.c_sub_category,
					title: data.title,
					caption: data.caption,
					content: data.content,
					date: data.date,
					location: data.location,
					media_img_id: media_res.media_id,
					updated_by: 1,
					updated_time: new Date(),
					added_by: 1,
					added_time: new Date(),
				};
				console.log(card_data);

				const card_req = await fetch("http://localhost:5000/card/cards", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify(card_data),
				});

				const card_res = await card_req.json();

				console.log("Card response", card_res);
			}
		} catch (error) {
			console.error(error);
		}
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
						name="media"
						// eslint-disable-next-line @typescript-eslint/no-unused-vars
						render={({ field }) => (
							<FormItem>
								<FormLabel>Media</FormLabel>
								<FormControl>
									<Input type="file" {...fileRef} placeholder="Upload Media" />
								</FormControl>
							</FormItem>
						)}
					/>
					<div className="flex flex-row justify-around gap-2">
						<FormField
							control={form.control}
							name="location"
							render={({ field }) => (
								<FormItem className="w-full">
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
								<FormItem className="w-full">
									<FormLabel>Date</FormLabel>
									<FormControl>
										<Input
											type="date"
											placeholder="Enter the date"
											{...field}
											value={
												field.value
													? field.value.toISOString().split("T")[0]
													: ""
											}
											onChange={(e) => field.onChange(new Date(e.target.value))}
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
					<div className="flex flex-row justify-around gap-2">
						<FormField
							control={form.control}
							name="c_category"
							render={({ field }) => (
								<FormItem className="w-full">
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
								<FormItem className="w-full">
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
					</div>
					<Button type="submit">Create Card</Button>
				</form>
			</Form>
		</div>
	);
}
