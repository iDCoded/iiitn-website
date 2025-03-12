import { useEffect, useState } from "react";
import MarkdownPreview from "@uiw/react-markdown-preview";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface GuestHouseData {
	title: string;
	content: string;
}

function GuestHouse() {
	const [guestHouseInfo, setGuestHouseInfo] = useState<GuestHouseData | null>(null);

	useEffect(() => {
		const fetchGuestHouseData = async () => {
			try {
				const response = await fetch(
					`${import.meta.env.VITE_API_BASE_URL}/card/cards/category/guesthouse`
				);
				const data = await response.json();

				if (data.length > 0) {
					setGuestHouseInfo({
						title: data[0].title,
						content: data[0].content,
					});
				} else {
					setGuestHouseInfo({
						title: "Guest House",
						content: "No information available at the moment.",
					});
				}
			} catch (error) {
				console.error("Failed to fetch guest house data:", error);
				setGuestHouseInfo({
					title: "Guest House",
					content: "No information available due to a network issue.",
				});
			}
		};

		fetchGuestHouseData();
	}, []);

	return (
		<div className="bg-gradient-to-b from-gray-50 to-gray-200 min-h-screen">
			{/* Header Section */}
			<header className="bg-primary text-white py-16 text-center shadow-md mb-10">
				<h1 className="text-4xl font-bold">Guest House</h1>
				<p className="text-lg mt-2">Stay connected and contribute to the growth of IIIT Nagpur.</p>
			</header>

			{/* Content Section */}
			<main className="max-w-4xl mx-auto px-6 py-12 space-y-10">
				<Card className="shadow-lg border border-gray-300">
					<CardHeader className="bg-primary text-white rounded-t-lg py-5">
						<CardTitle className="text-2xl">{guestHouseInfo?.title || "Guest House Information"}</CardTitle>
					</CardHeader>
					<CardContent className="p-12 space-y-8">
						{guestHouseInfo ? (
							<MarkdownPreview 
							source={guestHouseInfo.content} 
							className="prose max-w-none !bg-white !text-gray-800 p-4 rounded-md shadow"
						/>
						) : (
							<p className="text-gray-600">Loading guest house information...</p>
						)}
					</CardContent>
				</Card>
			</main>
		</div>
	);
}

export default GuestHouse;
