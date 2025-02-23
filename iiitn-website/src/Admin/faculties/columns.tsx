import { Faculty } from "@/interfaces/types";
import { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<Faculty>[] = [
	{
		accessorKey: "f_id",
		header: "Faculty ID",
	},
	{
		accessorKey: "person.name",
		header: "Name",
	},
	{
		accessorKey: "person.email",
		header: "Email",
	},
	{
		accessorKey: "join_year",
		header: "Joining Year",
	},
];
