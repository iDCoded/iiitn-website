function MTech() {
	return (
		<div className="bg-gray-100 min-h-screen">
			{/* Header Section */}
			<header className="bg-gray-800 text-white py-12 text-center px-4">
				<h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
					Post Graduation Admissions
				</h1>
				<p className="mt-2 text-sm md:text-md lg:text-lg text-gray-300">
					Information regarding M.Tech & Ph.D. admissions at IIIT Nagpur
				</p>
			</header>

			{/* Admissions Information */}
			<section className="max-w-3xl w-full mx-auto bg-white shadow-md p-5 md:p-6 rounded-lg mt-6 md:mt-8">
				<h2 className="text-xl md:text-2xl font-semibold text-gray-800">
					Admissions for Post Graduate Programs
				</h2>
				<p className="text-gray-700 mt-3 text-sm md:text-base">
					IIIT Nagpur offers M.Tech and Ph.D. programs in various disciplines. Below are the latest notifications and details regarding admissions.
				</p>
			</section>

			{/* PhD Admissions Notifications */}
			<section className="max-w-3xl w-full mx-auto bg-white shadow-md p-5 md:p-6 rounded-lg mt-6">
				<h3 className="text-lg md:text-xl font-semibold text-gray-800">
					Ph.D. Admissions - Winter 2024-25
				</h3>
				<ul className="mt-4 space-y-3">
					<li>
						<span className="font-medium text-gray-900 text-sm md:text-base">Admission Notification: </span>
						<a href="#" className="text-blue-600 hover:text-blue-800 underline text-sm md:text-base">
							View Details
						</a>
					</li>
					<li>
						<span className="font-medium text-gray-900 text-sm md:text-base">Provisionally Selected Candidates: </span>
						<a href="#" className="text-blue-600 hover:text-blue-800 underline text-sm md:text-base">
							View List
						</a>
					</li>
					<li>
						<span className="font-medium text-gray-900 text-sm md:text-base">Revised Admission Schedule: </span>
						<a href="#" className="text-blue-600 hover:text-blue-800 underline text-sm md:text-base">
							View Schedule
						</a>
					</li>
				</ul>
			</section>

			{/* Academic Rule Book */}
			<section className="max-w-3xl w-full mx-auto bg-white shadow-md p-5 md:p-6 rounded-lg mt-6 mb-6">
				<h3 className="text-lg md:text-xl font-semibold text-gray-800">
					Academic Rule Book
				</h3>
				<p className="text-gray-700 mt-3 text-sm md:text-base">
					Refer to the academic rule book for policies and guidelines related to postgraduate programs.
				</p>
				<a href="#" className="inline-block mt-3 px-4 py-2 bg-gray-800 text-white font-medium rounded-md hover:bg-gray-900 transition text-sm md:text-base">
					View Rule Book
				</a>
			</section>
		</div>
	);
}

export default MTech;
