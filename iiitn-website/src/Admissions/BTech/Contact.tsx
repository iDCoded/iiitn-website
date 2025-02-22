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
		<div className="bg-gray-100 min-h-screen flex flex-col">
			{/* Header Section */}
			<header className="bg-[#002147] text-white py-14 text-center">
				<h1 className="text-3xl font-bold">Admission Committee Members</h1>
			</header>

			{/* Contact Table */}
			<main className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-8">
				<h2 className="text-xl font-semibold text-gray-800 mb-4">Committee Members Contact Details:</h2>
				<table className="w-full border border-gray-300 text-gray-700">
					<thead className="bg-gray-200">
						<tr>
							<th className="p-3 border text-left">Role</th>
							<th className="p-3 border text-left">Name</th>
							<th className="p-3 border text-left">Contact</th>
						</tr>
					</thead>
					<tbody>
						{contactData.map(([role, name, phone], index) => (
							<tr key={index} className="border">
								<td className="p-3">{role}</td>
								<td className="p-3">{name}</td>
								<td className="p-3 flex items-center space-x-2">
									<FaPhoneAlt className="text-blue-600" />
									<a href={`tel:${phone}`} className="text-blue-600 hover:underline">
										{phone}
									</a>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</main>

			
		</div>
	);
}

export default Contact;
