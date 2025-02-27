import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import abhivyakti from "../../assets/abhivyakti.jpeg";
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
			"Annual gathering of students, faculty, and staff. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
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
			"Annual gathering of students, faculty, and staff. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
		date: "27 Aug",
		location: "IIIT Nagpur Campus",
		large: false,
	},
	{
		id: "Foundations-of-Cybersecurity",
		image: workshop, // Make sure to replace with the actual image import
		title: "Foundations of Cybersecurity - Online Certificate Programme",
		caption: "Enhance your cybersecurity skills with IIIT Nagpur",
		content:
			"The Department of Computer Science & Engineering at IIIT Nagpur presents an exclusive online certification program on Cybersecurity. This program is designed to equip participants with essential cybersecurity skills, covering topics such as network security, cryptography, threat detection, and ethical hacking. Gain industry-relevant knowledge from experts in the field and earn a valuable certification upon completion.",
		date: "22nd March",
		location: "Online (Hosted by IIIT Nagpur)",
		large: false,
	},
];

const EventDetail = () => {
	const { eventid } = useParams();
	const [event, setEvent] = useState<{
		id: string;
		image: string;
		title: string;
		caption: string;
		content: string;
		date: string;
		location: string;
		large: boolean;
	} | null>(null);

	useEffect(() => {
		const fetchEvent = async () => {
			try {
				const response = await fetch(
					`http://localhost:5000/card/cards/${eventid}`
				);
				if (!response.ok) throw new Error("Failed to fetch event");
				const data = await response.json();

				console.table(data);

				// Initialize event data with image as null
				const eventData = {
					id: data.c_id,
					image: null, // Will be updated after fetching
					title: data.title,
					caption: data.caption,
					content: data.content,
					date: data.date,
					location: data.location,
					large: false,
				};

				// Fetch event image if available
				if (data.media_img_path) {
					try {
						const imgReq = await fetch(
							`http://localhost:5000/media/${data.media_img_path}`
						);
						if (!imgReq.ok) throw new Error("Failed to fetch image");
						const imgRes = await imgReq.json();
						eventData.image = imgRes.url;
					} catch (err) {
						console.error(`Error fetching image for event ${eventid}:`, err);
					}
				}

				setEvent(eventData);
			} catch (error) {
				console.error("Error fetching event:", error);
				setEvent(eventsData.find((event) => event.id === eventid) || null);
			}
		};

		fetchEvent();
	}, [eventid]);

	if (!event) {
		return <div className="text-center text-xl mt-10">Event Not Found 😢</div>;
	}

	return (
		<section className="max-w-4xl mx-auto py-10 px-6">
			<h1 className="text-3xl font-bold text-primary">{event.title}</h1>
			<p className="text-gray-600 mt-2">
				{event.date} • {event.location}
			</p>

			{/* Event Image */}
			{/* <div className="mt-6">
				<img
					src={event.image}
					alt={event.title}
					className="w-full h-128 object-cover rounded-lg shadow-md"
				/>
			</div> */}

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

			{/* Back to Events Button */}
			<div className="mt-8">
				<a href="/events" className="text-accent font-semibold hover:underline">
					← Back to Events
				</a>
			</div>
		</section>
	);
};

export default EventDetail;
