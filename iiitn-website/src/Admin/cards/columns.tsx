import { ColumnDef } from "@tanstack/react-table";

export type Card = {
	c_id: string;
	title: string;
	caption: string;
	content: string;
	location: string;
	c_category: string;
	c_sub_category: string;
	date: Date;
	media_img_id: number;
	media_vid_id: number;
	media_doc_id: number;
	updated_by: number;
	added_by: number;
	media?: FileList;
};

export const columns: ColumnDef<Card>[] = [
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
];
