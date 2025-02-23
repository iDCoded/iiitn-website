import { useEffect, useState } from "react";
import { FacultyMember } from "./faculty-member";
import { Faculty } from "@/interfaces/types.ts";

export const AllFaculty = () => {
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
			} catch (err) {
				setError(err.message);
			} finally {
				setLoading(false);
			}
		};

		fetchFacultyData();
	}, []);

	if (loading) return <p className="text-center text-gray-500">Loading...</p>;
	if (error) return <p className="text-center text-red-500">Error: {error}</p>;

	return (
		<div className="flex flex-col gap-4 p-4 max-h-[calc(100vh-100px)] overflow-y-auto">
			{facultyData.map((faculty) => (
				<FacultyMember
					key={faculty.f_id}
					name={faculty.person.name}
					position={faculty.positions}
					imageUrl={faculty.person.imageUrl || "/placeholder.svg"}
					email={faculty.person.email}
					department={faculty.person.department}
				/>
			))}
		</div>
	);
};
