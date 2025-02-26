import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
    { label: "Students", value: 2 },
    { label: "Professors", value: 50 },
    { label: "Research", value: 75 },
];

const Stats = () => {
    const { ref, inView } = useInView({
        triggerOnce: true, // Ensures animation runs only once when it enters the viewport
    });

    return (
        <section className="py-16 px-6 bg-white">
            <div className="max-w-6xl mx-auto text-center">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 items-center" ref={ref}>
                    {stats.map((stat, index) => (
                        <div key={index} className="relative flex flex-col items-center">
                            {/* Number & Title Container */}
                            <div className="flex flex-col items-center justify-center space-y-2">
                                {/* Bold Number */}
                                <h3 className="text-6xl font-bold text-[#A4161A] font-playfair leading-tight">
                                    {inView ? <CountUp end={stat.value} duration={2} /> : "..."}
                                    {stat.label === "Students" ? "K" : ""}
                                </h3>

                                {/* Title */}
                                <p className="text-3xl font-semibold font-lora text-gray-800 uppercase tracking-wide">
                                    {stat.label}
                                </p>
                            </div>

                            {/* Description */}
                            <p className="font-lora text-gray-600 mt-4 text-center max-w-sm leading-relaxed">
                                At present, there are five departments within the faculty:
                                Department of Geography and Environment.
                            </p>

                            {/* Vertical Divider */}
                            {index !== stats.length - 1 && (
                                <div className="hidden sm:block absolute right-0 top-1/2 transform -translate-y-1/2 w-[1px] h-16 bg-gray-300" />
                            )}
                        </div>

                    ))
                    }
                </div >
            </div >
        </section >
    );
};

export default Stats;
