
import acadfee from '../assets/acadfee.jpg';
import { useState,useEffect } from 'react';

const deacadFeeData = {
	year: 2024, 
	imgSrc: acadfee, 
};

function AcademicFeeDetails() {
	const [acadFeeData, setAcadFeeData] = useState<{ year: any; imgSrc: any }>({ year: '', imgSrc: '' });
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		const fetchAcadFee = async () => {
		  try {
			const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/media/media/category/fee`);
			if (!res.ok) throw new Error("Failed to fetch academic fee data");
	  
			const data = await res.json();
	  
			// ✅ Filter data where m_sub_category is "acad_fee"
			const acadFeeItem = data.find((item: any) => item.m_sub_category === "acad_fee");
	  
			if (acadFeeItem) {
			  const acadFeeData = {
				year: acadFeeItem.title,
				imgSrc: acadFeeItem.media_img_id, 
			  };
	  
			  setAcadFeeData(acadFeeData);
			} else {
			  console.warn("No academic fee data found.");
			}
		  } catch (err) {
			console.error("Error fetching academic fee data:", err);
			setAcadFeeData(deacadFeeData);
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
		<div className="bg-gray-50 min-h-screen flex flex-col items-center">
			{/* 🔹 Header Section */}
			<header className="w-full bg-primary text-white py-12 text-center">
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
						className="bg-accent text-white px-6 py-3 rounded-md text-center hover:bg-[#d8691d] transition"
					>
						View Payment Details
					</a>
				</div>
			</main>
		</div>
	);
}

export default AcademicFeeDetails;
