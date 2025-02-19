import React from 'react'
import StudentCard from '@/components/StudentCard'  // Ensure this is the correct import path

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
]

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
]

function Students() {
    return (
        <>
            <div className="bg-gray-100 min-h-screen flex flex-col">
                <div className="bg-[#002147] text-white py-16 text-center">
                    <h1 className="text-4xl font-bold">Students</h1>
                    <p className="text-lg mt-2">Stay connected and contribute to the growth of IIIT Nagpur.</p>
                </div>

                <div className="px-6 py-12">
                    <h2 className="text-2xl font-semibold mb-4">Prospective Students</h2>
                    <p className="mb-8">Get more details on programmes, resources, fees, and other information for prospective students here.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {prospectiveData.map((item, index) => (
                            <StudentCard key={index} title={item.title} description={item.description} imageSrc={item.imageSrc} />
                        ))}
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
        </>
    );
}

export default Students;
