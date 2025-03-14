/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import { Faculty } from "@/interfaces/types";

function FacultyTablePage() {
	const [facultyData, setFacultyData] = useState<Faculty[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<Error | null>(null);

	useEffect(() => {
		const fetchFacultyData = async () => {
			try {
				const response = await fetch(
					`${import.meta.env.VITE_API_BASE_URL}/faculty/faculty_staff`
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
	if (error)
		return <p className="text-center text-red-500">Error: {error.message}</p>;

	return (
		<div className="container mx-auto py-10 h-screen">
			<div className="flex flex-col items-end gap-8">
				<DataTable columns={columns} data={facultyData} />
			</div>
		</div>
	);
}

export default FacultyTablePage;
