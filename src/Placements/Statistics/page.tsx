import { useState } from "react";
import MarkdownPreview from "@uiw/react-markdown-preview";

interface MarkdownData {
	[year: number]: string;
}

const markdownData: MarkdownData = {
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
	const [selectedYear, setSelectedYear] = useState(2024);

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
				<label
					htmlFor="year"
					className="block text-lg font-semibold text-gray-700"
				>
					Select Year:
				</label>
				<select
					id="year"
					value={selectedYear}
					onChange={(e) => setSelectedYear(parseInt(e.target.value))}
					className="mt-2 w-full sm:w-1/2 p-3 border border-gray-300 rounded-lg shadow-sm focus:ring-accent focus:border-accent text-gray-700"
				>
					{Object.keys(markdownData)
						.reverse()
						.map((year) => (
							<option key={year} value={year}>
								{year}
							</option>
						))}
				</select>
			</div>

			{/* Markdown Display */}
			<div className="w-full max-w-4xl mx-auto mt-8 p-6 bg-white shadow-lg rounded-lg border border-gray-200">
				<h1 className="text-3xl leading-loose font-bold text-primary"><span className="text-5xl text-accent">| </span>Placement Statistics - {selectedYear} </h1>
				<MarkdownPreview
					source={markdownData[selectedYear]}
					className="text-gray-800 text-base sm:text-lg"
					style={{
						backgroundColor: "white", // Force background to be white
						color: "black", // Ensure text color is black
						padding: "16px", // Maintain spacing
						borderRadius: "8px", // Smooth edges
					}}
				/>
			</div>

			{/* Footer Spacer */}
			<div className="mb-16 sm:mb-24"></div>
		</div>
	);
}

export default Statistics;
