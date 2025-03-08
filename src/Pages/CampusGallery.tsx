import { useState, useEffect } from "react";
import admin from "../assets/admin.jpg";
import hostelroom from "../assets/hostelroom.jpg";
import library from "../assets/librar.png";
import fest from "../assets/fest.jpg";
import gym from "../assets/gym.jpg";
import { X } from "lucide-react";

const defgalleryImages = [
  admin,
  hostelroom,
  library,
  fest,
  gym,
  admin,
  hostelroom,
  library,
  fest,
  gym,
  admin,
  hostelroom,
  library,
  fest,
  gym,
  admin,
  hostelroom,
  library,
  fest,
  gym,
  admin,
  hostelroom,
  library,
  fest,
  gym,
];

const IMAGES_PER_PAGE = 12;

function CampusGallery() {
  const [galleryImages, setGalleryImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(0);

  const fetchGalleryImages = async () => {
    try {
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/media/media/category/campus_gallery`);
      if (!res.ok) throw new Error("Failed to fetch gallery images");

      const data = await res.json();

      // Extracting media_img_id correctly
      const fetchedImages = data.map((image: any) => image.media_img_id);
      setGalleryImages(fetchedImages.length > 0 ? fetchedImages : defgalleryImages);
    } catch (error) {
      console.error("Error fetching gallery images:", error);
      setGalleryImages(defgalleryImages);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGalleryImages();
  }, []);

  const totalPages = Math.ceil(galleryImages.length / IMAGES_PER_PAGE);
  const startIndex = currentPage * IMAGES_PER_PAGE;
  const endIndex = startIndex + IMAGES_PER_PAGE;
  const currentImages = galleryImages.slice(startIndex, endIndex);

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Header Section */}
      <header className="bg-primary text-white py-12 px-6 shadow-lg text-center">
        <h1 className="text-3xl md:text-4xl font-bold">Campus Gallery</h1>
        <p className="mt-2 text-gray-200 text-lg">
          Explore the vibrant campus life at IIIT Nagpur
        </p>
      </header>

      {/* Loading State */}
      {loading ? (
        <div className="flex justify-center items-center h-64 text-xl font-semibold">
          Loading images...
        </div>
      ) : (
        <>
          {/* Gallery Grid */}
          <div className="max-w-7xl mx-auto py-8 px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {currentImages.map((image, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <img
                  src={image}
                  alt={`Campus ${startIndex + index + 1}`}
                  className="w-full h-60 object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
                  onClick={() => setSelectedImage(image)}
                />
              </div>
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="flex flex-col items-center py-6">
  <div className="flex space-x-2">
    {/* Previous Button */}
    <button
      onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 0))}
      disabled={currentPage === 0}
      className={`px-4 py-2 text-lg rounded-md shadow-md transition-all duration-300 ${
        currentPage === 0 
          ? "bg-gray-300 text-gray-500 cursor-not-allowed" 
          : "bg-blue-500 text-white hover:bg-blue-600 hover:scale-105"
      }`}
    >
      ← Previous
    </button>

    {/* Page Numbers */}
    <div className="flex space-x-1">
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          onClick={() => setCurrentPage(index)}
          className={`w-10 h-10 rounded-full text-lg font-semibold transition-all duration-300 shadow-md ${
            currentPage === index
              ? "bg-blue-600 text-white scale-110"
              : "bg-gray-200 text-gray-800 hover:bg-blue-400 hover:text-white"
          }`}
        >
          {index + 1}
        </button>
      ))}
    </div>

    {/* Next Button */}
    <button
      onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1))}
      disabled={currentPage === totalPages - 1}
      className={`px-4 py-2 text-lg rounded-md shadow-md transition-all duration-300 ${
        currentPage === totalPages - 1 
          ? "bg-gray-300 text-gray-500 cursor-not-allowed" 
          : "bg-blue-500 text-white hover:bg-blue-600 hover:scale-105"
      }`}
    >
      Next →
    </button>
  </div>
</div>

        </>
      )}

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center p-4 z-50">
          <div className="relative max-w-4xl w-full flex flex-col items-center">
            <button
              className="absolute top-4 right-6 text-white bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition"
              onClick={() => setSelectedImage(null)}
            >
              <X size={28} />
            </button>
            <img
              src={selectedImage}
              alt="Enlarged Campus"
              className="w-full max-h-screen object-contain rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default CampusGallery;
