import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Faculty } from "@/interfaces/types";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";

const deleteFaculty = async (facultyId: number) => {
	await fetch(`http://localhost:5000/faculty/faculty_staff/${facultyId}`, {
		method: "DELETE",
	});
};

export const columns: ColumnDef<Faculty>[] = [
	{
		accessorKey: "f_id",
		header: "Faculty ID",
	},
	{
		accessorKey: "person.name",
		header: "Name",
	},
	{
		accessorKey: "person.email",
		header: "Email",
	},
	{
		accessorKey: "f_or_s",
		header: "Faculty or Staff",
		cell: ({ row }) => {
			const post = new String(row.getValue("f_or_s"));
			return <Badge>{post}</Badge>;
		},
	},
	{
		accessorKey: "join_year",
		header: "Joining Year",
	},
	{
		id: "actions",
		cell: ({ row }) => {
			const faculty = row.original;

			return (
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="ghost" className="h-8 w-8 p-0">
							<span className="sr-only">Open menu</span>
							<MoreHorizontal className="h-4 w-4" />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end">
						<DropdownMenuLabel>Actions</DropdownMenuLabel>
						<DropdownMenuItem
							onClick={() =>
								navigator.clipboard.writeText(faculty.person.email)
							}>
							Copy faculty email
						</DropdownMenuItem>
						<DropdownMenuSeparator />
						<DropdownMenuItem>Edit Faculty</DropdownMenuItem>
						<DropdownMenuItem
							className="text-red-400"
							onClick={() => {
								deleteFaculty(faculty.f_id);
							}}>
							Delete Faculty
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			);
		},
	},
];
