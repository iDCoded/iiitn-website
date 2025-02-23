import { useState, useEffect } from "react";
import { Card, CardContent, CardTitle } from "./ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from "./ui/carousel";

const API_URL = "https://your-api-endpoint.com/news"; // Replace with actual API endpoint

interface News {
    id: string;
    image: string;
    title: string;
    description: string;
    date: string;
    category: string;
}

const NewsUpdates = () => {
    const [newsData, setNewsData] = useState<News[]>([
        {
            id: "1",
            image: "https://via.placeholder.com/150",
            title: "Default News 1",
            description: "This is the description for default news 1.",
            date: "2023-01-01",
            category: "Category 1"
        },
        {
            id: "2",
            image: "https://via.placeholder.com/150",
            title: "Default News 2",
            description: "This is the description for default news 2.",
            date: "2023-01-02",
            category: "Category 2"
        },
        {
            id: "3",
            image: "https://via.placeholder.com/150",
            title: "Default News 3",
            description: "This is the description for default news 3.",
            date: "2023-01-03",
            category: "Category 3"
        },
        {
            id: "4",
            image: "https://via.placeholder.com/150",
            title: "Default News 4",
            description: "This is the description for default news 4.",
            date: "2023-01-04",
            category: "Category 4"
        },
        {
            id: "5",
            image: "https://via.placeholder.com/150",
            title: "Default News 5",
            description: "This is the description for default news 5.",
            date: "2023-01-05",
            category: "Category 5"
        },
        {
            id: "6",
            image: "https://via.placeholder.com/150",
            title: "Default News 6",
            description: "This is the description for default news 6.",
            date: "2023-01-06",
            category: "Category 6"
        }
    ]);
    const [activeIndex, setActiveIndex] = useState(0);

    // 🎯 Fetch news from API
    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await fetch(API_URL);
                const data = await response.json();
                setNewsData(data);
            } catch (error) {
                console.error("Error fetching news:", error);
            }
        };

        fetchNews();
    }, []);

    // ⏳ Auto-scroll every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) =>
                prevIndex + 3 >= newsData.length ? 0 : prevIndex + 3
            );
        }, 5000);

        return () => clearInterval(interval);
    }, [newsData]);

    return (
        <section className="py-12 px-6 bg-white">
            <div className="max-w-6xl mx-auto">
                {/* 🔥 Minimalist Header */}
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-semibold text-[#002147]">
                        News & Updates
                    </h2>
                    <a href="/news" className="text-[#E87722] text-sm font-medium hover:underline">
                        View All →
                    </a>
                </div>

                {/* 🎡 Minimalist Auto-Scrolling Carousel */}
                <Carousel className="relative overflow-hidden">
                    <CarouselContent className="flex">
                        {newsData.length > 0 ? (
                            newsData.slice(activeIndex, activeIndex + 3).map((news) => (
                                <CarouselItem
                                    key={news.id}
                                    className="px-2 basis-[33%] sm:basis-[33%] md:basis-[33%] lg:basis-[33%]"
                                >
                                    <Card className="bg-[#f5f5f5] rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-transform hover:scale-[1.05] duration-300 w-80 h-[300px]">
                                        {/* 📸 Image Section with 3:4 Aspect Ratio */}
                                        <div className="relative bg-[#002147] w-full aspect-[16/9] flex items-center justify-center overflow-hidden rounded-t-xl">
                                            <img
                                                src={news.image}
                                                alt={news.title}
                                                className="w-full h-full object-contain"
                                            />
                                            {/* 📌 Category Badge */}
                                            <span className="absolute top-2 left-2 bg-[#E87722] text-white text-xs font-semibold px-3 py-1 rounded-md">
                                                {news.category}
                                            </span>
                                        </div>

                                        {/* 📑 Card Content */}
                                        <CardContent className="p-5 flex flex-col h-[calc(100%-75%)]">
                                            {/* 📰 Title */}
                                            <CardTitle className="text-lg font-semibold text-[#002147] leading-tight">
                                                {news.title}
                                            </CardTitle>

                                            {/* 📝 Description */}
                                            <p className="text-gray-600 mt-2 text-sm line-clamp-4">
                                                {news.description}
                                            </p>

                                            {/* 📅 Date + Read More */}
                                            <div className="mt-auto flex justify-between items-center text-sm">
                                                <span className="text-gray-500">{news.date}</span>
                                                <a
                                                    href={`/news/${news.id}`}
                                                    className="text-[#E87722] font-medium bg-[#E87722]/10 px-3 py-1 rounded-md hover:bg-[#E87722]/20 transition-all"
                                                >
                                                    Read More →
                                                </a>
                                            </div>
                                        </CardContent>
                                    </Card>


                                </CarouselItem>
                            ))
                        ) : (
                            <p className="text-center text-gray-500 w-full">Loading news...</p>
                        )}
                    </CarouselContent>

                    {/* 🔄 Minimalist Navigation Controls */}
                    <CarouselPrevious
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 text-[#E87722] text-lg hover:text-opacity-80 transition-all"
                        onClick={() => setActiveIndex((prevIndex) => Math.max(0, prevIndex - 3))}
                    />
                    <CarouselNext
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 text-[#E87722] text-lg hover:text-opacity-80 transition-all"
                        onClick={() =>
                            setActiveIndex((prevIndex) =>
                                prevIndex + 3 >= newsData.length ? 0 : prevIndex + 3
                            )
                        }
                    />
                </Carousel>
            </div>
        </section>
    );
};

export default NewsUpdates;
