import { useEffect, useState } from "react";
import { columns } from "./columns";
import { DataTable } from "./data-table";
import { Person } from "@/interfaces/types";

function UserTablePage() {
	const [userData, setUserData] = useState<Person[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState("");

	useEffect(() => {
		const fetchCardData = async () => {
			try {
				const response = await fetch("http://localhost:5000/user");
				if (!response.ok) throw new Error("Failed to fetch user data");

				if (response.ok) {
					const data: Person[] = await response.json();
					setUserData(data);
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
				<DataTable columns={columns} data={userData} />
			</div>
		</div>
	);
}

export default UserTablePage;
