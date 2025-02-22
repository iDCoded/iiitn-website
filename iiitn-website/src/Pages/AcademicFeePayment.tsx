import React from "react";

const academicFeeData = {
	accountName: "Indian Institute of Information Technology, Nagpur General",
	accountNumber: "41759739179",
	ifscCode: "SBIN0006702",
	branchName: "VRCE BRANCH",
	qrCodeImg: "#", // Replace with actual QR code image URL
	paymentLink: "#", // Replace with actual payment link

};

function AcademicFeePayment() {
	return (
		<div className="bg-gray-100 min-h-screen flex flex-col">
			{/* Header Section */}
			<header className="bg-[#002147] text-white py-14 text-center">
				<h1 className="text-3xl font-bold">Academic Fee Payment Details</h1>
			</header>

			{/* Main Content */}
			<main className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-8">
				{/* Institute Bank Details */}
				<section className="mb-6">
					<h2 className="text-xl font-semibold text-gray-800 mb-3">Institute Bank Details</h2>
					<div className="bg-gray-100 p-4 rounded-md shadow-sm">
						<p className="text-gray-700"><strong>Name of Account:</strong> {academicFeeData.accountName}</p>
						<p className="text-gray-700"><strong>Account No:</strong> {academicFeeData.accountNumber}</p>
						<p className="text-gray-700"><strong>IFSC Code:</strong> {academicFeeData.ifscCode}</p>
						<p className="text-gray-700"><strong>Branch Name:</strong> {academicFeeData.branchName}</p>
					</div>
				</section>

				{/* Online Payment Link */}
				<section className="mb-6 text-center">
					<a
						href={academicFeeData.paymentLink}
						className="bg-blue-600 text-white px-6 py-2 rounded-md text-lg hover:bg-blue-700 transition"
					>
						Online Payment Link
					</a>
				</section>

				{/* QR Code for Payment */}
				<section className="mb-6">
					<h2 className="text-xl font-semibold text-gray-800 text-center">Institute Academic Fees QR Code</h2>
					<div className="flex justify-center mt-4">
						<img
							src={academicFeeData.qrCodeImg}
							alt="Academic Fee QR Code"
							className="w-48 h-48 border rounded-md shadow-md"
						/>
					</div>
				</section>

				{/* Additional Links */}
				<section className="mt-6 space-y-4 text-center">
					<a
						href="/admissions/btech/acadfees"
						className="block bg-gray-700 text-white px-6 py-2 rounded-md text-lg hover:bg-gray-800 transition"
					>
						First Year Academic Fee Structure
					</a>
					<a
						href="pages/academicfee"
						className="block bg-green-600 text-white px-6 py-2 rounded-md text-lg hover:bg-green-700 transition"
					>
						Complete Academic Fee Structure
					</a>
				</section>
			</main>

			{/* Footer */}
		
		</div>
	);
}

export default AcademicFeePayment;
