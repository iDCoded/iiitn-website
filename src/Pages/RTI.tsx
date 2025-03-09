import { useEffect, useState } from "react";
import rti from "../assets/rti.png";

const rtiData = [
	{
		id: 1,
		title: "RTI Act, 2005 (English)",
		media_doc_id: "rti_english",
	},
	{
		id: 2,
		title: "RTI Act, 2005 (Hindi)",
		media_doc_id: "rti_hindi",
	},
	{
		id: 3,
		title: "RTI Act, 2005 (Marathi)",
		media_doc_id: "rti_marathi",
	},
	{
		id: 4,
		title: "Guide to RTI Act (English)",
		media_doc_id: "rti_guide",
	},
	{
		id: 5,
		title: "RTI Image",
		media_img_id: rti,
	},
];

interface RtiDetail {
	id: number;
	title: string;
	media_doc_id?: string;
	media_img_id?: string;
}

function RTI() {
	const [rtiDetail, setRtiDetail] = useState<RtiDetail[] | null>(null);
	const API_BASE_URL = import.meta.env.VITE_API_BASE_URL; // Extracted for easy reuse

	useEffect(() => {
		const fetchRtiDetail = async () => {
			try {
				const response = await fetch(`${API_BASE_URL}/media/media/category/rti`);
				const data = await response.json();
				
				if (Array.isArray(data) && data.length > 0) {
					const mappedData = data.map((item: any) => ({
						id: item.m_id,
						title: item.title,
						media_doc_id: item.media_doc_id,
						media_img_id: item.media_img_id,
					}));
					setRtiDetail(mappedData);
				} else {
					setRtiDetail(rtiData);
				}
			} catch (error) {
				console.error("Failed to fetch RTI details:", error);
				setRtiDetail(rtiData);
			}
		};

		fetchRtiDetail();
	}, []);

	return (
		<div className="bg-gray-100 min-h-screen flex flex-col">
			{/* Header Section */}
			<header className="bg-primary text-white py-16 text-center">
				<h1 className="text-5xl font-bold">Right To Information (RTI)</h1>
				<p className="text-lg mt-2 italic">
					"Ensuring transparency and accountability in IIIT Nagpur."
				</p>
			</header>

			{/* Main Content Section */}
			<main className="max-w-6xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg flex flex-col lg:flex-row">
				{/* Left Side - Text Content */}
				<div className="lg:w-2/3 w-full p-6">
					{/* Introduction */}
					<section className="mb-8">
						<h2 className="text-3xl font-semibold text-primary">
							<span className="text-accent text-4xl">| </span> What is RTI?
						</h2>
						<p className="text-gray-700 mt-3 leading-relaxed">
							The <strong>Right to Information (RTI) Act</strong> is a law
							enacted by the Indian Parliament in 2005, providing citizens the
							right to access information from public authorities. As an
							Autonomous Government Body, <strong>IIIT Nagpur</strong> falls
							under this act.
						</p>
					</section>

					{/* RTI Documents */}
					<section className="mb-8">
						<h2 className="text-3xl font-semibold text-primary">
							<span className="text-accent text-4xl">| </span> RTI Act Documents
						</h2>
						<div className="grid md:grid-cols-2 gap-4 mt-4">
							{rtiDetail ? (
								rtiDetail
									.filter((item) => item.media_doc_id)
									.map((item) => (
										<a
											key={item.id}
											href={`${API_BASE_URL}/media/${item.media_doc_id}`}
											target="_blank"
											rel="noreferrer"
											className="bg-gray-200 p-4 rounded-lg shadow-md hover:shadow-lg transition block"
										>
											{item.title}
										</a>
									))
							) : (
								<p className="text-gray-600">Loading RTI documents...</p>
							)}
						</div>
					</section>

					{/* Definition of RTI */}
					<section>
						<h2 className="text-3xl font-semibold text-primary">
							<span className="text-accent text-4xl">| </span> Definition of RTI
						</h2>
						<p className="text-gray-700 mt-3 leading-relaxed">
							The <b>Right To Information</b> means the right to access
							information held by any public authority, which includes:
						</p>
						<ul className="list-disc pl-6 mt-3 text-gray-700 space-y-2">
							<li>📌 Inspection of work, documents, and records</li>
							<li>📌 Obtaining certified copies of records</li>
							<li>📌 Taking samples of materials</li>
							<li>📌 Receiving information in electronic or print format</li>
						</ul>
					</section>
				</div>

				{/* Right Side - Image */}
				<div className="lg:w-1/3 w-full p-6 flex justify-center">
					{rtiDetail && rtiDetail.some((item) => item.media_img_id) ? (
						<img
							src={
								rtiDetail.find((item) => item.media_img_id)?.media_img_id ??
								`${API_BASE_URL}/media/default_rti_image.png`
							}
							alt="RTI Illustration"
							className="rounded-lg shadow-lg w-full"
						/>
					) : (
						<p className="text-gray-600">No RTI image available.</p>
					)}
				</div>
			</main>
		</div>
	);
}

export default RTI;
