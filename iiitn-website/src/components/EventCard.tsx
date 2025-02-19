
type Event = {
    image?: string;
    title: string;
    time?: string;
};

const EventCard = ({ event }: { event: Event }) => (
    <div className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all bg-white h-[400px] cursor-pointer">
        {/* Event Image */}
        <div className="h-60 w-full relative">
            <img
                src={event.image || "/default-event.jpg"}
                alt={event.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
        </div>

        {/* Event Details */}
        <div className="p-5">
            <h3 className="text-lg font-semibold">{event.title}</h3>
            {event.time && <p className="text-sm text-gray-600 mt-1">{event.time}</p>}
        </div>
    </div>
);

export default EventCard;
