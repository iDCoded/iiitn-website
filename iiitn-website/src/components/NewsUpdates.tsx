import { useState, useEffect } from "react";
import { Card, CardContent, CardTitle } from "./ui/card";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious
} from "./ui/carousel";

const API_URL = "https://your-api-endpoint.com/news"; // 🔗 Replace with actual API endpoint

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

    return (
        <section className="py-16 px-6 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-3xl font-bold text-[#002147]">
                        <span className="text-[#E87722]">|</span> News
                    </h2>
                    <a href="/news" className="text-[#E87722] hover:underline text-sm">
                        View All &gt;
                    </a>
                </div>

                {/* 🏆 Carousel */}
                <Carousel className="relative w-full">
                    <CarouselContent className="-ml-4 flex">
                        {newsData.length > 0 ? (
                            newsData.map((news, index) => (
                                <CarouselItem
                                    key={index}
                                    className="pl-4 basis-1/3 sm:basis-1/2 md:basis-1/3" // Shows 3 on desktop, 2 on tablet, 1 on mobile
                                >
                                    <Card className="shadow-lg hover:shadow-xl transition-all rounded-lg overflow-hidden border border-gray-200 hover:scale-[1.02] duration-300">
                                        {/* 🖼 News Image with Gradient Overlay */}
                                        <div className="relative">
                                            <img
                                                src={news.image}
                                                alt={news.title}
                                                className="w-full h-48 object-cover rounded-t-lg"
                                            />
                                            {/* Overlay for better text visibility */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                            {/* 🏷 Category Badge */}
                                            <span className="absolute top-2 left-2 bg-[#E87722] text-white text-xs font-semibold px-3 py-1 rounded-md">
                                                {news.category}
                                            </span>
                                        </div>

                                        <CardContent className="p-5">
                                            {/* 📌 News Title */}
                                            <CardTitle className="text-lg font-bold text-[#002147] leading-snug">
                                                {news.title}
                                            </CardTitle>

                                            {/* 📝 Description */}
                                            <p className="text-gray-600 mt-2 text-sm line-clamp-3">
                                                {news.description}
                                            </p>

                                            {/* 📅 Date + Read More */}
                                            <div className="mt-4 flex justify-between items-center text-sm">
                                                <span className="text-gray-500">{news.date}</span>
                                                <a
                                                    href={`/news/${news.id}`} // 🔗 Make it clickable
                                                    className="text-[#E87722] hover:underline font-medium"
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

                    {/* Navigation Controls */}
                    <CarouselPrevious className="left-0" />
                    <CarouselNext className="right-0" />
                </Carousel>
            </div>
        </section>
    );
};

export default NewsUpdates;
