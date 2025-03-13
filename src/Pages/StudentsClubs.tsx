import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function StudentsClubs() {
	const [studentClubs, setStudentClubs] = useState<any[]>([]);
	const [error, setError] = useState<Error>();
	const [loading, setLoading] = useState(true);
	const navigate = useNavigate();

	useEffect(() => {
		const fetchClubs = async () => {
			setLoading(true);
			setError(undefined);
			try {
				const res = await fetch(
					`${import.meta.env.VITE_API_BASE_URL}/card/cards/category/clubs`
				);
				const data = await res.json();
				setStudentClubs(
					data.map((club: any) => ({
						id: club.c_id,
						title: club.title,
						c_category: club.c_category,
						c_sub_category: club.c_sub_category,
						caption: club.caption,
						content: club.content,
						date: club.date,
						location: club.location,
						media_img_id: club.media_img_id || "",
						media_vid_id: club.media_vid_id,
						media_doc_id: club.media_doc_id,
						updated_by: club.updated_by,
						updated_time: club.updated_time,
						added_by: club.added_by,
						added_time: club.added_time,
						visibility: club.visibility,
						preference: club.preference,
						expiry_date: club.expiry_date,
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

	const handleCardClick = (club: any) => {
		navigate(`/clubs/${club.id}`, { state: { card: club } });
	};

	return (
		<div className="bg-gray-100 min-h-screen flex flex-col">
			{error ? (
				<div className="text-center text-xl mt-10 text-red-500">
					Error fetching student clubs
				</div>
			) : loading ? (
				<div className="text-center text-xl mt-10">Loading...</div>
			) : (
				<>
					<header className="bg-primary text-white py-14 text-center">
						<h1 className="text-4xl font-bold">Student Clubs</h1>
						<p className="text-lg mt-2">Explore various student clubs at IIIT Nagpur</p>
					</header>

					<div className="max-w-7xl mx-auto px-6 py-12">
						<h2 className="text-3xl font-semibold text-primary mb-8 text-center">
							Our Student Clubs
						</h2>

						{studentClubs.length === 0 ? (
							<div className="text-center text-xl text-gray-500">No clubs available</div>
						) : (
							<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 
							w-full md:w-[90vw] lg:w-[80vw] xl:w-[75vw] max-w-5xl mx-auto">
								{studentClubs.map((club, index) => (
									<motion.div
										key={club.id || index}
										onClick={() => handleCardClick(club)}
										initial={{ opacity: 0, y: 20 }}
										animate={{ opacity: 1, y: 0 }}
										transition={{ duration: 0.6, delay: index * 0.1 }}
										whileHover={{ scale: 1.03 }}
										className="cursor-pointer bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 w-full"
									>
										{club.media_img_id && (
											<img
												src={club.media_img_id}
												alt={club.title}
												className="w-full h-56 object-cover"
											/>
										)}
										<div className="p-6">
											<h3 className="text-xl font-bold text-primary">{club.title}</h3>
											<p className="text-accent font-medium">{club.caption}</p>
											<a
												href={`/clubs/${club.id}`}
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
