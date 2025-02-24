import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IMedia } from "@/interfaces/types";
import { ColumnDef } from "@tanstack/react-table";
import { Eye, MoreHorizontal } from "lucide-react";

export const columns: ColumnDef<IMedia>[] = [
	{
		id: "view",
		cell: ({ row }) => {
			const media = row.original;
			console.log(media);

			return (
				<div>
					<Eye />
				</div>
			);
		},
	},
	{
		accessorKey: "title",
		header: "Title",
	},
	{
		accessorKey: "m_category",
		header: "Category",
	},
	{
		accessorKey: "m_sub_category",
		header: "Sub Category",
	},
	{
		id: "actions",
		cell: ({ row }) => {
			const media = row.original;

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
								console.log(`Deleted Media: ${media.m_id}`);
							}}>
							Delete Media
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			);
		},
	},
];
