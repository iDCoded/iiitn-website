import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { Calendar } from "lucide-react";

export function EventForm() {
	const [title, setTitle] = useState("");
	const [date, setDate] = useState("");
	const [location, setLocation] = useState("");
	const [caption, setCaption] = useState("");
	const [description, setDescription] = useState("");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log("Event submitted:", {
			title,
			date,
			location,
			caption,
			description,
		});
		toast({
			title: "Event Created",
			description: "Your event has been successfully created.",
		});
		setTitle("");
		setDate("");
		setLocation("");
		setCaption("");
		setDescription("");
	};

	return (
		<div className="max-w-3xl mx-auto">
			<div className="flex items-center gap-3 mb-8">
				<div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
					<Calendar className="h-6 w-6 text-primary" />
				</div>
				<div>
					<h2 className="text-2xl font-semibold">Create Event</h2>
					<p className="text-sm text-gray-500">
						Add a new event to the college calendar
					</p>
				</div>
			</div>

			<form onSubmit={handleSubmit} className="space-y-6">
				<div className="space-y-2">
					<Label htmlFor="title">Event Title</Label>
					<Input
						id="title"
						placeholder="Enter event title"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						required
					/>
				</div>

				<div className="grid grid-cols-2 gap-4">
					<div className="space-y-2">
						<Label htmlFor="date">Date</Label>
						<Input
							type="date"
							id="date"
							value={date}
							onChange={(e) => setDate(e.target.value)}
							required
						/>
					</div>
					<div className="space-y-2">
						<Label htmlFor="location">Location</Label>
						<Input
							id="location"
							placeholder="Enter event location"
							value={location}
							onChange={(e) => setLocation(e.target.value)}
							required
						/>
					</div>
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
					<Label htmlFor="description">Description</Label>
					<Textarea
						id="description"
						placeholder="Write your event description..."
						value={description}
						onChange={(e) => setDescription(e.target.value)}
						className="min-h-[200px]"
						required
					/>
				</div>

				<Button type="submit" size="lg" className="w-full">
					Create Event
				</Button>
			</form>
		</div>
	);
}
