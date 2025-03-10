import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const stats = [
    { label: "Students", value: 2, description: "Students Enrolled" },
    { label: "Professors", value: 50, description: "Professors & Lecturers" },
    { label: "Research", value: 75, description: "Research Papers Published" },
];

const Stats = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
    });

    return (
        <section className="py-16 px-6 bg-white">
            <div className="max-w-6xl mx-auto text-center">
                <motion.div 
                    className="grid grid-cols-1 sm:grid-cols-3 gap-10 items-center" 
                    ref={ref}
                    initial="hidden"
                    animate={inView ? "visible" : "hidden"}
                    variants={{
                        visible: {
                            transition: { staggerChildren: 0.3 }, // Stagger delay between elements
                        },
                    }}
                >
                    {stats.map((stat, index) => (
                        <motion.div 
                            key={index} 
                            className="relative flex flex-col items-center"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 30 }}
                            transition={{ duration: 0.8, delay: index * 0.3 }} // Delays each div
                        >
                            {/* Number & Title Container */}
                            <div className="flex flex-col items-center justify-center space-y-2">
                                {/* Bold Number */}
                                <h3 className="text-6xl font-bold text-accent font-[playfair] leading-tight">
                                    {inView ? <CountUp end={stat.value} duration={2} /> : "..."}
                                    {stat.label === "Students" ? "K" : ""}
                                </h3>

                                {/* Title */}
                                <p className="text-3xl font-semibold font-[lora] text-gray-800 uppercase tracking-wide">
                                    {stat.label}
                                </p>
                            </div>

                            {/* Description */}
                            <p className="font-lora text-gray-600 mt-4 text-center max-w-sm leading-relaxed">
                                {stat.description}
                            </p>

                            {/* Vertical Divider */}
                            {index !== stats.length - 1 && (
                                <div className="hidden sm:block absolute right-0 top-1/2 transform -translate-y-1/2 w-[1px] h-16 bg-gray-300" />
                            )}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Stats;
