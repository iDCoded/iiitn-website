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
        <section className="py-16 px-6 bg-gray-100">
            {/* Section Title */}
            <h2 className="text-3xl font-bold text-center mb-6">
                <span className="text-accent">|</span> Upcoming Events
            </h2>

            {/* Events Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {events.map((event, index) => (
                    <EventCard key={index} event={event} />
                ))}
            </div>
        </section>
    );
};

export default UpcomingEvents;
