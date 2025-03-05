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
        <div className="container mx-auto max-w-6xl px-4 py-12">
            {/* Heading */}
            <div className="text-center mb-8">
                <h1 className="text-4xl font-semibold text-primary">Academic Calendar</h1>
                <p className="text-gray-600 mt-2 text-lg">
                    Download the academic schedule and list of holidays for the current year.
                </p>
            </div>

            {/* Tabs with Animation */}
            <div className="flex justify-left mb-8 border-b relative">
                {(["firstYear", "seniors"] as Array<"firstYear" | "seniors">).map((tab) => (
                    <button
                        key={tab}
                        className={`px-6 py-3 text-lg font-medium transition relative ${
                            activeTab === tab ? "text-white bg-primary" : "text-primary bg-gray-100"
                        }`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab === "firstYear" ? "First Year" : "Seniors"}
                        {activeTab === tab && (
                            <motion.div
                                layoutId="underline"
                                className="absolute bottom-0 left-0 w-full h-1 bg-accent"
                            />
                        )}
                    </button>
                ))}
            </div>

            {/* Content Section with Smooth Transition */}
            <div className="bg-gray-100 p-8 rounded-lg shadow-md">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                    >
                        <h2 className="text-2xl font-semibold text-primary mb-4">Download Documents</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Academic Calendar */}
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.2 }}
                                className="bg-white p-6 rounded-lg shadow"
                            >
                                <h3 className="text-lg font-medium text-gray-800">Academic Calendar</h3>
                                <p className="text-gray-600 mt-1">
                                    View the detailed academic schedule for the current year.
                                </p>
                                <a
                                    href={calendars[activeTab].academicCalendar}
                                    className="inline-flex items-center mt-4 px-6 py-3 bg-accent text-white rounded-md text-lg hover:bg-opacity-80 transition"
                                    download
                                >
                                    <FaDownload className="mr-2" /> Download PDF
                                </a>
                            </motion.div>

                            {/* Holiday List */}
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.2 }}
                                className="bg-white p-6 rounded-lg shadow"
                            >
                                <h3 className="text-lg font-medium text-gray-800">List of Holidays</h3>
                                <p className="text-gray-600 mt-1">
                                    Check the list of holidays declared for the current academic year.
                                </p>
                                <a
                                    href={calendars[activeTab].holidayList}
                                    className="inline-flex items-center mt-4 px-6 py-3 bg-accent text-white rounded-md text-lg hover:bg-opacity-80 transition"
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
