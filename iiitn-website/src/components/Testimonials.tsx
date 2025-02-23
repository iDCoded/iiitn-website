const testimonials = [
    { name: "John Doe", text: "IIIT Nagpur changed my life!" },
    { name: "Jane Smith", text: "Great faculty and research opportunities." },
];

const Testimonials = () => {
    return (
        <section className="py-16 px-6 bg-gradient-to-b from-white to-gray-100">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-left text-[#002147]">
                    <span className="text-[#E87722] text-4xl">|</span> What Our Students Say
                </h2>

                {/* Testimonials Grid */}
                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {testimonials.map((t, index) => (
                        <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition">
                            <p className="text-lg italic text-gray-700">"{t.text}"</p>
                            <h4 className="mt-4 font-semibold text-[#002147]">{t.name}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
