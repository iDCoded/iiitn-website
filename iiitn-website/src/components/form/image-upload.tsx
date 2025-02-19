"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { Label } from "@/components/ui/label";
import { ImageIcon, Upload } from "lucide-react";

export function ImageUpload() {
	const [file, setFile] = useState<File | null>(null);

	const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files) {
			setFile(e.target.files[0]);
		}
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (file) {
			// Here you would typically send the file to your backend
			console.log("File to upload:", file);
			toast({
				title: "Image Uploaded",
				description: "Your image has been successfully uploaded.",
			});
			setFile(null);
		}
	};

	return (
		<form onSubmit={handleSubmit} className="space-y-4">
			<div className="space-y-2">
				<Label htmlFor="image">Select Image</Label>
				<div className="flex items-center space-x-2">
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
				<div className="mt-4">
					<p className="text-sm text-gray-500 mb-2">
						Selected file: {file.name}
					</p>
					<img
						src={URL.createObjectURL(file) || "/placeholder.svg"}
						alt="Preview"
						className="max-w-xs h-auto rounded-md shadow-md"
					/>
				</div>
			)}
			<Button type="submit" disabled={!file} className="w-full">
				<Upload className="mr-2 h-4 w-4" />
				Upload Image
			</Button>
		</form>
	);
}
