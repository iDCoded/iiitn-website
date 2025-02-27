"use client";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

interface NewsItem {
	id: string;
	c_category: string;
	image: string;
	title: string;
	description: string;
}

export default function NewsCarousel() {
	const [newsData, setNewsData] = useState<NewsItem[]>([
		{
			id: "news",
			category: "News",
			image:
				"https://static.toiimg.com/thumb/msid-117532524,imgsize-38444,width-400,height-225,resizemode-72/117532524.jpg",
			title:
				"Duo from IIIT Nagpur invited as special guests for Republic Day parade",
			description:
				"IIIT Nagpur has signed an MoU with the Maharashtra government to promote AI and ML in the state.",
		},
		{
			id: "updates-1",
			category: "Updates",
			image:
				"https://imgs.search.brave.com/WE_FzZkUn2nRyWQI6BE3eBdqnhN49qmN4f_7EdEcY4s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9paWl0/bi5hYy5pbi9pbWFn/ZXMvTmV3c0V2ZW50/cy83ODUvTmV3c0lt/YWdlLkpQRw",
			title: "2nd Convocation Ceremony",
			description:
				"IIIT Nagpur recently held its 2nd convocation ceremony with students receiving their degrees and awards.",
		},
		{
			id: "news-2",
			category: "News",
			image:
				"https://imgs.search.brave.com/MWacu6ain-mbYnq57K9WQV5xJ2T422cSdSePqObriBs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9paWl0/bi5hYy5pbi9pbWFn/ZXMvU2xpZGVyLzIz/MC9TbGlkZXItMjMw/LmpwZw",
			title: "Training on Public Procurement",
			description:
				"Training on Public Procurement during Vigilance Awareness Week at IIIT Nagpur.",
		},
		{
			id: "updates-2",
			category: "Updates",
			image:
				"https://iiitn.ac.in/images/album/republic-day-2025//ThumbnailImage.jpg",
			title: "76th Republic Day Celebration",
			description:
				"IIIT Nagpur celebrated the 76th Republic Day with patriotic fervor and enthusiasm.",
		},
	]);

	const [sliderRef, instanceRef] = useKeenSlider({
		slides: {
			perView: 1,
			spacing: 10,
		},
		breakpoints: {
			"(min-width: 768px)": {
				slides: {
					perView: 3,
					spacing: 20,
				},
			},
		},
		loop: true,
	});

	// Fetch data from API
	useEffect(() => {
		const fetchNews = async () => {
			try {
				const res = await fetch(
					`http://localhost:5000/card/cards/category/news`
				);
				if (!res.ok) throw new Error("Failed to fetch news");
				const data = await res.json();

				const filteredNews: NewsItem[] = data.filter(
					(item: NewsItem) =>
						item.c_category.toLowerCase() === "news" ||
						item.c_category.toLowerCase() === "updates"
				);

				setNewsData(filteredNews);
			} catch (error) {
				console.error("Error fetching news:", error);
			}
		};

		fetchNews();
	}, []);

	// Auto-scroll effect
	useEffect(() => {
		const interval = setInterval(() => {
			instanceRef.current?.next();
		}, 5000); // 5 sec interval

		return () => clearInterval(interval);
	}, [instanceRef]);

	return (
		<motion.section
			initial={{ opacity: 0, y: 50 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 1 }}
			className="h-screen bg-gray-100 flex items-center justify-center">
			<div className="max-w-7xl mx-auto px-6 w-full">
				{/* Header */}
				<motion.div
					initial={{ opacity: 0, y: -30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="flex justify-between items-center mb-6">
					<h2 className="text-4xl font-bold text-primary">
						<span className="text-accent">|</span> Latest News & Updates
					</h2>
					<a
						href="/news"
						className="text-accent hover:underline flex items-center text-lg font-medium">
						View All <FaArrowRight className="ml-2" />
					</a>
				</motion.div>

				{/* Carousel */}
				<div className="relative">
					{/* Previous Button */}
					<button
						onClick={() => instanceRef.current?.prev()}
						className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg p-3 rounded-full hover:bg-gray-200 transition">
						<FaArrowLeft className="text-primary text-xl" />
					</button>

					{/* Carousel Content */}
					<Carousel>
						<CarouselContent ref={sliderRef} className="keen-slider">
							{newsData.map((news, index) => (
								<CarouselItem key={index} className="keen-slider__slide">
									<motion.div
										initial={{ opacity: 0, scale: 0.9 }}
										whileInView={{ opacity: 1, scale: 1 }}
										transition={{ duration: 0.6 }}
										viewport={{ once: true }}>
										<Link to={`/news/${news.id}`}>
											<motion.div
												whileHover={{
													scale: 1.05,
													boxShadow: "0px 10px 20px rgba(0,0,0,0.2)",
												}}
												transition={{
													type: "spring",
													stiffness: 200,
													damping: 10,
												}}
												className="shadow-lg rounded-lg overflow-hidden h-[60vh] bg-white transition-all">
												{/* Image with Zoom Effect */}
												<motion.div className="h-[35vh] overflow-hidden">
													<motion.img
														src={news.image}
														alt={news.title}
														className="w-full h-full object-cover transition-transform duration-300"
														whileHover={{ scale: 1.1 }}
													/>
												</motion.div>

												{/* Text Content */}
												<CardContent className="p-5">
													<h3 className="text-xl font-semibold text-gray-900">
														{news.title}
													</h3>
													<p className="text-md text-gray-700 mt-2">
														{news.description}
													</p>
												</CardContent>
											</motion.div>
										</Link>
									</motion.div>
								</CarouselItem>
							))}
						</CarouselContent>
					</Carousel>

					{/* Next Button */}
					<button
						onClick={() => instanceRef.current?.next()}
						className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg p-3 rounded-full hover:bg-gray-200 transition">
						<FaArrowRight className="text-primary text-xl" />
					</button>
				</div>
			</div>
		</motion.section>
	);
}
