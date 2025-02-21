import React, { useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { BellRing } from "lucide-react";
import { toast } from "@/hooks/use-toast";

export function FacultyForm() {
	const [title, setTitle] = useState("");
	const [date, setDate] = useState("");
	const [caption, setCaption] = useState("");
	const [content, setContent] = useState("");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Send `title`, `date`, `caption`, and `content` to the backend as plain markdown text
		console.log("Submitted content:", { title, date, caption, content });
		toast({
			title: "Created faculty",
			description: "The faculty has been successfully uploaded.",
		});
	};

	return (
		<div className="max-w-3xl mx-auto">
			<div className="flex items-center gap-3 mb-8">
				<div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
					<BellRing className="h-6 w-6 text-primary" />
				</div>
				<div>
					<h2 className="text-2xl font-semibold">Create faculty</h2>
					<p className="text-sm text-gray-500">Add a new faculty member</p>
				</div>
			</div>

			<form onSubmit={handleSubmit} className="space-y-6">
				<div className="space-y-2">
					<Label htmlFor="title">Title</Label>
					<Input
						id="title"
						placeholder="Enter title"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						required
					/>
				</div>

				<div className="space-y-2">
					<Label htmlFor="date">Date</Label>
					<Input
						id="date"
						type="date"
						value={date}
						onChange={(e) => setDate(e.target.value)}
						required
					/>
				</div>

				<div className="space-y-2">
					<Label htmlFor="caption">Caption</Label>
					<Input
						id="caption"
						placeholder="Enter caption"
						value={caption}
						onChange={(e) => setCaption(e.target.value)}
						required
					/>
				</div>

				<div className="space-y-2">
					<Label>Content</Label>
					<MDEditor
						data-color-mode="light"
						value={content}
						onChange={(value) => setContent(value || "")}
						height={500}
						preview="edit"
					/>
				</div>

				<Button type="submit" size="lg" className="w-full">
					Submit
				</Button>
			</form>
		</div>
	);
}
