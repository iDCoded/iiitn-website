"use client";

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

interface NewsItem {
    id: string;
    category: string;
    image: string;
    title: string;
    description: string;
}

export default function NewsCarousel() {
    const [newsData, setNewsData] = useState<NewsItem[]>([]);

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

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const res = await fetch("http://localhost:5000/card/cards/category/news");

                if (!res.ok) throw new Error("Failed to fetch news");

                const data = await res.json();
                console.log(data);
                const formattedData = data.map((item: any) => ({
                    id: item.c_id,
                    category: item.c_category,
                    image: item.media_img_path,
                    title: item.title,
                    description: item.caption,
                }));
                setNewsData(formattedData);
                console.log(newsData);
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
                    <h2 className="text-3xl font-bold text-[#002147]">
                        <span className="text-[#E87722]">|</span> Latest News & Updates
                    </h2>
                    <a href="/news" className="text-[#E87722] hover:underline flex flex-row">
                        View All <span className="ml-2"><FaArrowRight /></span>
                    </a>
                </div>

                {/* Carousel */}
                <div className="relative">
                    {/* Previous Button */}
                    <button
                        onClick={() => instanceRef.current?.prev()}
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg p-2 rounded-full hover:bg-gray-200"
                    >
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
                                                <img src={news.image} alt={news.title} className="w-full h-full object-fit" />
                                            </div>
                                            <CardContent className="p-4">
                                                <h3 className="text-lg font-semibold text-[#002147]">{news.title}</h3>
                                                <p className="text-sm text-gray-600">{news.description}</p>
                                            </CardContent>
                                        </Card>
                                    </Link>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>

                    {/* Next Button */}
                    <button
                        onClick={() => instanceRef.current?.next()}
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg p-2 rounded-full hover:bg-gray-200"
                    >
                        <FaArrowRight />
                    </button>
                </div>
            </div>
        </section>
    );
}
