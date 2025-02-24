import React from "react";
import rti from "../assets/rti.png";

const rtiData = {
	imageSrc: rti,
	rtiEng: "#",
	rtiHindi: "#",
	rtiMarathi: "#",
	rtiGuide: "#",
};

function RTI() {
	return (
		<div className="bg-gray-100 min-h-screen flex flex-col">
			{/* Header Section */}
			<header className="bg-[#002147] text-white py-16 text-center">
				<h1 className="text-5xl font-bold">Right To Information (RTI)</h1>
				<p className="text-lg mt-2 italic">
					"Ensuring transparency and accountability in IIIT Nagpur."
				</p>
			</header>

			{/* Main Content Section */}
			<main className="max-w-6xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg flex flex-col lg:flex-row">
				{/* Left Side - Text Content */}
				<div className="lg:w-2/3 w-full p-6">
					{/* Introduction */}
					<section className="mb-8">
						<h2 className="text-3xl font-semibold text-[#002147]">
							<span className="text-[#E87722] text-4xl">| </span> What is RTI?
						</h2>
						<p className="text-gray-700 mt-3 leading-relaxed">
							The <strong>Right to Information (RTI) Act</strong> is a law enacted by the Indian Parliament in 2005, providing
							citizens the right to access information from public authorities. As an Autonomous Government Body,{" "}
							<strong>IIIT Nagpur</strong> falls under this act.
						</p>
					</section>

					{/* RTI Documents */}
					<section className="mb-8">
						<h2 className="text-3xl font-semibold text-[#002147]">
							<span className="text-[#E87722] text-4xl">| </span> RTI Act Documents
						</h2>
						<div className="grid md:grid-cols-2 gap-4 mt-4">
							<a
								href={rtiData.rtiEng}
								className="block bg-[#002147] text-white text-center py-3 rounded-md hover:bg-[#001730] transition"
							>
								📄 RTI Act, 2005 (English)
							</a>
							<a
								href={rtiData.rtiHindi}
								className="block bg-[#002147] text-white text-center py-3 rounded-md hover:bg-[#001730] transition"
							>
								📄 RTI Act, 2005 (Hindi)
							</a>
							<a
								href={rtiData.rtiMarathi}
								className="block bg-[#002147] text-white text-center py-3 rounded-md hover:bg-[#001730] transition"
							>
								📄 RTI Act, 2005 (Marathi)
							</a>
							<a
								href={rtiData.rtiGuide}
								className="block bg-[#002147] text-white text-center py-3 rounded-md hover:bg-[#001730] transition"
							>
								📖 Guide to RTI Act (English)
							</a>
						</div>
					</section>

					{/* Definition of RTI */}
					<section>
						<h2 className="text-3xl font-semibold text-[#002147]">
							<span className="text-[#E87722] text-4xl">| </span> Definition of RTI
						</h2>
						<p className="text-gray-700 mt-3 leading-relaxed">
							The <b>Right To Information</b> means the right to access information held by any public authority, which includes:
						</p>
						<ul className="list-disc pl-6 mt-3 text-gray-700 space-y-2">
							<li>📌 Inspection of work, documents, and records</li>
							<li>📌 Obtaining certified copies of records</li>
							<li>📌 Taking samples of materials</li>
							<li>📌 Receiving information in electronic or print format</li>
						</ul>
					</section>
				</div>

				{/* Right Side - Image */}
				<div className="lg:w-2/3 w-full p-6 flex justify-center">
					<img src={rtiData.imageSrc} alt="RTI Illustration" className="rounded-lg shadow-lg w-full" />
				</div>
			</main>
		</div>
	);
}

export default RTI;
