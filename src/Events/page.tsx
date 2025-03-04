/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import { motion } from "framer-motion";
import rehypeRaw from "rehype-raw";

const Events = () => {
	const [events, setEvents] = useState<{ [key: string]: any[] }>({
		Music: [
			{
				c_id: "5",
				title: "Event Title",
				date: "2022-12-31",
				location: "Location",
				content: "Event Description",
			},
			{
				c_id: "6",
				title: "Event Title",
				date: "2022-12-31",
				location: "Location",
				content: "Event Description",
			},
		],
		Sports: [
			{
				c_id: "7",
				title: "Event Title",
				date: "2022-12-31",
				location: "Location",
				content: "Event Description",
			},
			{
				c_id: "8",
				title: "Event Title",
				date: "2022-12-31",
				location: "Location",
				content: "Event Description",
			},
		],
		Workshop: [
			{
				c_id: "9",
				title: "Event Title",
				date: "2022-12-31",
				location: "Location",
				content: "Event Description",
			},
			{
				c_id: "10",
				title: "Event Title",
				date: "2022-12-31",
				location: "Location",
				content: "Event Description",
			},
		],
	});
	const [subCategories, setSubCategories] = useState<string[]>([]);
	const [activeTab, setActiveTab] = useState("All");
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchEvents = async () => {
			try {
				const res = await axios.get(
					`${import.meta.env.VITE_API_BASE_URL}/card/cards/categories/events`
				);
				const groupedEvents = groupBySubCategory(res.data);
				setEvents(groupedEvents);
				setSubCategories(["All", ...Object.keys(groupedEvents)]);
			} catch (error) {
				console.error("Error fetching events:", error);
			} finally {
				setLoading(false);
			}
		};

		fetchEvents();
	}, []);

	// Group events by subcategory
	const groupBySubCategory = (events: any[]) => {
		const grouped: { [key: string]: any[] } = {};
		events.forEach((event) => {
			if (!grouped[event.c_sub_category]) {
				grouped[event.c_sub_category] = [];
			}
			grouped[event.c_sub_category].push(event);
		});
		return grouped;
	};

	return (
		<div className="max-w-6xl mx-auto px-6 py-12">
			<h1 className="text-3xl font-bold text-primary mb-6 text-center">
				Upcoming Events
			</h1>

			{/* Tabs Navigation */}
			<div className="flex border-b border-gray-300 space-x-8 justify-center mb-6">
				{subCategories.map((subCategory) => (
					<button
						key={subCategory}
						onClick={() => setActiveTab(subCategory)}
						className={`relative pb-2 text-lg font-semibold transition-all 
                            ${
															activeTab === subCategory
																? "text-accent"
																: "text-gray-500"
														}
                        `}>
						{subCategory}
						{activeTab === subCategory && (
							<motion.div
								layoutId="underline"
								className="absolute left-0 bottom-0 w-full h-1 bg-accent rounded-md"
							/>
						)}
					</button>
				))}
			</div>

			{/* Events Section */}
			{loading ? (
				<p className="text-center text-gray-500">Loading events...</p>
			) : activeTab === "All" ? (
				// Show all events if "All" tab is selected
				Object.entries(events).map(([subCategory, events]) => (
					<div key={subCategory} className="mb-12">
						<motion.h2
							className="text-2xl font-semibold text-accent mb-4"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5 }}>
							{subCategory}
						</motion.h2>

						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
							{events.map((event) => (
								<EventCard key={event.c_id} event={event} />
							))}
						</div>
					</div>
				))
			) : (
				// Show only selected subcategory
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{events[activeTab]?.map((event) => (
						<EventCard key={event.c_id} event={event} />
					)) || <p className="text-gray-500 text-center">No events found.</p>}
				</div>
			)}
		</div>
	);
};

// Event Card Component
interface Event {
	c_id: string;
	media_img_path?: string;
	title: string;
	date: string;
	location: string;
	content: string;
}

const EventCard = ({ event }: { event: Event }) => (
	<motion.div
		className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-all"
		initial={{ opacity: 0, scale: 0.9 }}
		whileInView={{ opacity: 1, scale: 1 }}
		viewport={{ once: true }}
		transition={{ duration: 0.4 }}>
		{event.media_img_path && (
			<img
				src={event.media_img_path}
				alt={event.title}
				className="w-full h-48 object-cover rounded-md mb-4"
			/>
		)}

		<h3 className="text-lg font-bold mb-2 text-primary">{event.title}</h3>
		<p className="text-sm text-gray-600 mb-2">
			{event.date} • {event.location}
		</p>

		{/* Render Markdown content safely */}
		<ReactMarkdown
			className="text-gray-700 text-sm line-clamp-3"
			rehypePlugins={[rehypeRaw]}>
			{event.content}
		</ReactMarkdown>

		<a
			href={`/events/${event.c_id}`}
			className="block text-accent font-medium mt-4 hover:underline">
			Read More →
		</a>
	</motion.div>
);

export default Events;
