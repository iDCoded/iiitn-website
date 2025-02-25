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
    const [newsData, setNewsData] = useState<NewsItem[]>([
        {
            id: "news",
            category: "News",
            image: "https://static.toiimg.com/thumb/msid-117532524,imgsize-38444,width-400,height-225,resizemode-72/117532524.jpg",
            title: "Duo from IIIT Nagpur invited as special guests for Republic Day parade",
            description: "IIIT Nagpur has signed an MoU with the Maharashtra government to promote AI and ML in the state.",
        },
        {
            id: "updates-1",
            category: "Updates",
            image: "https://imgs.search.brave.com/WE_FzZkUn2nRyWQI6BE3eBdqnhN49qmN4f_7EdEcY4s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9paWl0/bi5hYy5pbi9pbWFn/ZXMvTmV3c0V2ZW50/cy83ODUvTmV3c0lt/YWdlLkpQRw",
            title: "2nd Convocation Ceremony",
            description: "IIIT Nagpur recently held its 2nd convocation ceremony with students receiving their degrees and awards.",
        },
        {
            id: "news-2",
            category: "News",
            image: "https://imgs.search.brave.com/MWacu6ain-mbYnq57K9WQV5xJ2T422cSdSePqObriBs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9paWl0/bi5hYy5pbi9pbWFn/ZXMvU2xpZGVyLzIz/MC9TbGlkZXItMjMw/LmpwZw",
            title: "Training on Public Procurement",
            description: "Training on Public Procurement during Vigilance Awareness Week at IIIT Nagpur.",
        },
        {
            id: "updates-2",
            category: "Updates",
            image: "https://iiitn.ac.in/images/album/republic-day-2025//ThumbnailImage.jpg",
            title: "76th Republic Day Celebration",
            description: "IIIT Nagpur celebrated the 76th Republic Day with patriotic fervor and enthusiasm.",
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
                const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/card/cards`);
                if (!res.ok) throw new Error("Failed to fetch news");
                const data = await res.json();

                // Filter only "news" and "updates"
                interface NewsItem {
                    id: string;
                    category: string;
                    image: string;
                    title: string;
                    description: string;
                }

                const filteredNews: NewsItem[] = data.filter((item: NewsItem) =>
                    item.category.toLowerCase() === "news" || item.category.toLowerCase() === "updates"
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
        <section className="py-10 bg-gray-100 h-[80vh]">
            <div className="max-w-6xl mx-auto px-6">

                <div className="flex justify-between items-center mb-6">
                    <h2 className="text-3xl font-bold text-primary">
                        <span className="text-accent">|</span> Latest News & Updates
                    </h2>
                    <a href="/news" className="text-accent hover:underline flex flex-row">
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
                                                <h3 className="text-lg font-semibold text-primary">{news.title}</h3>
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