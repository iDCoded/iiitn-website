import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

const Events = () => {
    const [events, setEvents] = useState<{ [key: string]: { upcoming: any[]; past: any[] } }>({});
    const [subCategories, setSubCategories] = useState<string[]>([]);
    const [activeTab, setActiveTab] = useState("Upcoming");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const res = await axios.get(
                    `${import.meta.env.VITE_API_BASE_URL}/card/cards/category/events`
                );
				console.log(res.data)

				for (const event of res.data) {
					if (event.media_img_path) {
						try {
							const imgReq = await fetch(
								`${import.meta.env.VITE_API_BASE_URL}/media/${event.media_img_path}`
							);
							if (!imgReq.ok) throw new Error("Failed to fetch image");

							const contentType = imgReq.headers.get("content-type");
							if (contentType && contentType.startsWith("image")) {
								event.media_img_path = URL.createObjectURL(await imgReq.blob());
							} else {
								const imgRes = await imgReq.json();
								if (imgRes.url) {
									event.media_img_path = imgRes.url;
								}
							}
						} catch (err) {
							console.error(`Error fetching image for event ${event.c_id}:`, err);
						}
					}
				}
                const groupedEvents = groupBySubCategory(res.data);
                setEvents(groupedEvents);
                setSubCategories(Object.keys(groupedEvents));
            } catch (error) {
                console.error("Error fetching events:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchEvents();
    }, []);

    const groupBySubCategory = (events: any[]) => {
        const grouped: { [key: string]: { upcoming: any[]; past: any[] } } = {};
        const currentDate = new Date();

        events.forEach((event) => {
            const eventDate = new Date(event.date);
            const category = event.c_sub_category || "Uncategorized";
            
            if (!grouped[category]) {
                grouped[category] = { upcoming: [], past: [] };
            }
            
            if (eventDate >= currentDate) {
                grouped[category].upcoming.push(event);
            } else {
                grouped[category].past.push(event);
            }
        });
        
        return grouped;
    };

    return (
        <div className="max-w-6xl mx-auto px-6 py-12">
            <h1 className="text-3xl font-bold text-primary mb-6 text-center">Events</h1>
            
            <div className="flex justify-center mb-6">
                {["Upcoming", "Past"].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`px-6 py-2 mx-2 font-semibold transition-all rounded-md 
                            ${activeTab === tab ? "bg-accent text-white" : "bg-gray-200 text-gray-700"}
                        `}
                    >
                        {tab} Events
                    </button>
                ))}
            </div>

            {loading ? (
                <p className="text-center text-gray-500">Loading events...</p>
            ) : (
                subCategories.map((club) => (
                    (events[club][activeTab.toLowerCase() as "upcoming" | "past"] ?? []).length > 0 && (
                        <div key={club} className="mb-12">
                            <motion.h2
                                className="text-2xl font-semibold text-accent mb-4"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}>
                                {club}
                            </motion.h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
								{events[club][activeTab.toLowerCase() as "upcoming" | "past"].map((event: Event) => (
									<EventCard key={event.c_id} event={event} />
								))}
                            </div>
                        </div>
                    )
                ))
            )}
        </div>
    );
};

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

        <ReactMarkdown className="text-gray-700 text-sm line-clamp-3" rehypePlugins={[rehypeRaw]}>
            {event.content}
        </ReactMarkdown>

        <a href={`/events/${event.c_id}`} className="block text-accent font-medium mt-4 hover:underline">
            Read More →
        </a>
    </motion.div>
);

export default Events;
