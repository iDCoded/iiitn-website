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
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
} from "@/components/ui/dialog";
import { FacultyForm } from "@/components/form/faculty-form";
import { useState } from "react";

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
			// eslint-disable-next-line react-hooks/rules-of-hooks
			const [openFacultyDialog, setOpenFacultyDialog] = useState(false);

			async function assignRole(user: Person, role: Person["role"]) {
				const { p_id, ...updatedUser } = user;
				if (role === "admin") {
					await fetch(`http://localhost:5000/user/${p_id}`, {
						method: "PUT",
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify({ ...updatedUser, role }),
					});
				} else if (role === "faculty") {
					setOpenFacultyDialog(true);
				}
			}

			return (
				<>
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button variant="secondary">Assign Role</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent align="end">
							<DropdownMenuLabel>Roles</DropdownMenuLabel>
							<DropdownMenuItem onClick={() => assignRole(user, "admin")}>
								Admin
							</DropdownMenuItem>
							<DropdownMenuItem onClick={() => assignRole(user, "faculty")}>
								Faculty
							</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>

					<Dialog open={openFacultyDialog} onOpenChange={setOpenFacultyDialog}>
						<DialogContent>
							<DialogHeader>
								<DialogTitle>Assign Faculty Role</DialogTitle>
							</DialogHeader>
							<FacultyForm user={user} />
						</DialogContent>
					</Dialog>
				</>
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
