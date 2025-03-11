import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import tech_fest from "../assets/tech_fest.png";
import cur_fest from "../assets/cultfest.jpg";

const Events = () => {

	const [events, setEvents] = useState<{ upcoming: { [key: string]: Event[] }; past: Event[] }>({
		upcoming: {},
		past: [],
	});
	const [subCategories, setSubCategories] = useState<string[]>([]);
	const [activeTab, setActiveTab] = useState("Upcoming");
	const [loading, setLoading] = useState(true);
	const [currentPage, setCurrentPage] = useState(1);
	const eventsPerPage = 5;

	useEffect(() => {
		const fetchEvents = async () => {
			try {
				const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/card/cards/category/events`);

				const data = await res.json();
				data.sort((a: Event, b: Event) => a.preference - b.preference);
				const groupedEvents = groupEvents(data);
				setEvents(groupedEvents);
				setSubCategories(Object.keys(groupedEvents.upcoming));
			} catch (error) {
				console.error("Error fetching events:", error);
			} finally {
				setLoading(false);
			}
		};

		fetchEvents();
	}, []);

	const groupEvents = (events: any[]) => {
		const grouped: { upcoming: { [key: string]: any[] }; past: any[] } = { upcoming: {}, past: [] };
		const currentDate = new Date();

		events.forEach((event) => {
			const eventDate = new Date(event.date);
			const category = event.c_sub_category || "Uncategorized";

			if (eventDate >= currentDate) {
				if (!grouped.upcoming[category]) {
					grouped.upcoming[category] = [];
				}
				grouped.upcoming[category].push(event);
			} else {
				grouped.past.push(event);
			}
		});

		return grouped;
	};

	const totalPages = Math.ceil(events.past.length / eventsPerPage);
	const displayedPastEvents = events.past.slice(
		(currentPage - 1) * eventsPerPage,
		currentPage * eventsPerPage
	);

	return (
		<>
	<div className="max-w-6xl h-min mx-auto px-6 py-12">
		{/* Header Section */}
		<div className="flex flex-col md:flex-row justify-between items-center mb-6">
			<h1 className="text-3xl font-bold text-primary">Events</h1>
			<a 
				href="/pages/studentclubs" 
				className="bg-accent text-white px-4 py-2 rounded-md font-semibold hover:bg-opacity-80 transition">
				Explore Clubs →
			</a>
		</div>

		{/* Tabs: Upcoming | Past */}
		<div className="flex justify-left mb-6">
			{["Upcoming", "Past"].map((tab) => (
				<button
					key={tab}
					onClick={() => setActiveTab(tab)}
					className={`px-6 py-2 mx-2 font-semibold transition-all rounded-md 
						${activeTab === tab ? "bg-accent text-white" : "bg-gray-200 text-gray-700"}
					`}>
					{tab} Events
				</button>
			))}
		</div>

		{/* Loading State */}
		{loading ? (
			<p className="text-center text-gray-500">Loading events...</p>
		) : activeTab === "Upcoming" ? (
			subCategories.map((club) => (
				(events.upcoming[club] ?? []).length > 0 && (
					<div key={club} className="mb-12">
						<motion.h2
							className="text-2xl font-semibold text-accent mb-4"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}>
							<span className="capitalize">{club} Events</span>
						</motion.h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
							{events.upcoming[club].map((event: Event) => (
								<EventCard key={event.c_id} event={event} isPast={false} />
							))}
						</div>
					</div>
				)
			))
		) : (
			<div>
				<h2 className="text-2xl font-semibold text-accent mb-4">Past Events Archive</h2>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{displayedPastEvents.map((event: Event) => (
						<EventCard key={event.c_id} event={event} isPast={true} />
					))}
				</div>

				{/* Pagination */}
				<div className="flex justify-center mt-6">
					<button
						onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
						disabled={currentPage === 1}
						className="px-4 py-2 mx-2 bg-gray-200 text-gray-700 rounded-md disabled:opacity-50">
						← Prev
					</button>
					<span className="text-gray-700 font-semibold px-4 py-2">{`Page ${currentPage} of ${totalPages}`}</span>
					<button
						onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
						disabled={currentPage === totalPages}
						className="px-4 py-2 mx-2 bg-gray-200 text-gray-700 rounded-md disabled:opacity-50">
						Next →
					</button>
				</div>
			</div>
		)}
	</div>

	{/* Flagship Events Section */}
	<div className="bg-gray-100 py-12 px-6">
		<h2 className="text-2xl sm:text-4xl font-bold text-center mb-8">
			<span className="text-accent">| </span>Flagship Events
		</h2>
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
			{[
				{
					title: "TantraFiesta",
					caption: "Annual Tech & Innovation Festival",
					date: "Mar 2025",
					location: "Tech Park, Campus",
					club: "Tech Club",
					image: tech_fest,
					link: "https://www.tantrafiesta.in/"
				},
				{
					title: "Abhivyakti",
					caption: "Cultural Fest Celebrating Arts",
					date: "Apr 2025",
					location: "Main Auditorium",
					club: "Cultural Club",
					image: cur_fest,
					link: "https://www.abhivyaktifest.in/"
				},
				{
					title: "Kshitij",
					caption: "Entrepreneurship & Business Summit",
					date: "May 2025",
					location: "Innovation Hall",
					club: "Business Society",
					image: "/images/kshitij.jpg",
				},
				{
					title: "E-Summit",
					caption: "The Startup & Business Incubation Meet",
					date: "Jun 2025",
					location: "Startup Hub",
					club: "E-Cell",
					image: "/images/esummit.jpg",
				}
			].map((event, index) => (
				<a 
					key={index} 
					target="_blank" 
					href={event.link || "#"} 
					rel="noopener noreferrer">
					<div className="bg-white shadow-lg overflow-hidden h-[60vh] hover:cursor-pointer transition duration-300 ease-in-out transform hover:translate-y-[-12px] hover:shadow-primary hover:shadow-6xl">
						<div className="relative">
							<img 
								src={event.image} 
								alt={event.title} 
								className="w-full h-[32vh] object-cover"
							/>
							<div className="absolute bottom-0 left-0 transform ml-6 translate-y-1/2 bg-primary text-white text-lg font-bold w-16 h-16 flex items-center justify-center">
								{event.date}
							</div>
						</div>
						<div className="p-6 mt-6">
							<h3 className="text-2xl font-bold">{event.title}</h3>
							<p className="text-gray-600 text-sm uppercase mt-1 font-semibold">
								{event.caption}
							</p>
							<p className="text-gray-600 text-md mt-3">{event.location}</p>
							<p className="text-gray-500 text-md mt-1">
								Hosted by: <span className="font-semibold">{event.club}</span>
							</p>
						</div>
					</div>
				</a>
			))}
		</div>
	</div>
</>


	
	
	
	);
};

interface Event {
	c_id: string;
	media_img_id?: string;
	title: string;
	date: string;
	location: string;
	content: string;
	hosted_by?: string;
	preference: number;
	club: string;
}

const EventCard = ({ event, isPast }: { event: Event; isPast: boolean }) => (
	<motion.div
		className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-all"
		initial={{ opacity: 0, scale: 0.9 }}
		whileInView={{ opacity: 1, scale: 1 }}
		viewport={{ once: true }}
		transition={{ duration: 0.4 }}>
		{event.media_img_id && (
			<img
				src={event.media_img_id}
				alt={event.title}
				className="w-full h-48 object-fit rounded-md mb-4"
			/>
		)}
		<h3 className="text-lg font-bold mb-2 text-primary">{event.title}</h3>
		<p className="text-sm text-gray-600 mb-2">
			{event.date} • {event.location}
		</p>

		<ReactMarkdown className="text-gray-700 text-sm line-clamp-3" rehypePlugins={[rehypeRaw]}>
			{event.content}
		</ReactMarkdown>

		{isPast && event.hosted_by && (
			<p className="text-sm text-gray-500 mt-2">Hosted by: {event.hosted_by}</p>
		)}

		<a href={`/events/${event.c_id}`} className="block text-accent font-medium mt-4 hover:underline">
			Read More →
		</a>
	</motion.div>
);

export default Events;
