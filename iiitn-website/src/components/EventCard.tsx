
type Event = {
    image?: string;
    title: string;
    time?: string;
};

const EventCard = ({ event }: { event: Event }) => (
    <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all bg-white backdrop-blur-lg p-4 border border-gray-200">
        {/* Event Image */}
        <div className="h-60 w-full relative overflow-hidden rounded-lg">
            <img src={event.image || "/default-event.jpg"}
                alt={event.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        </div>

        {/* Event Details */}
        <div className="p-5">
            <h3 className="text-lg font-semibold text-[#002147]">{event.title}</h3>
            {event.time && <p className="text-sm text-gray-600 mt-1">{event.time}</p>}
        </div>
    </div>
);

export default EventCard;
