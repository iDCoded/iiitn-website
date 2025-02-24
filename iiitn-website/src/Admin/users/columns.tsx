import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Person } from "@/interfaces/types";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";

async function assignRole(user: Person, role: Person["role"]) {
	const { p_id, ...updatedUser } = user; // Exclude p_id from the user object

	await fetch(`http://localhost:5000/user/${p_id}`, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ ...updatedUser, role }),
	});
}

export const columns: ColumnDef<Person>[] = [
	{
		accessorKey: "name",
		header: "Name",
	},
	{
		accessorKey: "email_pri",
		header: "Email",
	},
	{
		accessorKey: "phone_no",
		header: "Phone Number",
	},
	{
		id: "assign",
		header: "Role",
		cell: ({ row }) => {
			const user = row.original;

			return (
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="secondary">Assign Role</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent align="end">
						<DropdownMenuLabel>Roles</DropdownMenuLabel>
						<DropdownMenuItem
							onClick={() => {
								assignRole(user, "admin");
							}}>
							Admin
						</DropdownMenuItem>
						<DropdownMenuItem
							onClick={() => {
								assignRole(user, "faculty");
							}}>
							Faculty
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			);
		},
	},
	{
		id: "actions",
		cell: ({ row }) => {
			const user = row.original;

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
							className="text-red-400"
							onClick={() => {
								console.log(`Deleted User: ${user.name}`);
							}}>
							Delete User
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			);
		},
	},
];
