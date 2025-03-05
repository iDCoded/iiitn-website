import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react"; // Importing icons

const immovablePropData = [
    {
        year: "2023",
        faculty: {
            "Basic Science": [
                { name: "Dr. Aatish Daryapurkar", link: "#" },
                { name: "Dr. Anuradha Singh", link: "#" },
                { name: "Dr. Charu Goel", link: "#" },
                { name: "Dr. Kirti Dorshetwar", link: "#" },
                { name: "Dr. Deepmala Baghel", link: "#" },
            ],
            "Computer Science & Engineering": [
                { name: "Dr. Pooja Jain", link: "#" },
                { name: "Dr. Jitendra Tembhurne", link: "#" },
                { name: "Dr. Tausif Diwan", link: "#" },
                { name: "Dr. Nishat Afshan Ansari", link: "#" },
                { name: "Dr. Milind Penurkar", link: "#" },
            ],
        },
    },
    {
        year: "2022",
        faculty: {
            "Basic Science": [
                { name: "Dr. Aatish Daryapurkar", link: "#" },
                { name: "Dr. Anuradha Singh", link: "#" },
                { name: "Dr. Charu Goel", link: "#" },
                { name: "Dr. Kirti Dorshetwar", link: "#" },
                { name: "Dr. Deepmala Baghel", link: "#" },
            ],
            "Computer Science & Engineering": [
                { name: "Dr. Pooja Jain", link: "#" },
                { name: "Dr. Jitendra Tembhurne", link: "#" },
                { name: "Dr. Tausif Diwan", link: "#" },
                { name: "Dr. Nishat Afshan Ansari", link: "#" },
                { name: "Dr. Milind Penurkar", link: "#" },
            ],
        },
    }
];

function ImmutableProperty() {
    const [selectedYear, setSelectedYear] = useState(immovablePropData[0]);
    const [dropdownOpen, setDropdownOpen] = useState(false); // For mobile dropdown

    return (
        <div className="bg-gray-100 min-h-screen flex flex-col">
            {/* Header */}
            <header className="bg-primary text-white py-8 text-center">
                <h1 className="text-3xl md:text-5xl font-bold">Immovable Properties</h1>
                <p className="text-base md:text-lg mt-2 italic">
                    "Navigate your way to IIIT Nagpur with ease."
                </p>
            </header>

            {/* Year Selection for Mobile */}
            <div className="md:hidden p-4">
                <button 
                    onClick={() => setDropdownOpen(!dropdownOpen)} 
                    className="bg-primary text-white flex items-center justify-between w-full p-3 rounded-lg text-lg"
                >
                    Year: {selectedYear.year} <ChevronDown size={20} />
                </button>

                {dropdownOpen && (
                    <ul className="mt-2 bg-white shadow-lg rounded-lg overflow-hidden">
                        {immovablePropData.map((yearData, index) => (
                            <li
                                key={index}
                                className={`p-3 text-center cursor-pointer ${selectedYear.year === yearData.year ? 'bg-primary text-white' : 'hover:bg-gray-200'}`}
                                onClick={() => {
                                    setSelectedYear(yearData);
                                    setDropdownOpen(false);
                                }}
                            >
                                {yearData.year}
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            {/* Main Content */}
            <div className="flex flex-1">
                {/* Sidebar for Larger Screens */}
                <aside className="hidden md:block md:w-1/4 bg-gray-200 p-6 min-h-screen">
                    <h2 className="text-xl font-bold mb-4">Select Year</h2>
                    <ul>
                        {immovablePropData.map((yearData, index) => (
                            <li
                                key={index}
                                className={`cursor-pointer p-2 ${selectedYear.year === yearData.year ? 'bg-primary text-white' : 'hover:bg-gray-300'}`}
                                onClick={() => setSelectedYear(yearData)}
                            >
                                {yearData.year}
                            </li>
                        ))}
                    </ul>
                </aside>

                {/* Main Section */}
                <div className="w-full md:w-3/4 p-4 md:p-8">
                    <h2 className="text-2xl md:text-3xl font-semibold text-primary border-b-4 border-primary pb-2 mb-4">
                    <span className="text-accent text-4xl mr-2">|</span>   Year: {selectedYear.year}
                    </h2>
                    {Object.entries(selectedYear.faculty).map(([department, faculty], idx) => (
                        faculty.length > 0 && (
                            <div key={idx} className="mb-6">
                                <h3 className="text-xl md:text-2xl font-medium text-secondary mb-4"> <span className="text-accent text-4xl mr-2">|</span>{department}</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {faculty.map((person, i) => (
                                        <div key={i} className="text-gray-700">
                                            <a href={person.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                                {person.name}
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ImmutableProperty;
