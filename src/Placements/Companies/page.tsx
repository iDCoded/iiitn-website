import { FaFileAlt } from "react-icons/fa"; // Import an icon for guidelines
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Companies() {
  const navigate = useNavigate();
  const [pdfLinks, setPdfLinks] = useState<{ title: string; link: string }[]>([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE_URL}/media/media/category/companies`)
      .then((response) => response.json())
      .then((data) => {
        const pdfData = data.map((item: any) => ({
          title: item.title,
          link: item.media_doc_id,
        }));
        setPdfLinks(pdfData);
      })
      .catch((error) => console.error("Error fetching PDF links:", error));
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Header Section */}
      <header className="relative w-full h-60 sm:h-72 lg:h-80 flex flex-col justify-center items-center text-white text-center shadow-lg bg-primary px-4">
        <div className="relative z-10 max-w-2xl mx-auto">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-wide">
            Companies
          </h1>
          <p className="text-base sm:text-lg mt-2 opacity-90">
            Stay connected and contribute to the growth of IIIT Nagpur.
          </p>
        </div>
      </header>

      {/* Guidelines Section */}
      <section className="max-w-4xl w-full mx-auto mt-12 p-6 sm:p-8 bg-white shadow-lg rounded-lg border border-gray-200">
        <div className="text-left">
          <h2 className="text-3xl sm:text-3xl font-semibold text-primary">
            <span className="text-5xl text-accent">| </span>Guidelines for Companies
          </h2>
          <p className="text-gray-600 text-sm sm:text-base mt-2">
            Ensure a smooth recruitment process by following these guidelines.
          </p>
        </div>

        <ul className="mt-6 space-y-4 text-gray-700 text-sm sm:text-lg">
          {pdfLinks.map((item, index) => (
            <li
              key={index}
              className="p-3 flex items-center space-x-3 border-b last:border-b-0 hover:bg-gray-100 rounded-md transition-all"
            >
              <FaFileAlt className="text-accent text-lg sm:text-xl" />
                <button
                onClick={() => navigate(item.link)}
                className="text-accent font-medium hover:underline"
                >
                {item.title}
                </button>
            </li>
          ))}
        </ul>
      </section>

      {/* Footer Spacer */}
      <div className="mb-16 sm:mb-24"></div>
    </div>
  );
}

export default Companies;
