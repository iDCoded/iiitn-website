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
        link: "https://iiitn.ac.in/page/postgraduate/41/",
    },
    {
        title: "Doctoral Programs (Ph.D.)",
        description: "Research opportunities in various cutting-edge fields.",
        link: "https://iiitn.ac.in/page/postgraduate/41/",
    },
];

const Admissions = () => {
    const [hovered, setHovered] = useState<number | null>(null);
    const [ripple, setRipple] = useState<{ x: number; y: number; index: number | null }>({
        x: 0,
        y: 0,
        index: null,
    });

    // Scroll Detection for Animations
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.2, // Trigger animation when 20% of section is visible
    });

    // Track Scroll Position
    const { scrollYProgress } = useScroll();

    // Scroll-Zoom Effect (Dynamically scales from 1x to 1.5x)
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 2]);

    // Function to create ripple at mouse position
    const handleMouseEnter = (event: React.MouseEvent<HTMLDivElement>, index: number) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        setRipple({ x, y, index });
    };

    return (
        <section
            ref={ref}
            className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
            {/* 📌 Background with Scroll-Zoom Effect */}
            <motion.div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat h-screen"
                style={{ backgroundImage: `url(${admission})`, scale }}
            />

            {/* Overlay for better readability */}
            <div className="absolute inset-0 bg-primary/40 backdrop-blur-lg border border-white/20 h-screen"></div>

            {/* Content */}
            <motion.div
                className="relative max-w-6xl text-left px-6"
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 1, ease: "easeOut" }}>
                <motion.h2
                    className="text-4xl font-bold text-white drop-shadow-lg tracking-wide"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}>
                    <span className="text-accent">| </span>Admissions & Programs
                </motion.h2>
                <motion.p
                    className="mt-4 text-gray-200 text-lg"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}>
                    Enroll in our world-class education programs.
                </motion.p>

                {/* Cards with Staggered Fade-in Effect */}
                <motion.div
                    className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6"
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
                            variants={{
                                hidden: { opacity: 0, y: 40 },
                                visible: { opacity: 1, y: 0 },
                            }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <Card
                                key={index}
                                className="h-64 relative overflow-hidden bg-white shadow-lg rounded-lg border border-gray-200 transition-transform duration-300 ease-in-out transform hover:scale-[1.05] hover:shadow-2xl"
                                onMouseEnter={(e) => {
                                    handleMouseEnter(e, index)
                                    setHovered(index)
                                }} // Trigger ripple
                                onMouseLeave={() => {
                                    setHovered(null)
                                    setRipple({ x: 0, y: 0, index: null })
                                }} // Remove ripple
                            >
                                {/* Circular Expanding Ripple Effect */}
                                {ripple.index === index && (
                                    <div
                                        className="absolute bg-accent rounded-full opacity-60 animate-ripple"
                                        style={{
                                            left: ripple.x,
                                            top: ripple.y,
                                            transform: "translate(-50%, -50%)",
                                        }}
                                    ></div>
                                )}

                                <CardContent className="p-6 text-center relative z-10">
                                    <CardTitle
                                        className={`text-lg font-bold text-primary transition-colors duration-300 ${hovered === index && "text-[#f4f4f4]"
                                            }`}
                                    >
                                        {program.title}
                                    </CardTitle>
                                    <p
                                        className={`mt-2 text-gray-600 transition-colors duration-300 ${hovered === index && "text-white/50"
                                            }`}
                                    >
                                        {program.description}
                                    </p>

                                    {/* Learn More Button */}
                                    <a href={program.link}>
                                        <div className="mt-4 flex items-center justify-center text-accent font-semibold cursor-pointer transition-colors duration-300">
                                            <span>Learn More</span>
                                            <FaArrowRight className="ml-2 transform transition-transform duration-300" />
                                        </div>
                                    </a>
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
