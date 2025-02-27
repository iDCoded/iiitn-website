import { motion } from "framer-motion";
import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import logo from "../assets/logo.png";

const imgSrc = logo;

const data = [
    "https://docs.google.com/forms/d/e/1FAIpQLSco29-RxP8WzKQkS_E5SkuHMZGaKnHxvvYj-HHWhscQ6t3G6Q/viewform"
];

const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const Footer = () => {
    return (
        <motion.footer
            className="bg-primary text-white py-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            <div className="max-w-7xl mx-auto px-6">

                {/* Quick Links */}
                <motion.div
                    className="flex flex-wrap justify-center space-x-4 text-sm text-gray-300 mb-6"
                    variants={fadeInUp}
                >
                    {["Students", "Faculty & Staff", "Alumni", "Directory", "Contact"].map((item, index) => (
                        <a
                            key={index}
                            href={`/${item.toLowerCase().replace(/ & /g, "and")}`}
                            className="relative group"
                        >
                            {item}
                            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full" />
                        </a>
                    ))}
                </motion.div>

                {/* Grid Sections */}
                <motion.div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Important Links */}
                    <motion.div variants={fadeInUp}>
                        <h4 className="text-lg font-semibold mb-4 text-accent">Important Links</h4>
                        <ul className="space-y-2 text-sm text-gray-300">
                            {[
                                { name: "Grievance", link: "/pages/grievance" },
                                { name: "Grievance Committee SC/ST Cell", link: "/pages/grievance_committee_sc_st" },
                                { name: "Anti-Ragging Committee", link: data[0] },
                                { name: "Internal Complaint Committee", link: "/pages/icc" },
                                { name: "Equal Opportunity Cell", link: "/pages/eoc" },
                                { name: "RTI", link: "/pages/rti" },
                                { name: "Networking Complaint", link: data[0] },
                                { name: "Policy for Prevention of Sexual Harassment", link: data[0] }
                            ].map((item, index) => (
                                <li key={index}>
                                    <a
                                        href={item.link}
                                        target={item.link.startsWith("http") ? "_blank" : "_self"}
                                        rel="noopener noreferrer"
                                        className="relative group block"
                                    >
                                        {item.name}
                                        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Academics */}
                    <motion.div variants={fadeInUp}>
                        <h4 className="text-lg font-semibold mb-4 text-accent">Academics</h4>
                        <ul className="space-y-2 text-sm text-gray-300">
                            {["Courses", "Projects", "Publications", "Academic Calendar", "Library"].map((item, index) => (
                                <li key={index}>
                                    <a href={`/academics/${item.toLowerCase().replace(" ", "")}`} className="relative group block">
                                        {item}
                                        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Campus Life */}
                    <motion.div variants={fadeInUp}>
                        <h4 className="text-lg font-semibold mb-4 text-accent">Campus Life</h4>
                        <ul className="space-y-2 text-sm text-gray-300">
                            {["Clubs", "Festivals", "Sports", "Student Governance"].map((item, index) => (
                                <li key={index}>
                                    <a href={`/pages/${item.toLowerCase().replace(" ", "")}`} className="relative group block">
                                        {item}
                                        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Happenings */}
                    <motion.div variants={fadeInUp}>
                        <h4 className="text-lg font-semibold mb-4 text-accent">Happenings</h4>
                        <ul className="space-y-2 text-sm text-gray-300">
                            {["Events", "News", "Student Achievements", "Faculty Achievements"].map((item, index) => (
                                <li key={index}>
                                    <a href={`/pages/${item.toLowerCase().replace(" ", "")}`} className="relative group block">
                                        {item}
                                        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </motion.div>

                {/* Institute Logo and Info */}
                <motion.div variants={fadeInUp} className="flex flex-col items-center space-y-3 mt-8">
                    <img src={imgSrc} alt="IIIT Nagpur Logo" className="h-12" />
                    <p className="text-gray-400 text-sm">Indian Institute of Information Technology, Nagpur</p>
                </motion.div>

                {/* Social Media */}
                <motion.div variants={fadeInUp} className="flex justify-center space-x-4 text-xl mt-4">
                    {[FaFacebook, FaLinkedin, FaTwitter, FaInstagram, FaYoutube].map((Icon, index) => (
                        <a key={index} href="#" className="hover:text-accent transition-colors duration-300">
                            <Icon />
                        </a>
                    ))}
                </motion.div>

                {/* Copyright & Legal Links */}
                <motion.div variants={fadeInUp} className="flex flex-col md:flex-row justify-between text-xs text-gray-400 mt-6">
                    <p>© 2025 IIIT Nagpur. All rights reserved.</p>
                    <div className="flex space-x-4">
                        {["Accessibility", "Privacy Policy", "Terms of Use", "Sitemap"].map((item, index) => (
                            <a key={index} href="#" className="relative group">
                                {item}
                                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </motion.footer>
    );
};

export default Footer;
