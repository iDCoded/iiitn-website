import { useState } from "react";
import admin from "../assets/admin.jpg";
import hostelroom from "../assets/hostelroom.jpg";
import library from "../assets/librar.png";
import fest from "../assets/fest.jpg";
import gym from "../assets/gym.jpg";

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
      <header className="bg-gray-800 text-white py-12 px-6 shadow-md text-center">
        <h1 className="text-3xl md:text-4xl font-bold">Campus Gallery</h1>
        <p className="mt-2 text-gray-300 text-lg">
          Explore the vibrant campus life at IIIT Nagpur
        </p>
      </header>

      {/* Gallery Grid */}
      <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {galleryImages.map((image, index) => (
          <div key={index} className="overflow-hidden rounded-lg shadow-md">
            <img
              src={image}
              alt={`Campus ${index + 1}`}
              className="w-full h-56 object-cover cursor-pointer hover:scale-105 transition-transform duration-300"
              onClick={() => setSelectedImage(image)}
            />
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center p-4 z-50">
          <div className="relative max-w-3xl">
            <button
              className="absolute top-3 right-3 text-white text-3xl"
              onClick={() => setSelectedImage(null)}
            >
              &times;
            </button>
            <img
              src={selectedImage}
              alt="Enlarged Campus"
              className="w-full max-h-screen object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default CampusGallery;
