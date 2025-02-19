
const stats = [
    { label: "Students", value: "2000+" },
    { label: "Faculty", value: "100+" },
    { label: "Publications", value: "500+" },
];

const Stats = () => {
    return (
        <section className="py-16 px-4 bg-gray-100">
            <h2 className="text-3xl font-bold text-center">Our Achievements</h2>
            <div className="mt-6 flex justify-center gap-10">
                {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                        <h3 className="text-4xl font-bold text-primary">{stat.value}</h3>
                        <p className="text-lg">{stat.label}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Stats;
