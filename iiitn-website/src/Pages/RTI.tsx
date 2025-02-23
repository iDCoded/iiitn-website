import React from "react";

const rtiData = 
    {
        imageSrc: "#",
    rtiEng: "#",
    rtiHindi: "#",
    rtiMarathi: "#",
    rtiGuide: "#",
    }



function RTI() {
	return (
		<div className="bg-gray-100 min-h-screen flex flex-col">
			{/* Header Section */}
			<header className="bg-[#002147] text-white py-16 text-center">
				<h1 className="text-4xl font-bold">Right To Information (RTI)</h1>
				<p className="text-lg mt-2">Ensuring transparency and accountability in IIIT Nagpur.</p>
			</header>

			{/* Main Content with Two-Column Layout */}
			<main className="max-w-6xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg flex flex-col lg:flex-row items-center lg:items-start">
				{/* Left Side - Text Content */}
				<div className="lg:w-2/3 w-full p-6">
					{/* Introduction */}
					<section className="mb-8">
						<h2 className="text-2xl font-semibold text-gray-800 mb-4">What is RTI?</h2>
						<p className="text-gray-700 leading-relaxed">
							The <strong>Right to Information (RTI) Act</strong> is an Act of the Indian Parliament enforced in 2005,
							providing citizens with access to information under the control of public authorities. This promotes
							transparency and accountability in governance. <strong>IIIT Nagpur</strong>, as an Autonomous Government Body, falls under this act.
						</p>
					</section>

					{/* RTI Documents Section */}
					<section className="mb-8">
						<h2 className="text-2xl font-semibold text-gray-800 mb-4">RTI Act Documents</h2>
						<div className="grid md:grid-cols-2 gap-4">
							<a href={rtiData.rtiEng} className="block bg-[#002147] text-white text-center py-3 rounded-md hover:bg-[#001730] transition">
								RTI Act, 2005 (English) 📄
							</a>
							<a href={rtiData.rtiHindi} className="block bg-[#002147] text-white text-center py-3 rounded-md hover:bg-[#001730] transition">
								RTI Act, 2005 (Hindi) 📄
							</a>
							<a href={rtiData.rtiMarathi} className="block bg-[#002147] text-white text-center py-3 rounded-md hover:bg-[#001730] transition">
								RTI Act, 2005 (Marathi) 📄
							</a>
							<a href={rtiData.rtiGuide} className="block bg-[#002147] text-white text-center py-3 rounded-md hover:bg-[#001730] transition">
								Guide to RTI Act (English) 📖
							</a>
						</div>
					</section>

					{/* Purpose of the RTI Act */}
					<section className="mb-8">
						<h2 className="text-2xl font-semibold text-gray-800 mb-4">Purpose of the Act</h2>
						<p className="text-gray-700 leading-relaxed">
							The RTI Act provides a framework to ensure citizens have the right to access information from public
							authorities, thereby promoting transparency and accountability.
						</p>
					</section>

					{/* Definition of RTI */}
					<section>
						<h2 className="text-2xl font-semibold text-gray-800 mb-4">Definition of the RTI Act</h2>
						<p className="text-gray-700 leading-relaxed">
							<b>Right To Information</b> means the right to information accessible under this Act which is held by or under the control of any public authority and includes:
						</p>
						<ul className="list-disc pl-6 mt-3 text-gray-700 space-y-2">
							<li>📌 Inspection of work, documents, records</li>
							<li>📌 Taking notes, extracts, or certified copies of documents or records</li>
							<li>📌 Taking certified samples of material</li>
							<li>📌 Obtaining information in electronic or printed format</li>
						</ul>
					</section>
				</div>

				{/* Right Side - Image Placeholder */}
				<div className="lg:w-1/3 w-full p-6 flex justify-center">
					<img 
						src={rtiData.imageSrc}
						alt="RTI Illustration" 
						className="rounded-lg shadow-lg w-full"
					/>
				</div>
			</main>
		</div>
	);
}

export default RTI;
