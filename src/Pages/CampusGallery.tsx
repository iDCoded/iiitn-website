import { useState } from "react";
import admin from "../assets/admin.jpg";
import hostelroom from "../assets/hostelroom.jpg";
import library from "../assets/librar.png";
import fest from "../assets/fest.jpg";
import gym from "../assets/gym.jpg";
import { X } from "lucide-react";

const galleryImages = [
  admin,
  hostelroom,
  library,
  fest,
  gym,
  "/images/campus3.jpg",
  "/images/campus4.jpg",
  "/images/campus5.jpg",
  "/images/campus6.jpg",
  "/images/campus7.jpg",
  "/images/campus8.jpg",
  "/images/campus9.jpg",
];

function CampusGallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* Header Section */}
      <header className="bg-primary text-white py-12 px-6 shadow-lg text-center">
        <h1 className="text-3xl md:text-4xl font-bold">Campus Gallery</h1>
        <p className="mt-2 text-gray-200 text-lg">
          Explore the vibrant campus life at IIIT Nagpur
        </p>
      </header>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto py-8 px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {galleryImages.map((image, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
          >
            <img
              src={image}
              alt={`Campus ${index + 1}`}
              className="w-full h-60 object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
              onClick={() => setSelectedImage(image)}
            />
          </div>
        ))}
      </div>

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