const recruitmentData = [
	{
		title: "Recruitment for the post of Director, IIIT Nagpur",
		date: "22-02-2025",
		lastdate: "29-02-2025",
		description:
			"Applications are invited for the post of Director, IIIT Nagpur.",
		document: "#", // Add actual document link if available
	},
	{
		title: "Recruitment for the post of Registrar, IIIT Nagpur",
		date: "22-02-2025",
		lastdate: "29-02-2025",
		description:
			"Applications are invited for the post of Director, IIIT Nagpur.",
		document: "#", // Add actual document link if available
	},
];

function Recruitments() {
	return (
		<div className="bg-gray-100 min-h-screen flex flex-col">
			{/* Header Section */}
			<header className="bg-primary text-white py-16 text-center">
				<h1 className="text-4xl font-bold">Recruitments</h1>
				<p className="text-lg mt-2">
					Ensuring transparency and accountability in IIIT Nagpur.
				</p>
			</header>

			{/* Main Content */}
			<main className="max-w-5xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
				{/* Recruitment Listings */}
				<section className="mb-8">
					<h2 className="text-2xl font-semibold text-gray-800 mb-6">
						Current Openings
					</h2>

					{/* Recruitment Cards */}
					<div className="grid gap-6">
						{recruitmentData.map((job, index) => (
							<div
								key={index}
								className="bg-gray-50 p-5 shadow-md rounded-lg border-l-4 border-primary">
								<h3 className="text-xl font-semibold text-gray-900">
									{job.title}
								</h3>
								<p className="text-sm text-gray-600 mt-1">
									📅 Date: {job.date} | ⏳ Last Date: {job.lastdate}
								</p>
								<p className="text-gray-700 mt-2">{job.description}</p>
								<a
									href={job.document}
									target="_blank"
									rel="noopener noreferrer"
									className="mt-3 inline-block text-primary font-semibold hover:underline">
									📄 Download Document
								</a>
							</div>
						))}
					</div>
				</section>

				{/* Online Application Portal */}
				<section className="text-center mt-10">
					<p className="text-lg text-gray-800 font-medium">Apply Online:</p>
					<a
						href="https://recruitment.iiitn.ac.in/"
						target="_blank"
						rel="noopener noreferrer"
						className="mt-3 inline-block bg-primary text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-[#001730] transition">
						Apply Here 🚀
					</a>
				</section>
			</main>
		</div>
	);
}

export default Recruitments;
