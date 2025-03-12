/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface NewsItem {
	id: string;
	c_category: string;
	image: string;
	title: string;
	caption: string;
}

const defaultAnnouncements = [
	{ id: "1", title: "Announcement 1", date: "2021-10-01" },
	{ id: "2", title: "Announcement 2", date: "2021-10-02" },
	{ id: "3", title: "Announcement 3", date: "2021-10-03" },
];

export default function NewsSection() {
	const [newsData, setNewsData] = useState<NewsItem[]>([]);
	const [currentIndex, setCurrentIndex] = useState(0);
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

	// Auto-slide effect every 5 seconds
	useEffect(() => {
		const interval = setInterval(() => {
			nextSlide();
		}, 5000);
		return () => clearInterval(interval);
	}, [currentIndex, newsData]);

	// Navigation functions
	const prevSlide = () => {
		setCurrentIndex((prevIndex) => (prevIndex === 0 ? newsData.length - 1 : prevIndex - 1));
	};

	const nextSlide = () => {
		setCurrentIndex((prevIndex) => (prevIndex === newsData.length - 1 ? 0 : prevIndex + 1));
	};

	return (
		<section className="relative w-full px-4 sm:px-6 lg:px-12 py-12 bg-background">
			<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
				{/* News Section */}
				<div className="flex flex-col h-full w-full" ref={newsSectionRef}>
					<div className="flex items-center justify-between">
						<h2 className="text-2xl sm:text-4xl font-bold tracking-wide mb-6">
							<span className="text-accent">| </span> Latest News
						</h2>
						<a href="/news" className="text-accent text-md font-semibold hover:underline">
							View All →
						</a>
					</div>

					{/* News Carousel */}
					<div className="relative w-full h-[60vh] overflow-hidden">
						{/* Left Button */}
						<button
							onClick={prevSlide}
							className="absolute left-[-10] top-1/2 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 z-10"
						>
							<FaArrowLeft />
						</button>

						{/* Animated News Item */}
						<AnimatePresence>
							<motion.div
								key={newsData[currentIndex]?.id}
								className="absolute w-full h-full"
								initial={{ opacity: 0, x: 100 }}
								animate={{ opacity: 1, x: 0 }}
								exit={{ opacity: 0, x: -100 }}
								transition={{ duration: 0.5 }}
							>
								<img
									src={newsData[currentIndex]?.image}
									alt={newsData[currentIndex]?.title}
									className="w-full h-full object-cover rounded-lg"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex items-end p-10 justify-center">
									<h2 className="text-white text-xl font-bold text-center px-4">
										{newsData[currentIndex]?.title}
									</h2>
								</div>
							</motion.div>
						</AnimatePresence>

						{/* Right Button */}
						<button
							onClick={nextSlide}
							className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 z-10"
						>
							<FaArrowRight />
						</button>

						{/* Pagination Dots */}
						<div className="absolute bottom-4 w-full flex justify-center gap-2">
							{newsData.map((_, index) => (
								<div
									key={index}
									onClick={() => setCurrentIndex(index)}
									className={`h-3 w-3 rounded-full cursor-pointer ${currentIndex === index ? "bg-accent" : "bg-gray-400"}`}
								/>
							))}
						</div>
					</div>
				</div>

				{/* Announcements Section */}
				<div className="flex flex-col w-full">
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
									className="flex items-center gap-4 py-4 border-b border-gray-200 cursor-pointer transition-all duration-300 
				   hover:bg-gray-100 hover:shadow-sm hover:scale-[1.01] rounded-md px-4"
								>
									{/* Date Section - Center Aligned */}
									<div className="flex flex-col items-center w-16 flex-shrink-0">
										<span className="text-lg font-semibold text-accent leading-none">
											{announcement.date.split(' ')[1]} {/* Month */}
										</span>
										<span className="text-2xl font-bold text-accent leading-none">
											{announcement.date.split(' ')[0]} {/* Day */}
										</span>
									</div>

									{/* Vertical Divider */}
									<div className="w-[2px] bg-gray-400 h-10"></div>

									{/* Announcement Title */}
									<div className="flex flex-col w-full">
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
