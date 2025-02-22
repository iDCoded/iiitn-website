import React from "react";

const achievementsData = [
    {
        title: "Smart India Hackathon",
        description: "A nationwide initiative to provide students with a platform to solve pressing problems and inculcate a mindset of problem-solving."
    },
    {
        title: "Atal Ranking of Institutions on Innovation Achievements (ARIIA)",
        description: "An initiative to systematically rank educational institutions on their innovation achievements."
    },
    {
        title: "National Innovation and Start-up Policy (NISP)",
        description: "A policy framework to nurture innovation and start-up culture in higher educational institutions."
    },
];

const facultyData = [
    { name: "Dr. A. K. Tripathi", designation: "Director", post: "IIC President" },
    { name: "Dr. B. R. Sharma", designation: "Professor", post: "IIC Vice President" },
    { name: "Dr. C. D. Verma", designation: "Associate Professor", post: "IIC Coordinator" },
    { name: "Dr. E. F. Gupta", designation: "Assistant Professor", post: "IIC Member" },
    { name: "Dr. G. H. Patel", designation: "Assistant Professor", post: "IIC Member" },
];

function Iic() {
	return (
		<div className="bg-gray-100 min-h-screen flex flex-col">
			{/* Header Section */}
			<div className="bg-[#002147] text-white py-16 text-center">
				<h1 className="text-4xl font-bold">Institution Innovation Council</h1>
				<p className="text-lg mt-2">
					Stay connected and contribute to the growth of IIIT Nagpur.
				</p>
			</div>

			{/* Main Content */}
			<div className="max-w-6xl mx-auto p-6 space-y-8">
				{/* About Section */}
				<section className="bg-white shadow-lg rounded-lg p-6">
					<h2 className="text-2xl font-semibold text-gray-800 mb-4">About</h2>
					<p className="text-gray-700">
						In 2018, the Ministry of Education (MoE) through MoE’s Innovation Cell (MIC) established 
						the Institution’s Innovation Council (IIC) program to systematically foster innovation and 
						a start-up ecosystem in educational institutions.
					</p>
					<ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
						<li>Smart India Hackathon</li>
						<li>International Hackathons</li>
						<li>Atal Ranking of Institutions on Innovation Achievements (ARIIA)</li>
						<li>Institution’s Innovation Councils (IICs)</li>
						<li>National Innovation and Start-up Policy (NISP)</li>
					</ul>
				</section>

				{/* Constitution Section */}
				<section className="bg-white shadow-lg rounded-lg p-6">
					<h2 className="text-2xl font-semibold text-gray-800 mb-4">Constitution</h2>
					
					{/* Table Heading */}
					<h3 className="text-xl font-semibold text-center text-gray-900 mb-4">
						Institute Innovation Council at IIIT Nagpur for Academic Year 2024-2025
					</h3>

					{/* Table */}
					<div className="overflow-x-auto">
						<table className="w-full border-collapse border border-gray-300 shadow-lg">
							<thead>
								<tr className="bg-gray-200">
									<th className="border p-3 text-left text-gray-800">Sr. No.</th>
									<th className="border p-3 text-left text-gray-800">Name</th>
									<th className="border p-3 text-left text-gray-800">Designation</th>
									<th className="border p-3 text-left text-gray-800">Post</th>
								</tr>
							</thead>
							<tbody>
								{facultyData.map((faculty, index) => (
									<tr key={index} className="hover:bg-gray-100">
										<td className="border p-3">{index + 1}</td>
										<td className="border p-3">{faculty.name}</td>
										<td className="border p-3">{faculty.designation}</td>
										<td className="border p-3">{faculty.post}</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</section>

				{/* Achievements Section */}
				<section className="bg-white shadow-lg rounded-lg p-6">
					<h2 className="text-2xl font-semibold text-gray-800 mb-4">Achievements of IIC</h2>
					<ul className="list-disc list-inside text-gray-700 space-y-2">
						{achievementsData.map((achievement, index) => (
							<li key={index}>
								<strong>{achievement.title}</strong> - {achievement.description}
							</li>
						))}
					</ul>
				</section>
			</div>
		</div>
	);
}

export default Iic;
