function EqualOpportunityCell() {
	// Committee Members Data
	const committeeMembers = [
		{
			id: 1,
			name: "Dr. Anil Kumar Kushwah",
			designation: "Chairman, Asst. Professor (CSE)",
		},
		{
			id: 2,
			name: "Dr. Kamaljeet",
			designation: "Member, Asst. Professor (BS)",
		},
		{
			id: 3,
			name: "Mr. Ashok Dongare",
			designation: "Member, Junior Engineer (Civil)",
		},
		{
			id: 4,
			name: "Ms. Nilobha Mahajan",
			designation: "Member, Junior Assistant (Multi-Skilled)",
		},
		{ id: 5, name: "Mr. Jigar Shah", designation: "Member, Parent" },
		{
			id: 6,
			name: "Mr. Nenavath Chandra Shekhar",
			designation: "Member, Student (BT22CSH040)",
		},
	];

	return (
		<div className="bg-gray-100 min-h-screen flex flex-col">
			{/* Header Section */}
			<header className="bg-primary text-white py-16 text-center">
				<h1 className="text-5xl font-bold">Equal Opportunity Cell</h1>
				<p className="text-lg mt-2 italic">
					"Ensuring inclusivity and accessibility for all."
				</p>
			</header>

			{/* Introduction Section */}
			<section className="max-w-5xl mx-auto bg-white p-6 shadow-lg rounded-lg mt-10">
				<h2 className="text-3xl font-semibold text-primary">
					<span className="text-accent text-4xl">| </span> About the Cell
				</h2>
				<p className="text-gray-700 mt-6 leading-relaxed">
					The **Equal Opportunity Cell (EOC)** is established to cater to the
					day-to-day needs of **differently-abled persons** at IIIT Nagpur. The
					committee includes **teachers, staff, students, and parents** to
					create an **inclusive environment** and address accessibility
					concerns.
				</p>
			</section>

			{/* Committee Members Table */}
			<section className="max-w-5xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg w-full">
				<h2 className="text-3xl font-semibold text-primary">
					<span className="text-accent text-4xl">| </span> Committee Members
				</h2>
				<div className="overflow-x-auto mt-6">
					<table className="min-w-full bg-white border border-gray-300 shadow-sm rounded-lg">
						<thead className="bg-primary text-white">
							<tr>
								<th className="py-3 px-6 text-left">#</th>
								<th className="py-3 px-6 text-left">Name</th>
								<th className="py-3 px-6 text-left">Designation</th>
							</tr>
						</thead>
						<tbody>
							{committeeMembers.map((member, index) => (
								<tr
									key={index}
									className="border-b hover:bg-gray-100 transition">
									<td className="py-3 px-6">{member.id}</td>
									<td className="py-3 px-6">{member.name}</td>
									<td className="py-3 px-6 font-semibold">
										{member.designation}
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</section>

			{/* Contact Information */}
			<section className="max-w-5xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
				<h2 className="text-3xl font-semibold text-primary">
					<span className="text-accent text-4xl">| </span> Contact Information
				</h2>
				<p className="text-gray-700 mt-6 leading-relaxed">
					For any queries or assistance regarding **equal opportunity and
					accessibility**, please reach out to the **Equal Opportunity Cell**.
					The committee is committed to ensuring that every individual receives
					**equal treatment and support**.
				</p>
			</section>

			{/* Footer */}
			<footer className="text-center py-6 text-gray-600">
				&copy; {new Date().getFullYear()} IIIT Nagpur | All Rights Reserved
			</footer>
		</div>
	);
}

export default EqualOpportunityCell;
