import {
	FaClock,
	FaUtensils,
	FaClipboardList,
	FaCommentDots,
	FaInfoCircle,
} from "react-icons/fa";
import { useState,useEffect } from "react";

const defmessMenuLink = "#";

function Mess() {
  const [messMenuLink, setMessMenuLink] = useState(defmessMenuLink);
  const [loading, setLoading] = useState(true); // ✅ Initialize loading state

  useEffect(() => {
    const fetchMessMenuLink = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/media/media/category/mess`);
        if (!res.ok) throw new Error("Failed to fetch mess menu link");
        
        const data = await res.json();
        setMessMenuLink(data[0].file_url);
      } catch (error) {
        console.error("Error fetching mess menu link:", error);
      } finally {
        setLoading(false); // ✅ Ensure loading is false after fetching
      }
    };

    fetchMessMenuLink();
  }, []); // ✅ Empty dependency array ensures it runs only once

  if (loading) {
	return <div className="text-center py-10">Loading...</div>;
}

	return (
		<div className="bg-gray-100 min-h-screen flex flex-col">
			{/* Header Section */}
			<header className="bg-primary text-white py-16 text-center">
				<h1 className="text-4xl font-bold">IIIT Nagpur Mess</h1>
				<p className="text-lg mt-2">
					Healthy & hygienic meals for a better campus life.
				</p>
			</header>

			{/* Main Content */}
			<main className="max-w-5xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
				{/* Mess Timings */}
				<section className="mb-8">
					<h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
						<FaClock className="text-primary" /> Mess Timings
					</h2>
					<table className="w-full border-collapse border border-gray-300 text-gray-700">
						<thead>
							<tr className="bg-primary text-white">
								<th className="p-3 border border-gray-300">Meal</th>
								<th className="p-3 border border-gray-300">Timings</th>
							</tr>
						</thead>
						<tbody>
							<tr className="text-center">
								<td className="p-3 border border-gray-300">Breakfast</td>
								<td className="p-3 border border-gray-300">
									7:30 AM - 9:00 AM
								</td>
							</tr>
							<tr className="text-center bg-gray-50">
								<td className="p-3 border border-gray-300">Lunch</td>
								<td className="p-3 border border-gray-300">
									12:30 PM - 2:00 PM
								</td>
							</tr>
							<tr className="text-center">
								<td className="p-3 border border-gray-300">Snacks</td>
								<td className="p-3 border border-gray-300">
									4:30 PM - 5:30 PM
								</td>
							</tr>
							<tr className="text-center bg-gray-50">
								<td className="p-3 border border-gray-300">Dinner</td>
								<td className="p-3 border border-gray-300">
									7:30 PM - 9:00 PM
								</td>
							</tr>
						</tbody>
					</table>
				</section>

				{/* Mess Menu Section */}
				<section className="mb-8">
					<h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
						<FaUtensils className="text-primary" /> Weekly Menu
					</h2>
					<p className="text-gray-700">
						Check out the delicious and nutritious meals served in the mess:
					</p>
					<a
						href={messMenuLink}
						className="block mt-3 text-white text-center bg-primary py-3 rounded-md hover:bg-[#001730] transition">
						📄 View Mess Menu
					</a>
				</section>

				{/* Mess Rules Section */}
				<section className="mb-8">
					<h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
						<FaClipboardList className="text-primary" /> Mess Rules & Guidelines
					</h2>
					<ul className="list-disc pl-6 text-gray-700 space-y-2">
						<li>
							Students must carry their <b>ID Cards</b> to enter the mess.
						</li>
						<li>Wasting food is discouraged. Take only what you can eat.</li>
						<li>Mess utensils should not be taken outside the mess hall.</li>
						<li>Maintain cleanliness and proper etiquette while dining.</li>
						<li>
							Inform the mess authorities in advance for{" "}
							<b>special dietary requirements</b>.
						</li>
					</ul>
				</section>

				{/* Feedback Section */}
				<section>
					<h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
						<FaCommentDots className="text-primary" /> Student Feedback
					</h2>
					<p className="text-gray-700">
						Your feedback helps us improve the mess experience. Share your
						suggestions:
					</p>
					<a
						href="#"
						className="block mt-3 text-white text-center bg-primary py-3 rounded-md hover:bg-[#001730] transition">
						✍️ Give Feedback
					</a>
				</section>

				{/* Important Note */}
				<section className="p-4 bg-yellow-100 border-l-4 border-yellow-500 rounded-lg mt-6">
					<h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
						<FaInfoCircle className="text-yellow-600" /> Important Notice
					</h2>
					<p className="text-gray-700 mt-2">
						📢 <b>Timings must be strictly followed to avoid inconvenience.</b><br></br> 🚫
						<b>Unauthorized persons are not allowed inside the mess.</b>
					</p>
				</section>
			</main>
		</div>
	);
}

export default Mess;
