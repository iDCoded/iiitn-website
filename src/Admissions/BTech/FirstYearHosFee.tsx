import { useEffect, useState } from "react";

function FirstYearHosFee() {
	const [hostelFeeData, setHostelFeeData] = useState({
		year: "2021-22",
		imgSrc: "/images/fee-structure/academic-fee-2021-22",
	});

	useEffect(() => {
		const fetchAcadFeeData = async () => {
			try {
				const response = await fetch(`${process.env.VITE_API_BASE_URL}/media/media/category/fees`);
				const data = await response.json();

				const getAcademicYear = () => {
					const currentDate = new Date();
					const currentYear = currentDate.getFullYear();
					const currentMonth = currentDate.getMonth() + 1;

					if (currentMonth < 7) {
						return `${currentYear - 1}-${currentYear}`;
					} else {
						return `${currentYear}-${currentYear + 1}`;
					}
				};

				const academicYear = getAcademicYear();
				const acadFeeData = data.find((item: any) => {
					item.title.includes(academicYear) && item.m_sub_category === "first year hostel fee";
				});

				if (acadFeeData) {
					setHostelFeeData({
						year: acadFeeData.year,
						imgSrc: acadFeeData.media_img_id,
					});
				}
			} catch (error) {
				console.error("Error fetching academic fee data:", error);
			}
		};

		fetchAcadFeeData();
	}, []);


	return (
		<div className="bg-gray-100 min-h-screen flex flex-col">
			{/* Header Section */}
			<header className="bg-primary text-white py-14 text-center">
				<h1 className="text-3xl font-bold">First Year Hostel Fees</h1>
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
							Official Hostel Fee Structure of IIIT Nagpur for{" "}
							{hostelFeeData.year}
						</figcaption>
					</figure>
				</div>

				{/* Action Buttons */}
				<div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center">
					<a
						href="/pages/hostelfee"
						className="bg-blue-600 text-white px-5 py-2 rounded-md text-center hover:bg-blue-700 transition">
						View Complete Hostel Fee Structure
					</a>
					<a
						href="/pages/hostelfeepayment"
						className="bg-green-600 text-white px-5 py-2 rounded-md text-center hover:bg-green-700 transition">
						Hostel Fee Payment Details
					</a>
				</div>
			</main>
		</div>
	);
}

export default FirstYearHosFee;
