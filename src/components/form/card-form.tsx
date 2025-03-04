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
			const media_request = await fetch(
				`${import.meta.env.VITE_API_BASE_URL}/media/upload`,
				{
					method: "POST",
					body: formData,
				}
			);
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

				const card_req = await fetch(
					`${import.meta.env.VITE_API_BASE_URL}/card/cards`,
					{
						method: "POST",
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify(card_data),
					}
				);

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
									<div className="flex flex-col gap-4">
										<div className="flex items-center gap-3">
											<Input
												type="file"
												id={field.name}
												accept="image/*"
												{...fileRef}
												placeholder="Upload Media"
											/>
											<Button
												type="button"
												variant="outline"
												onClick={() =>
													document.getElementById("image")?.click()
												}>
												<ImageIcon className="mr-2 h-4 w-4" />
												Browse
											</Button>
										</div>
										{field.value && (
											<div className="rounded-lg border bg-card">
												<img
													src={
														URL.createObjectURL(field.value[0]) ||
														"/placeholder.svg"
													}
													alt="Preview"
													className="w-full h-[200px] object-cover rounded-t-lg"
												/>
												<div className="p-3">
													<p className="text-sm text-gray-500">
														Selected file: {field.value[0].name}
													</p>
												</div>
											</div>
										)}{" "}
									</div>
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
										<Input placeholder="Enter the category" {...field} />
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
										<Input placeholder="Enter the sub-category" {...field} />
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
