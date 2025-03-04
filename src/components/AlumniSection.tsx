"use client";

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
    {
        name: "Dhanraj Mahurkar",
        position: "Software Engineer at Lowes",
        image: AA,
        quote:
            "One of the best things that you will find here is an amazing peer group. The training and placement cell keeps you well informed about the various opportunities available.",
    },
    {
        name: "Kartik Kinge",
        position: "GenAI @ Sarvam AI",
        image: AB,
        quote:
            "The college has a mandatory 6-month semester internship program, this has proved to be most beneficial to gain industrial experience even before we graduate.",
    },
    {
        name: "Amav Khandekar",
        position: "Software Engineer at Lowes",
        image: AC,
        quote:
            "The best part about IIIT NAGPUR is the kind of peers you get here. The people here are from diverse backgrounds and interests from which you can learn a lot.",
    },
    {
        name: "Rutvik Page",
        position: "Research Professional, University of Chicago",
        image: AD,
        quote:
            "The perenially available and efficient Training and Placement Cell (TnP) does an impeccable task of exposing the students to world-class facilities like webinars and fantastic job opportunities.",
    },
    {
        name: "Rohan Shukla",
        position: "B. Tech CSE Batch 2021",
        image: e,
        quote:
            "The focus of studies here is clearly on IT industry demands over a couple of decades, and the institute makes every attempt to equip us for newer challenges in the professional world.",
    },
    {
        name: "Yashi Kapoor",
        position: "Associate at Goldman Sachs",
        image: AF,
        quote:
            "Working in a good company is a dream for almost anyone coming to an engineering college. The credit for this goes to all the professors of this college.",
    },
    {
        name: "Ankit Barai",
        position: "Software Engineer 2 @ Amazon | Ex- Jio-AI",
        image: AG,
        quote:
            "The kind of exposure given by the faculty to the students is extraordinary. My team entered the finale of Covid-19 Hackathon by CDAC, Nvidia, and Govt. of India.",
    },
    {
        name: "Ayushman Gehlot",
        position: "B.Tech CSE Batch 2021",
        image: h,
        quote:
            "I have received a placement offer from LTI. The complete placement drive was well managed by LTI and our TNP cell.",
    },
];

const AlumniSection = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % alumniData.length);
        }, 4000); // Change slide every 4 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen w-full bg-gradient-to-br from-[#002147] via-[#19376D] to-[#070F2B] text-white" style={{ backgroundImage: `url(${abc})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            {/* Glassmorphic Card */}
            <div className="relative w-full max-w-2xl p-6 rounded-xl bg-white/10 backdrop-blur-lg shadow-lg border border-white/20">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col items-center text-center"
                    >
                        {/* Profile Image with Glass Effect */}
                        <div
                            className="w-32 h-32 rounded-full bg-cover bg-center border-4 border-white/50 shadow-lg"
                            style={{ backgroundImage: `url(${alumniData[index].image})` }}
                        ></div>

                        {/* Alumni Name & Position */}
                        <h2 className="mt-4 text-2xl font-bold">{alumniData[index].name}</h2>
                        <p className="mt-1 text-orange-400 text-lg font-semibold italic">
                            {alumniData[index].position}
                        </p>

                        {/* Alumni Quote */}
                        <p className="mt-4 text-lg font-medium text-white/80 px-6 leading-relaxed">
                            "{alumniData[index].quote}"
                        </p>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default AlumniSection;
