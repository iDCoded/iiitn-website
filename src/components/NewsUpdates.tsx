/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Announcements from "./Announcements";

interface NewsItem {
	id: string;
	c_category: string;
	image: string;
	title: string;
	caption: string;
}

export default function NewsSection() {
	const [newsData, setNewsData] = useState<NewsItem[]>([]);
	const navigate = useNavigate();

	// Fetch data from API
	useEffect(() => {
		const fetchNews = async () => {
			try {
				const res = await fetch(
					`${import.meta.env.VITE_API_BASE_URL}/card/cards/category/news`
				);
				if (!res.ok) throw new Error("Failed to fetch news");
				const data = await res.json();
				console.log("Fetched news:", data);

				// Filter only "news"
				const filteredNews = data.map((news: any) => ({
					id: news.c_id,
					c_category: news.c_category,
					image: news.media_img_id || "/default-news.jpg",
					title: news.title,
					caption: news.caption,
				}));
				console.log("Filtered news:", filteredNews);
				setNewsData(filteredNews.slice(0, 6));
			} catch (error) {
				console.error("Error fetching news:", error);
			}
		};

		fetchNews();
	}, []);

	return (
		<div className="flex w-full h-[70vh] gap-4 px-6">
			{/* Left 2/3rd - News Cards */}
			<div className="w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">
				{newsData.slice(0, 2).map((news) => (
					<div key={news.id} className="bg-white shadow-md rounded-lg overflow-hidden">
						<img src={news.image} alt={news.title} className="w-full h-48 object-cover" />
						<div className="p-4">
							<h3 className="text-lg font-bold text-primary mb-2">{news.title}</h3>
							<p className="text-gray-700 text-sm">{news.caption}</p>
							<button
								onClick={() => navigate(`/news/${news.id}`)}
								className="mt-3 text-accent font-semibold hover:underline"
							>
								Read More →
							</button>
						</div>
					</div>
				))}
			</div>

			{/* Right 1/3rd - Announcements */}
			<div className="w-1/3">
				<Announcements />
			</div>
		</div>
	);
}
