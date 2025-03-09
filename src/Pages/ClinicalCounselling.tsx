import { useEffect, useState } from "react";
import MarkdownPreview from "@uiw/react-markdown-preview";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface CounsellingData {
	title: string;
	content: string;
}

function ClinicalCounselling() {
	const [counsellingInfo, setCounsellingInfo] = useState<CounsellingData | null>(null);

	useEffect(() => {
		const fetchCounsellingData = async () => {
			try {
				const response = await fetch(
					`${import.meta.env.VITE_API_BASE_URL}/card/cards/category/counselling`
				);
				const data = await response.json();

				if (data.length > 0) {
					setCounsellingInfo({
						title: data[0].title,
						content: data[0].content,
					});
				} else {
					setCounsellingInfo({
						title: "Clinical Counselling",
						content: "No information available at the moment.",
					});
				}
			} catch (error) {
				console.error("Failed to fetch counselling data:", error);
				setCounsellingInfo({
					title: "Clinical Counselling",
					content: "No information available due to a network issue.",
				});
			}
		};

		fetchCounsellingData();
	}, []);

	return (
		<div className="bg-gray-50 min-h-screen flex flex-col">
			{/* 🔹 Header Section */}
			<header className="bg-primary text-white py-12 px-6 shadow-md text-left md:text-center">
				<h1 className="text-3xl md:text-4xl font-bold">Clinical Counselling</h1>
				<p className="mt-2 text-gray-200 text-lg">
					Supporting student well-being at IIIT Nagpur
				</p>
			</header>

			{/* 📌 Main Content */}
			<main className="w-full max-w-4xl mx-auto px-4 md:px-8 py-12">
				<Card className="shadow-lg border border-gray-300">
					<CardHeader className="bg-primary text-white rounded-t-lg py-5">
						<CardTitle className="text-2xl">{counsellingInfo?.title || "Clinical Counselling"}</CardTitle>
					</CardHeader>
					<CardContent className="p-8 space-y-8">
						{counsellingInfo ? (
							<MarkdownPreview
								source={counsellingInfo.content}
								className="prose max-w-none bg-white text-gray-800 p-4 rounded-md shadow"
							/>
						) : (
							<p className="text-gray-600">Loading counselling information...</p>
						)}
					</CardContent>
				</Card>
			</main>
		</div>
	);
}

export default ClinicalCounselling;
