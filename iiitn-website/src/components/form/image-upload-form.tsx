import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ImageIcon, Upload } from "lucide-react";

export function ImageUploadForm() {
	const [file, setFile] = useState<File | null>(null);
	const [title, setTitle] = useState("");
	const [caption, setCaption] = useState("");
	const [description, setDescription] = useState("");

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files) {
			setFile(e.target.files[0]);
		}
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (file) {
			const mediaData = {
				title: file.name,
				m_category: caption,
				m_sub_category: description,
				added_time: new Date(file.lastModified),
				added_by: 1,
				updated_time: new Date(file.lastModified),
				updated_by: 1,
				media_img_id: 1,
			};

			console.table(mediaData);
			const res = await fetch("http://localhost:5000/media/media", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(mediaData),
			});
			const data = await res.json();
			console.log("Media upload data", data);

			setFile(null);
			setTitle("");
			setCaption("");
			setDescription("");
		}
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

			<form onSubmit={handleSubmit} className="space-y-6">
				<div className="space-y-2">
					<Label htmlFor="title">Title</Label>
					<Input
						id="title"
						placeholder="Enter image title"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						required
					/>
				</div>

				<div className="space-y-2">
					<Label htmlFor="image">Select Image</Label>
					<div className="flex items-center gap-3">
						<Input
							type="file"
							id="image"
							accept="image/*"
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

				{file && (
					<div className="rounded-lg border bg-card">
						<img
							src={URL.createObjectURL(file) || "/placeholder.svg"}
							alt="Preview"
							className="w-full h-[200px] object-cover rounded-t-lg"
						/>
						<div className="p-3">
							<p className="text-sm text-gray-500">
								Selected file: {file.name}
							</p>
						</div>
					</div>
				)}

				<div className="space-y-2">
					<Label htmlFor="caption">Caption</Label>
					<Input
						id="caption"
						placeholder="Enter a brief caption"
						value={caption}
						onChange={(e) => setCaption(e.target.value)}
						required
					/>
				</div>

				<div className="space-y-2">
					<Label htmlFor="description">Description</Label>
					<Textarea
						id="description"
						placeholder="Write your image description..."
						value={description}
						onChange={(e) => setDescription(e.target.value)}
						className="min-h-[200px]"
						required
					/>
				</div>

				<Button type="submit" size="lg" className="w-full" disabled={!file}>
					<Upload className="mr-2 h-4 w-4" />
					Upload Image
				</Button>
			</form>
		</div>
	);
}
