import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaDownload } from "react-icons/fa";

const AcademicCalendar = () => {
    const [activeTab, setActiveTab] = useState<"firstYear" | "seniors">("firstYear");

    const calendars: { [key in "firstYear" | "seniors"]: { academicCalendar: string; holidayList: string } } = {
        firstYear: {
            academicCalendar: "/pdfs/first-year-academic-calendar.pdf",
            holidayList: "/pdfs/first-year-holiday-list.pdf",
        },
        seniors: {
            academicCalendar: "/pdfs/seniors-academic-calendar.pdf",
            holidayList: "/pdfs/seniors-holiday-list.pdf",
        },
    };

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
                        className={`px-6 py-3 mx-2 text-lg font-medium rounded-lg transition-all duration-300 ${
                            activeTab === tab ? "bg-primary text-white shadow-lg" : "bg-gray-200 text-primary"
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
                                    href={calendars[activeTab].academicCalendar}
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
                                    href={calendars[activeTab].holidayList}
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
