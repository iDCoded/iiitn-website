import React from "react";
import { FaCalendarAlt, FaEnvelope, FaPhoneAlt, FaInfoCircle } from "react-icons/fa";

function ClinicalCounselling() {
	return (
		<div className="bg-gray-50 min-h-screen flex flex-col">
			{/* 🔹 Header Section */}
			<header className="bg-primary text-white py-12 px-6 shadow-md text-left md:text-center">
				<h1 className="text-3xl md:text-4xl font-bold">Clinical Counselling</h1>
				<p className="mt-2 text-gray-200 text-lg">Supporting student well-being at IIIT Nagpur</p>
			</header>

			{/* 📌 Main Content */}
			<main className="w-full max-w-4xl mx-auto px-4 md:px-8 py-12 bg-white shadow-lg rounded-lg">
				{/* 📅 Availability Section */}
				<section className="mb-8">
					<h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
						<FaCalendarAlt className="text-primary" /> Availability
					</h2>
					<p className="text-gray-700">
						The institute's <b>Clinical Counselor</b> will be available <b>in-person</b> at the institute as follows:
					</p>
					<ul className="list-disc pl-6 mt-3 text-gray-700 space-y-2">
						<li>
							<strong>📅 Days:</strong> Tuesday, Wednesday & Thursday
						</li>
						<li>
							<strong>⏰ Timing:</strong> 4:30 PM - 6:30 PM (with prior appointment)
						</li>
					</ul>
				</section>

				{/* ☎️ Contact Section */}
				<section className="mb-8">
					<h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
						<FaPhoneAlt className="text-primary" /> Contact Information
					</h2>
					<p className="text-gray-700">If you need mental health support, the counselor can be reached through the following:</p>
					<ul className="list-none mt-3 text-gray-700 space-y-3">
						<li className="flex items-center gap-2">
							<FaEnvelope className="text-primary" />
							Email:
							<a href="mailto:counselor@iiitn.ac.in" className="text-primary font-semibold hover:underline">
								counselor@iiitn.ac.in
							</a>
						</li>
						<li className="flex items-center gap-2">
							<FaPhoneAlt className="text-primary" />
							Phone:
							<a href="tel:+919970303386" className="text-primary font-semibold hover:underline">
								+91 9970303386
							</a>
							(Only for clinical counselling)
						</li>
					</ul>
				</section>

				{/* ⚠️ Important Note */}
				<section className="p-4 bg-orange-50 border-l-4 border-accent rounded-lg">
					<h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
						<FaInfoCircle className="text-accent" /> Important Notice
					</h2>
					<p className="text-gray-700 mt-2">
						📢 <strong>This contact number is strictly for clinical counselling purposes.</strong>
						<br />
						🚫 <strong>For admission-related queries, please visit the Admission Tab on the homepage.</strong>
					</p>
				</section>
			</main>
		</div>
	);
}

export default ClinicalCounselling;
