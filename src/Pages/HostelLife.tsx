function HostelLife() {
	return (
		<div className="bg-gray-100 min-h-screen flex flex-col">
			{/* Header Section */}
			<header className="bg-primary text-white py-14 text-center">
				<h1 className="text-2xl sm:text-3xl font-bold">Hostel Life</h1>
			</header>

			{/* Sections */}
			<div className="max-w-4xl mx-auto mt-8 space-y-12 px-4">
				
				{/* Accommodation Section */}
				<section id="accommodation" className="bg-white p-6 rounded-lg shadow-md">
					<h2 className="text-xl sm:text-2xl font-bold text-primary mb-3">
						<span className="text-accent text-3xl sm:text-4xl mr-2">|</span> Accommodation
					</h2>
					<p className="text-gray-700">
						Our hostels offer a comfortable and secure environment for students, with fully furnished rooms, high-speed Wi-Fi, and 24/7 security.
					</p>
					<div className="mt-4 bg-gray-300 h-40 sm:h-48 rounded-lg flex items-center justify-center">
						<span className="text-gray-600">Image Placeholder</span>
					</div>
				</section>

				{/* Events Section */}
				<section id="events" className="bg-white p-6 rounded-lg shadow-md">
					<h2 className="text-xl sm:text-2xl font-bold text-primary mb-3">
						<span className="text-accent text-3xl sm:text-4xl mr-2">|</span> Events
					</h2>
					<p className="text-gray-700">
						Our hostel organizes cultural fests, sports tournaments, and workshops to keep students engaged and entertained throughout the year.
					</p>

					{/* Event Image Collage - Responsive Grid */}
					<div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-2">
						{[...Array(6)].map((_, index) => (
							<div key={index} className="bg-gray-300 h-28 sm:h-32 rounded-lg flex items-center justify-center">
								<span className="text-gray-600">Image {index + 1}</span>
							</div>
						))}
					</div>
				</section>

				{/* Facilities Section */}
				<section id="facilities" className="bg-white p-6 rounded-lg shadow-md">
					<h2 className="text-xl sm:text-2xl font-bold text-primary mb-3">
						<span className="text-accent text-3xl sm:text-4xl mr-2">|</span> Facilities
					</h2>
					<p className="text-gray-700">
						Our hostel provides modern amenities like a gym, reading room, laundry services, and common recreation areas for relaxation.
					</p>

					{/* Facilities Image Grid - Responsive Layout */}
					<div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
						{["Gym", "Mess", "Ground", "Badminton Court", "Basketball Court"].map((facility, index) => (
							<div key={index} className={`bg-gray-300 h-32 rounded-lg flex items-center justify-center 
								${facility === "Basketball Court" ? "sm:col-span-2" : ""}`}>
								<span className="text-gray-600">{facility}</span>
							</div>
						))}
					</div>
				</section>

				{/* Administration Section */}
				<section id="administration" className="bg-white p-6 rounded-lg shadow-md">
					<h2 className="text-xl sm:text-2xl font-bold text-primary mb-3">
						<span className="text-accent text-3xl sm:text-4xl mr-2">|</span> Administration
					</h2>
					<p className="text-gray-700">
						The hostel administration ensures smooth operations and provides guidance for students regarding rules, policies, and support services.
					</p>

					{/* SAC Section */}
					<div className="mt-4 p-4 bg-gray-200 rounded-lg">
						<h3 className="text-lg sm:text-xl font-semibold text-primary">Student Affairs Committee (SAC)</h3>
						<p className="text-gray-700 mt-2">
							The Student Affairs Committee (SAC) is responsible for addressing student concerns, organizing hostel events, and maintaining discipline.
						</p>
					</div>
				</section>

			</div>
		</div>
	);
}

export default HostelLife;
