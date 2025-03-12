import { useState, useEffect } from "react";
import MarkdownPreview from "@uiw/react-markdown-preview";

function Iic() {
	interface IIICData {
		title: string;
		content: string;
	}

	const [aboutData, setAboutData] = useState<IIICData | null>(null);
	const [facultyData, setFacultyData] = useState<IIICData | null>(null);
	const [achievementData, setAchievementData] = useState<IIICData | null>(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/card/cards/category/iic`);
				if (!res.ok) throw new Error("Failed to fetch IIC data");

				const data = await res.json();

				// Assuming data is an array of objects with a category
				const about = data.find((item: IIICData) => item.title.toLowerCase() === "about");
				const faculty = data.find((item: IIICData) => item.title.toLowerCase() === "faculty");
				const achievements = data.find((item: IIICData) => item.title.toLowerCase() === "achievements");

				setAboutData(about || { title: "About", content: "No data available" });
				setFacultyData(faculty || { title: "Faculty", content: "No data available" });
				setAchievementData(achievements || { title: "Achievements", content: "No data available" });
			} catch (err) {
				console.error("Error fetching IIC data:", err);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, []);

	if (loading) return <p className="text-center text-lg py-10">Loading...</p>;

	return (
		<div className="bg-gray-100 min-h-screen flex flex-col">
			{/* Header Section */}
			<div className="bg-primary text-white py-16 text-center">
				<h1 className="text-4xl font-bold">Institution Innovation Council</h1>
				<p className="text-lg mt-2">Stay connected and contribute to the growth of IIIT Nagpur.</p>
			</div>

			{/* Main Content */}
			<div className="max-w-6xl mx-auto p-6 space-y-8">
				{/* About Section */}
				<section className="bg-white shadow-lg rounded-lg p-6">
					<h2 className="text-2xl font-semibold text-gray-800 mb-4">About</h2>
					
							<MarkdownPreview 
							source={aboutData ? aboutData.content : "No data available"} 
							className="prose max-w-none !bg-white !text-gray-800 p-4 rounded-md shadow"
						/>
				
				</section>

				{/* Faculty Section */}
				<section className="bg-white shadow-lg rounded-lg p-6">

					<h2 className="text-2xl font-semibold text-gray-800 mb-4">Constitution</h2>
					
							<MarkdownPreview 
							source={facultyData ? facultyData.content : "No data available"} 
							className="prose max-w-none !bg-white !text-gray-800 p-4 rounded-md shadow"
						/>
					
				</section>

				{/* Achievements Section */}
				<section className="bg-white shadow-lg rounded-lg p-6">
					<h2 className="text-2xl font-semibold text-gray-800 mb-4">Achievements</h2>
				
							<MarkdownPreview 
							source={achievementData ? achievementData.content : "No data available"} 
							className="prose max-w-none !bg-white !text-gray-800 p-4 rounded-md shadow"
						/>
					
				</section>
			</div>
		</div>
	);
}

export default Iic;
