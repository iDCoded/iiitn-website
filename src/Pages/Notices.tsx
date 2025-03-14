import { useState,useEffect } from "react";
import { motion } from "framer-motion";
import { FiFileText } from "react-icons/fi"; 



const categories = ["Faculty", "Student", "Institute"];

const Notices = () => {
  interface Notice {
    title: string;
    link: string;
    category: string;
  }
  const [noticesData, setNoticesData] = useState<Notice[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/media/media/category/notices`);
        if (!response.ok) throw new Error("Failed to fetch notices");
        const data = await response.json();
    
        const fetchedNotices = data.map((notice: any) => ({
          title: notice.title,
          link: notice.media_doc_id, // Adjusted as per response structure
          category: notice.m_sub_category.charAt(0).toUpperCase() + notice.m_sub_category.slice(1) // Capitalize first letter
        }));
    
        setNoticesData(fetchedNotices);
      } catch (error) {
        console.error("Error fetching notices:", error);
      } finally {
        setLoading(false);
      }
    
    };

    fetchNotices();
  }, []);





  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredNotices = selectedCategory === "All"
    ? noticesData
    : noticesData.filter((n) => n.category === selectedCategory);

    if(loading){
      return <div>Loading...</div>
    }

  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Heading */}
      <h1 className="text-3xl font-bold mb-6">
        <span className="text-accent text-4xl mr-2">|</span> Student Notices
      </h1>

      {/* Tab Navigation */}
      <div className="flex gap-4 mb-4 border-b pb-2 border-gray-300">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`px-4 py-2 text-lg font-medium ${selectedCategory === cat ? "text-accent font-bold" : "text-gray-500 hover:text-gray-700"}`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Notices List */}
      <motion.ul
        key={selectedCategory}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
        className="space-y-4"
      >
        {filteredNotices.map((notice, index) => (
          <li key={index} className="flex items-center bg-white shadow-md p-4 rounded-lg hover:bg-gray-100 transition">
            {/* Icon */}
            
              <FiFileText className="text-gray-500 text-xl mr-3" />
            

            {/* Notice Link */}
            <a href={notice.link} 
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 text-lg text-blue-600 hover:underline">
              {notice.title}
            </a>
          </li>
        ))}
      </motion.ul>
    </div>
  );
};

export default Notices;
