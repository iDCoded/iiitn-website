/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import { Faculty } from "@/interfaces/types";
import {
	Dialog,
	DialogContent,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { FacultyForm } from "@/components/form/faculty-form";

function FacultyTablePage() {
	const [facultyData, setFacultyData] = useState<Faculty[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchFacultyData = async () => {
			try {
				const response = await fetch(
					"http://localhost:5000/faculty/faculty_staff"
				);
				if (!response.ok) throw new Error("Failed to fetch faculty data");

				const data: Faculty[] = await response.json();
				setFacultyData(data);
			} catch (err: any) {
				console.error(err);
				setError(err);
			} finally {
				setLoading(false);
			}
		};

		fetchFacultyData();
	}, []);

	if (loading) return <p className="text-center text-gray-500">Loading...</p>;
	if (error) return <p className="text-center text-red-500">Error: {error}</p>;

	return (
		<div className="container mx-auto py-10 h-screen">
			<div className="flex flex-col items-end gap-8">
				<Dialog>
					<DialogTrigger asChild>
						<Button variant={"outline"} size={"icon"}>
							<Plus />
						</Button>
					</DialogTrigger>
					<DialogContent className="max-h-[80vh] overflow-y-auto">
						<DialogHeader>
							<DialogTitle>Create Faculty</DialogTitle>
						</DialogHeader>
						<FacultyForm />
					</DialogContent>
				</Dialog>
				<DataTable columns={columns} data={facultyData} />{" "}
			</div>
		</div>
	);
}

export default FacultyTablePage;
