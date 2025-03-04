import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

interface FacultyStaff {
    f_id: number;
    p_id: number;
    name: string;
    email: string;
    phone_no: string;
    join_year: number;
    positions: string; // Determines if faculty is HOD
    f_or_s: string;
    education: string;
    experience: string;
    teaching: string;
    research: string;
    param: string;
    image: string; // Assuming API provides this
    designation: string;
    department: string;
}

const departments = [
    { id: "cse", name: "Computer Science" },
    { id: "ece", name: "Electronics & Communication" },
    { id: "basic_science", name: "Basic Sciences" }
];

// const facultyData = [
//     {
//         f_id: 1,
//         p_id: 1,
//         name: "Dr. Prasad V. Joshi",
//         email: "pjoshi@iiitn.ac.in",
//         phone_no: "9893195909",
//         join_year: 2018,
//         positions: "HOD",
//         f_or_s: "faculty",
//         education: "Ph. D. Solid Mechanics NIT Raipur (2015), M. Tech. NIT Kurukshetra (2001), B. E. from C.O.E.T.A",
//         experience: "2001 - 2018 - Professor SSTC Bhilai, 1996 - 1999 - (CEAT Tyres)(SATL)",
//         teaching: "1st /2nd Sem CSE/ECE - Mechanics & Graphics (2018-19, 2019-20), 7th /8th Sem ECE - Robotics (2019-20)",
//         research: "Solid Mechanics, Vibration, Acoustics",
//         param: "",
//         image: "https://iiitn.ac.in/images/faculty/56/56.JPG?_=20250224142018",
//         designation: "Assistant Professor",
//         department: "basic_science"
//     },
//     {
//         f_id: 2,
//         p_id: 2,
//         name: "Dr. Charu Goel",
//         email: "charugoel@iiitn.ac.in",
//         phone_no: "0",
//         join_year: 2018,
//         positions: "",
//         f_or_s: "faculty",
//         education: "PhD in Mathematics from University of Konstanz, Germany (2014), CT3-Probability & Mathematical Statistics certificate from Institute of Actuaries of India (2009), M.Sc. (Honours School) Mathematics from Panjab University, Chandigarh, India (2008), B.Sc. (Honours School) Mathematics from Panjab University, Chandigarh, India (2006)",
//         experience: "2018 to till date - Assistant Professor, IIIT Nagpur, August 2017 - May 2018 - Adjunct Assistant Professor, VNIT Nagpur, Since May 2017 - Vrijwillig academisch medewerker (voluntary academic staff member) at the Department of Mathematics-Computer Science, University of Antwerp, Belgium, May 2016 - August 2017 - Postdoctoral Research Associate, IISER Mohali, May 2015 - April 2016 - Associated Fellow of Zukunftskolleg at University of Konstanz, Germany, August 2014 - December 2015 - Postdoctoral Research Fellow and Academic Assistant, University of Konstanz, August 2013 - December 2015 - Academic Assistant in the Research project: Information- und Gesprächsplattform 'Frauen in der Mathematik: Wege in Studium und Beruf', University of Konstanz, October 2012 - July 2013 - Academic Assistant at the Department of Mathematics and Statistics, University of Konstanz, August 2011 - September 2012 - Research Assistant in the Research project 'Real Algebraic Geometry and Emerging Applications', University of Konstanz, April 2010 - July 2011 - Student Assistant at the Lehrstuhl of Prof. Dr. S. Kuhlmann, Department of Mathematics and Statistics, University of Konstanz",
//         teaching: "6th/8th Sem CSE/ECE - Applied Linear Algebra (2021), 2nd Sem CSE/ECE - Matrices, Transform Techniques and Differential Equations (2021), 1st Sem CSE/ECE - Calculus for Engineers (2020), 3rd Sem CSE/ECE - Numerical Methods and Probability Theory (2020), PhD course work CSE/ECE - Mathematics for Engineering Research (2019), 2nd Sem CSE/ECE - Engineering Mathematics-II (2019, 2020), 1st Sem CSE/ECE - Engineering Mathematics-I (2018, 2019)",
//         research: "Real Algebraic Geometry (Positive Polynomials and Sum of Squares, Invariant Theory), Quadratic Forms, Polynomial Optimization",
//         param: "",
//         image: "https://iiitn.ac.in/images/faculty/26/26.JPG?_=20250224142018",
//         "joinYear": 2018,
//         "teachingPositions": [
//             "6th/8th Sem CSE/ECE - Applied Linear Algebra (2021)",
//             "2nd Sem CSE/ECE - Matrices, Transform Techniques and Differential Equations (2021)",
//             "1st Sem CSE/ECE - Calculus for Engineers (2020)",
//             "3rd Sem CSE/ECE - Numerical Methods and Probability Theory (2020)",
//             "PhD course work CSE/ECE - Mathematics for Engineering Research (2019)",
//             "2nd Sem CSE/ECE - Engineering Mathematics-II (2019, 2020)",
//             "1st Sem CSE/ECE - Engineering Mathematics-I (2018, 2019)"
//         ],
//         "contact": "",
//     },
// {
//         f_id: 3,
//         p_id: 3,
//         name: "Dr. Chandrashekhar Sakode",
//         email: "chandrashe
// },
//     {
//         "name": "Dr. Chandrashekhar Sakode",
//         "designation": "Assistant Professor", 
//         "role": "Member",
//         "image": "https://iiitn.ac.in/images/faculty/55/55.JPG?_=20250224142018",
//         "department": "basic_science",
//         "joinYear": 2018,
//         "experience": [
//             "2018 - till date - Assistant Professor, IIIT Nagpur",
//             "2017 - 2018 - Assistant Professor, PJLCE Nagpur",
//             "2016 - 2017 - Assistant Professor, YCCE Nagpur"
//         ],
//         "teachingPositions": [
//             "4th Sem ECE - Control Systems",
//             "6th and 7th Sem ECE/CSE - Neuro-Fuzzy Techniques",
//             "1st Sem ECE/CSE - Elements of Electrical Engineering",
//             "2nd Sem ECE/CSE - Digital Electronics",
//             "3rd Sem ECE - Network Theory"
//         ],
//         "research": [
//             "Control Systems",
//             "Optimization",
//             "Biomedical Systems"
//         ],
//         "education": [
//             "PhD in Control Systems from Indian Institute of Science Bangalore (2016)",
//             "M. Tech. in Control Systems from VJTI Mumbai (2007)",
//             "B. E. in Electrical Engineering from KDKCE Nagpur (2005)"
//         ],
//         "contact": "8971623875",
//         "email": "chandrashekhar.sakode@iiitn.ac.in",
//     },
//     {
//         "name": "Dr. Nishat A. Ansari",
//         "designation": "Assistant Professor & HOD",
//         "role": "HOD",
//         "image": "https://iiitn.ac.in/images/faculty/33/33.jpg?_=20250224145236",
//         "department": "cse",
//         "joinYear": 2019,
//         "experience": [
//             "July 2019 - till date - Assistant Professor, IIIT Nagpur",
//             "2009 - June 2019 - Assistant Professor, RCOEM Nagpur",
//             "2005 - 2007 - Lecturer, PCE Nagpur",
//             "2003 - 2005 - Teaching Assistant, VNIT Nagpur"
//         ],
//         "teachingPositions": [
//             "5th Sem CSE - Computer Networks"
//         ],
//         "research": [
//             "Wireless Sensor Networks"
//         ],
//         "education": [
//             "PhD in CSE (Wireless Sensor Networks) from VNIT Nagpur (2018)",
//             "M. Tech. in CSE from VNIT Nagpur (2009)",
//             "B. E. in CSE from Govt. College of Engineering, Amravati (2002)"
//         ],
//         "contact": "0",
//         "email": "nishat.ansari@iiitn.ac",
//     },
//     {
//         "name": "Dr. Tausif Diwan",
//         "designation": "Associate Dean",
//         "role": "Member",
//         "image": "https://iiitn.ac.in/images/faculty/40/40.JPG?_=20250224145236",
//         "department": "cse",
//         "joinYear": 2019,
//         "experience": [
//             "July 2024 - till date - Associate Dean",
//             "July 2022 - June 2024 - HoD CSE",
//             "July 2019 - till date - Assistant Professor, IIIT Nagpur",
//             "August 2011 - July 2019 - Assistant Professor, RCOEM, Nagpur"
//         ],
//         "teachingPositions": [
//             "4th Sem CSE - Design & Analysis of Algorithms (2021-22)",
//             "7th /8th Sem CSE - Neural Networks and Deep Learning (2020, 2021, 2022)",
//             "4th Semester CSE - Design and Analysis of Algorithms (2020-2021)",
//             "8th Semester CSE/ECE - Neural Network and Deep Learning (2020-2021)",
//             "3rd Semester CSE - Data Structures with Applications (2019-2020)",
//             "6th Semester CSE - Neural Network and Deep Learning (2019-2020)",
//             "2nd Semester CSE - Data Structures (2019-2020)"
//         ],
//         "research": [
//             "Prompt Engineering",
//             "Large Language Models & Transformers",
//             "Generative AI in NLP and Computer Vision",
//             "Meta Learning, Federated Learning",
//             "Applied Deep Learning & Machine Learning (Healthcare, Sentiment Analysis, Plant leaf disease detection, Fake news detection, & Deepfake)",
//             "Parallel and Distributed Computing"
//         ],
//         "education": [
//             "PhD in Parallel Computing from VNIT Nagpur (2017)",
//             "M. Tech. in CSE from VNIT Nagpur (2011)",
//             "B. E. in Computer Science from RTMNU Nagpur (2008)"
//         ],
//         "contact": "9890280388",
//         "email": "tdiwan@iiitn.ac.in"
//     },
//     {
//         "name": "Dr. Jitendra V. Tembhurne",
//         "designation": "Assistant Professor",
//         "role": "Member",
//         "image": "https://iiitn.ac.in/images/faculty/32/32.JPG?_=20250224145236",
//         "department": "cse",
//         "joinYear": 2018,
//         "experience": [
//             "2022 - till date - Assistant Professor, IIIT Nagpur",
//             "2020 - 2022 - Head of the Department & Assistant Professor, IIIT Nagpur",
//             "2018 - 2020 - Assistant Professor, IIIT Nagpur",
//             "2016 - 2018 - Assistant Professor, SVPCET Nagpur",
//             "2007 - 2011 - Assistant Professor, KITS Ramtek Nagpur",
//             "2005 - 2006 - Lecturer, KITS Ramtek Nagpur"
//         ],
//         "teachingPositions": [
//             "5th Sem CSE - Database Management Systems (2018-19, 2019-20, 2020-21, 2021-22, 2022-23)",
//             "2nd Sem ECE - Data Structures (2021-22)",
//             "7th Sem CSE - Quantum Computing (2021-22, 2022-23)",
//             "4th Sem CSE - Algorithms (2018-19, 2019-20, 2022-23)"
//         ],
//         "research": [
//             "Deep Learning",
//             "Machine Learning",
//             "Information Security",
//             "Blockchain",
//             "Parallel Computing",
//             "Quantum Computing",
//             "Data Science",
//             "Data Mining"
//         ],
//         "education": [
//             "PhD in Parallel Computing from VNIT Nagpur (2017)",
//             "M.E. in CSE from MGMCoE Nanded (2011)",
//             "B. E. in Computer Technology from KITS Ramtek Nagpur (2003)"
//         ],
//         "contact": "9823504363",
//         "email": "jtembhurne@iiitn.ac.in"
//     },
//     {
//         "name": "Dr. Milind R. Penurkar",
//         "designation": "Assistant Professor",
//         "role": "Member",
//         "image": "https://iiitn.ac.in/images/faculty/37/37.JPG?_=20250224145236",
//         "department": "cse",
//         "joinYear": 2019,
//         "experience": [
//             "July 2019 - till date - Assistant Professor, IIIT Nagpur",
//             "2017 - 2019 - Associate Professor, MIT School of Engineering, MIT ADT University, Pune",
//             "2012 - 2017 - Associate Professor, MIT College of Engineering, Pune, SPPU",
//             "2007 - 2012 - Assistant Professor, MIT College of Engineering, Pune",
//             "2003 - 2007 - Lecturer, MIT College of Engineering, Pune"
//         ],
//         "teachingPositions": [
//             "CSE Sem-VII and VIII: Distributed Computing Systems (2020-21)",
//             "CSE Sem IV: Design Principles of Programming Languages (2020-21, 2019-20)",
//             "CSE Sem-III: Object-Oriented Programming (2020-21)",
//             "CSE SEM-III: Microprocessor and Interfacing (2019-2020)"
//         ],
//         "research": [
//             "Delay Tolerant Networks / Vehicular Delay Tolerant Networks",
//             "Mobile Social Networks",
//             "Machine Learning",
//             "Operating System",
//             "Distributed System"
//         ],
//         "education": [
//             "PhD in CSE from VNIT, Nagpur (2018)",
//             "M.Tech. in Computer Engineering from College of Engineering, Pune (2007)",
//             "B. E. in CSE from SGGS Institute of Engineering and Technology, Nanded (2001)"
//         ],
//         "contact": "9552559528",
//         "email": "milindpenurkar@iiitn.ac.in"
//     },
//     {
//         "name": "Dr. Harsh Goud",
//         "designation": "Assistant Professor & HOD",
//         "role": "HOD",
//         "image": "https://iiitn.ac.in/images/faculty/87/87.JPG?_=20250224150413",
//         "department": "ece",
//         "joinYear": 2021,
//         "experience": [
//             "2021 to till date - Assistant Professor, IIIT Nagpur",
//             "2010 - 2020 - Assistant Professor, IES, IPSA Indore",
//             "2009 - 2010 - Assistant Professor, CIIT Indore"
//         ],
//         "research": [
//             "Process Control System",
//             "PID Controller",
//             "Model Reference Adaptive Controller",
//             "Artificial Intelligence"
//         ],
//         "education": [
//             "Ph. D. in Process Control System from MANIT Bhopal (2019)",
//             "M. Tech. in Digital Techniques and Instrumentation from SGSITS, Indore (2008)",
//             "B. E. in Electronics and Instrumentation from SGSITS, Indore (2006)"
//         ],
//         "contact": "9827554326",
//         "email": "hgoud@iiitn.ac.in"
//     },
//     {
//         "name": "Dr. Mayur R. Parate",
//         "designation": "Assistant Professor",
//         "role": "Member",
//         "image": "https://iiitn.ac.in/images/faculty/54/54.jpg?_=20250224150413",
//         "department": "ece",
//         "joinYear": 2019,
//         "experience": [
//             "August 2019 to till date - Assistant Professor, IIIT Nagpur",
//             "February 2018 - July 2019 - Assistant Professor, IIIT Pune",
//             "August 2009 - April 2010 - Lecturer, JDIET, Yavatmal"
//         ],
//         "teaching": [
//             "3rd Sem ECE - Network Theory (2019 - 2020)",
//             "5th Sem ECE/CSE - Embedded Systems (2019 - 2020)"
//         ],
//         "research": [
//             "Arbitrary object tracking in videos",
//             "Development of appearance model of an object for computer vision application (Tracking)"
//         ],
//         "education": [
//             "PhD in Image Processing and Computer Vision from VNIT, Nagpur (2018)",
//             "M.E. in Digital Electronics from SGBAU, Amravati (2013)",
//             "B.E. in Electronics and Telecommunication Engineering from SGBAU, Amravati (2009)"
//         ],
//         "contact": "7387439968",
//         "email": "mparate@iiitn.ac.in"
//     },
//     {
//         "name": "Dr. Tapan K. Jain",
//         "designation": "Assistant Professor",
//         "role": "Member",
//         "image": "https://iiitn.ac.in/images/faculty/41/41.JPG?_=20250224150413",
//         "department": "ece",
//         "joinYear": 2018,
//         "experience": [
//             "July 2018 to till date - Assistant Professor, IIIT Nagpur",
//             "July 2015 - July 2018 - Assistant Professor, IIIT Kota",
//             "August 2009 - July 2015 - Assistant Professor, JUIT Solan",
//             "2007 - August 2009 - Sr. Software Engineer, CRMnext India",
//             "July 2005 - May 2009 - Software Engineer, KLA Tencor India Pvt. Ltd.",
//             "July 2001 - July 2003 - Lecturer, JEC, Jabalpur"
//         ],
//         "teaching": [
//             "VI Semester CSE/ECE - Digital Image Processing",
//             "IV Semester ECE - Analog Communication",
//             "V Semester ECE - Digital Communication",
//             "III Semester ECE - Analog IC's",
//             "II Semester CSE / ECE - Digital Electronics"
//         ],
//         "research": [
//             "Wireless Sensor Network",
//             "Wireless Communication",
//             "Image Processing",
//             "IoT and Data Analytics"
//         ],
//         "education": [
//             "PhD in Wireless Sensor Network from JUIT, Solan",
//             "M. Tech. in ECE from COEP",
//             "B.E. in Electronics and Telecommunication Engineering from RGPV, Bhopal"
//         ],
//         "contact": "9736226189",
//         "email": "tapan.jain@iiitn.ac.in"
//     },
//     {
//         "name": "Dr. Rashmi A. Pandhare",
//         "designation": "Assistant Professor",
//         "role": "Member",
//         "image": "https://iiitn.ac.in/images/faculty/53/53.JPG?_=20250224150413",
//         "department": "ece",
//         "joinYear": 2019,
//         "experience": [
//             "2019 to till date - Assistant Professor, IIIT Nagpur",
//             "2017 - 2019 - Assistant Professor, BIT Wardha",
//             "2009 - 2017 - Assistant Professor, DMIETR Wardha"
//         ],
//         "teaching": [
//             "1st Sem CSE - Electronics Devices and Circuits (2019-20)",
//             "5th Sem ECE - Analog and Digital Communication (2020-21)",
//             "6th Sem ECE - Wireless Communication (2019-20, 2020-21)",
//             "8th Sem ECE - Optical Communication (2019-20, 2020-21)"
//         ],
//         "research": [
//             "High Gain Antennas",
//             "UWB Antennas",
//             "Reconfigurable Antennas"
//         ],
//         "education": [
//             "PhD in Antenna from RTMNU (2018)",
//             "M. Tech. in ECE from RTMNU (2011)",
//             "B.E. in ECE from PDYPCE, Pune University (2004)"
//         ],
//         "contact": "8007923155",
//         "email": "rpandhare@iiitn.ac.in"
//     }

// ];

// const staffData = [
//     { name: "Mr. Nikhil Madavi", designation: "Lab Technician", qualification: "B.Sc. Physics", contact: "lacsenikhil@iiitn.ac.in	", image: "https://iiitn.ac.in/images/Staff/Mr.%20Nikhil%20Madavi.JPG", department: "cse" },

// ];

const Directory = () => {
    const [facultyData, setFacultyData] = useState<FacultyStaff[]>([
        {
            f_id: 1,
            p_id: 1,
            name: "Dr. Prasad V. Joshi",
            email: "prasad@iiitn.ac.in",
            phone_no: "9893195909",
            join_year: 2018,
            positions: "HOD",
            f_or_s: "faculty",
            education: "Ph. D. Solid Mechanics NIT Raipur (2015), M. Tech. NIT Kurukshetra (2001), B. E. from C.O.E.T.A",
            experience: "2001 - 2018 - Professor SSTC Bhilai, 1996 - 1999 - (CEAT Tyres)(SATL)",
            teaching: "1st /2nd Sem CSE/ECE - Mechanics & Graphics (2018-19, 2019-20), 7th /8th Sem ECE - Robotics (2019-20)",
            research: "Solid Mechanics, Vibration, Acoustics",
            param: "",
            image: "https://iiitn.ac.in/images/faculty/56/56.JPG?_=20250224142018",
            designation: "Assistant Professor",
            department: "basic_science",
        }
    ]);
    const [staffData, setStaffData] = useState<FacultyStaff[]>([]);
    const [selectedDepartment, setSelectedDepartment] = useState<"cse" | "ece" | "basic_science">("cse");
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/faculty/faculty_staff`);
                const allData: FacultyStaff[] = response.data;

                // Separate faculty and staff
                const faculty = allData.filter((person) => person.f_or_s === "faculty");
                const staff = allData.filter((person) => person.f_or_s === "staff");

                setFacultyData(faculty);
                setStaffData(staff);
                setLoading(false);
            } catch (err) {
                // setError("Failed to load data. Please try again later.");
                setError(null)
                setLoading(false);
                setFacultyData(facultyData);
                setStaffData(staffData);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <p className="text-center text-gray-600 text-lg mt-10">Loading faculty and staff data...</p>;
    }

    if (error) {
        return <p className="text-center text-red-500 text-lg mt-10">{error}</p>;
    }

    return (
        <div className="max-w-6xl mx-auto px-6 py-10">
            <h1 className="text-3xl font-bold mb-6 flex items-center">
                <span className="text-accent text-4xl mr-2">|</span> Faculty & Staff Directory
            </h1>

            {/* Department Tabs */}
            <div className="flex gap-4 mb-6 border-b border-gray-300">
                {departments.map((dept) => (
                    <button
                        key={dept.id}
                        className={`relative px-6 py-2 text-lg font-medium transition-all duration-300 ${selectedDepartment === dept.id ? "text-accent font-bold" : "text-gray-500 hover:text-gray-700"
                            }`}
                        onClick={() => setSelectedDepartment(dept.id as "cse" | "ece" | "basic_science")}
                    >
                        {dept.name.toUpperCase()}
                        {selectedDepartment === dept.id && (
                            <motion.div layoutId="underline" className="absolute left-0 bottom-0 h-[3px] bg-accent w-full" />
                        )}
                    </button>
                ))}
            </div>

            {/* Faculty & Staff Sections with Animation */}
            <motion.div
                key={selectedDepartment}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="space-y-12"
            >
                {/* HOD Section */}
                {facultyData.some((faculty) => faculty.department === selectedDepartment && faculty.positions.includes("HOD")) && (
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">Head of Department</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {facultyData
                                .filter((faculty) => faculty.department === selectedDepartment && faculty.positions.includes("HOD"))
                                .map((hod, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.3, delay: index * 0.05 }}
                                    >
                                        <Card
                                            className="shadow-lg border-2 border-accent cursor-pointer hover:shadow-xl transition"
                                            onClick={() => navigate(`/faculty/${encodeURIComponent(hod.name)}`)}
                                        >
                                            <CardHeader className="text-center">
                                                <div className="flex justify-center">
                                                    <img src={hod.image} alt={hod.name} className="w-28 h-28 rounded-full object-cover shadow-md border-4 border-accent" />
                                                </div>
                                            </CardHeader>
                                            <CardContent className="text-center">
                                                <h3 className="text-lg font-semibold text-accent">{hod.name}</h3>
                                                <p className="text-gray-700 font-medium">{hod.designation}</p>
                                            </CardContent>
                                        </Card>
                                    </motion.div>
                                ))}
                        </div>
                    </div>
                )}

                {/* Faculty Section */}
                <div>
                    <h2 className="text-2xl font-semibold mb-4">Faculty Members</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {facultyData
                            .filter((faculty) => faculty.department === selectedDepartment && !faculty.positions.includes("HOD"))
                            .map((faculty, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: index * 0.05 }}
                                >
                                    <Card
                                        className="shadow-md cursor-pointer hover:shadow-lg transition"
                                        onClick={() => navigate(`/faculty/${encodeURIComponent(faculty.name)}`)}
                                    >
                                        <CardHeader className="text-center">
                                            <div className="flex justify-center">
                                                <img src={faculty.image} alt={faculty.name} className="w-24 h-24 rounded-full object-cover shadow-sm" />
                                            </div>
                                        </CardHeader>
                                        <CardContent className="text-center">
                                            <h3 className="text-lg font-semibold">{faculty.name}</h3>
                                            <p className="text-gray-600">{faculty.designation}</p>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                    </div>
                </div>

                {/* Staff Section */}
                <div>
                    <h2 className="text-2xl font-semibold mb-4">Staff Members</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {staffData
                            .filter((staff) => staff.department === selectedDepartment)
                            .map((staff, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: index * 0.05 }}
                                >
                                    <Card className="shadow-md cursor-pointer hover:shadow-lg transition">
                                        <CardHeader className="text-center">
                                            <h3 className="text-lg font-semibold">{staff.name}</h3>
                                            <p className="text-gray-600">{staff.designation}</p>
                                        </CardHeader>
                                    </Card>
                                </motion.div>
                            ))}
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default Directory;
