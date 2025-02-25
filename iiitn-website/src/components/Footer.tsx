import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import logo from "../assets/logo.png"; // Logo Image

const imgSrc = logo;



const data = [
    "https://docs.google.com/forms/d/e/1FAIpQLSco29-RxP8WzKQkS_E5SkuHMZGaKnHxvvYj-HHWhscQ6t3G6Q/viewform"
]

const Footer = () => {
    return (
        <footer className="bg-primary text-white py-10">
            <div className="max-w-7xl mx-auto px-6">

                {/* Quick Links */}
                <div className="flex flex-wrap justify-center space-x-4 text-sm text-gray-300 mb-6">
                    <a href="/students" className="hover:text-white">Students</a>
                    <a href="/facultyandstaff" className="hover:text-white">Faculty & Staff</a>
                    <a href="/alumni" className="hover:text-white">Alumni</a>
                    
                    <a href="/pages/directory" className="hover:text-white">Directory</a>
                    <a href="/contact" className="hover:text-white">Contact</a>
                </div>

                {/* Grid Sections */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

                    {/* Important Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-accent">Important Links</h4>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li><a href="/pages/grievance" className="hover:text-white">Grievance</a></li>
                            <li><a href="/pages/grievance_committee_sc_st" className="hover:text-white">Grievance Committee SC/ST Cell</a></li>
                            <li> <a
                                    href={data[0]}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-white font-medium transition duration-300"
                                >Anti-Ragging Committee</a></li>
                            <li><a href="/pages/icc" className="hover:text-white">Internal Complaint Committee</a></li>
                            <li><a href="/pages/eoc" className="hover:text-white">Equal Opportunity Cell</a></li>
                            <li><a href="/pages/rti" className="hover:text-white">RTI</a></li>
                            <li>
                                <a
                                    href={data[0]}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-white font-medium transition duration-300"
                                >
                                    Networking Complaint
                                </a>
                            </li>
                            <li> <a
                                    href={data[0]}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-white font-medium transition duration-300">
                                        Policy for Prevention of Sexual Harrasment of Women at Workplace</a></li>
                        </ul>
                    </div>

                    {/* Academics */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-accent">Academics</h4>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li><a href="/academics/courses" className="hover:text-white">Courses</a></li>
                            <li><a href="/research/projects" className="hover:text-white">Projects</a></li>
                            <li><a href="/research/publications" className="hover:text-white">Publications</a></li>
                            <li><a href="#" className="hover:text-white">Academic Calendar</a></li>
                            <li><a href="/pages/library" className="hover:text-white">Library</a></li>
                        </ul>
                    </div>

                    {/* Campus Life */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-accent">Campus Life</h4>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li><a href="/pages/studentclubs" className="hover:text-white">Clubs</a></li>
                            <li><a href="/pages/festivals" className="hover:text-white">Festivals</a></li>
                            <li><a href="/pages/sports" className="hover:text-white">Sports</a></li>
                            <li><a href="/pages/studentgovernance" className="hover:text-white">Student Governance</a></li>
                        </ul>
                    </div>

                    {/* Happenings */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-accent">Happenings</h4>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li><a href="/events" className="hover:text-white">Events</a></li>
                            <li><a href="/news" className="hover:text-white">News</a></li>
                            <li><a href="/pages/studentachievements" className="hover:text-white">Student Achievements</a></li>
                            <li><a href="/pages/facultyachievements" className="hover:text-white">Faculty Achievements</a></li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-700 my-6"></div>

                {/* Bottom Links */}
                <div className="flex flex-wrap justify-center space-x-4 text-sm text-gray-300 mb-6">
                    
                    <a href="/about" className="hover:text-white">Act & Statutes</a>
                    <a href="/pages/annualreports" className="hover:text-white">Annual Reports</a>
                    <a href="/pages/rtireports" className="hover:text-white">RTI Reports</a>
                    
                </div>

                {/* Institute Logo and Info */}
                <div className="flex flex-col items-center space-y-3">
                    <img src={imgSrc} alt="IIIT Nagpur Logo" className="h-12" />
                    <p className="text-gray-400 text-sm">Indian Institute of Information Technology, Nagpur</p>
                </div>

                {/* Social Media */}
                <div className="flex justify-center space-x-4 text-xl mt-4">
                    <a href="#" className="hover:text-accent"><FaFacebook /></a>
                    <a href="#" className="hover:text-accent"><FaLinkedin /></a>
                    <a href="#" className="hover:text-accent"><FaTwitter /></a>
                    <a href="#" className="hover:text-accent"><FaInstagram /></a>
                    <a href="#" className="hover:text-accent"><FaYoutube /></a>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-700 my-6"></div>

                {/* Legal & Copyright */}
                <div className="flex flex-col md:flex-row justify-between text-xs text-gray-400">
                    <p>© 2025 IIIT Nagpur. All rights reserved.</p>
                    <div className="flex space-x-4">
                        <a href="#" className="hover:text-white">Accessibility</a>
                        <a href="#" className="hover:text-white">Privacy Policy</a>
                        <a href="#" className="hover:text-white">Terms of Use</a>
                        <a href="#" className="hover:text-white">Sitemap</a>
                    </div>
                </div>

                {/* Last Updated */}
                <p className="text-center text-xs text-gray-400 mt-4">
                    Website last updated on: {new Date().toLocaleString()}
                </p>
            </div>
        </footer>
    );
};

export default Footer;
