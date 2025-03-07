import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const studentClubsDemo = [
	{
		id: 1,
		name: "Dot Slash (Coding Wing)",
		category: "Technical Club",
		image: "https://source.unsplash.com/random/200x200?coding",
		link: "#"
	},
	{
		id: 2,
		name: "Elevate (Development Wing)",
		category: "Technical Club",
		image: "https://source.unsplash.com/random/200x200?development",
		link: "#"
	},
	{
		id: 3,
		name: "Strokes (Design Wing)",
		category: "Technical Club",
		image: "https://source.unsplash.com/random/200x200?design",
		link: "#"
	},
	{
		id: 4,
		name: "IoTics (Robotics Wing)",
		category: "Technical Club",
		image: "https://source.unsplash.com/random/200x200?robotics",
		link: "#"
	},
	{
		id: 5,
		name: "Dimensions (AR, VR, XR Wing)",
		category: "Technical Club",
		image: "https://source.unsplash.com/random/200x200?ar-vr",
		link: "#",
	},
	{
		id: 6,
		name: "Udyam (E-cell/Innovation/IPR Wing)",
		category: "Technical Club",
		image: "https://source.unsplash.com/random/200x200?innovation",
		link: "#",
	},
	{
		id: 7,
		name: "CRISPR (Central Research Initiative and Student Public Relations)",
		category: "Technical Club",
		image: "https://source.unsplash.com/random/200x200?research",
		link: "#",
	},
	{
		id: 8,
		name: "Crescendo (Music Wing)",
		category: "Cultural Club",
		image: "https://source.unsplash.com/random/200x200?music",
		link: "#"
	},
	{
		id: 9,
		name: "DTraxia (Dance Wing)",
		category: "Cultural Club",
		image: "https://source.unsplash.com/random/200x200?dance",
		link: "#"
	},
	{
		id: 10,
		name: "Estoria (Drama Wing)",
		category: "Cultural Club",
		image: "https://source.unsplash.com/random/200x200?drama",
		link: "#"
	},
	{
		id: 11,
		name: "Orator (Debate and Public Speaking Wing)",
		category: "Cultural Club",
		image: "https://source.unsplash.com/random/200x200?debate",
		link: "#",
	},
	{
		id: 12,
		name: "Probe (Social Media, Photography, Videography, Magazine Wing)",
		category: "Cultural Club",
		image: "https://source.unsplash.com/random/200x200?photography",
		link: "#",
	},
	{
		id: 13,
		name: "Eklavya (Sports Club for Kshitij)",
		category: "Sports Club",
		image: "https://source.unsplash.com/random/200x200?sports",
		link: "#",
	},
];

function StudentsClubs() {
	const [studentClubs, setStudentClubs] = useState(studentClubsDemo);
	const [error, setError] = useState<Error>();
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchClubs = async () => {
			setLoading(true);
			try {
				const res = await fetch(
					`${import.meta.env.VITE_API_BASE_URL}/card/cards/category/clubs`
				);
				const data = await res.json();
				setStudentClubs(
					data.map((club: any) => ({
						id: club.c_id,
						name: club.title,
						category: club.c_sub_category,
						image: club.media_img_id || "",
						link: club.link,
					}))
				);
			} catch (error) {
				console.error("Error fetching student clubs:", error);
				setError(error as Error);
			} finally {
				setLoading(false);
			}
		};

		fetchClubs();
	}, []);

	return (
		<div className="bg-gray-100 min-h-screen flex flex-col">
			{/* Conditional Rendering for Error & Loading States */}
			{error ? (
				<div className="text-center text-xl mt-10 text-red-500">
					Error fetching student clubs
				</div>
			) : loading ? (
				<div className="text-center text-xl mt-10">Loading...</div>
			) : (
				<>
					{/* Header Section */}
					<header className="bg-primary text-white py-14 text-center">
						<h1 className="text-4xl font-bold">Student Clubs</h1>
						<p className="text-lg mt-2">Explore various student clubs at IIIT Nagpur</p>
					</header>

					{/* Club List */}
					<div className="max-w-6xl mx-auto px-6 py-12">
						<h2 className="text-3xl font-semibold text-primary mb-8 text-center">
							Our Student Clubs
						</h2>

						{studentClubs.length === 0 ? (
							<div className="text-center text-xl text-gray-500">No clubs available</div>
						) : (
							<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
								{studentClubs.map((club, index) => (
									<motion.div
										key={club.id || index} // Use index as a fallback if id is not available
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.6, delay: index * 0.1 }}
										whileHover={{ scale: 1.02 }}
										className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
									>
										{/* Club Image */}
										<img src={club.image} alt={club.name} className="w-full h-48 object-cover" />

										{/* Club Info */}
										<div className="p-6">
											<h3 className="text-xl font-bold text-primary">{club.name}</h3>
											<p className="text-accent font-medium">{club.category}</p>
											<a
												href={club.link}
												className="mt-4 inline-block text-white bg-accent px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#d46b1d] transition"
											>
												Learn More
											</a>
										</div>
									</motion.div>
								))}
							</div>
						)}
					</div>
				</>
			)}
		</div>
	);

}

export default StudentsClubs;
