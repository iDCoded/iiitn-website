import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const stats = [
    { label: "Students", value: 2000 },
    { label: "Faculty", value: 100 },
    { label: "Publications", value: 500 },
];

const Stats = () => {
    const { ref, inView } = useInView({
        triggerOnce: true, // Ensures animation runs only once
        threshold: 0.3, // Starts animation when 30% visible
    });

    return (
        <section className="py-20 px-6 bg-gray-100">
            <div className="max-w-6xl m-auto">
                <h2 className="text-3xl font-bold text-center">Our Achievements</h2>

                <div ref={ref} className="mt-10 flex flex-col md:flex-row justify-around gap-10 md:gap-20">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center space-y-3">
                            <h3 className="text-5xl font-bold text-primary">
                                {inView ? <CountUp start={0} end={stat.value} duration={2} separator="," /> : 0}+
                            </h3>
                            <p className="text-xl">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;
