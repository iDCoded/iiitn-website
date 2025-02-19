"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { Label } from "@/components/ui/label";

export function AnnouncementForm() {
	const [title, setTitle] = useState("");
	const [content, setContent] = useState("");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Here you would typically send the data to your backend
		console.log("Announcement submitted:", { title, content });
		toast({
			title: "Announcement Created",
			description: "Your announcement has been successfully created.",
		});
		setTitle("");
		setContent("");
	};

	return (
		<form onSubmit={handleSubmit} className="space-y-4">
			<div className="space-y-2">
				<Label htmlFor="title">Title</Label>
				<Input
					id="title"
					placeholder="Enter announcement title"
					value={title}
					onChange={(e) => setTitle(e.target.value)}
					required
				/>
			</div>
			<div className="space-y-2">
				<Label htmlFor="content">Content</Label>
				<Textarea
					id="content"
					placeholder="Enter announcement content"
					value={content}
					onChange={(e) => setContent(e.target.value)}
					required
					className="min-h-[100px]"
				/>
			</div>
			<Button type="submit" className="w-full">
				Create Announcement
			</Button>
		</form>
	);
}
