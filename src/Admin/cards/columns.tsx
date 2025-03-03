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
import { ArrowUpDown, MoreHorizontal } from "lucide-react";
import CardEditDialog from "./card-edit-dialog";
import ViewCardDialog from "./card-view-dialog";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";

async function updateCardVisibility(
	card: ICard,
	c_id: string,
	visible: boolean
) {
	await fetch(`${import.meta.env.VITE_API_BASE_URL}/card/cards/${c_id}`, {
		method: "PUT",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ ...card, visibility: visible }),
	});
}

async function deleteCard(c_id: string) {
	await fetch(`${import.meta.env.VITE_API_BASE_URL}/card/cards/${c_id}`, {
		method: "DELETE",
	});
}

export const columns: ColumnDef<ICard>[] = [
	{
		id: "visibilty",
		header: () => {
			return (
				<TooltipProvider>
					<Tooltip>
						<TooltipTrigger>Visible</TooltipTrigger>
						<TooltipContent>Display on homepage?</TooltipContent>
					</Tooltip>
				</TooltipProvider>
			);
		},
		cell: ({ row }) => {
			const card = row.original;
			// eslint-disable-next-line react-hooks/rules-of-hooks
			const [isVisible, setIsVisible] = useState(card.visibility);

			const handleToggle = async () => {
				const newVisibility = !isVisible;
				setIsVisible(newVisibility);
				await updateCardVisibility(card, card.c_id, newVisibility);
			};

			return (
				<div className="flex justify-center items-center">
					<Switch checked={isVisible} onCheckedChange={handleToggle} />
				</div>
			);
		},
	},
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
								deleteCard(card.c_id);
							}}>
							Delete Card
						</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			);
		},
	},
];
