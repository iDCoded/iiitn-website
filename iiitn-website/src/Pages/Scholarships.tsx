import React from "react";

const scholarshipData = [
	{
		state: "Maharashtra",
		schemes: [
			["Government of India Post-Matric Scholarship", "Social Justice and Special Assistance", "#"],
			["Post-Matric Tuition Fee and Examination Fee (Freeship)", "Social Justice and Special Assistance", "#"],
			["Post Matric Scholarship Scheme (GOI)", "Tribal Development Department", "#"],
			["Tuition Fee & Exam Fee for Tribal Students (Freeship)", "Tribal Development Department", "#"],
			["Post Matric Scholarship to VJNT Students", "VJNT, OBC and SBC Welfare Department", "#"],
			["Tuition Fees and Examination Fees to VJNT Students", "VJNT, OBC and SBC Welfare Department", "#"],
			["Post Matric Scholarship to OBC Students", "VJNT, OBC and SBC Welfare Department", "#"],
			["Tuition Fees and Examination Fees to OBC Students", "VJNT, OBC and SBC Welfare Department", "#"],
		],
	},
	{
		state: "Madhya Pradesh",
		schemes: [["Mukhya Mantri Medhavi Vidyarthi Yojana - MMVY", "Department of Technical Education & Skill Development", "#"]],
	},
	{
		state: "Uttar Pradesh",
		schemes: [["Post Matric Other State Scholarship for General Category", "Social Welfare Department", "#"]],
	},
	{
		state: "Rajasthan",
		schemes: [["Dr. Ambedkar Post Matric Scholarship for EBC Students", "Social Justice and Empowerment Department", "#"]],
	},
	{
		state: "Telangana",
		schemes: [["Post-Matric (Outside State) Scholarship for ST/SC/BC/EBC/Disabled Welfare", "Government of Telangana", "#"]],
	},
	{
		state: "Andhra Pradesh",
		schemes: [["Post-Matric (Outside State) Scholarship for ST/SC", "Government of Andhra Pradesh", "#"]],
	},
	{
		state: "National",
		schemes: [
			["Post Matric Scholarships Scheme for Minorities", "Ministry of Minority Affairs", "#"],
			["Merit Cum Means Scholarship For Professional and Technical Courses", "Ministry of Minority Affairs", "#"],
			["Post-matric Scholarship for Students with Disabilities", "Department of Empowerment of Persons with Disabilities", "#"],
			["Top Class Education Scheme for SC Students", "Ministry of Social Justice and Empowerment", "#"],
			["Central Sector Scheme of Scholarships for College and University Students", "Department of Higher Education", "#"],
			["Prime Minister's Scholarship Scheme For CAPF & Assam Rifles", "Ministry of Tribal Affairs", "#"],
			["National Fellowship and Scholarship for Higher Education of ST Students", "Ministry of Tribal Affairs", "#"],
			["PM Scholarship Scheme For Wards of States/UTs Police Personnel Martyred in Terror/NAXAL Attacks", "Ministry of Home Affairs", "#"],
			["Prime Minister's Scholarship Scheme For RPF/RPSF", "Ministry of Railways", "#"],
		],
	},
];

function Scholarships() {
	return (
		<div className="bg-gray-100 min-h-screen flex flex-col">
			{/* Header Section */}
			<header className="bg-[#002147] text-white py-14 text-center">
				<h1 className="text-3xl font-bold">Scholarships</h1>
			</header>

			{/* Main Content */}
			<main className="max-w-5xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-8">
				{/* National Overseas Scholarship */}
				<h2 className="text-xl font-semibold text-gray-800 mb-4">National Overseas Scholarship Scheme (NOS)</h2>
				<ul className="list-disc list-inside text-gray-700">
					<li>
						<strong>Hindi Version:</strong> <a href="#" className="text-blue-600 hover:underline">Click Here</a>
					</li>
					<li>
						<strong>English Version:</strong> <a href="#" className="text-blue-600 hover:underline">Click Here</a>
					</li>
					<li>
						<strong>Instruction Manual:</strong> <a href="#" className="text-blue-600 hover:underline">Click Here</a>
					</li>
				</ul>

				{/* Scholarships Table */}
				<h2 className="text-xl font-semibold text-gray-800 mt-6 mb-4">State-wise Scholarship Schemes</h2>
				<div className="overflow-x-auto">
					<table className="w-full border border-gray-300 text-gray-700">
						<thead className="bg-gray-200">
							<tr>
								<th className="p-3 border text-left">Student Domicile State</th>
								<th className="p-3 border text-left">Name of the Scheme</th>
								<th className="p-3 border text-left">Governed by</th>
								<th className="p-3 border text-left">Website Link</th>
							</tr>
						</thead>
						<tbody>
							{scholarshipData.map((stateData, index) =>
								stateData.schemes.map(([scheme, governedBy, link], schemeIndex) => (
									<tr key={`${index}-${schemeIndex}`} className="border">
										{schemeIndex === 0 ? (
											<td rowSpan={stateData.schemes.length} className="p-3 font-semibold border">
												{stateData.state}
											</td>
										) : null}
										<td className="p-3 border">{scheme}</td>
										<td className="p-3 border">{governedBy}</td>
										<td className="p-3 border">
											<a href={link} className="text-blue-600 hover:underline">Click Here</a>
										</td>
									</tr>
								))
							)}
						</tbody>
					</table>
				</div>
			</main>

			
		</div>
	);
}

export default Scholarships;
