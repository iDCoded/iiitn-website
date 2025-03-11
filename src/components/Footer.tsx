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
                    className="flex flex-wrap justify-start space-x-4 text-sm text-gray-300 mb-6"
                    variants={fadeInUp}
                >
                    {[{ title: "Students", href: "/students" },
                    { title: "Faculty & Staff", href: "/facultyandstaff" },
                    { title: "Alumni", href: "/alumni" },
                    { title: "Directory", href: "/pages/directory" },
                    { title: "Contact", href: "/contact" }
                    ].map((item, index) => (
                        <a
                            key={index}
                            href={item.href}
                            className="relative group inline-block"
                        >
                            {item.title}
                            <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                        </a>
                    ))}
                </motion.div>

                {/* Grid Sections */}
                <motion.div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-left">

                    {/* Important Links */}
                    <motion.div variants={fadeInUp}>
                        <h4 className="text-lg font-semibold mb-4 text-accent">Important Links</h4>
                        <ul className="space-y-2 text-sm text-gray-300">
                            {[
                                { name: "Grievance", link: "/pages/grievance" },
                                { name: "Grievance Committee SC/ST Cell", link: "/pages/grievance_committee_sc_st" },
                                { name: "Anti-Ragging Committee", link: "/pages/antiragging" },
                                { name: "Internal Complaint Committee", link: "/pages/icc" },
                                { name: "Equal Opportunity Cell", link: "/pages/eoc" },
                                { name: "RTI", link: "/pages/rti" },
                                { name: "Networking Complaint", link: data[0] },
                                { name: "Policy for Prevention of Sexual Harassment", link: "https://iiitn.ac.in/Downloads/Policy%20of%20Prevention%20of%20Sexual%20Harassment%20of%20Women%20at%20Workplace.pdf" }
                            ].map((item, index) => (
                                <li key={index}>
                                    <a
                                        href={item.link}
                                        target={item.link.startsWith("http") ? "_blank" : "_self"}
                                        rel="noopener noreferrer"
                                        className="relative group inline-block"
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
                            {[
                                { name: "Courses", link: "/academics/courses" },
                                { name: "Projects", link: "/research/projects" },
                                { name: "Publications", link: "/research/publications" },
                                { name: "Academic Calendar", link: "/academics/calendar" },
                                { name: "Library", link: "/academics/library" }
                            ].map((item, index) => (
                                <li key={index}>
                                    <a href={item.link} className="relative group inline-block">
                                        {item.name}
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
                            {[
                                { name: "Events", link: "/events" },
                                { name: "News", link: "/news" },
                                { name: "Student Achievements", link: "/pages/studentachievements" },
                                { name: "Faculty Achievements", link: "/pages/facultyachievements" }
                            ].map((item, index) => (
                                <li key={index}>
                                    <a href={item.link} className="relative group inline-block">
                                        {item.name}
                                        <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Address */}
                    <motion.div variants={fadeInUp} className="space-y-3">
                        <h4 className="text-lg font-semibold mb-4 text-accent">Address</h4>
                        <p className="text-gray-400 text-sm font-semibold">
                            Indian Institute of Information Technology, Nagpur
                        </p>
                        <p className="text-gray-400 text-sm">
                            Survey No. 140,141/1 Behind Br. Sheshrao Wankhade Shetkari Sahkari Soot Girni, <br />
                            Waranga, PO: Dongargaon(Butibori), District: Nagpur - 441108, Maharashtra, India.
                        </p>

                        <div className="flex items-center space-x-2">
                            📞
                            <a href="tel:+919405215010" className="hover:text-accent transition-colors duration-300">
                                +91 9405215010
                            </a>
                        </div>
                        <div className="flex items-center space-x-2">
                            ✉️
                            <a href="mailto:registrar@iiitn.ac.in" className="hover:text-accent transition-colors duration-300">
                                registrar@iiitn.ac.in
                            </a>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Social Media & Copyright */}
                <motion.div variants={fadeInUp} className="flex flex-col items-center text-left mt-6">
                    <img src={imgSrc} alt="IIIT Nagpur Logo" className="h-12 mb-4" />

                    <div className="flex space-x-4">
                        {[FaFacebook, FaLinkedin, FaTwitter, FaInstagram, FaYoutube].map((Icon, index) => (
                            <a key={index} href="#" className="hover:text-accent transition-colors duration-300">
                                <Icon />
                            </a>
                        ))}
                    </div>

                    <p className="text-xs text-gray-400 mt-4">© 2025 IIIT Nagpur. All rights reserved.</p>
                </motion.div>
            </div>
        </motion.footer>
    );
};

export default Footer;
