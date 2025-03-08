import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react"; // Importing icons

const defimmovablePropData = [
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
    },
];

function ImmovableProperty() {
    interface FacultyMember {
        name: string;
        link: string;
    }
    
    interface Department {
        [key: string]: FacultyMember[];
    }
    
    interface YearData {
        year: string;
        faculty: Department;
    }
    
    const [immovablePropData, setImmovablePropData] = useState<YearData[]>([]);
    const [loading, setLoading] = useState(true);
    const [selectedYear, setSelectedYear] = useState<YearData>(defimmovablePropData[0]);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    useEffect(() => {
        const fetchImmovablePropData = async () => {
            try {
                const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/media/media/category/immovable_properties`);
                if (!res.ok) {
                    throw new Error("Failed to fetch immovable properties data");
                }
                const data = await res.json();

                interface Entry {
                    added_by: number;
                    added_time: string;
                    date: string | null;
                    expiry_date: string | null;
                    m_category: string;
                    m_id: number;
                    m_sub_category: string;
                    media_doc_id: string;
                    media_img_id: string | null;
                    media_vid_id: string | null;
                    preference: number;
                    title: string;
                    updated_by: number;
                    updated_time: string;
                }
                
                const groupedData: { [key: string]: YearData } = {};

                data.forEach((entry: Entry) => {
                    const year = entry.m_sub_category;
                    let title = entry.title.replace(/_items$/, ""); // Remove _items
                    const link = entry.media_doc_id;
                    
                    let department = "Others";
                    if (title.endsWith("_bs")) department = "Basic Science";
                    else if (title.endsWith("_cse")) department = "Computer Science & Engineering";
                    else if (title.endsWith("_ece")) department = "Electronics & Communication Engineering";
                    else if (title.endsWith("_officer")) department = "Officers";
                    else if (title.endsWith("_nts")) department = "Non-Teaching Staff";

                    if (!groupedData[year]) groupedData[year] = { year, faculty: {} };
                    if (!groupedData[year].faculty[department]) groupedData[year].faculty[department] = [];

                    groupedData[year].faculty[department].push({ name: title, link });
                });

                const formattedData = Object.values(groupedData);
                setImmovablePropData(formattedData.length > 0 ? formattedData : defimmovablePropData);
                setSelectedYear(formattedData.length > 0 ? formattedData[0] : defimmovablePropData[0]);
            } catch (error) {
                console.error("Error fetching immovable properties:", error);
                setImmovablePropData(defimmovablePropData);
            } finally {
                setLoading(false);
            }
        };

        fetchImmovablePropData();
    }, []);

    if (loading) {
        return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
    }

    return (
        <div className="bg-gray-100 min-h-screen flex flex-col">
            <header className="bg-primary text-white py-8 text-center">
                <h1 className="text-3xl md:text-5xl font-bold">Immovable Properties</h1>
                <p className="text-base md:text-lg mt-2 italic">"Navigate your way to IIIT Nagpur with ease."</p>
            </header>

            <div className="md:hidden p-4">
                <button onClick={() => setDropdownOpen(!dropdownOpen)} className="bg-primary text-white flex items-center justify-between w-full p-3 rounded-lg text-lg">
                    Year: {selectedYear.year} <ChevronDown size={20} />
                </button>
                {dropdownOpen && (
                    <ul className="mt-2 bg-white shadow-lg rounded-lg overflow-hidden">
                        {immovablePropData.map((yearData, index) => (
                            <li key={index} className="p-3 text-center cursor-pointer hover:bg-gray-200" onClick={() => { setSelectedYear(yearData); setDropdownOpen(false); }}>
                                {yearData.year}
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            <div className="flex flex-1">
                <aside className="hidden md:block md:w-1/4 bg-gray-200 p-6 min-h-screen">
                    <h2 className="text-xl font-bold mb-4">Select Year</h2>
                    <ul>
                        {immovablePropData.map((yearData, index) => (
                            <li key={index} className="cursor-pointer p-2 hover:bg-gray-300" onClick={() => setSelectedYear(yearData)}>
                                {yearData.year}
                            </li>
                        ))}
                    </ul>
                </aside>
                <div className="w-full md:w-3/4 p-4 md:p-8">
                    <h2 className="text-2xl md:text-3xl font-semibold text-primary border-b-4 border-primary pb-2 mb-4">Year: {selectedYear.year}</h2>
                    {Object.entries(selectedYear.faculty).map(([department, faculty], idx) => (
                        <div key={idx} className="mb-6">
                            <h3 className="text-xl md:text-2xl font-medium text-secondary mb-4">{department}</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {faculty.map((person, i) => (
                                    <div key={i} className="text-gray-700">
                                        <a href={person.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">{person.name}</a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}



export default ImmovableProperty;
