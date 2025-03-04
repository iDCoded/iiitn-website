const studentClubs = [
	{ name: "Dot Slash (Coding Wing)", category: "Technical Club", link: "#" },
	{ name: "Elevate (Development Wing)", category: "Technical Club", link: "#" },
	{ name: "Strokes (Design Wing)", category: "Technical Club", link: "#" },
	{ name: "IoTics (Robotics Wing)", category: "Technical Club", link: "#" },
	{
		name: "Dimensions (AR, VR, XR Wing)",
		category: "Technical Club",
		link: "#",
	},
	{
		name: "Udyam (E-cell/Innovation/IPR Wing)",
		category: "Technical Club",
		link: "#",
	},
	{
		name: "CRISPR (Central Research Initiative and Student Public Relations)",
		category: "Technical Club",
		link: "#",
	},
	{ name: "Crescendo (Music Wing)", category: "Cultural Club", link: "#" },
	{ name: "DTraxia (Dance Wing)", category: "Cultural Club", link: "#" },
	{ name: "Estoria (Drama Wing)", category: "Cultural Club", link: "#" },
	{
		name: "Orator (Debate and Public Speaking Wing)",
		category: "Cultural Club",
		link: "#",
	},
	{
		name: "Probe (Social Media, Photography, Videography, Magazine Wing)",
		category: "Cultural Club",
		link: "#",
	},
	{
		name: "Eklavya (Sports Club for Kshitij)",
		category: "Sports Club",
		link: "#",
	},
];

function StudentsClubs() {
	return (
		<div className="bg-gray-100 min-h-screen flex flex-col">
			{/* Header Section */}
			<header className="bg-primary text-white py-14 text-center">
				<h1 className="text-4xl font-bold">Student Clubs</h1>
				<p className="text-lg mt-2">
					Explore various student clubs at IIIT Nagpur
				</p>
			</header>

			{/* About SAC */}
			<div className="max-w-5xl mx-auto px-6 py-12">
				<h2 className="text-2xl font-semibold text-primary mb-4">About SAC</h2>
				<p className="text-gray-600">
					The Student Affairs Council (SAC) is the IIIT Nagpur Campus Council
					responsible for providing resources and services for student
					activities. We coordinate events, workshops, and entertainment to
					enhance student life.
				</p>
			</div>

			{/* Club List */}
			<div className="max-w-5xl mx-auto px-6 pb-12">
				<h2 className="text-2xl font-semibold text-primary mb-6">
					List of Student Clubs
				</h2>
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
					{studentClubs.map((club, index) => (
						<div
							key={index}
							className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition duration-300">
							<h3 className="text-xl font-bold text-primary">{club.name}</h3>
							<p className="text-gray-600 mt-2">{club.category}</p>
							<a
								href={club.link}
								className="inline-block mt-4 bg-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#001a36] transition">
								Learn More
							</a>
						</div>
					))}
				</div>
			</div>

			{/* About ELC */}
			<div className="max-w-5xl mx-auto px-6 pb-12">
				<h2 className="text-2xl font-semibold text-primary mb-4">About ELC</h2>
				<p className="text-gray-600">
					Electoral literacy is essential for strengthening democracy. The
					Electoral Literacy Club (ELC) at IIIT Nagpur educates students about
					their democratic rights, including the right to vote. Activities
					include seminars, workshops, debates, quizzes, and more.
				</p>
				<a
					href="/pages/elclub"
					className="inline-block mt-4 bg-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-[#001a36] transition">
					Learn More
				</a>
			</div>
		</div>
	);
}

export default StudentsClubs;
