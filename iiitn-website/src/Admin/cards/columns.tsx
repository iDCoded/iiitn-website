import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ICard } from "@/interfaces/types";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import CardEditDialog from "./card-edit-dialog";
import ViewCardDialog from "./card-view-dialog";

export const columns: ColumnDef<ICard>[] = [
	{
		id: "view",
		cell: ({ row }) => {
			const card = row.original;

			return (
				<div>
					<ViewCardDialog card={card} />
				</div>
			);
		},
	},
	{
		accessorKey: "title",
		header: "Title",
	},
	{
		accessorKey: "caption",
		header: "Caption",
	},
	{
		accessorKey: "c_category",
		header: "Category",
	},
	{
		accessorKey: "c_sub_category",
		header: "Sub Category",
	},
	{
		accessorKey: "date",
		header: "Date",
	},
	{
		id: "actions",
		cell: ({ row }) => {
			const card = row.original;

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
						<CardEditDialog card={card} />
						<DropdownMenuItem
							className="text-red-400"
							onClick={() => {
								console.log(`Deleted ${card.c_id}`);
							}}>
							Delete Card
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			);
		},
	},
];
