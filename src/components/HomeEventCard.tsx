import { useNavigate } from "react-router-dom";

type Event = {
	id: string;
	image?: string;
	title: string;
	caption?: string;
	content?: string;
	date: string;
	location?: string;
	large?: boolean;
	preference?: number;
	club?: string;
};
const HomeEventCard = ({ event }: { event: Event }) => {
	const navigate = useNavigate();
	return (
		<div
			className={`relative overflow-hidden  shadow-lg hover:shadow-xl transition-all bg-white backdrop-blur-lg border border-gray-200
            ${event.large ? "md:h-full" : "md:h-[200px]"
				} min-h-[250px] sm:min-h-[300px] flex flex-col`}>
			{/* Event Image */}
			<div className="absolute inset-0 overflow-hidden  bg-black">
				<img
					src={event.image || "/default-event.jpg"}
					alt={event.title}
					className="w-full h-full object-fit transition-transform duration-500 hover:scale-105"
				/>
			</div>

			{/* Event Details */}
			<div className="absolute bottom-0 w-full bg-primary p-4 bg-opacity-90">
				<h3 className="text-white font-semibold text-lg">{event.title}</h3>
				<p className="text-white text-sm">{event.caption}</p>
				{event.club && (
					<p className="text-white text-sm mt-1">
						<span className="font-bold">Organized by:</span> {event.club}
					</p>
				)}
				{/* Event Location */}
				<p className="text-white text-sm mt-1">
					<span className="font-bold">Location:</span>{" "}
					{event.location || "IIIT Nagpur Campus"}
				</p>


				{/* Event Date Badge */}
				<div className="absolute top-[-3vh] right-4 bg-accent text-white text-center px-2 py-1  font-bold">
					{event.date}
				</div>

				{/* Event Link */}
				<button
					onClick={() => navigate(`/events/${event.id}`)}
					className="bg-white text-primary px-4 py-2  font-semibold shadow-md hover:bg-accent hover:text-white hover:rounded-md transition mt-2 justify-self-end flex">
					View Details
				</button>
			</div>
		</div>
	);
};

export default HomeEventCard;
