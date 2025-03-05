import { useState } from "react";
import { motion } from "framer-motion";
import { FiFileText, FiAlertCircle } from "react-icons/fi"; // Icons for PDFs & Important notices

const noticesData = [
  { title: "Notice for Next Semester Fees Payment", link: "/notices/fees.pdf", category: "Student" },
  { title: "Hostel Admission Form", link: "/notices/hostel_admission.pdf", category: "Student" },
  { title: "Notice for National Scholarship Portal", link: "/notices/scholarship.pdf", category: "Student", important: true },
  { title: "Cyber Jaagrookta Diwas (CJD)", link: "/notices/cyber_awareness.pdf", category: "Institute" },
];

const categories = ["Faculty", "Student", "Institute"];

const Notices = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredNotices = selectedCategory === "All"
    ? noticesData
    : noticesData.filter((n) => n.category === selectedCategory);

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
            {notice.important ? (
              <FiAlertCircle className="text-red-500 text-xl mr-3" />
            ) : (
              <FiFileText className="text-gray-500 text-xl mr-3" />
            )}

            {/* Notice Link */}
            <a href={notice.link} className="flex-1 text-lg text-blue-600 hover:underline">
              {notice.title}
            </a>
          </li>
        ))}
      </motion.ul>
    </div>
  );
};

export default Notices;
