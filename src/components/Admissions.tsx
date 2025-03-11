import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardTitle } from "./ui/card";
import { FaArrowRight } from "react-icons/fa";
import admission from "../assets/IIIT9.jpg"; // 🎨 Background Image
import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "react-intersection-observer";

const programs = [
    {
        title: "B.Tech Programs",
        description: "Undergraduate engineering courses in multiple disciplines.",
        link: "/admissions/btech",
    },
    {
        title: "Postgraduate (M.Tech)",
        description: "Master's programs in engineering, management, and more.",
        link: "/admissions/pg",
    },
    {
        title: "Doctoral Programs (Ph.D.)",
        description: "Research opportunities in various cutting-edge fields.",
        link: "/admissions/pg",
    },
];

const Admissions = () => {
    const navigate = useNavigate();

    const [hovered, setHovered] = useState<number | null>(null);
    const [ripple, setRipple] = useState<{ x: number; y: number; index: number | null }>({
        x: 0,
        y: 0,
        index: null,
    });

    // Scroll Animation Trigger
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2,
    });

    // Scroll-Zoom Effect
    const { scrollYProgress } = useScroll();
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 2]);

    const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement>, index: number) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        setRipple({ x, y, index });
    };

    return (
        <section
            ref={ref}
            className="relative flex flex-col items-center justify-center h-screen overflow-hidden px-4 sm:px-6 lg:px-8">

            {/* 📌 Background Image with Scroll-Zoom */}
            <motion.div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${admission})`, scale }}
            />

            {/* Overlay for Better Readability */}
            <div className="absolute inset-0 bg-primary/40 backdrop-blur-lg border border-white/20"></div>

            {/* Content */}
            <motion.div
                className="relative max-w-6xl text-left text-white px-4 sm:px-6"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, ease: "easeOut" }}>

                {/* Section Title */}
                <motion.h2
                    className="text-2xl sm:text-4xl font-bold drop-shadow-lg tracking-wide"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}>
                    <span className="text-accent">| </span>Admissions & Programs
                </motion.h2>

                {/* Description */}
                <motion.p
                    className="mt-2 sm:mt-4 text-gray-200 text-sm sm:text-lg"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}>
                    Enroll in our world-class education programs.
                </motion.p>

                {/* Cards - Responsive Grid */}
                <motion.div
                    className="mt-6 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6"
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={{
                        visible: { transition: { staggerChildren: 0.3 } },
                        hidden: {},
                    }}
                >
                    {programs.map((program, index) => (
                        <motion.div
                            key={index}
                            className="hover:cursor-pointer"
                            variants={{
                                hidden: { opacity: 0, y: 40 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <Card
                                className="h-48 sm:h-64 relative overflow-hidden bg-white shadow-lg  border border-gray-200 transition-transform duration-300 ease-in-out transform hover:scale-[1.05] hover:shadow-2xl group"
                                onMouseEnter={(e) => {
                                    handleMouseEnter(e, index);
                                    setHovered(index);
                                }}
                                onMouseLeave={() => {
                                    setHovered(null);
                                    setRipple({ x: 0, y: 0, index: null });
                                }}
                            >
                                {/* Ripple Effect */}
                                {ripple.index === index && (
                                    <div
                                        className="absolute bg-white/30  opacity-60 animate-ripple"
                                        style={{
                                            left: ripple.x,
                                            top: ripple.y,
                                            transform: "translate(-50%, -50%)",
                                        }}
                                    ></div>
                                )}

                                <CardContent className="p-4 sm:p-6 text-center relative z-10">
                                    <CardTitle
                                        className={`text-sm sm:text-lg font-bold text-primary transition-colors duration-300 group-hover:text-accent`}
                                    >
                                        {program.title}
                                    </CardTitle>
                                    <p
                                        className={`mt-1 sm:mt-2 text-gray-700 text-xs sm:text-base transition-colors duration-300 group-hover:text-white/70 ${hovered === index ? "text-gray-300" : ""}`}
                                    >
                                        {program.description}
                                    </p>

                                    {/* Learn More Button */}
                                    <button
                                        onClick={() => navigate(program.link)}
                                        className="group">
                                        <div className="mt-2 sm:mt-4 flex items-center justify-center text-accent font-semibold cursor-pointer transition-colors duration-300">
                                            <span>Learn More</span>
                                            <FaArrowRight className="ml-1 sm:ml-2 transform transition-transform duration-300" />
                                        </div>
                                    </button>
                                </CardContent>
                            </Card>

                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Admissions;
