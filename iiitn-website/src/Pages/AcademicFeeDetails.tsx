import acadfee from '../assets/acadfee.jpg';


const acadFeeData = {
	year: 2024, // Updated to reflect current academic year
	imgSrc: acadfee, // Replace with actual image URL
};

function AcademicFeeDetails() {
	return (
		<div className="bg-gray-50 min-h-screen flex flex-col items-center">
			{/* 🔹 Header Section */}
			<header className="w-full bg-[#002147] text-white py-12 text-center">
				<h1 className="text-3xl font-bold">Academic Fee Details</h1>
				<p className="mt-1 text-gray-200">Complete fee structure for all academic years</p>
			</header>

			{/* 📌 Main Content */}
			<main className="w-full max-w-4xl bg-white shadow-md rounded-lg p-6 mt-8">
				<h2 className="text-xl font-semibold text-gray-800 text-center mb-4">
					Fee Structure for the Academic Year {acadFeeData.year}
				</h2>

				{/* 📜 Fee Structure Image */}
				<div className="flex justify-center">
					<figure className="border rounded-lg overflow-hidden shadow-md w-full max-w-2xl">
						<img
							src={acadFeeData.imgSrc}
							alt="IIIT Nagpur Fee Structure"
							className="w-full h-auto rounded-lg"
						/>
						<figcaption className="text-gray-600 mt-2 text-center text-sm p-2">
							Official Fee Structure of IIIT Nagpur for {acadFeeData.year}
						</figcaption>
					</figure>
				</div>

				{/* 📌 Action Button */}
				<div className="flex justify-center mt-6">
					<a
						href="/pages/academicfeepayment"
						className="bg-[#E87722] text-white px-6 py-3 rounded-md text-center hover:bg-[#d8691d] transition"
					>
						View Payment Details
					</a>
				</div>
			</main>
		</div>
	);
}

export default AcademicFeeDetails;
