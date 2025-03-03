const RtiDetailsAndReports = () => {
	const rtiReports = [
		{ year: "2017-2018", links: ["#", "#", "#", "#"] },
		{ year: "2018-2019", links: ["#", "#", "#", "#"] },
		{ year: "2019-2020", links: ["#", "#", "#", "#"] },
		{ year: "2020-2021", links: ["#", "#", "#", "#"] },
		{ year: "2021-2022", links: ["#", "#", "#", "#"] },
		{ year: "2022-2023", links: ["#", "#", "#", "#"] },
		{ year: "2023-2024", links: ["#", "#", "#", "#"] },
	];

	return (
		<div className="bg-gray-100 min-h-screen font-sans">
			{/* Header Section */}
			<header className="bg-blue-600 text-white py-16 text-center shadow-lg">
				<h1 className="text-4xl font-extrabold">RTI Details & Reports</h1>
				<p className="text-lg mt-2 italic opacity-90">
					"Transparency and accessibility at IIIT Nagpur."
				</p>
			</header>

			{/* RTI Details Section */}
			<section className="max-w-6xl mx-auto py-12 px-6 bg-white shadow-lg rounded-lg mt-8">
				<h2 className="text-3xl font-semibold text-blue-700 border-b-4 border-blue-600 pb-2 mb-6">
					RTI Details
				</h2>
				<div className="space-y-4 text-gray-700 leading-relaxed">
					<h3 className="text-2xl font-medium">1. Organization and Function</h3>
					<ul className="list-disc pl-6">
						<li>Particulars of its organization, functions, and duties</li>
						<li>Power and duties of its officers and employees</li>
						<li>Procedure followed in the decision-making process</li>
						<li>Norms for discharge of functions</li>
						<li>Rules, regulations, instructions manual, and records</li>
						<li>
							Boards, Councils, Committees constituted as part of the Public
							Authority
						</li>
					</ul>
				</div>
			</section>

			{/* RTI Reports Table */}
			<section className="max-w-6xl mx-auto py-12 px-6 mt-8 bg-white shadow-lg rounded-lg">
				<h2 className="text-3xl font-semibold text-blue-700 border-b-4 border-blue-600 pb-2 mb-6">
					RTI Reports
				</h2>
				<div className="overflow-x-auto">
					<table className="w-full border-collapse border border-gray-300 text-gray-700">
						<thead className="bg-blue-600 text-white">
							<tr>
								<th className="border border-gray-300 py-3 px-4">Year</th>
								<th className="border border-gray-300 py-3 px-4">Q1</th>
								<th className="border border-gray-300 py-3 px-4">Q2</th>
								<th className="border border-gray-300 py-3 px-4">Q3</th>
								<th className="border border-gray-300 py-3 px-4">Q4</th>
							</tr>
						</thead>
						<tbody>
							{rtiReports.map((report, index) => (
								<tr
									key={index}
									className="text-center border border-gray-300 bg-gray-50 hover:bg-gray-100">
									<td className="py-3 px-4 font-semibold">{report.year}</td>
									{report.links.map((link, idx) => (
										<td key={idx} className="py-3 px-4">
											<a
												href={link}
												target="_blank"
												rel="noopener noreferrer"
												className="text-blue-600 hover:underline">
												Download
											</a>
										</td>
									))}
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</section>

			{/* Contact Information */}
			<section className="max-w-6xl mx-auto py-12 px-6 bg-white shadow-lg rounded-lg mt-8 mb-12">
				<h2 className="text-3xl font-semibold text-blue-700 border-b-4 border-blue-600 pb-2 mb-6">
					Contact Information
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{/* Central Public Information Officer */}
					<div className="p-6 bg-gray-50 shadow-md rounded-lg">
						<h3 className="text-2xl font-semibold text-blue-700">
							Central Public Information Officer
						</h3>
						<p className="mt-2">
							<strong>Ms. Shilpa Pawankar</strong>, Assistant Registrar
							(Accounts)
						</p>
						<p className="text-gray-600">
							Indian Institute of Information Technology, Nagpur
						</p>
						<p className="mt-2">
							<strong>Phone:</strong> 8080339345
						</p>
						<p>
							<strong>Email:</strong>{" "}
							<a
								href="mailto:aracct@iiitn.ac.in"
								className="text-blue-600 hover:underline">
								aracct@iiitn.ac.in
							</a>
						</p>
					</div>

					{/* First Appellate Authority */}
					<div className="p-6 bg-gray-50 shadow-md rounded-lg">
						<h3 className="text-2xl font-semibold text-blue-700">
							First Appellate Authority
						</h3>
						<p className="mt-2">
							<strong>Shri Kailas N. Dakhale</strong>, Registrar
						</p>
						<p className="text-gray-600">
							Indian Institute of Information Technology, Nagpur
						</p>
						<p className="mt-2">
							<strong>Phone:</strong> 8087983449
						</p>
						<p>
							<strong>Email:</strong>{" "}
							<a
								href="mailto:registrar@iiitn.ac.in"
								className="text-blue-600 hover:underline">
								registrar@iiitn.ac.in
							</a>
						</p>
					</div>
				</div>
			</section>
		</div>
	);
};

export default RtiDetailsAndReports;
