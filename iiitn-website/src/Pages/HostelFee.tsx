import React from 'react'

// Data
const hostelFeeData = {
	year: 2022,
	imgSrc: '#',
}

function HostelFee() {
	return (
		<div className="bg-gray-100 min-h-screen flex flex-col">
			{/* Header Section */}
			<header className="bg-primary text-white py-14 text-center">
				<h1 className="text-3xl font-bold">Hostel Fees</h1>
			</header>

			{/* Main Content */}
			<main className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-8">
				<h2 className="text-xl font-semibold text-gray-800 text-center mb-4">
					Hostel Fee Structure for the Year {hostelFeeData.year}
				</h2>

				{/* Fee Structure Image */}
				<div className="flex justify-center">
					<figure className="border rounded-lg overflow-hidden shadow-md">
						<img
							src={hostelFeeData.imgSrc}
							alt="Hostel Fee Structure"
							className="w-full h-auto"
						/>
						<figcaption className="text-gray-600 mt-2 text-center text-sm p-2">
							Official Hostel Fee Structure of IIIT Nagpur for {hostelFeeData.year}
						</figcaption>
					</figure>
				</div>

				{/* Action Buttons */}
				<div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center">

					<a
						href="/pages/hostelfeepayment"

						className="bg-green-600 text-white px-5 py-2 rounded-md text-center hover:bg-green-700 transition"
					>
						Hostel Fee Payment Details
					</a>
				</div>
			</main>


		</div>
	)
}

export default HostelFee