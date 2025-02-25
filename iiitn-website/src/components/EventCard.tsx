type Event = {
    image?: string;
    title: string;
    time?: string;
    date: string; // Added for the event date badge
    large?: boolean; // Determines if it's the large event
};

const EventCard = ({ event }: { event: Event }) => (
    <div
        className={`relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all bg-white backdrop-blur-lg p-4 border border-gray-200 ${
            event.large ? "h-[300px]" : "h-[140px]"
        }`}
    >
        {/* Event Image */}
        <div className="absolute inset-0 overflow-hidden rounded-lg">
            <img
                src={event.image || "/default-event.jpg"}
                alt={event.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
        </div>

        {/* Event Details */}
        <div className={`absolute bottom-0 w-full ${event.large ? "bg-primary p-4" : "bg-primary p-2"}`}>
            <h3 className={`text-white font-semibold ${event.large ? "text-lg" : "text-sm"}`}>{event.title}</h3>
            {event.time && event.large && <p className="text-sm text-gray-300 mt-1">{event.time}</p>}
        </div>

        {/* Event Date Badge */}
        <div className="absolute bottom-4 right-4 bg-accent text-white text-center px-3 py-2 rounded-md font-bold">
            {event.date}
        </div>
    </div>
);

export default EventCard;
