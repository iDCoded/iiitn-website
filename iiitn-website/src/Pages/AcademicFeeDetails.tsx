import React from 'react'

const acadFeeData = {
  year: 2021,
  imgSrc: '#',
};

function AcademicFeeDetails() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
			{/* Header Section */}
			<header className="bg-[#002147] text-white py-14 text-center">
				<h1 className="text-3xl font-bold">First Year Academic Fees</h1>
			</header>

			{/* Main Content */}
			<main className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-8">
				<h2 className="text-xl font-semibold text-gray-800 text-center mb-4">
					Academic Fee Structure for the Year {acadFeeData.year}
				</h2>

				{/* Fee Structure Image */}
				<div className="flex justify-center">
					<figure className="border rounded-lg overflow-hidden shadow-md">
						<img
							src={acadFeeData.imgSrc}
							alt="Academic Fee Structure"
							className="w-full h-auto"
						/>
						<figcaption className="text-gray-600 mt-2 text-center text-sm p-2">
							Official Fee Structure of IIIT Nagpur for {acadFeeData.year}
						</figcaption>
					</figure>
				</div>

				{/* Action Buttons */}
				<div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center">
					
					<a
						href='/pages/academicfeepayment'
					
						className="bg-green-600 text-white px-5 py-2 rounded-md text-center hover:bg-blue-700 transition"
					>
						Academic Fee Payment Details
					</a>
				</div>
			</main>

			
		</div>
  )
}

export default AcademicFeeDetails