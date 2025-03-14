import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { IMedia } from "@/interfaces/types";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
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
		accessorKey: "date",
		header: ({ column }) => {
			return (
				<Button
					variant={"ghost"}
					onClick={() => {
						column.toggleSorting(column.getIsSorted() === "asc");
					}}>
					Date
					<ArrowUpDown />
				</Button>
			);
		},
		cell: ({ row }) => {
			const { date } = row.original;
			const displayDate = new Date(date);

			return <p>{displayDate.toDateString()}</p>;
		},
	},
	{
		accessorKey: "expiry_date",
		header: "Expiry Date",
		cell: ({ row }) => {
			const { date } = row.original;
			const displayDate = new Date(date); // * Edit to show nothing if no date is specified.

			return <p>{displayDate.toDateString()}</p>;
		},
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
						<DropdownMenuSeparator />
						<DropdownMenuItem
							onClick={() => {
								if (media.media_img_id)
									navigator.clipboard.writeText(media.media_img_id.toString());
								else if (media.media_doc_id)
									navigator.clipboard.writeText(media.media_doc_id.toString());
								else if (media.media_vid_id)
									navigator.clipboard.writeText(media.media_vid_id.toString());
							}}>
							Copy Public URL
						</DropdownMenuItem>
						<DropdownMenuSeparator />
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
