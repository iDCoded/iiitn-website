import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import MarkdownPreview from "@uiw/react-markdown-preview";

// Interface for Announcement
interface Announcement {
	id: string;
	title: string;
	image?: string;
	description?: string;
	link?: string;
	content?: string;
	date?: string;
}

const DetailedAnnouncement = () => {
	const { announcementid } = useParams();
	const navigate = useNavigate();
	const [announcement, setAnnouncement] = useState<Announcement | null>(null);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchAnnouncement = async () => {
			setLoading(true);
			setError(null);
			try {
				const response = await fetch(
					`${import.meta.env.VITE_API_BASE_URL}/card/cards/${announcementid}`
				);
				if (!response.ok) throw new Error("Failed to fetch announcement");

				const data = await response.json();
				const imageUrl = data.media_img_path
					? `${import.meta.env.VITE_API_BASE_URL}/media/${data.media_img_path}`
					: "";

				setAnnouncement({
					id: data.id || "",
					title: data.title || "No Title Available",
					image: imageUrl || "",
					description: data.description || "",
					link: data.link || "#",
					content: data.content || "No content available.",
					date: data.date || "Unknown Date",
				});
			} catch (error) {
				console.error("Error fetching announcement:", error);
				setError("Failed to load announcement.");
			} finally {
				setLoading(false);
			}
		};

		fetchAnnouncement();
	}, [announcementid]);

	// Loading state
	if (loading) {
		return (
			<div className="flex justify-center items-center h-screen text-xl text-primary">
				Loading announcement... ⏳
			</div>
		);
	}

	// Error state
	if (error) {
		return (
			<div className="text-center text-xl text-red-500 mt-10">
				{error} 😢
			</div>
		);
	}

	// If announcement is not found
	if (!announcement) {
		return (
			<div className="text-center text-xl mt-10 text-gray-500">
				Announcement Not Found 😢
			</div>
		);
	}

	return (
		<motion.section
			initial={{ opacity: 0, y: 50 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -50 }}
			transition={{ duration: 0.5, ease: "easeInOut" }}
			className="max-w-4xl mx-auto p-6 md:p-10 bg-white/10 backdrop-blur-lg shadow-lg rounded-2xl my-10"
		>
			{/* Title & Date */}
			<div className="text-center mb-6">
				<motion.h1
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2, duration: 0.5 }}
					className="text-3xl md:text-4xl font-bold text-primary"
				>
					{announcement.title}
				</motion.h1>
				{announcement.date && (
					<motion.p
						initial={{ opacity: 0, y: -10 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.3, duration: 0.5 }}
						className="text-primary mt-2 text-lg"
					>
						📅 {announcement.date}
					</motion.p>
				)}
			</div>

			{/* Image (if available) */}
			{announcement.image && (
				<motion.div
					initial={{ opacity: 0, scale: 0.9 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ delay: 0.4, duration: 0.5 }}
					className="mt-6 rounded-lg overflow-hidden shadow-md mb-6"
				>
					<img
						src={announcement.image}
						alt={announcement.title}
						className="w-full h-80 object-cover rounded-lg"
					/>
				</motion.div>
			)}

			{/* Description */}
			{announcement.description && (
				<motion.p
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.5, duration: 0.5 }}
					className="text-primary/50 mt-4 text-lg text-center px-4 mb-6"
				>
					{announcement.description}
				</motion.p>
			)}

			{/* Content */}
			{announcement.content && (
				<motion.div
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.6, duration: 0.5 }}
					className="mt-6 text-primary text-lg leading-relaxed mb-6"
				>
					<MarkdownPreview
						source={announcement.content}
						wrapperElement={{ "data-color-mode": "light" }}
						style={{ padding: 16 }}
					/>
				</motion.div>
			)}

			{/* Action Buttons */}
			<div className="mt-8 flex justify-center gap-4">
				{/* Go Back Button */}
				<motion.button
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}
					onClick={() => navigate(-1)}
					className="bg-gray-800 text-white px-5 py-2 rounded-lg font-semibold transition-all duration-300 hover:bg-gray-700 flex items-center gap-2"
				>
					← Go Back
				</motion.button>
			</div>
		</motion.section>
	);
};

export default DetailedAnnouncement;
