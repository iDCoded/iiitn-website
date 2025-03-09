import { useState, useEffect } from "react";

const defpressData = [
	{ title: "IIIT Nagpur Hosts AI Conference", date: "2023-10-15", link: "#" },
	{ title: "New Research Lab Inaugurated", date: "2023-08-22", link: "#" },
	{ title: "Collaboration with Industry Leaders", date: "2023-07-05", link: "#" },
	{ title: "Students Shine in Hackathon", date: "2023-05-30", link: "#" },
	{ title: "MoU Signed with Global University", date: "2023-04-18", link: "#" },
	{ title: "Tech Fest 2023 Announced", date: "2023-03-10", link: "#" },
	{ title: "New AI Research Published", date: "2023-02-25", link: "#" },
	{ title: "IIIT Nagpur Joins Smart City Project", date: "2023-01-05", link: "#" },
	{ title: "Advanced Robotics Lab Opens", date: "2022-12-20", link: "#" },
	{ title: "IIIT Nagpur Placement Report Released", date: "2022-11-10", link: "#" },
	{ title: "International Symposium on Cybersecurity", date: "2022-09-15", link: "#" },
	{ title: "Launch of New Data Science Course", date: "2022-08-10", link: "#" },
	{ title: "IIIT Nagpur Celebrates Foundation Day", date: "2022-07-01", link: "#" },
	{ title: "Partnership with Global Tech Firm", date: "2022-06-05", link: "#" },
	{ title: "AI-Based Healthcare Solution Developed", date: "2022-05-15", link: "#" },
	{ title: "IIIT Nagpur Signs MoU with IIT Bombay", date: "2022-04-01", link: "#" },
	{ title: "IIIT Nagpur Ranks Among Top Institutes", date: "2022-03-15", link: "#" },
];

// Function to sort by date (latest first)


function PressRelease() {
	interface PressRelease {
		title: string;
		date: string;
		link: string;
	}

	const [pressData, setPressData] = useState<PressRelease[]>([]);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		const fetchPressReleases = async () => {
			try {
				const res = await fetch(
					`${import.meta.env.VITE_API_BASE_URL}/card/cards/category/press_releases`
				);
				if (!res.ok) {
					throw new Error("Failed to fetch press releases data");
				}
				const data = await res.json();
				const pressDataList = data.map((press: any) => ({
					title: press.title,
					date: press.date,
					link: press.media_doc_path,
				}));
				setPressData(pressDataList);
			} catch (error) {
				console.error("Error fetching press releases:", error);
				setPressData(defpressData);
			} finally {
				setLoading(false);
			}
		};

		fetchPressReleases();
	}, []);


	

	const getSortedPressReleases = () => {
		return pressData.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
	};


	const sortedPressReleases = getSortedPressReleases();
	const [currentPage, setCurrentPage] = useState(1);
	const [itemsPerPage, setItemsPerPage] = useState(12);

	// Adjust items per page based on screen width
	useEffect(() => {
		const updateItemsPerPage = () => {
			setItemsPerPage(window.innerWidth < 768 ? 6 : 12);
		};

		updateItemsPerPage();
		window.addEventListener("resize", updateItemsPerPage);
		return () => window.removeEventListener("resize", updateItemsPerPage);
	}, []);

	// Pagination logic
	const totalPages = Math.ceil(sortedPressReleases.length / itemsPerPage);
	const startIndex = (currentPage - 1) * itemsPerPage;
	const currentItems = sortedPressReleases.slice(startIndex, startIndex + itemsPerPage);


	if(loading){
		return (
			<div className="min-h-screen flex justify-center items-center">
				<div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
			</div>
		);
	}

	return (
		<div className="bg-gray-100 min-h-screen flex flex-col">
			{/* Header Section */}
			<div className="bg-gray-800 text-white py-16 text-center">
				<h1 className="text-3xl md:text-4xl font-bold">Press Releases</h1>
				<p className="text-md md:text-lg mt-2">
					Stay updated with the latest news and events at IIIT Nagpur.
				</p>
			</div>

			{/* Press Release Grid */}
			<div className="max-w-6xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
				{currentItems.map((press, index) => (
					<div key={index} className="bg-white shadow-md p-5 rounded-lg hover:shadow-xl transition duration-300">
						<h2 className="text-lg md:text-xl font-semibold text-gray-800">{press.title}</h2>
						<p className="text-sm text-gray-500 mt-1">{press.date}</p>
						<a href={press.link} className="text-blue-600 hover:text-blue-800 font-medium mt-2 inline-block">
							Read More →
						</a>
					</div>
				))}
			</div>

			{/* Pagination Controls */}
			<div className="flex justify-center items-center space-x-4 mt-6 mb-8">
				<button 
					onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
					disabled={currentPage === 1}
					className={`px-4 py-2 text-sm md:text-base border rounded-md transition ${
						currentPage === 1 ? "text-gray-400 cursor-not-allowed" : "text-gray-800 hover:bg-gray-200"
					}`}
				>
					Previous
				</button>
				<span className="text-gray-700 text-sm md:text-base">Page {currentPage} of {totalPages}</span>
				<button 
					onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
					disabled={currentPage === totalPages}
					className={`px-4 py-2 text-sm md:text-base border rounded-md transition ${
						currentPage === totalPages ? "text-gray-400 cursor-not-allowed" : "text-gray-800 hover:bg-gray-200"
					}`}
				>
					Next
				</button>
			</div>
		</div>
	);
}

export default PressRelease;
