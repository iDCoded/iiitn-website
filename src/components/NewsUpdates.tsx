/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface NewsItem {
	id: string;
	c_category: string;
	image: string;
	title: string;
	caption: string;
}

export default function NewsCarousel() {
	const [newsData, setNewsData] = useState<NewsItem[]>([
		{
			id: "1",
			c_category: "news",
			image: "/default-news.jpg",
			title: "News Title",
			caption: "News Caption",
		},
		{
			id: "2",
			c_category: "news",
			image: "/default-news.jpg",
			title: "News Title",
			caption: "News Caption",
		},
		{
			id: "3",
			c_category: "news",
			image: "/default-news.jpg",
			title: "News Title",
			caption: "News Caption",
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
					`${import.meta.env.VITE_API_BASE_URL}/card/cards/category/news`
				);
				if (!res.ok) throw new Error("Failed to fetch news");
				const data = await res.json();
				console.log("Fetched news:", data);
				// Filter only "news" and "updates"
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

	// Auto-scroll effect
	useEffect(() => {
		const interval = setInterval(() => {
			instanceRef.current?.next();
		}, 5000); // 5 sec interval

		return () => clearInterval(interval);
	}, [instanceRef]);

	return (
		<section className="py-10 bg-gray-100 h-[80vh]">
			<div className="max-w-6xl mx-auto px-6">
				<div className="flex justify-between items-center mb-6">
					<h2 className="text-3xl font-bold text-primary">
						<span className="text-accent">|</span> Latest News & Updates
					</h2>
					<a href="/news" className="text-accent hover:underline flex flex-row">
						View All{" "}
						<span className="ml-2">
							<FaArrowRight />
						</span>
					</a>
				</div>

				{/* Carousel */}
				<div className="relative">
					{/* Previous Button */}
					<button
						onClick={() => instanceRef.current && instanceRef.current?.prev()}
						className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg p-2 rounded-full hover:bg-gray-200">
						<FaArrowLeft />
					</button>

					{/* Carousel Content */}
					<Carousel>
						<CarouselContent ref={sliderRef} className="keen-slider">
							{newsData.map((news, index) => (
								<CarouselItem key={index} className="keen-slider__slide">
									<Link to={`/news/${news.id}`}>
										<Card className="shadow-lg rounded-lg overflow-hidden h-[50vh]">
											<div className="h-[30vh] bg-black">
												<img
													src={news.image}
													alt={news.title}
													className="w-full h-full object-fit"
												/>
											</div>
											<CardContent className="p-4">
												<h3 className="text-lg font-semibold text-primary">
													{news.title}
												</h3>
												<p className="text-sm text-gray-600">{news.caption}</p>
											</CardContent>
										</Card>
									</Link>
								</CarouselItem>
							))}
						</CarouselContent>
					</Carousel>

					{/* Next Button */}
					<button
						onClick={() => instanceRef.current && instanceRef.current?.next()}
						className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg p-2 rounded-full hover:bg-gray-200">
						<FaArrowRight />
					</button>
				</div>
			</div>
		</section>
	);
}
