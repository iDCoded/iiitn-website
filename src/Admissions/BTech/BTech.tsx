import { useEffect, useState } from "react";
import { Card, CardContent, CardTitle } from "@/components/ui/card";

const seatDemoData = [
	{
		title: "B. Tech. Computer Science & Engineering",
		seats: 223
	},
	{
		title: "B. Tech. CSE (Artificial Intelligence & Machine Learning)",
		seats: 66
	},
	{
		title: "B. Tech. CSE (Data Science & Analytics)",
		seats: 66
	},
	{
		title: "B. Tech. CSE (Human Computer Interaction & Gaming Technology)",
		seats: 66
	},
	{
		title: "B. Tech. Electronics & Communication Engineering",
		seats: 150
	},
	{
		title: "B. Tech. ECE (Internet of Things)",
		seats: 66
	},
];


function BTech() {
	const [keyInfoDocs, setKeyInfoDocs] = useState<Document[]>([]);
	const [otherDocs, setOtherDocs] = useState<Document[]>([]);
	const [seatData, setSeatData] = useState<Seat[]>([]);
	let total = 637;

	interface Document {
		title: string;
		media_doc_id: string;
		m_sub_category: string;
	}

	interface Seat {
		title: string;
		seats: number;
	}

	useEffect(() => {
		const fetchDocuments = async () => {
			try {
				const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/media/media/category/btech_admission`);
				const data = await response.json();

				// Filter and sort data into two categories
				const keyInfo = data.filter((doc: Document) => doc.m_sub_category === "key_information");
				const others = data.filter((doc: Document) => doc.m_sub_category !== "key_information");

				setKeyInfoDocs(keyInfo);
				setOtherDocs(others);
			} catch (error) {
				console.error("Error fetching documents:", error);
			}
		};

		const fetchSeatData = async () => {
			try {
				const response = await fetch(`${process.env.VITE_API_BASE_URL}/card/cards/category/btech_seat_data`);
				const data = await response.json();

				// Sort seat data by course name
				const sortedData = data.sort((a: any, b: any) => a.title.localeCompare(b.title));
				const seatData = sortedData.map((item: any) => [item.title, item.description]);

				// Update total seats
				total = seatData.reduce((acc: number, [_, seats]: [string, string]) => acc + parseInt(seats), 0);
				setSeatData(seatData.map((item: any) => ({
					title: item.title,
					seats: item.caption
				})));

				if(seatData.length < 0) {
					setSeatData(seatDemoData);
				}
			} 
			catch (error) {
				console.error("Error fetching seat data:", error);
				setSeatData(seatDemoData);
			}
		}

		fetchDocuments();
		fetchSeatData();
	}, []);

	return (
		<div className="bg-gray-50 min-h-screen flex flex-col">
			<header className="bg-primary text-white py-14 text-center px-4">
				<h1 className="text-3xl md:text-4xl font-bold">B.Tech Admissions 2024-2025</h1>
				<p className="mt-2 text-md md:text-lg text-gray-200">
					Get all the details about IIIT Nagpur B.Tech admissions
				</p>
			</header>

			<main className="max-w-5xl w-full mx-auto p-4 md:p-6">
				{/* 🔹 Key Admission Information */}
				<Card className="mb-6">
					<CardContent className="p-4 md:p-6">
						<CardTitle className="text-primary">Key Admission Information</CardTitle>
						<ul className="mt-4 space-y-3 text-gray-700">
							{keyInfoDocs.map((doc, index) => (
								<li key={index} className="flex justify-between items-center border-b py-2">
									<span>{doc.title}</span>
									<a
										href={doc.media_doc_id}
										className="text-accent hover:underline font-semibold"
										target="_blank"
										rel="noopener noreferrer"
									>
										Click Here
									</a>
								</li>
							))}
						</ul>
					</CardContent>
				</Card>

				{/* 📚 Course Details */}
				<Card className="mb-6">
					<CardContent className="p-4 md:p-6">
						<CardTitle className="text-primary">IIIT Nagpur Undergraduate Courses</CardTitle>
						<div className="overflow-x-auto">
							<table className="mt-4 w-full border border-gray-300 text-gray-700 text-sm md:text-base">
								<thead className="bg-gray-200">
									<tr>
										<th className="p-2 border">Sr. No.</th>
										<th className="p-2 border">Program Name</th>
										<th className="p-2 border">Total Seat Intake</th>
									</tr>
								</thead>
								<tbody>
									{seatData.map(({title, seats}, index) => (
										<tr key={index} className="border">
											<td className="p-2 text-center">{index + 1}</td>
											<td className="p-2">{title}</td>
											<td className="p-2 text-center">{seats}</td>
										</tr>
									))}
									<tr className="bg-gray-100 font-semibold">
										<td className="p-2 text-center" colSpan={2}>Total</td>
										<td className="p-2 text-center">{total}</td>
									</tr>
								</tbody>
							</table>
						</div>
						<a
							href="/academics/courses"
							className="mt-4 block text-accent hover:underline text-center"
						>
							More Details About Courses
						</a>
					</CardContent>
				</Card>

				{/* 🔹 Other Documents */}
				<Card>
					<CardContent className="p-4 md:p-6">
						<CardTitle className="text-primary">Resources & Guidelines</CardTitle>
						<ul className="mt-4 space-y-3 text-gray-700">
							{otherDocs.map((doc, index) => (
								<li key={index} className="flex justify-between items-center border-b py-2">
									<span>{doc.title}</span>
									<a
										href={doc.media_doc_id}
										className="text-accent hover:underline font-semibold"
										target="_blank"
										rel="noopener noreferrer"
									>
										Click Here
									</a>
								</li>
							))}
						</ul>
					</CardContent>
				</Card>
			</main>
		</div>
	);
}

export default BTech;
