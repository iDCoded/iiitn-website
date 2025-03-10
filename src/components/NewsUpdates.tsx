/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

interface NewsItem {
  id: string;
  c_category: string;
  image: string;
  title: string;
  caption: string;
}

const announcements = [
  { id: "1", title: "Announcement 1" },
  { id: "2", title: "Announcement 2 Announcement 1 " },
  { id: "3", title: "Announcement 3"},
  { id: "4", title: "Announcement 4" },
  { id: "5", title: "Announcement 5" },
  { id: "6", title: "Announcement 6" },
  { id: "7", title: "Announcement 7" },
  { id: "8", title: "Announcement 8" },
  { id: "9", title: "Announcement 9" },
  { id: "10", title: "Announcement 10" },
];

export default function NewsSection() {
  const [newsData, setNewsData] = useState<NewsItem[]>([]);
  const navigate = useNavigate();
  const newsSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_API_BASE_URL}/card/cards/category/news`
        );
        if (!res.ok) throw new Error("Failed to fetch news");
        const data = await res.json();

        const filteredNews = data.map((news: any) => ({
          id: news.c_id,
          c_category: news.c_category,
          image: news.media_img_id || "/default-news.jpg",
          title: news.title,
          caption: news.caption,
        }));
        setNewsData(filteredNews.slice(0, 6));
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    };

    fetchNews();
  }, []);

  return (
    <section className="relative w-full h-[65vh] bg-background px-4 sm:px-6 lg:px-12 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* News Section */}
        <div className="md:col-span-2" ref={newsSectionRef}>
          <h2 className="text-2xl sm:text-4xl font-bold tracking-wide mb-6">
            <span className="text-accent">| </span> Latest News
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {newsData.slice(0, 2).map((news) => (
              <div
                key={news.id}
                className="bg-white border border-gray-300 shadow-md overflow-hidden flex flex-col h-full"
              >
                <img
                  className="w-full h-48 object-cover"
                  src={news.image}
                  alt={news.title}
                />
                <div className="p-4 flex flex-col flex-grow">
                  <h5 className="text-lg font-bold text-gray-900">{news.title}</h5>
                  <p className="text-gray-700 flex-grow">{news.caption}</p>
                  <a
                    onClick={() => navigate(`/news/${news.id}`)}
                    className="inline-flex items-center text-sm font-medium text-accent hover:underline cursor-pointer mt-3"
                  >
                    Read more
                    <svg
                      className="w-4 h-4 ml-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Announcements Section */}
        <div className="md:col-span-1 flex flex-col">
          <h2 className="text-2xl sm:text-4xl font-bold tracking-wide mb-6">
            <span className="text-accent">| </span> Announcements
          </h2>
          <div
            className="bg-white text-black flex flex-col py-4 shadow-lg w-[90%] h-[85%] border border-gray-300 overflow-hidden"
            style={{ height: newsSectionRef.current?.offsetHeight || "auto" }}
          >
            {/* Scrollable Announcements */}
            <div className="flex-1 overflow-y-auto px-4 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-200">
              {announcements.slice(0, 5).map((announcement) => (
                <div
                  key={announcement.id}
                  onClick={() => navigate(`/announcements/${announcement.id}`)}
                  className="py-3 border-b border-gray-400 text-md cursor-pointer transition-all duration-200 hover:bg-gray-100 hover:font-semibold"
                >
                  {announcement.title}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
