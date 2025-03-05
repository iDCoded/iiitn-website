import { useState } from "react";
import { FaFilePdf } from "react-icons/fa";

const nirfData = [
	{
		year: 2025,
		documents: [
			{ title: "Engineering", link: "#" },
			{ title: "Overall", link: "#" },
			{ title: "Innovation", link: "#" },
		],
	},
	{
		year: 2024,
		documents: [
			{ title: "Engineering", link: "#" },
			{ title: "Overall", link: "#" },
			{ title: "Innovation", link: "#" },
		],
	},
	{
		year: 2023,
		documents: [
			{ title: "Engineering", link: "#" },
			{ title: "Overall", link: "#" },
			{ title: "Innovation", link: "#" },
		],
	},
];

function NIRF() {
	const [selectedYear, setSelectedYear] = useState(nirfData[0].year);
	const selectedData = nirfData.find((data) => data.year === selectedYear);

	return (
		<div className="bg-gray-100 min-h-screen">
			{/* Header Section */}
			<header className="bg-primary text-white py-12 text-center shadow-md">
				<h1 className="text-4xl font-bold"> NIRF Rankings</h1>
				<p className="text-lg mt-2 ">
					Recognizing Excellence in Academics & Research
				</p>
			</header>

			{/* Introduction Section */}
			<section className="bg-white p-6 shadow-lg rounded-lg mt-8 max-w-5xl mx-auto">
				<h2 className="text-2xl font-semibold text-primary">What is NIRF?</h2>
				<p className="text-gray-700 mt-3 leading-relaxed">
					The <strong>National Institutional Ranking Framework (NIRF)</strong>{" "}
					was launched by the Government of India to rank higher education
					institutions based on various parameters such as Teaching, Research,
					Placements, and Outreach. IIIT Nagpur has consistently performed well
					in these rankings, reflecting its commitment to academic excellence.
				</p>

				{/* Year Selection (Dropdown) */}
				<div className="mt-6">
					<label className="block text-lg font-semibold text-primary">
						📅 Select Year:
					</label>
					<select
						className="mt-2 w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
						value={selectedYear}
						onChange={(e) => setSelectedYear(Number(e.target.value))}>
						{nirfData.map((data) => (
							<option key={data.year} value={data.year}>
								{data.year}
							</option>
						))}
					</select>
				</div>

				{/* NIRF Reports - Display Below the Paragraph */}
				<div className="mt-6 bg-white p-6 shadow-lg rounded-lg border-l-4 border-accent-600">
					<h3 className="text-2xl font-bold text-primary">📑 NIRF Reports - {selectedYear}</h3>
					<div className="mt-4">
						{selectedData?.documents.map((doc, index) => (
							<a
								key={index}
								href={doc.link}
								className="flex items-center text-accent-600 hover:text-orange-800 mt-2 text-lg font-medium">
								<FaFilePdf className="mr-2 text-blue-600" />
								{doc.title}
							</a>
						))}
					</div>
				</div>
			</section>
		</div>
	);
}

export default NIRF;
