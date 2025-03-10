import { useState, useEffect } from "react";
import MarkdownPreview from "@uiw/react-markdown-preview";

interface MarkdownData {
	[year: number]: string;
}

// Initial Static Data
const initialMarkdownData: MarkdownData = {
	2024: `
  - **Total Students Placed:** 150  
  - **Highest Package:** ₹32 LPA  
  - **Average Package:** ₹12.5 LPA  
  - **Top Recruiters:** Google, Microsoft, Amazon, TCS  
  `,
	2023: `
  - **Total Students Placed:** 135  
  - **Highest Package:** ₹28 LPA  
  - **Average Package:** ₹11 LPA  
  - **Top Recruiters:** Infosys, Wipro, Capgemini, HCL  
  `,
	2022: `
  - **Total Students Placed:** 120  
  - **Highest Package:** ₹25 LPA  
  - **Average Package:** ₹10.2 LPA  
  - **Top Recruiters:** Cognizant, Deloitte, Accenture, IBM  
  `,
};

function Statistics() {
	const [selectedYear, setSelectedYear] = useState<number>(2024);
	const [markdownData, setMarkdownData] = useState<MarkdownData>(initialMarkdownData);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/media/media/category/placement_statistics`);
				const data = await response.json();

				const newMarkdownData: MarkdownData = {...initialMarkdownData}; // Merge static data with fetched data

				data.forEach((item: { c_sub_category: string; title: string; content: string }) => {
					// Extract the year from either c_sub_category or title
					const year = parseInt(item.c_sub_category) || parseInt(item.title);

					// Only update if the year is valid
					if (!isNaN(year)) {
						newMarkdownData[year] = item.content; // Store the markdown content
					}
				});

				setMarkdownData(newMarkdownData);

				// Ensure the dropdown includes all fetched years
				if (!newMarkdownData[selectedYear]) {
					const latestYear = Math.max(...Object.keys(newMarkdownData).map(Number));
					setSelectedYear(latestYear);
				}
			} catch (error) {
				console.error("Error fetching data:", error);
			}
		};

		fetchData();
	}, []);

	return (
		<div className="bg-gray-50 min-h-screen flex flex-col">
			{/* Header Section */}
			<header className="w-full h-60 sm:h-72 flex flex-col justify-center items-center text-white text-center shadow-lg bg-primary px-4">
				<h1 className="text-3xl sm:text-5xl font-extrabold tracking-wide">
					Placement Statistics
				</h1>
				<p className="text-base sm:text-lg mt-2 opacity-90">
					Stay connected and contribute to the growth of IIIT Nagpur.
				</p>
			</header>

			{/* Year Selector */}
			<div className="w-full max-w-4xl mx-auto mt-8 px-4">
				<label htmlFor="year" className="block text-lg font-semibold text-gray-700">
					Select Year:
				</label>
				<select
					id="year"
					value={selectedYear}
					onChange={(e) => setSelectedYear(parseInt(e.target.value))}
					className="mt-2 w-full sm:w-1/2 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-accent focus:border-accent text-gray-700"
				>
					{Object.keys(markdownData || {})
						.map(Number)
						.sort((a, b) => b - a)
						.map((year) => (
							<option key={year} value={year}>
								{year}
							</option>
						))}
				</select>
			</div>

			{/* Markdown Display */}
			<div className="w-full max-w-4xl mx-auto mt-8 p-6 bg-white shadow-lg rounded-lg border border-gray-200">
				<h1 className="text-3xl leading-loose font-bold text-primary">
					<span className="text-5xl text-accent">| </span>Placement Statistics - {selectedYear}
				</h1>
				<MarkdownPreview
					source={markdownData[selectedYear] || "*No data available for this year.*"}
					className="text-gray-800 text-base sm:text-lg"
					style={{
						backgroundColor: "white",
						color: "black",
						padding: "16px",
						borderRadius: "8px",
					}}
				/>
			</div>

			{/* Footer Spacer */}
			<div className="mb-16 sm:mb-24"></div>
		</div>
	);
}

export default Statistics;
