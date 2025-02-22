import hero from "../assets/hero.jpeg";

const HeroSection = () => {
    return (
        <section className="relative h-[90vh] w-full flex flex-col justify-center items-center text-center px-4 md:px-6 overflow-hidden">
            {/* Gradient Overlay */}
            <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-[#002147] to-transparent z-0"></div>

            {/* Fixed Background Image */}
            <div
                className="fixed inset-0 bg-cover bg-center bg-no-repeat z-[-1]"
                style={{ backgroundImage: `url(${hero})` }}
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60 z-0"></div>

            {/* Content */}
            <div className="relative z-10 text-white max-w-3xl">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight drop-shadow-lg">
                    Welcome to IIIT Nagpur
                </h1>
                <p className="mt-4 text-base md:text-lg drop-shadow-md">
                    Excellence in education, research, and innovation
                </p>
                <button className="mt-6 px-6 py-3 bg-accent text-white font-semibold rounded-lg transition-transform transform hover:scale-105">
                    Explore More
                </button>
            </div>
        </section>
    );
};

export default HeroSection;
