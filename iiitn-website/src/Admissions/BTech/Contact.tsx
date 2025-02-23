import React from "react";
import { FaPhoneAlt } from "react-icons/fa";

const contactData = [
	["Admission In-Charge", "Dr. Paritosh Peshwe", "9975104323"],
	["Admission Co-In-Charge", "Dr. Nikhil Agrawal", "9406769734"],
	["Hostel Warden (Boys)", "Dr. Harsh Goud", "9827554326"],
	["Hostel Warden (Girls)", "Dr. Sushmita Dandeliya", "9082333050"],
	["Administrative Enquiry", "Mr. Rajan Parulkar", "8554993496"],
	["Administrative Enquiry", "Mr. Harshad Pophali", "9373288110"],
	["Scholarship Enquiry", "Ms. Harsha Nagpure", "9096927754"],
	["Account Enquiry", "Ms. Shilpa Pawankar", "8080339345"],
	["Placement Enquiry", "Ms. Meera Jagdale", "9764490050"],
];

function Contact() {
	return (
		<div className="bg-gray-50 min-h-screen flex flex-col items-center">
			{/* 🔷 Header */}
			<header className="w-full bg-[#002147] text-white py-12 text-center">
				<h1 className="text-3xl font-bold">Admission Committee</h1>
				<p className="mt-1 text-gray-200">Contact details of key members</p>
			</header>

			{/* 📌 Contact Table */}
			<main className="w-full max-w-4xl bg-white shadow-md rounded-lg p-6 mt-8">
				<h2 className="text-xl font-semibold text-gray-800 mb-4">Committee Members</h2>
				
				<div className="overflow-x-auto">
					<table className="w-full border border-gray-200 rounded-lg overflow-hidden">
						<thead className="bg-gray-100 text-gray-700 text-sm uppercase">
							<tr>
								<th className="p-3 text-left">Role</th>
								<th className="p-3 text-left">Name</th>
								<th className="p-3 text-left">Contact</th>
							</tr>
						</thead>
						<tbody className="divide-y divide-gray-200">
							{contactData.map(([role, name, phone], index) => (
								<tr key={index} className="hover:bg-gray-50">
									<td className="p-3 text-gray-800">{role}</td>
									<td className="p-3 text-gray-800">{name}</td>
									<td className="p-3 flex items-center space-x-2">
										<FaPhoneAlt className="text-[#E87722]" />
										<a
											href={`tel:${phone}`}
											className="text-[#E87722] hover:underline transition duration-200"
										>
											{phone}
										</a>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</main>
		</div>
	);
}

export default Contact;
