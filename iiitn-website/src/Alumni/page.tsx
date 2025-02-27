import AlumniEventCard from "../components/AlumniEventCard";
import AlumniCarousel from "../components/AlumniCarousel";
import heroimage from "../assets/alumBanner.png";
import alum_meet from "../assets/alumni meet.png";
import carrer_guidance from "../assets/carrer_giud2.png";
import past_reunion from "../assets/alum_past.png";
import past_te_talk from "../assets/pst_techtalk3.jpg";
const events = [
	{
		title: "Alumni Meet 2024",
		date: "August 15, 2024",
		description: "Reconnect with old friends and network with fellow alumni.",
		image: alum_meet,
	},
	{
		title: "Career Guidance Webinar",
		date: "July 22, 2024",
		description: "Experts from various industries will guide the students.",
		image: carrer_guidance,
	},
];

const pastEvents = [
	{
		title: "IIITN Alumni Reunion 2023",
		date: "December 10, 2023",
		description: "An evening filled with nostalgia and networking.",
		image: past_reunion,
	},
	{
		title: "Tech Talk with Alumni",
		date: "September 18, 2023",
		description: "Alumni shared their insights on industry trends.",
		image: past_te_talk,
	},
];

function Alumni() {
	return (
		<div className="bg-gray-50 min-h-screen">
			{/* Hero Section */}
			<header
				className="relative w-full h-75 flex flex-col justify-center items-center text-white text-center shadow-lg"
				style={{
					backgroundImage: `url(${heroimage})`,
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}>
				{/* Overlay */}
				<div className="absolute inset-0 bg-black opacity-50"></div>
				<div className="relative z-10">
					<h1 className="text-5xl font-extrabold drop-shadow-lg">
						Welcome, Alumni of IIIT Nagpur!
					</h1>
					<p className="text-xl font-medium mt-2">
						Stay connected, cherish old memories, and contribute to the growth
						of IIIT Nagpur.
					</p>
					<p className="mt-6">
						<a
							href="/signup"
							target="_blank"
							rel="noreferrer"
							className="bg-white text-primary px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-accent hover:text-white transition">
							Join the Alumni Network
						</a>
					</p>
				</div>
			</header>

			{/* Upcoming Events */}
			<section className="max-w-6xl mx-auto py-16 px-6">
				<h2 className="text-3xl font-bold text-gray-900">
					<span className="text-accent">| </span>Upcoming Events
				</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10">
					{events.map((event, index) => (
						<AlumniEventCard key={index} {...event} />
					))}
				</div>
			</section>

			{/* Memories Carousel */}
			<section className="bg-gray-200 py-16 px-6">
				<div className="max-w-6xl mx-auto w-full">
					<h2 className="text-3xl font-bold text-gray-900">
						<span className="text-accent">| </span>Memories
					</h2>
					<div className="flex flex-col items-center justify-center mt-10 w-full">
						<AlumniCarousel />
					</div>
				</div>
			</section>

			{/* Past Events */}
			<section className="max-w-6xl mx-auto py-16 px-6">
				<h2 className="text-3xl font-bold text-gray-900">
					<span className="text-accent">| </span>Past Events
				</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10">
					{pastEvents.map((event, index) => (
						<AlumniEventCard key={index} {...event} />
					))}
				</div>
			</section>

			{/* Call to Action */}
			<div className="bg-primary text-white text-center py-16">
				<h2 className="text-4xl font-bold">
					Be a Part of the IIIT Nagpur Legacy
				</h2>
				<p className="text-lg mt-4 max-w-3xl mx-auto opacity-90">
					Join the alumni community, mentor students, and keep in touch with the
					latest developments at IIIT Nagpur.
				</p>
				<p className="mt-6">
					<a
						href="/alumni/form"
						target="_blank"
						rel="noreferrer"
						className="bg-white text-primary px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-gray-200 transition">
						Sign Up Now
					</a>
				</p>
			</div>
		</div>
	);
}

export default Alumni;
