import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import ShimmerLoader from "../components/ShimmerLoader.tsx"; // Adjust the path as necessary

interface NewsItem {
	c_id: string;
	c_category: string;
	caption: string;
	title: string;
	image?: string;
	description?: string;
	date?: string;
}

const dataDemo = [
	{
		c_id: "1",
		c_category: "news",
		image: "/default-news.jpg",
		title: "News Title",
		caption: "News Caption",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti impedit nostrum sapiente consequuntur corporis, maxime et eligendi molestiae itaque. Aspernatur ex quo saepe? Laborum provident asperiores error quia deleniti temporibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ad nihil doloremque cumque facilis nulla, quis cum! Vitae illum deleniti officiis cumque, voluptate accusamus. Autem, non ipsum sapiente laudantium blanditiis doloribus molestiae commodi rem eos minus adipisci placeat? Perferendis modi magnam nisi quidem ipsum fugiat architecto nesciunt, ullam commodi placeat facere, illum obcaecati repellat neque corporis laborum quaerat optio? Molestias porro dolorem soluta labore voluptatum suscipit numquam ab asperiores, architecto possimus ipsam sequi dolores earum distinctio iusto commodi omnis obcaecati amet repudiandae rerum est consequuntur. Itaque cupiditate ex repudiandae nisi incidunt quisquam eius similique dolorem, vero porro sequi nesciunt non!",
	},
	{
		c_id: "2",
		c_category: "news",
		image: "/default-news.jpg",
		title: "News Title",
		caption: "News Caption",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti impedit nostrum sapiente consequuntur corporis, maxime et eligendi molestiae itaque. Aspernatur ex quo saepe? Laborum provident asperiores error quia deleniti temporibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ad nihil doloremque cumque facilis nulla, quis cum! Vitae illum deleniti officiis cumque, voluptate accusamus. Autem, non ipsum sapiente laudantium blanditiis doloribus molestiae commodi rem eos minus adipisci placeat? Perferendis modi magnam nisi quidem ipsum fugiat architecto nesciunt, ullam commodi placeat facere, illum obcaecati repellat neque corporis laborum quaerat optio? Molestias porro dolorem soluta labore voluptatum suscipit numquam ab asperiores, architecto possimus ipsam sequi dolores earum distinctio iusto commodi omnis obcaecati amet repudiandae rerum est consequuntur. Itaque cupiditate ex repudiandae nisi incidunt quisquam eius similique dolorem, vero porro sequi nesciunt non!"
	},
	{
		c_id: "3",
		c_category: "news",
		image: "/default-news.jpg",
		title: "News Title",
		caption: "News Caption",
		description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti impedit nostrum sapiente consequuntur corporis, maxime et eligendi molestiae itaque. Aspernatur ex quo saepe? Laborum provident asperiores error quia deleniti temporibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium ad nihil doloremque cumque facilis nulla, quis cum! Vitae illum deleniti officiis cumque, voluptate accusamus. Autem, non ipsum sapiente laudantium blanditiis doloribus molestiae commodi rem eos minus adipisci placeat? Perferendis modi magnam nisi quidem ipsum fugiat architecto nesciunt, ullam commodi placeat facere, illum obcaecati repellat neque corporis laborum quaerat optio? Molestias porro dolorem soluta labore voluptatum suscipit numquam ab asperiores, architecto possimus ipsam sequi dolores earum distinctio iusto commodi omnis obcaecati amet repudiandae rerum est consequuntur. Itaque cupiditate ex repudiandae nisi incidunt quisquam eius similique dolorem, vero porro sequi nesciunt non!"
	},
];

const News = () => {
	const navigate = useNavigate();
	const [newsData, setNewsData] = useState<NewsItem[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(false);

	const API_URL = `${import.meta.env.VITE_API_BASE_URL}/card/cards/category/news`;

	useEffect(() => {
		const fetchNews = async () => {
			try {
				const response = await axios.get(API_URL);
				setNewsData(response.data);
				setError(false);
				console.log(response.data)
			} catch (error) {
				console.error("Error fetching news:", error);
				// setError(true);
				setNewsData(dataDemo);
			} finally {
				setLoading(false);
			}
		};

		fetchNews();
	}, [API_URL]);

	return (
		<section className="max-w-6xl mx-auto py-10 px-6">
			{/* Page Title */}
			<motion.h1
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className="text-4xl font-bold text-primary text-center"
			>
				Latest News & Updates
			</motion.h1>

			{/* Loading & Error Handling */}
			{loading && <ShimmerLoader />}
			{error && (
				<div className="text-center text-red-500 mt-6">
					⚠️ Failed to fetch news. <button onClick={() => window.location.reload()} className="underline">Retry</button>
				</div>
			)}

			{/* News Cards Grid */}
			<div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
				{newsData.map((item) => (
					<motion.div
						key={item.c_id}
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						className="bg-white/10 backdrop-blur-md shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition duration-300"
					>
						{/* News Image */}
						{item.image && (
							<img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
						)}

						{/* News Content */}
						<div className="p-4">
							<h2 className="text-xl font-semibold text-primary">{item.title}</h2>
							{item.date && <p className="text-gray-600 text-sm mt-1">{item.date}</p>}
							<p className="text-primary/70 mt-2 text-sm line-clamp-3">{item.description}</p>

							{/* Read More Button */}
							<a
								onClick={() => navigate(`/news/${item.c_id}`)}
								className="block mt-4 text-primary font-medium hover:underline"
							>
								Read More →
							</a>
						</div>
					</motion.div>
				))}
			</div>
		</section>
	);
};

export default News;