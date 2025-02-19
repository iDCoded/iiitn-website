import EventCard from "./EventCard";

const events = [
    {
        image: "/images/tech-symposium.jpg",
        title: "Tech Symposium",
        time: "March 10, 2025 | 10:00 AM",
    },
    {
        image: "/images/alumni-meet.jpg",
        title: "Alumni Meet",
        time: "April 5, 2025 | 5:00 PM",
    },
    {
        image: "/images/hackathon.jpg",
        title: "Hackathon 2025",
        time: "May 20, 2025 | 9:00 AM",
    },
];

const UpcomingEvents = () => {
    return (
        <section className="py-16 px-6 bg-gradient-to-b from-gray-50 to-gray-100">
            {/* Section Title */}
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-left mb-6 text-[#002147]">
                    <span className="text-[#E87722]">|</span> Upcoming Events
                </h2>

                {/* Events Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {events.map((event, index) => (
                        <EventCard key={index} event={event} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UpcomingEvents;
