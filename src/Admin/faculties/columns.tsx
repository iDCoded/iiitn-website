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
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import FacultyEditDialog from "./faculty-edit-dialog";

const deleteFaculty = async (facultyId: string) => {
	await fetch(`http://localhost:5000/faculty/faculty_staff/${facultyId}`, {
		method: "DELETE",
	});
};

export const columns: ColumnDef<Faculty>[] = [
	{
		accessorKey: "name",
		header: "Name",
	},
	{
		accessorKey: "email",
		header: "Email",
	},
	{
		accessorKey: "phone_no",
		header: "Phone Number",
	},
	{
		accessorKey: "experience",
		header: ({ column }) => {
			return (
				<Button
					variant={"ghost"}
					onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
					Experience
					<ArrowUpDown />
				</Button>
			);
		},
		cell: ({ row }) => {
			return <p className="text-center">{row.original.experience}</p>;
		},
	},
	{
		accessorKey: "positions",
		header: "Positions",
	},
	{
		accessorKey: "research",
		header: "Research",
	},
	{
		accessorKey: "join_year",
		header: ({ column }) => {
			return (
				<Button
					variant={"ghost"}
					onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
					Join Year
					<ArrowUpDown />
				</Button>
			);
		},
		cell: ({ row }) => {
			return <p className="text-center">{row.original.join_year}</p>;
		},
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
						<DropdownMenuSeparator />
						<FacultyEditDialog faculty={faculty} />
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
