import React from 'react';
import FSCard from '../components/FSCard';
import StudentCard from '@/components/StudentCard'; // Ensure this is the correct import path

const prospectiveData = [
    {
        title: "Academic Curricula",
        description: "Semester Dates and deadline",
        imageSrc: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/Indian_Institute_of_Information_Technology%2C_Nagpur_Logo.svg/330px-Indian_Institute_of_Information_Technology%2C_Nagpur_Logo.svg.png"
    },
    {
        title: "Scholarships and Assistance",
        description: "Details about Scholarships and financial assistance",
        imageSrc: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/Indian_Institute_of_Information_Technology%2C_Nagpur_Logo.svg/330px-Indian_Institute_of_Information_Technology%2C_Nagpur_Logo.svg.png"
    },
    {
        title: "Fees and Financial Aid",
        description: "Tuition Fees, Payment Methods, etc.",
        imageSrc: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/Indian_Institute_of_Information_Technology%2C_Nagpur_Logo.svg/330px-Indian_Institute_of_Information_Technology%2C_Nagpur_Logo.svg.png"
    }
];

function FacultyandStaff() {
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col">
            {/* Header Section */}
            <div className="bg-[#002147] text-white py-16 text-center">
                <h1 className="text-4xl font-bold">Faculty and Staff</h1>
                <p className="text-lg mt-2">Stay connected and contribute to the growth of IIIT Nagpur.</p>
            </div>

            {/* Main Content */}
            <div className="flex flex-row mt-12 px-6 py-12">
                {/* Left Content */}
                <div className="w-2/3">
                    <div className="flex flex-row gap-12">
                        {/* Faculty Directory */}
                        <div className="w-1/2">
                            <h1 className="text-4xl font-bold">Faculty Directory</h1>
                            <FSCard
                                title="Dr. ABC"
                                description="Professor"
                                imageSrc="https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/Indian_Institute_of_Information_Technology%2C_Nagpur_Logo.svg/330px-Indian_Institute_of_Information_Technology%2C_Nagpur_Logo.svg.png"
                            />
                        </div>
                        {/* Staff Section */}
                        <div className="w-1/2">
                            <h1 className="text-4xl font-bold">Staff</h1>
                            <FSCard
                                title="Dr. ABC"
                                description="Professor"
                                imageSrc="https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/Indian_Institute_of_Information_Technology%2C_Nagpur_Logo.svg/330px-Indian_Institute_of_Information_Technology%2C_Nagpur_Logo.svg.png"
                            />
                        </div>
                    </div>

                    {/* Prospective Faculty & Staff Section */}
                    <div className="mt-12">
                        <h1 className="text-2xl font-semibold mb-4">Prospective Faculty & Staff</h1>
                        <p className="mb-8">
                            Get more details on programmes, resources, fees, and other information for prospective faculty and staff here.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {prospectiveData.map((data, index) => (
                                <StudentCard key={index} title={data.title} description={data.description} imageSrc={data.imageSrc} />
                            ))}
                        </div>
                    </div>

                    {/* Current Faculty & Staff Section */}
                    <div className="mt-12">
                        <h1 className="text-2xl font-semibold mb-4">Current Faculty & Staff</h1>
                        <p className="mb-8">
                            Get more details on programmes, resources, and policies for current faculty and staff.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {prospectiveData.map((data, index) => (
                                <StudentCard key={index} title={data.title} description={data.description} imageSrc={data.imageSrc} />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Sidebar */}
                <div className="w-1/3 flex flex-col space-y-6">
                    {/* Campus Life Box */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-4">Campus Life</h3>
                        <p className="text-gray-600 mb-4">
                            Explore various aspects of campus life at IIIT Nagpur, including clubs, events, and student activities.
                        </p>
                        <div className="flex flex-col space-y-2">
                            {["Hostel Life", "Sports & Recreation", "Cultural Activities", "Student Clubs", "Events and Festivities", "Dining Options"].map((item, index) => (
                                <a key={index} href="#" className="text-blue-600">{item}</a>
                            ))}
                        </div>
                    </div>

                    {/* Upcoming Events Box */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-4">Upcoming Events</h3>
                        <p className="text-gray-600 mb-4">Check out the upcoming events and activities at IIIT Nagpur!</p>
                        <div className="flex flex-col space-y-2">
                            {["Annual Tech Fest", "Cultural Night", "Sports Tournament", "Guest Lecture Series", "Hackathon", "Alumni Meet"].map((event, index) => (
                                <a key={index} href="#" className="text-blue-600">{event}</a>
                            ))}
                        </div>
                    </div>

                    {/* Additional Information Boxes */}
                    {["Telephone Directory", "Campus Map"].map((title, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold mb-4">{title}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FacultyandStaff;
