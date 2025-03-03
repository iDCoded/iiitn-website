const AnnualAccountAndReports = () => {
	const reports = [
		{
			title: "Annual Reports",
			data: [
				{
					year: "2021-2022",
					link: "https://iiitn.ac.in/annual-reports/2021-2022.pdf",
				},
				{
					year: "2020-2021",
					link: "https://iiitn.ac.in/annual-reports/2020-2021.pdf",
				},
			],
		},
		{
			title: "Audit Reports",
			data: [
				{
					year: "2021-2022",
					link: "https://iiitn.ac.in/audit-reports/2021-2022.pdf",
				},
				{
					year: "2020-2021",
					link: "https://iiitn.ac.in/audit-reports/2020-2021.pdf",
				},
			],
		},
		{
			title: "Balance Sheet Reports",
			data: [
				{
					year: "2021-2022",
					link: "https://iiitn.ac.in/balance-sheet/2021-2022.pdf",
				},
				{
					year: "2020-2021",
					link: "https://iiitn.ac.in/balance-sheet/2020-2021.pdf",
				},
			],
		},
	];

	return (
		<div className="bg-gray-50 min-h-screen">
			{/* Header Section */}
			<header className="bg-primary text-white py-16 text-center">
				<h1 className="text-5xl font-bold">Annual Accounts & Reports</h1>
				<p className="text-lg mt-2 italic">
					"Access detailed financial statements and reports."
				</p>
			</header>

			{/* Reports Section */}
			<div className="max-w-6xl mx-auto py-12 px-6">
				{reports.map((section, index) => (
					<div key={index} className="mb-12">
						<h2 className="text-3xl font-semibold text-primary border-b-4 border-primary pb-2 mb-6">
							{section.title}
						</h2>

						{/* Report Cards */}
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
							{section.data.map((report, idx) => (
								<div
									key={idx}
									className="bg-white shadow-lg p-6 rounded-lg border border-gray-200">
									<h3 className="text-xl font-medium">{report.year}</h3>
									<p className="text-gray-600 mt-1">Click below to download:</p>
									<a
										href={report.link}
										target="_blank"
										rel="noopener noreferrer"
										className="mt-4 inline-block bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-all">
										Download PDF
									</a>
								</div>
							))}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default AnnualAccountAndReports;
