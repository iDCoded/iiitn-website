import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import MarkdownPreview from "@uiw/react-markdown-preview";

const newsData = [
	{
		id: "news",
		category: "News",
		image:
			"https://static.toiimg.com/thumb/msid-117532524,imgsize-38444,width-400,height-225,resizemode-72/117532524.jpg",
		title:
			"Duo from IIIT Nagpur invited as special guests for Republic Day parade",
		description:
			"IIIT Nagpur has signed an MoU with the Maharashtra government to promote AI and ML in the state.",
	},
	{
		id: "updates-1",
		category: "Updates",
		image:
			"https://imgs.search.brave.com/WE_FzZkUn2nRyWQI6BE3eBdqnhN49qmN4f_7EdEcY4s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9paWl0/bi5hYy5pbi9pbWFn/ZXMvTmV3c0V2ZW50/cy83ODUvTmV3c0lt/YWdlLkpQRw",
		title: "2nd Convocation Ceremony",
		description:
			"IIIT Nagpur recently held its 2nd convocation ceremony with students receiving their degrees and awards.",
	},
	{
		id: "news-2",
		category: "News",
		image:
			"https://imgs.search.brave.com/MWacu6ain-mbYnq57K9WQV5xJ2T422cSdSePqObriBs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9paWl0/bi5hYy5pbi9pbWFn/ZXMvU2xpZGVyLzIz/MC9TbGlkZXItMjMw/LmpwZw",
		title: "Training on Public Procurement",
		description:
			"Training on Public Procurement during Vigilance Awareness Week at IIIT Nagpur.",
	},
	{
		id: "updates-2",
		category: "Updates",
		image:
			"https://iiitn.ac.in/images/album/republic-day-2025//ThumbnailImage.jpg",
		title: "76th Republic Day Celebration",
		description:
			"IIIT Nagpur celebrated the 76th Republic Day with patriotic fervor and enthusiasm.",
	},
];

function DetailedNews() {
	const { newsId } = useParams();
	const navigate = useNavigate();
	const [news, setNews] = useState<{
		id: string;
		title: string;
		image: string;
		content: string;
	} | null>(null);

	useEffect(() => {
		const fetchNews = async () => {
			try {
				const response = await fetch(
					`${import.meta.env.VITE_API_BASE_URL}/card/cards/${newsId}`
				);
				if (!response.ok) {
					throw new Error("Event not found");
				}
				const data = await response.json();
				setNews({
					id: data.c_id,
					title: data.title,
					image: data.media_img_path,
					content: data.content,
				});
				console.log(data);

				let imageUrl = "";

				// If media_img_path exists, try fetching the image
				if (data.media_img_path) {
					try {
						const imgReq = await fetch(
							`${import.meta.env.VITE_API_BASE_URL}/media/${
								data.media_img_path
							}`
						);
						if (!imgReq.ok) throw new Error("Failed to fetch image");
						const imgRes = await imgReq.json();

						imageUrl = imgRes.url;
						console.log(imageUrl);

						// Check if the response is an image (blob) or JSON
						// // const contentType = imgReq.headers.get("content-type");
						// // if (contentType && contentType.startsWith("image")) {
						// // 	imageUrl = URL.createObjectURL(await imgReq.blob());
						// // } else {
						// // 	const imgRes = await imgReq.json();
						// // 	if (imgRes.url) {
						// // 		imageUrl = imgRes.url;
						// // 	}
						// // }
					} catch (err) {
						console.error(`Error fetching image for news ${newsId}:`, err);
					}
				}

				setNews({
					id: data.c_id,
					title: data.title,
					image: imageUrl || "/placeholder.svg",
					content: data.content,
				});
			} catch (error) {
				// console.error("Error fetching event:", error);
				const foundEvent = newsData.find((e) => e.id === newsId);
				if (foundEvent) {
					setNews({
						id: foundEvent.id,
						title: foundEvent.title,
						image: foundEvent.image,
						content: foundEvent.description,
					});
				} else {
					setNews(null);
				}
			}
		};

		fetchNews();
	}, [newsId]);

	if (!news) {
		return (
			<div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
				<p className="text-2xl text-red-500 font-semibold">News not found</p>
				<button
					onClick={() => navigate("/")}
					className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition duration-300">
					Back to News
				</button>
			</div>
		);
	}

	return (
		<div className="bg-gray-100 min-h-screen">
			{/* Header Section */}
			<header className="bg-primary text-white py-16 text-center">
				<h1 className="text-5xl font-bold">Detailed News</h1>
				<p className="text-lg mt-2 italic">
					"Celebrating Excellence & Inspiring the Future"
				</p>
			</header>

			{/* News Content Section */}
			<div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6 mt-10">
				{/* News Image */}
				<img
					src={news.image}
					alt={news.title}
					className="w-full h-80 object-cover rounded-lg mb-6"
				/>

				{/* News Title */}
				<h2 className="text-3xl font-bold text-primary mb-4">{news.title}</h2>

				{/* News Content */}
				<div className="leading-relaxed whitespace-pre-line">
					<MarkdownPreview
						source={news.content}
						wrapperElement={{ "data-color-mode": "light" }}
						style={{ padding: 16 }}
					/>
				</div>

				{/* Back Button */}
				<button
					onClick={() => navigate(-1)}
					className="mt-6 px-6 py-2 bg-primary text-white rounded-md shadow-md hover:bg-[#001530] transition duration-300">
					← Back
				</button>
			</div>
		</div>
	);
}

export default DetailedNews;
