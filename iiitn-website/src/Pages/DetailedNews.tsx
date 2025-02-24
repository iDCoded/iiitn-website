import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const newsData = [
    {
        id: "news",
        category: "News",
        image: "https://static.toiimg.com/thumb/msid-117532524,imgsize-38444,width-400,height-225,resizemode-72/117532524.jpg",
        title: "Duo from IIIT Nagpur invited as special guests for Republic Day parade",
        description: "IIIT Nagpur has signed an MoU with the Maharashtra government to promote AI and ML in the state.",
    },
    {
        id: "updates-1",
        category: "Updates",
        image: "https://imgs.search.brave.com/WE_FzZkUn2nRyWQI6BE3eBdqnhN49qmN4f_7EdEcY4s/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9paWl0/bi5hYy5pbi9pbWFn/ZXMvTmV3c0V2ZW50/cy83ODUvTmV3c0lt/YWdlLkpQRw",
        title: "2nd Convocation Ceremony",
        description: "IIIT Nagpur recently held its 2nd convocation ceremony with students receiving their degrees and awards.",
    },
    {
        id: "news-2",
        category: "News",
        image: "https://imgs.search.brave.com/MWacu6ain-mbYnq57K9WQV5xJ2T422cSdSePqObriBs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9paWl0/bi5hYy5pbi9pbWFn/ZXMvU2xpZGVyLzIz/MC9TbGlkZXItMjMw/LmpwZw",
        title: "Training on Public Procurement",
        description: "Training on Public Procurement during Vigilance Awareness Week at IIIT Nagpur.",
    },
    {
        id: "updates-2",
        category: "Updates",
        image: "https://iiitn.ac.in/images/album/republic-day-2025//ThumbnailImage.jpg",
        title: "76th Republic Day Celebration",
        description: "IIIT Nagpur celebrated the 76th Republic Day with patriotic fervor and enthusiasm.",
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
    const foundEvent = newsData.find((e) => e.id === newsId);
    setNews(
      foundEvent
        ? {
            id: foundEvent.id,
            title: foundEvent.title,
            image: foundEvent.image,
            content: foundEvent.description,
          }
        : null
    );
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
