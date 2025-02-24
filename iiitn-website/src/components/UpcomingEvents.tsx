import HomeEventCard from "./HomeEventCard";
import abhivyakti from "../assets/abhivyakti.jpeg";
import tf from "../assets/tf.jpeg";
import kshitij from "../assets/kshitij.jpeg";

const events = [
    {
        image: abhivyakti,
        title: "Abhivyakti - The Cultural Fest of IIITN",
        description: "A grand cultural fest with music, dance, and fun activities.",
        time: "09:00 PM",
        date: "28 Feb",
        large: true,
    },
    {
        image: tf,
        title: "Tantrafiesta",
        time: "27 Aug",
        date: "27 Aug",
        large: false,
    },
    {
        image: kshitij,
        title: "Institute Gathering",
        time: "30 Jan",
        date: "30 Jan",
        large: false,
    },
];

const UpcomingEvents = () => {
    return (
        <section className="py-16 px-8 md:px-12 lg:px-16 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen">
            {/* Section Wrapper */}
            <div className="max-w-6xl mx-auto flex flex-col h-full">
                {/* Section Title */}
                <div className="flex justify-between items-center mb-8">
                    <h2 className="text-3xl font-bold text-left text-[#002147]">
                        <span className="text-4xl text-[#E87722]">|</span> Events
                    </h2>
                    <a href="/events"><button className="text-[#E87722] font-semibold hover:underline">
                        View All
                    </button></a>
                </div>

                {/* Events Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 flex-grow">
                    {/* Large Event (Takes full height) */}
                    <div className="md:col-span-2 flex flex-col">
                        <HomeEventCard event={events[0]} />
                    </div>

                    {/* Small Events (Stacked on Mobile, Side-by-Side on Desktop) */}
                    <div className="flex flex-col gap-8">
                        <HomeEventCard event={events[1]} />
                        <HomeEventCard event={events[2]} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UpcomingEvents;
