import { FaFilePdf } from "react-icons/fa"; // Importing an icon for document links

const nirfData = [
	{
		year: 2023,
		documents: [
			{ title: "CSE NIRF Report", link: "#" },
			{ title: "ECE NIRF Report", link: "#" },
		],
	},
	{
		year: 2022,
		documents: [
			{ title: "CSE NIRF Report", link: "#" },
			{ title: "ECE NIRF Report", link: "#" },
		],
	},
	{
		year: 2021,
		documents: [
			{ title: "CSE NIRF Report", link: "#" },
			{ title: "ECE NIRF Report", link: "#" },
		],
	},
];

function NIRF() {
	return (
		<div className="bg-gray-100 min-h-screen">
			{/* Header Section */}
			<header className="bg-primary text-white py-16 text-center">
				<h1 className="text-5xl font-bold">📊 NIRF Rankings</h1>
				<p className="text-lg mt-2 italic">
					"Recognizing Excellence in Academics & Research"
				</p>
			</header>

			{/* Introduction Section */}
			<section className="max-w-5xl mx-auto bg-white p-6 shadow-lg rounded-lg mt-10">
				<h2 className="text-3xl font-semibold text-primary">What is NIRF?</h2>
				<p className="text-gray-700 mt-3 leading-relaxed">
					The <strong>National Institutional Ranking Framework (NIRF)</strong>{" "}
					was launched by the Government of India to rank higher education
					institutions based on various parameters such as Teaching, Research,
					Placements, and Outreach. IIIT Nagpur has consistently performed well
					in these rankings, reflecting its commitment to academic excellence.
				</p>
			</section>

			{/* NIRF Reports Section */}
			<main className="max-w-6xl mx-auto mt-10 p-6">
				<h2 className="text-3xl font-bold text-primary mb-6 text-center">
					📑 NIRF Reports by Year
				</h2>
				<div className="grid md:grid-cols-2 gap-8">
					{nirfData.map((data, index) => (
						<div
							key={index}
							className="bg-white p-6 shadow-lg rounded-lg transition-transform hover:scale-105 border-l-4 border-orange-600">
							<h3 className="text-2xl font-bold text-primary">
								📅 {data.year}
							</h3>
							<div className="mt-4">
								{data.documents.map((doc, docIndex) => (
									<a
										key={docIndex}
										href={doc.link}
										className="flex items-center text-orange-600 hover:text-orange-800 mt-2 text-lg font-medium">
										<FaFilePdf className="mr-2 text-blue-600" />
										{doc.title}
									</a>
								))}
							</div>
						</div>
					))}
				</div>
			</main>
		</div>
	);
}

export default NIRF;
