import { Publication } from "@/interfaces/types";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Publication>[] = [
	{
		accessorKey: "title",
		header: "Title",
	},
	{
		accessorKey: "published_in",
		header: "Published Ins",
	},
	{
		accessorKey: "link",
		header: "Link",
	},
	{
		accessorKey: "type",
		header: "Type",
	},
	{
		accessorKey: "published_in",
		header: "Published In",
	},
];
