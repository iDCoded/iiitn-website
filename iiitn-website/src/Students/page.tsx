import React from 'react';
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

const currentData = [
    {
        subTitle: "Academic Resources",
        subDes: "Information on Courses, Timetable, Calendar, Curricula, Fees, etc.",
        arr: [
            {
                title: "Courses",
                description: "Semester Dates and deadlines",
                imageSrc: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/Indian_Institute_of_Information_Technology%2C_Nagpur_Logo.svg/330px-Indian_Institute_of_Information_Technology%2C_Nagpur_Logo.svg.png"
            },
            {
                title: "Timetable",
                description: "Important Dates and Deadlines",
                imageSrc: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/Indian_Institute_of_Information_Technology%2C_Nagpur_Logo.svg/330px-Indian_Institute_of_Information_Technology%2C_Nagpur_Logo.svg.png"
            },
            {
                title: "Calendar",
                description: "Important Dates and Academic Calendar",
                imageSrc: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/Indian_Institute_of_Information_Technology%2C_Nagpur_Logo.svg/330px-Indian_Institute_of_Information_Technology%2C_Nagpur_Logo.svg.png"
            }
        ]
    },
    {
        subTitle: "Student Support",
        subDes: "Resources for current students, including counseling and academic support.",
        arr: [
            {
                title: "Counseling",
                description: "Counseling Services for mental well-being",
                imageSrc: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/Indian_Institute_of_Information_Technology%2C_Nagpur_Logo.svg/330px-Indian_Institute_of_Information_Technology%2C_Nagpur_Logo.svg.png"
            },
            {
                title: "Library",
                description: "Library Resources and Online Access",
                imageSrc: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/Indian_Institute_of_Information_Technology%2C_Nagpur_Logo.svg/330px-Indian_Institute_of_Information_Technology%2C_Nagpur_Logo.svg.png"
            },
            {
                title: "Library",
                description: "Library Resources and Online Access",
                imageSrc: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/Indian_Institute_of_Information_Technology%2C_Nagpur_Logo.svg/330px-Indian_Institute_of_Information_Technology%2C_Nagpur_Logo.svg.png"
            }
        ]
    },
    {
        subTitle: "Student Support",
        subDes: "Resources for current students, including counseling and academic support.",
        arr: [
            {
                title: "Counseling",
                description: "Counseling Services for mental well-being",
                imageSrc: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/Indian_Institute_of_Information_Technology%2C_Nagpur_Logo.svg/330px-Indian_Institute_of_Information_Technology%2C_Nagpur_Logo.svg.png"
            },
            {
                title: "Library",
                description: "Library Resources and Online Access",
                imageSrc: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/Indian_Institute_of_Information_Technology%2C_Nagpur_Logo.svg/330px-Indian_Institute_of_Information_Technology%2C_Nagpur_Logo.svg.png"
            },
            {
                title: "Library",
                description: "Library Resources and Online Access",
                imageSrc: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f5/Indian_Institute_of_Information_Technology%2C_Nagpur_Logo.svg/330px-Indian_Institute_of_Information_Technology%2C_Nagpur_Logo.svg.png"
            }
        ]
    }
];

function Students() {
    return (
        <>
            <div className="bg-gray-100 min-h-screen flex flex-col">
                <div className="bg-[#002147] text-white py-16 text-center">
                    <h1 className="text-4xl font-bold">Students</h1>
                    <p className="text-lg mt-2">Stay connected and contribute to the growth of IIIT Nagpur.</p>
                </div>
                <div className=" flex flex-row  mt-12 ">
                    <div className="px-6 py-12 w-2/3 ">
                <div className="px-6 py-12 flex justify-between">
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">Prospective Students</h2>
                        <p className="mb-8">Get more details on programmes, resources, fees, and other information for prospective students here.</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {prospectiveData.map((item, index) => (
                                <StudentCard key={index} title={item.title} description={item.description} imageSrc={item.imageSrc} />
                            ))}
                        </div>
                    </div>

                   
                </div>

                <div className="px-6 py-12">
                    <h2 className="text-2xl font-semibold mb-4">Current Students</h2>
                    <p className="mb-8">Find out more about courses, timetables, calendars, curricula, fees, and other important information for current students here.</p>
                    {currentData.map((section, index) => (
                        <div key={index} className="mb-12">
                            <h3 className="text-xl font-bold">{section.subTitle}</h3>
                            <p className="mb-6">{section.subDes}</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {section.arr.map((item, idx) => (
                                    <StudentCard key={idx} title={item.title} description={item.description} imageSrc={item.imageSrc} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
    </div>
    <div className=" w-1/3 px-6 py-12 flex flex-col space-y-6">
    {/* Campus Life Box */}
    <div className="bg-white  p-6 rounded-lg shadow-md mb-6">
        <h3 className="text-xl font-semibold mb-4">Campus Life</h3>
        <p className="text-gray-600 mb-4">Explore the various aspects of campus life at IIIT Nagpur, including clubs, events, and student activities.</p>
        <div className="flex flex-col space-y-2">
            <a href="#" className="text-blue-600">Hostel Life</a>
            <a href="#" className="text-blue-600">Sports & Recreation</a>
            <a href="#" className="text-blue-600">Cultural Activities</a>
            <a href="#" className="text-blue-600">Student Clubs</a>
            <a href="#" className="text-blue-600">Events and Festivities</a>
            <a href="#" className="text-blue-600">Dining Options</a>
        </div>
    </div>

    {/* Upcoming Events Box */}
    <div className="bg-white  p-6 rounded-lg shadow-md ">
        <h3 className="text-xl font-semibold mb-4">Upcoming Events</h3>
        <p className="text-gray-600 mb-4">Check out the upcoming events and activities at IIIT Nagpur!</p>
        <div className="flex flex-col space-y-2">
            <a href="#" className="text-blue-600">Annual Tech Fest</a>
            <a href="#" className="text-blue-600">Cultural Night</a>
            <a href="#" className="text-blue-600">Sports Tournament</a>
            <a href="#" className="text-blue-600">Guest Lecture Series</a>
            <a href="#" className="text-blue-600">Hackathon</a>
            <a href="#" className="text-blue-600">Alumni Meet</a>
        </div>
    </div>
    <div className="bg-white  p-6 rounded-lg shadow-md">
    <h3 className="text-xl font-semibold mb-4">Telephone Directory</h3>
    </div>
    <div className="bg-white  p-6 rounded-lg shadow-md">
    <h3 className="text-xl font-semibold mb-4">Campus Map</h3>
    </div>
</div>

                   
                  
                </div>

                
            </div>
        </>
    );
}

export default Students;
