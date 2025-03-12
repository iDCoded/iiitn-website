/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

interface NewsItem {
	id: string;
	c_category: string;
	image: string;
	title: string;
	caption: string;
}

const defaultAnnouncements = [
	{ id: "1", title: "Announcement 1", date: "2021-10-01" },
	{ id: "2", title: "Announcement 2 Announcement 1", date: "2021-10-02" },
	{ id: "3", title: "Announcement 3", date: "2021-10-03" },
	{ id: "4", title: "Announcement 4", date: "2021-10-04" },
	{ id: "5", title: "Announcement 5", date: "2021-10-05" },
	{ id: "6", title: "Announcement 6", date: "2021-10-06" },
	{ id: "7", title: "Announcement 7", date: "2021-10-07" },
	{ id: "8", title: "Announcement 8", date: "2021-10-08" },
	{ id: "9", title: "Announcement 9", date: "2021-10-09" },
	{ id: "10", title: "Announcement 10", date: "2021-10-10" },
];

export default function NewsSection() {
	const [newsData, setNewsData] = useState<NewsItem[]>([]);
	const navigate = useNavigate();
	const newsSectionRef = useRef<HTMLDivElement>(null);

	const [announcements, setAnnouncements] = useState<{ id: string; title: string; date: string }[]>([]);

	useEffect(() => {
		const fetchNews = async () => {
			try {
				const res = await fetch(
					`${import.meta.env.VITE_API_BASE_URL}/card/cards/category/news`
				);
				if (!res.ok) throw new Error("Failed to fetch news");
				const data = await res.json();

				const filteredNews = data.map((news: any) => ({
					id: news.c_id,
					c_category: news.c_category,
					image: news.media_img_id || "/default-news.jpg",
					title: news.title,
					caption: news.caption,
				}));
				setNewsData(filteredNews.slice(0, 6));
			} catch (error) {
				console.error("Error fetching news:", error);
			}
		};

		const fetchAnnouncements = async () => {
			try {
				const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/card/cards/category/announcements`);
				const data = await response.json();
				const announcementsArray = Array.isArray(data) ? data : [];
				setAnnouncements(announcementsArray.map((announcement: any) => {
					const date = new Date(announcement.date);
					const formattedDate = date.toLocaleDateString('en-US', { day: '2-digit', month: 'short' });
					return {
						id: announcement.c_id,
						title: announcement.title,
						date: formattedDate,
					};
				}));
			} catch (error) {
				console.error("Error fetching announcements:", error);
				setAnnouncements(defaultAnnouncements);
			}
		};

		fetchNews();
		fetchAnnouncements();
	}, []);

	return (
		<section className="relative w-full px-4 sm:px-6 lg:px-12 py-12 bg-background">
			<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
				{/* News Section */}
				<div className="md:col-span-2 flex flex-col" ref={newsSectionRef}>
					<div className="flex items-center justify-between">
						<h2 className="text-2xl sm:text-4xl font-bold tracking-wide mb-6">
							<span className="text-accent">| </span> Latest News
						</h2>
						<a href="/news" className="text-accent text-md font-semibold transition duration-200 ease-in-out hover:underline hover:text-accent-dark focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2">
							View All →
						</a>
					</div>
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
						{newsData.slice(0, 2).map((news) => (
							<div
								key={news.id}
								className="bg-white border border-gray-300 shadow-xl	 overflow-hidden flex flex-col h-[60vh]" // Fixed height in vh
							>
								<img
									className="w-full h-[30vh] object-cover" // Responsive image height
									src={news.image}
									alt={news.title}
								/>
								<div className="p-4 flex flex-col flex-grow">
									<h5 className="text-lg font-bold text-gray-900">{news.title}</h5>
									<p className="text-gray-700 text-sm line-clamp-2 flex-grow">
										{news.caption}
									</p>
									<a
										onClick={() => navigate(`/news/${news.id}`)}
										className="inline-flex items-center text-sm font-medium text-accent hover:underline cursor-pointer mt-auto"
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
				</div>

				{/* Announcements Section */}
				<div className="md:col-span-1 flex flex-col">
					<h2 className="text-2xl sm:text-4xl font-bold tracking-wide mb-6">
						<span className="text-accent">| </span> Announcements
					</h2>

					<div className="bg-background text-black flex flex-col py-6 w-full h-[60vh]">
						{/* Scrollable Announcements */}
						<div className="flex-1 overflow-y-auto px-4 scrollbar-thin scrollbar-thumb-primary scrollbar-track-gray-200 scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
							{announcements.map((announcement) => (
								<div
									key={announcement.id}
									onClick={() => navigate(`/announcements/${announcement.id}`)}
									className="flex items-center gap-6 py-4 border-b border-gray-200 cursor-pointer transition-all duration-300 
                       hover:bg-gray-100 hover:shadow-sm hover:scale-[1.01] rounded-md px-4"
								>
									{/* Date Section */}
									<div className="flex flex-col items-end w-20">
										<span className="text-lg font-semibold text-accent">{announcement.date.split(' ')[1]}</span> {/* Month */}
										<span className="text-2xl font-bold text-accent">{announcement.date.split(' ')[0]}</span> {/* Day */}
									</div>

									{/* Vertical Divider - More subtle */}
									<div className="w-[1.5px] bg-gray-500 h-12"></div>

									{/* Announcement Title */}
									<div className="flex flex-col">
										<span className="text-lg font-medium text-gray-900">{announcement.title}</span>
									</div>
								</div>
							))}
						</div>


						{/* View All Announcements */}
						<div className="px-4 mt-4 text-right">
							<button onClick={() => navigate("/announcements")} className="text-accent font-medium hover:underline">
								View All →
							</button>
						</div>
					</div>

				</div>
			</div>
		</section>

	);
}
