import { FaUniversity } from "react-icons/fa";
import { AiOutlineLink } from "react-icons/ai";

const academicFeeData = {
	accountName: "Indian Institute of Information Technology, Nagpur General",
	accountNumber: "41759739179",
	ifscCode: "SBIN0006702",
	branchName: "VRCE BRANCH",
	qrCodeImg: "#", // Replace with actual QR code image URL
	paymentLink: "https://www.onlinesbi.sbi/sbicollect/icollecthome.htm", // Replace with actual payment link
};

function AcademicFeePayment() {
	return (
		<div className="bg-gray-50 min-h-screen flex flex-col items-center">
			{/* 🔹 Header Section */}
			<header className="w-full bg-primary text-white py-12 text-center shadow-md">
				<h1 className="text-3xl md:text-4xl font-bold tracking-wide">Academic Fee Payment</h1>
				<p className="mt-1 text-gray-200 text-lg">Secure and easy online payment options</p>
			</header>

			{/* 📌 Main Content */}
			<main className="w-full max-w-4xl bg-white shadow-lg rounded-xl p-6 md:p-10 mt-8">
				{/* 🏦 Institute Bank Details */}
				<section className="mb-10">
					<h2 className="text-2xl font-semibold text-gray-800 flex items-center gap-2 mb-6">
						<FaUniversity className="text-accent" /> Institute Bank Details
					</h2>
					<div className="bg-gray-100 p-6 rounded-lg shadow-sm grid grid-cols-1 md:grid-cols-2 gap-6">
						<p className="text-gray-700"><strong>Name of Account:</strong> {academicFeeData.accountName}</p>
						<p className="text-gray-700"><strong>Account No:</strong> {academicFeeData.accountNumber}</p>
						<p className="text-gray-700"><strong>IFSC Code:</strong> {academicFeeData.ifscCode}</p>
						<p className="text-gray-700"><strong>Branch Name:</strong> {academicFeeData.branchName}</p>
					</div>
				</section>

				{/* 🔗 Online Payment Button */}
				<section className="mb-10 text-center">
					<a
						href={academicFeeData.paymentLink}
						className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-[#d8691d] transition duration-300 shadow-md"
					>
						<AiOutlineLink className="text-xl" /> Pay Online
					</a>
				</section>

				{/* 📜 QR Code Section */}
				<section className="mb-10 text-center">
					<h2 className="text-2xl font-semibold text-gray-800 mb-4">Scan to Pay</h2>
					<div className="flex justify-center">
						<figure className="border rounded-lg overflow-hidden shadow-md bg-gray-200 p-4 w-full max-w-xs">
							<img
								src={academicFeeData.qrCodeImg}
								alt="Academic Fee QR Code"
								className="w-full h-auto rounded-lg"
							/>
							<figcaption className="text-gray-600 mt-2 text-center text-sm p-2">
								Scan the QR Code to make the payment
							</figcaption>
						</figure>
					</div>
				</section>

				{/* 📌 Additional Links */}
				<section className="mt-10 space-y-4 text-center">
					<a
						href="/admissions/btech/acadfees"
						className="block bg-primary text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-[#001a35] transition duration-300 shadow-md"
					>
						First Year Academic Fee Structure
					</a>
					<a
						href="pages/academicfee"
						className="block bg-green-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition duration-300 shadow-md"
					>
						Complete Academic Fee Structure
					</a>
				</section>
			</main>
		</div>
	);
}

export default AcademicFeePayment;
