import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { BellRing } from "lucide-react";

export function AnnouncementForm() {
	const [title, setTitle] = useState("");
	const [caption, setCaption] = useState("");
	const [content, setContent] = useState("");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log("Announcement submitted:", { title, caption, content });
		toast({
			title: "Announcement Created",
			description: "Your announcement has been successfully created.",
		});
		setTitle("");
		setCaption("");
		setContent("");
	};

	return (
		<div className="max-w-3xl mx-auto">
			<div className="flex items-center gap-3 mb-8">
				<div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
					<BellRing className="h-6 w-6 text-primary" />
				</div>
				<div>
					<h2 className="text-2xl font-semibold">Create Announcement</h2>
					<p className="text-sm text-gray-500">
						Create a new announcement for the college website
					</p>
				</div>
			</div>

			<form onSubmit={handleSubmit} className="space-y-6">
				<div className="space-y-2">
					<Label htmlFor="title">Title</Label>
					<Input
						id="title"
						placeholder="Enter a descriptive title"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						required
					/>
				</div>

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
					<Label htmlFor="content">Content</Label>
					<Textarea
						id="content"
						placeholder="Write your announcement content..."
						value={content}
						onChange={(e) => setContent(e.target.value)}
						className="min-h-[200px]"
						required
					/>
				</div>

				<Button type="submit" size="lg" className="w-full">
					Publish Announcement
				</Button>
			</form>
		</div>
	);
}
