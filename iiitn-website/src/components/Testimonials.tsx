import { motion, useAnimation } from "framer-motion";
import { useState, useEffect } from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const testimonials = [
    { id: 1, text: "IIIT Nagpur transformed my career!", name: "Akshith" },
    { id: 2, text: "The faculty is amazing and very supportive.", name: "Sandesh Lavshetty" },
    { id: 3, text: "The best institute for research and innovation.", name: "John Doe" },
    { id: 4, text: "The campus life is vibrant and full of opportunities!", name: "Jane Smith" },
];

const InfiniteMovingCards = ({
    items,
    speed = 10, // Adjust scrolling speed
    direction = "left",
}: {
    items: { id: number; text: string; name: string }[];
    speed?: number;
    direction?: "left" | "right";
}) => {
    const controls = useAnimation();
    const [isPaused, setIsPaused] = useState(false);

    // Function to start infinite animation
    const startAnimation = async () => {
        await controls.start({
            x: direction === "left" ? ["0%", "-100%"] : ["-100%", "0%"],
            transition: { repeat: Infinity, duration: speed, ease: "linear" },
        });
    };

    // Start animation when component mounts or resumes
    useEffect(() => {
        if (!isPaused) {
            startAnimation();
        }
    }, [isPaused]); // Run when isPaused changes

    return (
        <motion.div
            className="relative w-full overflow-hidden py-10 flex justify-center"
            whileInView={{ opacity: 1, y: 0 }} // Reveal on scroll
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <motion.div className="flex space-x-6" animate={controls}>
                {[...items, ...items, ...items].map((item, index) => (
                    <div
                        key={index}
                        className="w-80 h-72 bg-white shadow-lg rounded-lg border border-gray-200 p-8 flex-shrink-0 text-center relative flex flex-col justify-center md:w-96 md:h-80"
                    >
                        {/* Quote Icons */}
                        <FaQuoteLeft className="text-5xl text-accent absolute top-4 left-4 opacity-30" />
                        <p className="text-xl text-gray-700 italic mt-8">"{item.text}"</p>
                        <p className="text-primary mt-4 text-lg font-semibold">- {item.name}</p>
                        <FaQuoteRight className="text-5xl text-accent absolute bottom-4 right-4 opacity-30" />
                    </div>
                ))}
            </motion.div>
        </motion.div>
    );
};

const TestimonialsSection = () => {
    return (
        <section className="relative flex flex-col items-center space-y-10 h-screen px-4 md:px-10 justify-center">
            {/* Heading Reveal Animation */}
            <motion.h2
                className="text-3xl md:text-5xl font-bold text-primary tracking-wide text-center"
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
            >
                <span className="text-accent">| </span>What Our Students Say
            </motion.h2>

            {/* Moving Cards - One moving left */}
            <InfiniteMovingCards items={testimonials} speed={15} direction="left" />
        </section>
    );
};

export default TestimonialsSection;
