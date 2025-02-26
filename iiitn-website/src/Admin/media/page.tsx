import { useEffect, useState } from "react";
import { columns } from "./columns";
import { DataTable } from "../data-table";
import { IMedia } from "@/interfaces/types";
import { MediaUpload } from "@/Admin/media/media-upload-dialog";

function MediaTablePage() {
	const [mediaData, setMediaData] = useState<IMedia[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState("");

	useEffect(() => {
		const fetchCardData = async () => {
			try {
				const response = await fetch("http://localhost:5000/media/media");
				if (!response.ok) throw new Error("Failed to fetch media data");

				if (response.ok) {
					const data: IMedia[] = await response.json();
					setMediaData(data);
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
				<DataTable columns={columns} data={mediaData} />
			</div>
		</div>
	);
}

export default MediaTablePage;
