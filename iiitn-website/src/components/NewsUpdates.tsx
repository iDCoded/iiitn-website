"use client";

import { useState, useRef } from "react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const newsData = [
    { title: "Hackathon 2025 Announced!", description: "Join the biggest coding event at IIIT Nagpur.", image: "https://source.unsplash.com/400x250/?coding" },
    { title: "New Hostel Block Inaugurated", description: "The latest hostel block is now open for students.", image: "https://source.unsplash.com/400x250/?hostel" },
    { title: "AI Lab Now Open", description: "IIIT Nagpur introduces a state-of-the-art AI lab.", image: "https://source.unsplash.com/400x250/?technology" },
    { title: "College Fest Registrations Open", description: "Register now for one of the biggest college fests!", image: "https://source.unsplash.com/400x250/?festival" },
    { title: "Scholarship Applications Open", description: "Apply for financial aid and merit scholarships.", image: "https://source.unsplash.com/400x250/?scholarship" },
    { title: "Placement Season Begins!", description: "Top companies visiting campus for recruitments.", image: "https://source.unsplash.com/400x250/?office" },
    { title: "New Courses Introduced", description: "Check out the latest courses introduced this semester.", image: "https://source.unsplash.com/400x250/?books" },
    { title: "Student Council Elections", description: "Participate in the student council elections.", image: "https://source.unsplash.com/400x250/?election" },
    { title: "Alumni Meet 2025", description: "Join the alumni meet and connect with your batchmates.", image: "https://source.unsplash.com/400x250/?alumni" },
];

export default function NewsCarousel() {
    const sliderRef = useRef(null);
    const [slider, setSlider] = useState<any>(null);

    const [instanceRef] = useKeenSlider({
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
        created: (s) => setSlider(s),
    });

    return (
        <section className="py-10 bg-gray-100">
            <div className="max-w-6xl mx-auto px-6">
                <h2 className="text-3xl font-bold text-[#002147] mb-6">
                    <span className="text-[#E87722]">|</span> Latest News & Updates
                </h2>

                <div className="relative">
                    <button
                        onClick={() => slider?.prev()}
                        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg p-2 rounded-full hover:bg-gray-200"
                    >
                        ◀
                    </button>

                    <Carousel>
                        <CarouselContent ref={instanceRef} className="keen-slider">
                            {newsData.map((news, index) => (
                                <CarouselItem key={index} className="keen-slider__slide">
                                    <Card className="shadow-lg rounded-lg overflow-hidden">
                                        <img src={news.image} alt={news.title} className="w-full h-40 object-cover" />
                                        <CardContent className="p-4">
                                            <h3 className="text-lg font-semibold text-[#002147]">{news.title}</h3>
                                            <p className="text-sm text-gray-600">{news.description}</p>
                                        </CardContent>
                                    </Card>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>

                    <button
                        onClick={() => slider?.next()}
                        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-lg p-2 rounded-full hover:bg-gray-200"
                    >
                        ▶
                    </button>
                </div>
            </div>
        </section>
    );
}
