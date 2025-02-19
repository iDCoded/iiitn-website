
const testimonials = [
    { name: "John Doe", text: "IIIT Nagpur changed my life!" },
    { name: "Jane Smith", text: "Great faculty and research opportunities." },
];

const Testimonials = () => {
    return (
        <section className="py-16 px-4 bg-white">
            <h2 className="text-3xl font-bold text-center">What Our Students Say</h2>
            <div className="mt-6 text-center">
                {testimonials.map((t, index) => (
                    <p key={index} className="text-lg font-semibold mt-4">"{t.text}" - {t.name}</p>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
