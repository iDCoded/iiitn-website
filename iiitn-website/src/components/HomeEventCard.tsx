type Event = {
    image?: string;
    title: string;
    time?: string;
    date: string;
    large?: boolean;
};

const HomeEventCard = ({ event }: { event: Event }) => (
    <div
        className={`relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all bg-white backdrop-blur-lg border border-gray-200
            ${event.large ? "md:h-full" : "md:h-[200px]"} min-h-[250px] sm:min-h-[300px] flex flex-col`}
    >
        {/* Event Image */}
        <div className="absolute inset-0 overflow-hidden rounded-lg bg-black">
            <img
                src={event.image || "/default-event.jpg"}
                alt={event.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
        </div>

        {/* Event Details */}
        <div className="absolute bottom-0 w-full bg-[#002147] p-4 bg-opacity-90">
            <h3 className="text-white font-semibold text-lg">{event.title}</h3>
            {event.time && <p className="text-sm text-gray-300 mt-1">{event.time}</p>}
            {/* Event Date Badge */}
            <div className="absolute top-[-3vh] right-4 bg-[#E87722] text-white text-center px-2 py-1 rounded-md font-bold">
                {event.date}
            </div>
        </div>
    </div>
);

export default HomeEventCard;
