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
import { MoreHorizontal } from "lucide-react";
import ViewMediaDialog from "./media-view-dialog";

const deleteMedia = async (mediaId: number) => {
	await fetch(`${import.meta.env.VITE_API_BASE_URL}/media/media/${mediaId}`, {
		method: "DELETE",
	});
};

export const columns: ColumnDef<IMedia>[] = [
	{
		id: "view",
		cell: ({ row }) => {
			const media = row.original;

			return (
				<div>
					<ViewMediaDialog media={media} />
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
								deleteMedia(media.m_id);
							}}>
							Delete Media
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			);
		},
	},
];
