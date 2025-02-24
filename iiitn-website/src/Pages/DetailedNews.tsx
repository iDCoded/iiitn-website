import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const newsData = [
  {
    id: "ai-research",
    title: "IIIT Nagpur Achieves Milestone in AI Research",
    image: "https://source.unsplash.com/800x400/?news,technology",
    content: `IIIT Nagpur has recently made significant advancements in AI research.
    
    The institute has developed a cutting-edge machine learning model that outperforms previous benchmarks in natural language processing tasks.
    
    This breakthrough marks a new era for artificial intelligence applications in India.`,
  },
  {
    id: "fest-2024",
    title: "IIIT Nagpur Hosts Grand Tech Fest 2024",
    image: "https://source.unsplash.com/800x400/?event,technology",
    content: `The annual tech fest witnessed participation from over 1000 students across various institutions.
    
    Keynote speakers from leading tech companies shared insights on the latest industry trends, including AI, Blockchain, and Quantum Computing.`,
  },
];

function DetailedNews() {
  const { newsId } = useParams();
  const navigate = useNavigate();
  const [news, setNews] = useState<{ id: string; title: string; image: string; content: string } | null>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_BASE_URL}/cards/${newsId}`);
        if (!response.ok) {
          throw new Error("Event not found");
        }
        const data = await response.json();
        setNews(data);
      } catch (error) {
        // console.error("Error fetching event:", error);
        setNews(newsData.find((e) => e.id === newsId) || null);
      }
    };

    fetchNews();
    const foundEvent = newsData.find((e) => e.id === newsId);
    setNews(foundEvent || null);
  }, [newsId]);

  if (!news) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <p className="text-2xl text-red-500 font-semibold">News not found</p>
        <button
          onClick={() => navigate("/")}
          className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition duration-300"
        >
          Back to News
        </button>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header Section */}
      <header className="bg-[#002147] text-white py-16 text-center">
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
        <h2 className="text-3xl font-bold text-[#002147] mb-4">{news.title}</h2>

        {/* News Content */}
        <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
          {news.content}
        </p>

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="mt-6 px-6 py-2 bg-[#002147] text-white rounded-md shadow-md hover:bg-[#001530] transition duration-300"
        >
          ← Back
        </button>
      </div>
    </div>
  );
}

export default DetailedNews;
