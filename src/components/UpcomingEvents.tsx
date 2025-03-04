/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState, useRef } from "react";
import { Button } from "./ui/button";
import HomeEventCard from "./HomeEventCard";
import abhivyakti from "../assets/abhivyakti.jpg";
import tf from "../assets/gpt.jpg";
import workshop from "../assets/workshop.jpg";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "animate.css"; // Scroll animations
import { motion, useInView } from "framer-motion"; // Smooth animations

const UpcomingEvents = () => {
	const [events, setEvents] = useState<any[]>([]);
	const instanceRef = useRef<{ next: () => void } | null>(null);
	const navigate = useNavigate();

	// Ref for in-view animations
	const sectionRef = useRef(null);
	const isInView = useInView(sectionRef, { amount: 0.2 });

	// Fetch events from API
	useEffect(() => {
		const fetchEvents = async () => {
			try {
				const res = await fetch(
					`${import.meta.env.VITE_API_BASE_URL}/card/cards/category/events`
				);
				if (!res.ok) throw new Error("Failed to fetch events");
				const data = await res.json();
				const eventList = data.map((event: any) => ({
					id: event.c_id,
					image: null,
					title: event.title,
					caption: event.caption,
					content: event.content,
					date: event.date,
					location: event.location,
					large: false,
					media_img_path: event.media_img_path,
				}));

				const updatedEvents = await Promise.all(
					eventList.map(async (event: any) => {
						if (event.media_img_path) {
							try {
								const imgReq = await fetch(
									`${import.meta.env.VITE_API_BASE_URL}/media/${
										event.media_img_path
									}`
								);
								if (!imgReq.ok) throw new Error("Failed to fetch image");
								const imgRes = await imgReq.json();

								return { ...event, image: imgRes.url };
							} catch (err) {
								console.error(
									`Error fetching image for event ${event.id}:`,
									err
								);
								return event;
							}
						}
						return event;
					})
				);

				setEvents(updatedEvents);
			} catch (error) {
				console.error("Error fetching events:", error);
			}
		};

		fetchEvents();
	}, []);

	// Auto-scroll effect
	useEffect(() => {
		const interval = setInterval(() => {
			instanceRef.current?.next();
		}, 5000);

		return () => clearInterval(interval);
	}, []);

	// Default fallback events
	const defaultEvents = [
		{
			id: "abhivyakti",
			image: abhivyakti,
			title: "Abhivyakti - The Cultural Fest of IIITN",
			caption: "The cultural fest of IIITN",
			content:
				"Annual gathering of students, faculty, and staff. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
			date: "28 Feb",
			location: "IIIT Nagpur Campus",
			large: true,
		},
		{
			id: "tantrafiesta",
			image: tf,
			title: "Tantrafiesta",
			caption: "The technical fest of IIITN",
			content: "Annual gathering of students, faculty, and staff.",
			date: "27 Aug",
			location: "IIIT Nagpur Campus",
			large: false,
		},
		{
			id: "Foundations-of-Cybersecurity",
			image: workshop,
			title: "Cybersecurity - Online Programme",
			caption: "Enhance your cybersecurity skills with IIIT Nagpur",
			content:
				"The Department of Computer Science & Engineering at IIIT Nagpur presents an exclusive online certification program on Cybersecurity.",
			date: "22nd March",
			location: "Online (Hosted by IIIT Nagpur)",
			large: false,
		},
	];

	const displayedEvents = events.length > 0 ? events : defaultEvents;

	return (
		<section
			ref={sectionRef}
			className="py-16 px-8 md:px-12 lg:px-16 bg-gradient-to-b from-gray-50 to-gray-100 min-h-screen overflow-y-auto">
			{/* Section Wrapper */}
			<motion.div
				initial={{ opacity: 0, y: 50 }}
				animate={isInView ? { opacity: 1, y: 0 } : {}}
				transition={{ duration: 0.8, ease: "easeOut" }}
				className="max-w-6xl mx-auto flex flex-col h-full">
				{/* Section Title */}
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6 }}
					className="flex justify-between items-center mb-8">
					<h2 className="text-3xl font-bold text-left text-primary">
						<span className="text-4xl text-accent">|</span> Events & Clubs
					</h2>
					<a href="/events">
						<Button className="text-accent font-semibold hover:underline bg-transparent transition-all duration-300 hover:bg-primary hover:text-white">
							View All <FaArrowRight />
						</Button>
					</a>
				</motion.div>

				{/* Events Grid */}
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8 flex-grow">
					{/* Large Event */}
					<motion.div
						whileHover={{ scale: 1.02 }}
						initial={{ opacity: 0, x: -30 }}
						animate={isInView ? { opacity: 1, x: 0 } : {}}
						transition={{ duration: 0.6, ease: "easeOut" }}
						className="md:col-span-2 flex flex-col">
						<HomeEventCard event={{ ...displayedEvents[0], large: true }} />
					</motion.div>

					{/* Small Events */}
					<div className="flex flex-col gap-8">
						{displayedEvents.slice(1).map((event, index) => (
							<motion.div
								key={index}
								whileHover={{ scale: 1.05 }}
								initial={{ opacity: 0, x: 30 }}
								animate={isInView ? { opacity: 1, x: 0 } : {}}
								transition={{ duration: 0.6, delay: index * 0.2 }}
								onClick={() => navigate(`/events/${event.id}`)}
								className="cursor-pointer transition-all duration-300 hover:shadow-lg rounded-lg">
								<HomeEventCard event={event} />
							</motion.div>
						))}
					</div>
				</div>
			</motion.div>
		</section>
	);
};

export default UpcomingEvents;
