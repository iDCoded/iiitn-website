import React from "react";

function Consultancy() {
	return (
		<div className="bg-gray-100 min-h-screen flex flex-col">
			{/* Header Section */}
			<header className="bg-primary text-white py-16 text-center">
				<h1 className="text-4xl font-bold">Consultancy</h1>
				<p className="text-lg mt-2">
					Stay updated with the latest consultancy services from IIIT Nagpur.
				</p>
			</header>

			{/* Main Content Section */}
			<main className="max-w-6xl mx-auto p-6 space-y-10">
				{/* Measurement Facilities */}
				<section className="bg-white shadow-lg rounded-lg p-6 border-t-4 border-accent">
					<h2 className="text-2xl font-semibold text-primary mb-4">
						Measurement Facility
					</h2>
					<ul className="space-y-3 text-gray-700">
						<li className="flex justify-between items-center border-b pb-3">
							<span className="font-medium">Measurement using Vector Network Analyzer</span>
							<a href="#" className="px-4 py-2 text-white bg-accent rounded-md hover:bg-[#c2651c] transition">
								More Details
							</a>
						</li>
						<li className="flex justify-between items-center">
							<span className="font-medium">Nano SciTech Laboratory Facility</span>
							<a href="#" className="px-4 py-2 text-white bg-accent rounded-md hover:bg-[#c2651c] transition">
								More Details
							</a>
						</li>
					</ul>
				</section>

				{/* Industrial Research & Consultancy */}
				<section className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-primary">
					<h2 className="text-2xl font-semibold text-primary mb-4">
						Industrial Research & Consultancy
					</h2>
					<p className="text-gray-700 leading-relaxed">
						IIIT Nagpur collaborates with industries to enhance research quality,
						solve real-life industrial problems, and explore emerging areas.
					</p>
					<ul className="mt-4 space-y-2 text-gray-700 list-disc list-inside">
						<li>Identifying new & emerging research areas</li>
						<li>Solving real-world industrial challenges</li>
						<li>Improving research impact through collaboration</li>
						<li>Enhancing the institute's skill base</li>
					</ul>
				</section>

				{/* Project Types */}
				<section className="bg-white shadow-lg rounded-lg p-6 border-t-4 border-accent">
					<h2 className="text-2xl font-semibold text-primary mb-4">Project Types</h2>
					<div className="grid md:grid-cols-2 gap-6">
						<div className="p-5 border border-gray-300 rounded-lg bg-[#f5f5f5] hover:shadow-md transition">
							<h3 className="text-lg font-medium text-primary">Consultancy Projects</h3>
							<ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
								<li>Short-term (1-2 years) problem-solving projects</li>
								<li>Well-defined expected results</li>
								<li>Project cost varies based on complexity</li>
							</ul>
						</div>
						<div className="p-5 border border-gray-300 rounded-lg bg-[#f5f5f5] hover:shadow-md transition">
							<h3 className="text-lg font-medium text-primary">Sponsored Research Projects</h3>
							<ul className="list-disc list-inside text-gray-700 mt-2 space-y-2">
								<li>Long-term (2-5 years) knowledge-driven projects</li>
								<li>Flexible deliverables</li>
								<li>Requires detailed project plan & budget approval</li>
							</ul>
						</div>
					</div>
				</section>

				{/* Completed & Ongoing Projects */}
				<section className="bg-white shadow-lg rounded-lg p-6 border-l-4 border-primary">
					<h2 className="text-2xl font-semibold text-primary mb-4">Completed & Ongoing Projects</h2>
					<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
						<a href="/departments/basic_sciences/projects" className="block bg-[#00336c] text-white p-4 rounded-md shadow-md text-center hover:bg-[#011c3c] transition">
							Department of Basic Sciences
						</a>
						<a href="/departments/cse/projects" className="block bg-[#00336c] text-white p-4 rounded-md shadow-md text-center hover:bg-[#011c3c] transition">
							Department of Computer Science & Engineering
						</a>
						<a href="/departments/ece/projects" className="block bg-[#00336c] text-white p-4 rounded-md shadow-md text-center hover:bg-[#011c3c] transition">
							Department of Electronics & Communication
						</a>
					</div>
				</section>

				{/* Sponsored Research Labs */}
				<section className="bg-white shadow-lg rounded-lg p-6 border-t-4 border-accent">
					<h2 className="text-2xl font-semibold text-primary mb-4">Sponsored Research Labs & Facilities</h2>
					<p className="text-gray-700 leading-relaxed">
						Industries can sponsor research labs at IIIT Nagpur, supporting research infrastructure and fostering
						industry-academia collaborations.
					</p>
					<div className="grid sm:grid-cols-2 gap-4 mt-4">
						<a href="#" className="block bg-accent text-white p-4 rounded-md shadow-md text-center hover:bg-[#c2651c] transition">
							Nano SciTech Laboratory
						</a>
						<a href="#" className="block bg-accent text-white p-4 rounded-md shadow-md text-center hover:bg-[#c2651c] transition">
							Areas of Expertise
						</a>
					</div>
				</section>
			</main>
		</div>
	);
}

export default Consultancy;
