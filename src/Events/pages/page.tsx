import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import abhivyakti from "../../assets/abhivyakti.jpg";
import tf from "../../assets/tf.jpeg";
import workshop from "../../assets/workshop.jpg";
import MarkdownPreview from "@uiw/react-markdown-preview";

const eventsData = [
	{
		id: "abhivyakti",
		image: abhivyakti,
		title: "Abhivyakti - The Cultural Fest of IIITN",
		caption: "The cultural fest of IIITN",
		content:
			"Annual gathering of students, faculty, and staff. Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
		date: "28 Feb",
		location: "IIIT Nagpur Campus",
		large: true,
	},
	{
		id: "tantrafiesta",
		image: tf,
		title: "Tantrafiesta",
		caption: "The technical fest of IIITN",
		content:
			"Annual gathering of students, faculty, and staff. Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
		date: "27 Aug",
		location: "IIIT Nagpur Campus",
		large: false,
	},
	{
		id: "Foundations-of-Cybersecurity",
		image: workshop,
		title: "Foundations of Cybersecurity - Online Certificate Programme",
		caption: "Enhance your cybersecurity skills with IIIT Nagpur",
		content:
			"The Department of Computer Science & Engineering at IIIT Nagpur presents an exclusive online certification program...",
		date: "22nd March",
		location: "Online (Hosted by IIIT Nagpur)",
		large: false,
	},
];

interface Event {
	id: string;
	image: string;
	title: string;
	caption: string;
	content: string;
	date: string;
	location: string;
	large: boolean;
}

const EventDetail = () => {
	const { eventid } = useParams();
	console.log(eventid);
	const navigate = useNavigate(); // Hook for navigating back
	const [event, setEvent] = useState<Event | null>(null);
	const [error, setError] = useState<Error | null>(null);

	useEffect(() => {
		const fetchEvent = async () => {
			try {
				const response = await fetch(
					`${import.meta.env.VITE_API_BASE_URL}/card/cards/${eventid}`
				);
				if (!response.ok) throw new Error("Failed to fetch event data");

				const data = await response.json();
				console.table(data);

				let imageUrl = "";

				// If media_img_path exists, try fetching the image
				if (data.media_img_path) {
					try {
						const imgReq = await fetch(
							`${import.meta.env.VITE_API_BASE_URL}/media/${
								data.media_img_path
							}`
						);
						if (!imgReq.ok) throw new Error("Failed to fetch image");

						// Check if the response is an image (blob) or JSON
						const contentType = imgReq.headers.get("content-type");
						if (contentType && contentType.startsWith("image")) {
							imageUrl = URL.createObjectURL(await imgReq.blob());
						} else {
							const imgRes = await imgReq.json();
							if (imgRes.url) {
								imageUrl = imgRes.url;
							}
						}
					} catch (err) {
						console.error(`Error fetching image for event ${eventid}:`, err);
					}
				}

				// Set event data including image
				setEvent({
					id: data.c_id,
					image: imageUrl || "", // If image URL is empty, fallback to ""
					title: data.title,
					caption: data.caption,
					content: data.content,
					date: data.date,
					location: data.location,
					large: false,
				});
			} catch (error) {
				console.error("Error fetching event:", error);
			}
		};

		fetchEvent();
	}, [eventid]);

	if (!event) {
		return <div className="text-center text-xl mt-10">Loading...</div>;
	}

	return (
		<section className="max-w-4xl mx-auto py-10 px-6">
			<h1 className="text-3xl font-bold text-primary">{event.title}</h1>
			<p className="text-gray-600 mt-2">
				{event.date} • {event.location}
			</p>

			{/* Event Image */}
			{event.image && (
				<div className="mt-6">
					<img
						src={event.image}
						alt={event.title}
						className="w-full h-96 object-cover rounded-lg shadow-md"
					/>
				</div>
			)}

			{/* Event Description */}
			<MarkdownPreview
				source={event.content}
				wrapperElement={{ "data-color-mode": "light" }}
				style={{ padding: 16 }}
			/>

			{eventid === "Foundations-of-Cybersecurity" && (
				<div className="flex flex-col md:flex-row justify-center gap-6">
					<a
						href="https://iiitn.ac.in/images/workshop/2025/Cyber-Security-Certification%40iiitn-2025.pdf"
						className="bg-accent text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 text-center">
						📄 Download Brochure
					</a>
					<a
						href="https://docs.google.com/forms/d/e/1FAIpQLSfwGrRjL36Azfvk2JJjIfJSiHg5Wmg5jPcS_t3jcnFWHz5XuQ/viewform"
						className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-800 text-center">
						📝 Register Now
					</a>
				</div>
			)}

			{/* Back Button (Goes to Previous Page) */}
			<div className="mt-8">
				<button
					onClick={() => navigate(-1)} // Go to previous page
					className="text-accent font-semibold hover:underline">
					← Back
				</button>
			</div>
		</section>
	);
};

export default EventDetail;
