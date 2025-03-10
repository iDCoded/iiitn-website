"use client";

import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AA from "../assets/AA.jpeg";
import AB from "../assets/AB.jpeg";
import AC from "../assets/AC.jpeg";
import AD from "../assets/AD.jpeg";
import e from "../assets/e.jpg";
import AF from "../assets/AF.jpeg";
import AG from "../assets/AG.jpeg";
import h from "../assets/h.jpg";
import abc from "../assets/abc.jpg";

const alumniData = [
    { name: "Dhanraj Mahurkar", position: "Software Engineer at Lowes", image: AA, quote: "One of the best things that you will find here is an amazing peer group. The training and placement cell keeps you well informed about the various opportunities available." },
    { name: "Kartik Kinge", position: "GenAI @ Sarvam AI", image: AB, quote: "The college has a mandatory 6-month semester internship program, this has proved to be most beneficial to gain industrial experience even before we graduate." },
    { name: "Amav Khandekar", position: "Software Engineer at Lowes", image: AC, quote: "The best part about IIIT NAGPUR is the kind of peers you get here. The people here are from diverse backgrounds and interests from which you can learn a lot." },
    { name: "Rutvik Page", position: "Research Professional, University of Chicago", image: AD, quote: "The perennially available and efficient Training and Placement Cell (TnP) does an impeccable task of exposing the students to world-class facilities like webinars and fantastic job opportunities." },
    { name: "Rohan Shukla", position: "B. Tech CSE Batch 2021", image: e, quote: "The focus of studies here is clearly on IT industry demands over a couple of decades, and the institute makes every attempt to equip us for newer challenges in the professional world." },
    { name: "Yashi Kapoor", position: "Associate at Goldman Sachs", image: AF, quote: "Working in a good company is a dream for almost anyone coming to an engineering college. The credit for this goes to all the professors of this college." },
    { name: "Ankit Barai", position: "Software Engineer 2 @ Amazon | Ex- Jio-AI", image: AG, quote: "The kind of exposure given by the faculty to the students is extraordinary. My team entered the finale of Covid-19 Hackathon by CDAC, Nvidia, and Govt. of India." },
    { name: "Ayushman Gehlot", position: "B.Tech CSE Batch 2021", image: h, quote: "I have received a placement offer from LTI. The complete placement drive was well managed by LTI and our TNP cell." },
];

const AlumniSection = () => {
    const [index, setIndex] = useState(0);
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % alumniData.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative flex flex-col items-center justify-center min-h-screen w-full bg-gradient-to-br from-[#002147] via-[#19376D] to-[#070F2B] text-white px-6 py-20">
            {/* Background Image */}
            <div className="absolute inset-0 bg-cover bg-center h-full" style={{ backgroundImage: `url(${abc})` }}></div>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

            {/* Heading Section */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center py-16">
                <motion.h2
                    className="text-3xl sm:text-5xl font-bold drop-shadow-lg tracking-wide max-w-6xl mx-auto p-6 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}>
                    <span className="text-accent">| </span>Testimonials
                </motion.h2>

                {/* Description */}
                <motion.p
                    className="max-w-4xl mx-auto text-center px-6 mt-4 text-gray-200 text-base sm:text-lg"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}>
                    Here are some testimonials from our alumni about their experiences at IIIT Nagpur.
                </motion.p>
            </div>

            {/* Content Section */}
            <div ref={ref} className="relative z-10 w-full max-w-3xl p-10 rounded-xl bg-white/20 backdrop-blur-lg shadow-lg border border-white/30">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col items-center text-center space-y-6"
                    >
                        <div className="w-36 h-36 rounded-full bg-cover bg-center border-4 border-white/50 shadow-lg" style={{ backgroundImage: `url(${alumniData[index].image})` }}></div>

                        <h2 className="text-2xl font-bold text-white drop-shadow-md">{alumniData[index].name}</h2>
                        <p className="text-orange-400 text-lg font-semibold italic">{alumniData[index].position}</p>

                        <p className="mt-4 text-lg font-medium text-white/80 px-8 sm:px-12 leading-relaxed">
                            "{alumniData[index].quote}"
                        </p>
                    </motion.div>
                </AnimatePresence>

                <div className="flex justify-center mt-8 space-x-3">
                    {alumniData.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setIndex(i)}
                            className={`w-4 h-4 rounded-full transition-all duration-300 ${i === index ? 'bg-white w-5 h-5' : 'bg-gray-400 opacity-70'}`}>
                        </button>
                    ))}
                </div>
            </div>
        </div>

    );
};

export default AlumniSection;
