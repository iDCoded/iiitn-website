import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaDownload } from "react-icons/fa";

const AcademicCalendar = () => {
    const [activeTab, setActiveTab] = useState<"firstYear" | "seniors">("firstYear");

    const navigate = useNavigate();

    const defcalendars: { [key in "firstYear" | "seniors"]: { academicCalendar: string; holidayList: string } } = {
        firstYear: {
            academicCalendar: "/pdfs/first-year-academic-calendar.pdf",
            holidayList: "/pdfs/first-year-holiday-list.pdf",
        },
        seniors: {
            academicCalendar: "/pdfs/seniors-academic-calendar.pdf",
            holidayList: "/pdfs/seniors-holiday-list.pdf",
        },
    };

    interface CalendarData {
        firstYear: { academicCalendar: string; holidayList: string };
        seniors: { academicCalendar: string; holidayList: string };
    }

    const [calendars, setCalendars] = useState<CalendarData>({
        firstYear: { academicCalendar: "", holidayList: "" },
        seniors: { academicCalendar: "", holidayList: "" },
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCalendars = async () => {
            try {
                const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/media/media/category/academic_calendar`);
                if (!res.ok) throw new Error("Failed to fetch academic calendar data");

                const data = await res.json();

                // Initialize calendarData with default empty values
                const calendarData: CalendarData = {
                    firstYear: { academicCalendar: "", holidayList: "" },
                    seniors: { academicCalendar: "", holidayList: "" },
                };

                data.forEach((item: any) => {
                    if (item.m_sub_category === "firstYear") {
                        if (item.title.toLowerCase().includes("academic")) {
                            calendarData.firstYear.academicCalendar = item.file_url;
                        } else if (item.title.toLowerCase().includes("holiday")) {
                            calendarData.firstYear.holidayList = item.file_url;
                        }
                    } else if (item.m_sub_category === "seniors") {
                        if (item.title.toLowerCase().includes("academic")) {
                            calendarData.seniors.academicCalendar = item.file_url;
                        } else if (item.title.toLowerCase().includes("holiday")) {
                            calendarData.seniors.holidayList = item.file_url;
                        }
                    }
                });

                setCalendars(calendarData);
            } catch (error) {
                console.error("Error fetching academic calendar data:", error);
                setCalendars(defcalendars); // Fallback to default values
            } finally {
                setLoading(false);
            }
        };

        fetchCalendars();
    }, []);

    if (loading) {
        return (
            <div className="container mx-auto max-w-5xl px-6 py-12 text-center">
                <p className="text-lg text-gray-600">Loading...</p>
            </div>
        );
    }

    return (
        <div className="container mx-auto max-w-5xl px-6 py-12">
            {/* Heading */}
            <div className="text-center mb-10">
                <h1 className="text-4xl font-bold text-primary">Academic Calendar</h1>
                <p className="text-gray-600 mt-2 text-lg">Download the academic schedule and holiday list for the current year.</p>
            </div>

            {/* Tab Navigation */}
            <div className="flex justify-center mb-8">
                {(["firstYear", "seniors"] as Array<"firstYear" | "seniors">).map((tab) => (
                    <button
                        key={tab}
                        className={`px-6 py-3 mx-2 text-lg font-medium rounded-lg transition-all duration-300 ${activeTab === tab ? "bg-primary text-white shadow-lg" : "bg-gray-200 text-primary"
                            }`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab === "firstYear" ? "First Year" : "Seniors"}
                    </button>
                ))}
            </div>

            {/* Content Section */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                    >
                        <h2 className="text-2xl font-semibold text-primary mb-6 text-center">Download Documents</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Academic Calendar */}
                            <motion.div
                                whileHover={{ scale: 1.03 }}
                                transition={{ duration: 0.2 }}
                                className="bg-gray-100 p-6 rounded-lg shadow-md text-center"
                            >
                                <h3 className="text-lg font-medium text-gray-800">Academic Calendar</h3>
                                <p className="text-gray-600 mt-2">View the detailed academic schedule for the year.</p>
                                <a
                                    onClick={() => navigate(calendars[activeTab].academicCalendar)}
                                    className="inline-flex items-center mt-4 px-5 py-3 bg-accent text-white rounded-md text-lg hover:bg-opacity-80 transition"
                                    download
                                >
                                    <FaDownload className="mr-2" /> Download PDF
                                </a>
                            </motion.div>

                            {/* Holiday List */}
                            <motion.div
                                whileHover={{ scale: 1.03 }}
                                transition={{ duration: 0.2 }}
                                className="bg-gray-100 p-6 rounded-lg shadow-md text-center"
                            >
                                <h3 className="text-lg font-medium text-gray-800">List of Holidays</h3>
                                <p className="text-gray-600 mt-2">Check the list of holidays for the academic year.</p>
                                <a
                                    onClick={() => navigate(calendars[activeTab].holidayList)}
                                    className="inline-flex items-center mt-4 px-5 py-3 bg-accent text-white rounded-md text-lg hover:bg-opacity-80 transition"
                                    download
                                >
                                    <FaDownload className="mr-2" /> Download PDF
                                </a>
                            </motion.div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default AcademicCalendar;
