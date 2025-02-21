import React from "react";
import { DepartmentCard } from "../components/DepartmentCard";

function Departments() {
    return (
        <div className="bg-gray-100 text-gray-900 min-h-screen">
            {/* Hero Section */}
            <div className="bg-[#002147] text-white py-12 md:py-16 text-center">
                <h1 className="text-3xl md:text-4xl font-bold">Departments at IIIT Nagpur</h1>
                <p className="text-base md:text-lg mt-2">
                    Explore the diverse academic departments at IIIT Nagpur
                </p>
            </div>

            {/* Introduction Section */}
            <div className="max-w-4xl mx-auto px-4 md:px-6 py-8 text-center">
                <p className="text-base md:text-lg text-gray-700">
                    IIIT Nagpur offers a wide range of academic programs through its dedicated departments.
                    Each department focuses on cutting-edge research, industry collaborations, and hands-on
                    learning experiences to equip students with the knowledge and skills required for the future.
                    Discover the diverse fields of study and explore the opportunities each department provides.
                </p>
            </div>

            {/* Content Section */}
            <div className="max-w-6xl mx-auto px-4 md:px-6 py-12">
                {/* Responsive Grid Layout for Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16 w-full justify-items-center">
                    {/* Department 1 */}
                    <DepartmentCard
                        title="Basic Science"
                        imageSrc="https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/Indian_Institute_of_Information_Technology%2C_Nagpur_Logo.svg/330px-Indian_Institute_of_Information_Technology%2C_Nagpur_Logo.svg.png"
                        overlayText="Department of Basic Sciences at Indian Institute of Information Technology, Nagpur is a vibrant academic department."
                        link="departments/basic-science"
                    />

                    {/* Department 2 */}
                    <DepartmentCard
                        title="Computer Science & Engineering"
                        imageSrc="https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/Indian_Institute_of_Information_Technology%2C_Nagpur_Logo.svg/330px-Indian_Institute_of_Information_Technology%2C_Nagpur_Logo.svg.png"
                        overlayText="The Department of Computer Science & Engineering offers cutting-edge research and education in computer science, software development, and AI."
                        link="departments/cse"
                    />

                    {/* Department 3 */}
                    <DepartmentCard
                        title="Electronics & Communication"
                        imageSrc="https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/Indian_Institute_of_Information_Technology%2C_Nagpur_Logo.svg/330px-Indian_Institute_of_Information_Technology%2C_Nagpur_Logo.svg.png"
                        overlayText="The Department of Electronics & Communication at IIIT Nagpur is focused on advanced networking and signal processing."
                        link="departments/ece"
                    />
                </div>
            </div>
        </div>
    );
}

export default Departments;
