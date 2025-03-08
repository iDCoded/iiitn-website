import { useEffect, useState } from "react";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import { Publication } from "@/interfaces/types";
import { MediaUpload } from "@/Admin/media/media-upload-dialog";

function FacultyPublicationsTablePage() {
	const [pubData, setPubData] = useState<Publication[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState("");

	useEffect(() => {
		const fetchCardData = async () => {
			try {
				const response = await fetch(
					`${import.meta.env.VITE_API_BASE_URL}/media/media`
				);
				if (!response.ok) throw new Error("Failed to fetch media data");

				if (response.ok) {
					const data: Publication[] = await response.json();
					setPubData(data);
				}
			} catch (err: unknown) {
				console.error(err);
				setError("Unable to fetch data. Please try again later.");
			} finally {
				setLoading(false);
			}
		};

		fetchCardData();
	}, []);

	if (loading) return <p className="text-center text-gray-500">Loading...</p>;
	if (error) return <p className="text-center text-red-500">Error: {error}</p>;

	return (
		<div className="container mx-auto py-10 h-screen">
			<div className="flex flex-col items-end gap-8">
				<MediaUpload />
				<DataTable columns={columns} data={pubData} />
			</div>
		</div>
	);
}

export default FacultyPublicationsTablePage;
