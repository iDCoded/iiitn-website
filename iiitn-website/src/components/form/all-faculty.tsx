import { FacultyMember } from "./faculty-member";

const facultyData = [
	{
		name: "Dr. Aarti Sharma",
		position: "Professor of Computer Science",
		imageUrl: "/placeholder.svg",
		email: "aarti.sharma@university.edu",
		department: "Computer Science",
	},
	{
		name: "Dr. Rajesh Verma",
		position: "Head of Mechanical Engineering",
		imageUrl: "/placeholder.svg",
		email: "rajesh.verma@university.edu",
		department: "Mechanical Engineering",
	},
	{
		name: "Dr. Priya Desai",
		position: "Associate Professor of Mathematics",
		imageUrl: "/placeholder.svg",
		email: "priya.desai@university.edu",
		department: "Mathematics",
	},
	{
		name: "Dr. Anil Kumar",
		position: "Dean of Research",
		imageUrl: "/placeholder.svg",
		email: "anil.kumar@university.edu",
		department: "Physics",
	},
];

export const AllFaculty = () => {
	return (
		<div className="flex flex-col gap-4 p-4 max-h-[calc(100vh-100px)] overflow-y-auto">
			{facultyData.map((faculty, index) => (
				<FacultyMember
					key={index}
					name={faculty.name}
					position={faculty.position}
					imageUrl={faculty.imageUrl}
					email={faculty.email}
					department={faculty.department}
				/>
			))}
		</div>
	);
};
