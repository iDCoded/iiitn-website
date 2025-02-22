import React from "react";

function Consultancy() {
	return (
		<div className="bg-gray-100 min-h-screen flex flex-col">
			{/* Header Section */}
			<div className="bg-[#002147] text-white py-16 text-center">
				<h1 className="text-4xl font-bold">Consultancy</h1>
				<p className="text-lg mt-2">
					Stay updated with the latest consultancy services from IIIT Nagpur.
				</p>
			</div>

			{/* Main Content Section */}
			<div className="max-w-6xl mx-auto p-6 space-y-8">
				{/* Measurement Facilities */}
				<section className="bg-white shadow-lg rounded-lg p-6">
					<h2 className="text-2xl font-semibold text-gray-800 mb-4">
						Measurement Facility
					</h2>
					<ul className="list-disc list-inside text-gray-700 space-y-2">
						<li>
							<strong>Measurement using Vector Network Analyzer</strong> -{" "}
							<a
								href="#"
								className="text-blue-600 hover:text-blue-800 underline"
							>
								For More Details Click Here
							</a>
						</li>
						<li>
							<strong>Nano SciTech Laboratory Facility</strong> -{" "}
							<a
								href="#"
								className="text-blue-600 hover:text-blue-800 underline"
							>
								For More Details Click Here
							</a>
						</li>
					</ul>
				</section>

				{/* Industrial Research & Consultancy */}
				<section className="bg-white shadow-lg rounded-lg p-6">
					<h2 className="text-2xl font-semibold text-gray-800 mb-4">
						Industrial Research & Consultancy
					</h2>
					<p className="text-gray-700">
						The institute engages in education, research, training, technology
						development, and related activities in various scientific and
						technological fields. Collaborations with industries help in:
					</p>
					<ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
						<li>Identifying new & emerging areas jointly</li>
						<li>Solving real-life industrial problems</li>
						<li>Enhancing research quality & impact</li>
						<li>Complementing the institute's skill base</li>
					</ul>
				</section>

				{/* Project Details */}
				<section className="bg-white shadow-lg rounded-lg p-6">
					<h2 className="text-2xl font-semibold text-gray-800 mb-4">
						Project Types
					</h2>
					<div className="grid md:grid-cols-2 gap-6">
						<div className="p-4 border border-gray-300 rounded-lg">
							<h3 className="text-lg font-medium text-gray-800">
								Consultancy Projects
							</h3>
							<ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
								<li>Short-term (1-2 years) for solving specific problems</li>
								<li>
									Expected results defined at the beginning of the project
								</li>
								<li>Cost depends on problem complexity</li>
							</ul>
						</div>
						<div className="p-4 border border-gray-300 rounded-lg">
							<h3 className="text-lg font-medium text-gray-800">
								Sponsored Research Projects
							</h3>
							<ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
								<li>Long-term (2-5 years) for knowledge generation</li>
								<li>More flexible deliverables</li>
								<li>
									A detailed project plan & budget required for industry approval
								</li>
							</ul>
						</div>
					</div>
				</section>

				{/* Completed & Ongoing Projects */}
				<section className="bg-white shadow-lg rounded-lg p-6">
					<h2 className="text-2xl font-semibold text-gray-800 mb-4">
						Completed & Ongoing Projects
					</h2>
					<ul className="list-disc list-inside text-gray-700 space-y-2">
						<li>
							<strong>Department of Basic Sciences</strong> -{" "}
							<a href="#" className="text-blue-600 hover:text-blue-800 underline">
								Click Here
							</a>
						</li>
						<li>
							<strong>Department of Computer Science and Engineering</strong> -{" "}
							<a href="#" className="text-blue-600 hover:text-blue-800 underline">
								Click Here
							</a>
						</li>
						<li>
							<strong>Department of Electronics and Communication Engineering</strong>{" "}
							-{" "}
							<a href="#" className="text-blue-600 hover:text-blue-800 underline">
								Click Here
							</a>
						</li>
					</ul>
				</section>

				{/* Sponsored Research Labs */}
				<section className="bg-white shadow-lg rounded-lg p-6">
					<h2 className="text-2xl font-semibold text-gray-800 mb-4">
						Sponsored Research Labs & Facilities
					</h2>
					<p className="text-gray-700">
						Industries can sponsor labs to build research infrastructure at
						IIITN. Sponsored labs may be open for industry use and external
						collaborations.
					</p>
					<ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
						<li>
							<strong>Nano SciTech Laboratory</strong> -{" "}
							<a href="#" className="text-blue-600 hover:text-blue-800 underline">
								Click Here
							</a>
						</li>
						<li>
							<strong>Areas of Expertise</strong> -{" "}
							<a href="#" className="text-blue-600 hover:text-blue-800 underline">
								Click Here
							</a>
						</li>
					</ul>
				</section>
			</div>
		</div>
	);
}

export default Consultancy;
