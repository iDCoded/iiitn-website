import { useState, useEffect } from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const testimonials = [
    {
        name: "Rahul Sharma",
        role: "Alumnus, Class of 2022",
        feedback:
            "IIIT Nagpur provided me with the best opportunities to grow, learn, and innovate. The research and faculty guidance were instrumental in shaping my career.",
    },
    {
        name: "Priya Verma",
        role: "M.Tech Student",
        feedback:
            "The vibrant campus life and research-oriented approach at IIIT Nagpur made my learning experience truly remarkable.",
    },
    {
        name: "Amit Joshi",
        role: "Professor, CSE Department",
        feedback:
            "We at IIIT Nagpur strive to create an environment of excellence in research and learning, preparing students for real-world challenges.",
    },
];

const Testimonials = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-16 px-6 bg-white">
            <div className="max-w-6xl mx-auto text-left">
                <h2 className="text-3xl font-bold mb-6">
                    <span className="text-accent text-4xl">|</span> Testimonials
                </h2>
                <div className="flex flex-col justify-center items-center ">
                    <div className="relative bg-gray-100 text-center w-4xl p-8 rounded-xl shadow-md">
                        <FaQuoteLeft className="absolute top-4 left-4 text-gray-300 text-3xl" />
                        <p className="text-lg text-gray-700 italic">{testimonials[index].feedback}</p>
                        <FaQuoteRight className="absolute bottom-4 right-4 text-gray-300 text-3xl" />

                        <div className="mt-6">
                            <h4 className="text-lg font-semibold text-primary">{testimonials[index].name}</h4>
                            <p className="text-gray-600">{testimonials[index].role}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
