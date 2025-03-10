import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Form,
	FormField,
	FormItem,
	FormLabel,
	FormControl,
	FormMessage,
} from "@/components/ui/form";
import { ImageIcon, Upload } from "lucide-react";
import { useState } from "react";

const imageUploadSchema = z.object({
	title: z.string().min(1, "Title is required"),
	m_category: z.string().min(1, "Category is required"),
	m_sub_category: z.string().min(1, "Sub Category is required"),
	file: z.instanceof(File).optional(),
});

export function ImageUploadForm() {
	const [preview, setPreview] = useState<string | null>(null);

	const form = useForm({
		resolver: zodResolver(imageUploadSchema),
		defaultValues: {
			title: "",
			m_category: "",
			m_sub_category: "",
			file: undefined,
		},
	});

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (file) {
			form.setValue("file", file);
			setPreview(URL.createObjectURL(file));
		}
	};

	const onSubmit = async (data: z.infer<typeof imageUploadSchema>) => {
		if (data.file) {
			const formData = new FormData();
			formData.append("file", data.file);
			formData.append("media_type", data.file.name);

			try {
				const mediaRes = await fetch(
					`${import.meta.env.VITE_API_BASE_URL}/media/upload`,
					{
						method: "POST",
						body: formData,
					}
				);
				const mediaData = await mediaRes.json();

				if (mediaRes.ok) {
					try {
						await fetch(`${import.meta.env.VITE_API_BASE_URL}/media/media`, {
							method: "POST",
							headers: { "Content-Type": "application/json" },
							body: JSON.stringify({
								title: data.title,
								m_category: data.m_category,
								m_sub_category: data.m_sub_category,
								added_time: new Date(),
								added_by: 1,
								updated_time: new Date(),
								updated_by: 1,
								media_img_id: mediaData.media_id, // Fetched after uploading the image to the bucket
							}),
						});
					} catch (err) {
						console.error("Error saving media data", err);
					}
				}
			} catch (err) {
				console.error("Error uploading image", err);
			}
		}
		form.reset();
		setPreview(null);
	};

	return (
		<div className="max-w-3xl mx-auto">
			<div className="flex items-center gap-3 mb-8">
				<div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
					<ImageIcon className="h-6 w-6 text-primary" />
				</div>
				<div>
					<h2 className="text-2xl font-semibold">Upload Image</h2>
					<p className="text-sm text-gray-500">
						Add a new image to the college gallery
					</p>
				</div>
			</div>

			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
					<FormField
						name="title"
						control={form.control}
						render={({ field }) => (
							<FormItem>
								<FormLabel>Title</FormLabel>
								<FormControl>
									<Input placeholder="Enter image title" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<div className="space-y-2">
						<Label htmlFor="image">Select Image</Label>
						<div className="flex items-center gap-3">
							<Input
								type="file"
								id="image"
								accept="*"
								onChange={handleFileChange}
								required
								className="flex-1"
							/>
							<Button
								type="button"
								variant="outline"
								onClick={() => document.getElementById("image")?.click()}>
								<ImageIcon className="mr-2 h-4 w-4" />
								Browse
							</Button>
						</div>
					</div>
					{preview && (
						<div className="rounded-lg border bg-card">
							<img
								src={preview || "/placeholder.svg"}
								alt="Preview"
								className="w-full h-[200px] object-cover rounded-t-lg"
							/>
							<div className="p-3">
								<p className="text-sm text-gray-500">
									Selected file: {preview}
								</p>
							</div>
						</div>
					)}

					<FormField
						name="m_category"
						control={form.control}
						render={({ field }) => (
							<FormItem>
								<FormLabel>Category</FormLabel>
								<FormControl>
									<Input placeholder="Enter the category" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						name="m_sub_category"
						control={form.control}
						render={({ field }) => (
							<FormItem>
								<FormLabel>Sub Category</FormLabel>
								<FormControl>
									<Input placeholder="Enter the sub category" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<Button
						type="submit"
						size="lg"
						className="w-full"
						disabled={!preview}>
						<Upload className="mr-2 h-4 w-4" /> Upload Image
					</Button>
				</form>
			</Form>
		</div>
	);
}
