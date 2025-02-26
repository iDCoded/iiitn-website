import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
    { label: "Students", value: 2000 },
    { label: "Faculty", value: 100 },
    { label: "Publications", value: 500 },
];

const Stats = () => {
    const { ref, inView } = useInView({
        triggerOnce: true, // Ensures animation runs only once when it enters the viewport
    });

    return (
        <section className="py-16 px-6 bg-gray-50">
            <div className="max-w-6xl mx-auto text-left">
                <h2 className="text-3xl font-bold mb-4">
                    <span className="text-accent text-4xl">|</span> Our Achievements
                </h2>
                <p className="text-gray-600 text-lg mb-10">
                    A glimpse into our impact through numbers.
                </p>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8" ref={ref}>
                    {stats.map((stat, index) => (
                        <div key={index} className="bg-white shadow-md p-8 rounded-xl text-center">
                            <h3 className="text-5xl font-bold text-primary">
                                {inView ? <CountUp end={stat.value} duration={2.5} /> : "..."}+
                            </h3>
                            <p className="text-gray-600 text-lg mt-2">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
