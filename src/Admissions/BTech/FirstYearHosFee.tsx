import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const defhostelFeeData = {
	year: 2022,
	imgSrc: "#",
};

function FirstYearHosFee() {

	const [hostelFeeData, setHostelFeeData] = useState<{ year: any; imgSrc: any }>({ year: '', imgSrc: '' });
	const [loading, setLoading] = useState(true);

	const navigate = useNavigate();

	useEffect(() => {
		const fetchAcadFee = async () => {
			try {
				const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/media/media/category/fee`);
				if (!res.ok) throw new Error("Failed to fetch academic fee data");

				const data = await res.json();

				// ✅ Filter data where m_sub_category is "acad_fee"
				const hostelFeeItem = data.find((item: any) => item.m_sub_category === "first_hostel_fee");

				if (hostelFeeItem) {
					const HostelFeeData = {
						year: hostelFeeItem.title,
						imgSrc: hostelFeeItem.media_img_id,
					};

					setHostelFeeData(HostelFeeData);
				} else {
					console.warn("No academic fee data found.");
				}
			} catch (err) {
				console.error("Error fetching academic fee data:", err);
				setHostelFeeData(defhostelFeeData);
			} finally {
				setLoading(false);
			}
		};

		fetchAcadFee();
	}, []); // ✅ Runs only once on mount


	if (loading) {
		return (
			<div className="min-h-screen flex items-center justify-center">
				<div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary"></div>
			</div>
		);
	}
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
					<p
						onClick={() => navigate("/pages/hostelfeestructure")}
						className="bg-blue-600 text-white px-5 py-2 rounded-md text-center hover:bg-blue-700 transition">
						View Complete Hostel Fee Structure
					</p>
					<p
						onClick={() => navigate("/pages/hostelfeepayment")}
						className="bg-green-600 text-white px-5 py-2 rounded-md text-center hover:bg-green-700 transition">
						Hostel Fee Payment Details
					</p>
				</div>
			</main>
		</div>
	);
}

export default FirstYearHosFee;
