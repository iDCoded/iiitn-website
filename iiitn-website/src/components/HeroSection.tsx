import hero from "../assets/hero.jpeg";

const HeroSection = () => {
    return (
        <section className="relative h-[90vh] w-full flex flex-col justify-center items-center text-center px-6">
            {/* Background Image */}
            <div className="absolute inset-0 bg-[url(${hero.src})] bg-cover bg-center bg-no-repeat z-[-1]" />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60 z-0"></div>

            {/* Content */}
            <div className="relative z-10 text-white max-w-3xl">
                <h1 className="text-5xl font-bold leading-tight drop-shadow-lg">
                    Welcome to IIIT Nagpur
                </h1>
                <p className="mt-4 text-lg drop-shadow-md">
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
