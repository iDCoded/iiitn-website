import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaDownload } from "react-icons/fa";

type Notice = {
    title: string;
    date: string;
    details: string;
    attachment?: string;
    link: string;
};

const noticesData: { [key in TabType]: Notice[] } = {
    students: [
        { title: "Exam Schedule Released", date: "Feb 20, 2025", details: "The mid-term exam schedule has been released.", attachment: "/pdfs/exam-schedule.pdf", link: "/notices/exam-schedule" },
        { title: "Scholarship Applications Open", date: "Feb 15, 2025", details: "Students can apply for merit-based scholarships until March 10.", link: "/notices/scholarship-applications" },
    ],
    faculty: [
        { title: "Faculty Meeting on March 5", date: "Feb 18, 2025", details: "A mandatory faculty meeting will be held at 10 AM in Room 101.", link: "/notices/faculty-meeting" },
        { title: "Research Grant Applications", date: "Feb 12, 2025", details: "Faculty members are invited to submit research grant applications.", link: "/notices/research-grants" },
    ],
    institute: [
        { title: "Annual Convocation Date Announced", date: "Feb 10, 2025", details: "The annual convocation will be held on April 15.", link: "/notices/convocation-2025" },
        { title: "New Library Timings", date: "Jan 28, 2025", details: "The library will now be open from 8 AM to 10 PM on weekdays.", link: "/notices/library-timings" },
    ],
};

type TabType = "students" | "faculty" | "institute";

const NoticesPage = () => {
    const [activeTab, setActiveTab] = useState<TabType>("students");

    return (
        <div className="container mx-auto max-w-6xl px-4 py-12">
            {/* Heading */}
            <div className="text-center mb-8">
                <h1 className="text-4xl font-semibold text-primary">Notices</h1>
                <p className="text-gray-600 mt-2 text-lg">
                    Stay updated with the latest announcements and important notices.
                </p>
            </div>

            {/* Tabs */}
            <div className="flex justify-start mb-8 border-b">
                {["students", "faculty", "institute"].map((tab) => (
                    <button
                        key={tab}
                        className={`px-6 py-3 text-lg font-medium transition relative ${
                            activeTab === tab ? "text-white bg-primary" : "text-primary bg-gray-100"
                        }`}
                        onClick={() => setActiveTab(tab as TabType)}
                    >
                        {tab.charAt(0).toUpperCase() + tab.slice(1)}
                        {activeTab === tab && (
                            <motion.div
                                layoutId="underline"
                                className="absolute bottom-0 left-0 w-full h-1 bg-accent"
                            />
                        )}
                    </button>
                ))}
            </div>

            {/* Notices List with Animation */}
            <div className="bg-gray-100 p-8 rounded-lg shadow-md">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                    >
                        <h2 className="text-2xl font-semibold text-primary mb-4">
                            {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)} Notices
                        </h2>

                        <ul>
                            {noticesData[activeTab].map((notice, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.3, delay: index * 0.1 }}
                                    className="bg-white p-6 mb-4 rounded-lg shadow"
                                >
                                    {/* Notice Title (Clickable) */}
                                    <a
                                        href={notice.link}
                                        className="block text-lg font-medium text-primary hover:underline transition"
                                    >
                                        {notice.title}
                                    </a>

                                    {/* Notice Date */}
                                    <p className="text-sm text-gray-500 mt-1">Posted on {notice.date}</p>

                                    {/* Download Button for Attachments */}
                                    {notice.attachment && (
                                        <a
                                            href={notice.attachment}
                                            className="inline-flex items-center mt-3 px-4 py-2 bg-accent text-white rounded-md text-sm hover:bg-opacity-80 transition"
                                            download
                                        >
                                            <FaDownload className="mr-2" /> Download PDF
                                        </a>
                                    )}
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default NoticesPage;
