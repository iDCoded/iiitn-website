import { Button } from "../ui/button";
import { Card, CardContent, CardFooter } from "../ui/card";
import { Mail, Trash, Pencil } from "lucide-react";

interface FacultyMemberProps {
	name: string;
	position: string;
	imageUrl: string;
	email: string;
	department: string;
}

export const FacultyMember = ({
	name,
	position,
	imageUrl,
	email,
	department,
}: FacultyMemberProps) => {
	return (
		<Card className="flex flex-col items-center p-4 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 bg-white dark:bg-gray-900 w-full max-w-sm">
			<img
				src={imageUrl}
				alt={`${name}'s photo`}
				className="w-24 h-24 rounded-full object-cover border-2 border-gray-300 shadow-sm"
			/>
			<CardContent className="text-center mt-4 space-y-1">
				<h3 className="text-lg font-semibold text-gray-900 dark:text-white">
					{name}
				</h3>
				<p className="text-sm text-gray-600 dark:text-gray-400">{position}</p>
				<p className="text-xs text-gray-500 dark:text-gray-500">{department}</p>
				<div className="flex items-center justify-center gap-1 text-sm text-blue-600 dark:text-blue-400">
					<Mail size={14} />
					<span>{email}</span>
				</div>
			</CardContent>
			<CardFooter className="flex justify-between w-full mt-4">
				<Button variant="outline" size="sm" className="flex items-center gap-1">
					<Pencil size={14} /> Edit
				</Button>
				<Button
					variant="destructive"
					size="sm"
					className="flex items-center gap-1">
					<Trash size={14} /> Delete
				</Button>
			</CardFooter>
		</Card>
	);
};
