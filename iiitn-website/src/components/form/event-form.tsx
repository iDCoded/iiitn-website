import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { Label } from "@/components/ui/label";

export function EventForm() {
	const [title, setTitle] = useState("");
	const [date, setDate] = useState("");
	const [location, setLocation] = useState("");
	const [description, setDescription] = useState("");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		// Here you would typically send the data to your backend
		console.log("Event submitted:", { title, date, location, description });
		toast({
			title: "Event Created",
			description: "Your event has been successfully created.",
		});
		setTitle("");
		setDate("");
		setLocation("");
		setDescription("");
	};

	return (
		<form onSubmit={handleSubmit} className="space-y-4">
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
				<Label htmlFor="description">Description</Label>
				<Textarea
					id="description"
					placeholder="Enter event description"
					value={description}
					onChange={(e) => setDescription(e.target.value)}
					required
					className="min-h-[100px]"
				/>
			</div>
			<Button type="submit" className="w-full">
				Create Event
			</Button>
		</form>
	);
}
