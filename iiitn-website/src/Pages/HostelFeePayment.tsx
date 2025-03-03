const hostelFeeData = {
	accountName: "IIIT Nagpur Hostel Account",
	accountNumber: "12345678901",
	ifscCode: "SBIN0006702",
	branchName: "VRCE BRANCH",
	qrCodeImg: "#", // Replace with actual QR code image URL
	paymentLink: "#", // Replace with actual payment link
};

function HostelFeePayment() {
	return (
		<div className="bg-gray-100 min-h-screen flex flex-col">
			{/* Header Section */}
			<header className="bg-primary text-white py-14 text-center">
				<h1 className="text-3xl font-bold">Hostel Fee Payment Details</h1>
			</header>

			{/* Main Content */}
			<main className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-8">
				{/* Institute Bank Details */}
				<section className="mb-6">
					<h2 className="text-xl font-semibold text-gray-800 mb-3">
						Hostel Bank Details
					</h2>
					<div className="bg-gray-100 p-4 rounded-md shadow-sm">
						<p className="text-gray-700">
							<strong>Name of Account:</strong> {hostelFeeData.accountName}
						</p>
						<p className="text-gray-700">
							<strong>Account No:</strong> {hostelFeeData.accountNumber}
						</p>
						<p className="text-gray-700">
							<strong>IFSC Code:</strong> {hostelFeeData.ifscCode}
						</p>
						<p className="text-gray-700">
							<strong>Branch Name:</strong> {hostelFeeData.branchName}
						</p>
					</div>
				</section>

				{/* Online Payment Link */}
				<section className="mb-6 text-center">
					<a
						href={hostelFeeData.paymentLink}
						className="bg-blue-600 text-white px-6 py-2 rounded-md text-lg hover:bg-blue-700 transition">
						Online Payment Link
					</a>
				</section>

				{/* QR Code for Payment */}
				<section className="mb-6">
					<h2 className="text-xl font-semibold text-gray-800 text-center">
						Hostel Fees QR Code
					</h2>
					<div className="flex justify-center mt-4">
						<img
							src={hostelFeeData.qrCodeImg}
							alt="Hostel Fee QR Code"
							className="w-48 h-48 border rounded-md shadow-md"
						/>
					</div>
				</section>

				{/* Additional Links */}
				<section className="mt-6 space-y-4 text-center">
					<a
						href="/admissions/btech/hostelfees"
						className="block bg-gray-700 text-white px-6 py-2 rounded-md text-lg hover:bg-gray-800 transition">
						First Year Hostel Fee Structure
					</a>
					<a
						href="/pages/hostelfee"
						className="block bg-green-600 text-white px-6 py-2 rounded-md text-lg hover:bg-green-700 transition">
						Complete Hostel Fee Structure
					</a>
				</section>
			</main>
		</div>
	);
}

export default HostelFeePayment;
