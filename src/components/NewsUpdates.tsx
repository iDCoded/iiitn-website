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
		<section className="relative w-full bg-background px-6 py-12">
			{/* Section Heading */}
			<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
				{/* Headers */}
				<div className="md:col-span-2">
					<h2 className="text-2xl sm:text-4xl font-bold drop-shadow-lg tracking-wide mb-8">
						<span className="text-accent">| </span>Latest News
					</h2>
				</div>
				<div className="md:col-span-1">
					<h2 className="text-2xl sm:text-4xl font-bold drop-shadow-lg tracking-wide mb-8">
						<span className="text-accent">| </span>Announcements
					</h2>
				</div>

				{/* News Cards (2/3 width on medium+ screens) */}
				<div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-8">
					{newsData.slice(0, 2).map((news) => (
						<div
							key={news.id}
							className="w-full bg-white border border-gray-300 shadow-md overflow-hidden"
						>
							{/* News Image */}
							<img className="w-full h-52 object-cover" src={news.image} alt={news.title} />

							{/* News Content */}
							<div className="p-6">
								<h5 className="mb-3 text-xl font-bold text-gray-900">{news.title}</h5>
								<p className="text-gray-700">{news.caption}</p>

								{/* Read More Link */}
								<a
									onClick={() => navigate(`/news/${news.id}`)}
									className="inline-flex items-center text-sm font-medium text-accent hover:underline cursor-pointer mt-3"
								>
									Read more
									<svg
										className="w-4 h-4 ml-2"
										aria-hidden="true"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 14 10"
									>
										<path
											stroke="currentColor"
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M1 5h12m0 0L9 1m4 4L9 9"
										/>
									</svg>
								</a>
							</div>
						</div>
					))}
				</div>

				{/* Announcements Section (1/3 width on medium+ screens) */}
				<div className="md:col-span-1">
					{/* Announcements Component */}
					<Announcements />
				</div>
			</div>
		</section>
	);
}
