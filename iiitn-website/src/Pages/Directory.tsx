import { useState, useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const facultyData = [
    {
        name: " Dr. Prasad V. Joshi",
        designation: "Assistant Professor",
        role: "HOD",  
        image: "https://iiitn.ac.in/images/faculty/56/56.JPG?_=20250224142018",
        department: "basic_science",
        joinYear: 2018 ,
        experience: ["2001 – 2018 –  Professor SSTC Bhilai","1996 – 1999 – (CEAT Tyres)(SATL)"],
        teachingPositions: ["1st /2nd  Sem CSE/ECE – Mechanics & Graphics (2018-19, 2019-20)","7th /8th  Sem ECE - Robotics (2019-20)"],
        research: ["Solid Mechanics","Vibration", "Acoustics"],
        education: ["Ph. D. Solid Mechanics NIT Raipur (2015)","M. Tech. NIT Kurukshetra (2001)","B. E. from C.O.E.T.A"],
        contact: "9893195909",
        email: "pjoshi@iiitn.ac.in",
        
        
        },
        {
            "name": "Dr. Charu Goel",
            "designation": "Assistant Professor",
            "role": "Member",  
            "image": "https://iiitn.ac.in/images/faculty/26/26.JPG?_=20250224142018",  
            "department": "basic_science",
            "joinYear": 2018,
            "experience": [
                "2018 to till date - Assistant Professor, IIIT Nagpur",
                "August 2017 - May 2018 - Adjunct Assistant Professor, VNIT Nagpur",
                "Since May 2017 - Vrijwillig academisch medewerker (voluntary academic staff member) at the Department of Mathematics-Computer Science, University of Antwerp, Belgium",
                "May 2016 - August 2017 - Postdoctoral Research Associate, IISER Mohali",
                "May 2015 - April 2016 - Associated Fellow of Zukunftskolleg at University of Konstanz, Germany",
                "August 2014 - December 2015 - Postdoctoral Research Fellow and Academic Assistant, University of Konstanz",
                "August 2013 - December 2015 - Academic Assistant in the Research project: Information- und Gesprächsplattform 'Frauen in der Mathematik: Wege in Studium und Beruf', University of Konstanz",
                "October 2012 - July 2013 - Academic Assistant at the Department of Mathematics and Statistics, University of Konstanz",
                "August 2011 - September 2012 - Research Assistant in the Research project 'Real Algebraic Geometry and Emerging Applications', University of Konstanz",
                "April 2010 - July 2011 - Student Assistant at the Lehrstuhl of Prof. Dr. S. Kuhlmann, Department of Mathematics and Statistics, University of Konstanz"
            ],
            "teachingPositions": [
                "6th/8th Sem CSE/ECE - Applied Linear Algebra (2021)",
                "2nd Sem CSE/ECE - Matrices, Transform Techniques and Differential Equations (2021)",
                "1st Sem CSE/ECE - Calculus for Engineers (2020)",
                "3rd Sem CSE/ECE - Numerical Methods and Probability Theory (2020)",
                "PhD course work CSE/ECE - Mathematics for Engineering Research (2019)",
                "2nd Sem CSE/ECE - Engineering Mathematics-II (2019, 2020)",
                "1st Sem CSE/ECE - Engineering Mathematics-I (2018, 2019)"
            ],
            "research": [
                "Real Algebraic Geometry (Positive Polynomials and Sum of Squares, Invariant Theory)",
                "Quadratic Forms",
                "Polynomial Optimization"
            ],
            "education": [
                "PhD in Mathematics from University of Konstanz, Germany (2014)",
                "CT3-Probability & Mathematical Statistics certificate from Institute of Actuaries of India (2009)",
                "M.Sc. (Honours School) Mathematics from Panjab University, Chandigarh, India (2008)",
                "B.Sc. (Honours School) Mathematics from Panjab University, Chandigarh, India (2006)"
            ],
            "contact": "",
            "email": "charugoel@iiitn.ac.in"
        },
        {
            "name": "Dr. Aatish S. Daryapurkar",
            "designation": "Assistant Professor",
            "role": "Member",
            "image": "https://iiitn.ac.in/images/faculty/24/24.JPG?_=20250224142018",
            "department": "basic_science",
            "joinYear": 2017,
            "experience": [
                "Jan 2017 to till date - Assistant Professor, IIIT Nagpur",
                "July 2016 - Dec. 2016 - Adjunct Assistant Professor of Practice, IIIT Nagpur",
                "Feb 2015 - May 2016 - Project Scientist, IIT Kanpur",
                "May 2014 - October 2014 - Project Research Scientist, IIT Mumbai"
            ],
            "teachingPositions": [
                "1st Sem CSE/ECE - Applied Sciences",
                "1st Sem CSE/ECE – Applied Sciences Laboratory",
                "3rd and 4th Sem ECE – Electronic Engineering Materials"
            ],
            "research": [
                "Development of Nanofibrous materials using electrospinning technique for smart Sensors: Applications in Environmental remediation and energy storage",
                "Investigation of multifunctional oxide thin films including multiferroic, dielectric, ferroelectric and piezoelectric thin films grown using various PVD and CVD techniques for various nanoelectronics applications",
                "Explore the perovskite materials for Resistive Switching Devices",
                "Explore the piezoelectric and magnetoelectric materials for energy harvesting applications",
                "Synthesis of ceramic materials using Solid state reaction and Sol-Gel Methods and develop microstructure-property correlation",
                "Synthesis of nanomaterials using Electrospinning Method, Pulsed Laser Deposition, Thermal evaporation, DC and RF Magnetron Sputtering technique",
                "Characterization and analysis using XRD, SEM, AFM, and PFM techniques",
                "Electrical characterization of bulk/thin films related to dielectric, ferroelectric, piezoelectric, multiferroic and magnetoelectric properties",
                "Systematic planning and analysis of experiments using Taguchi Design of Experiment (DoE)"
            ],
            "education": [
                "Ph.D. in Materials Science from IIT Mumbai (2014)",
                "M.Sc. in Physics from Sant Gadgebaba Amravati University, Amravati, Maharashtra (2006)"
            ],
            "contact": "9867245331",
            "email": "asdaryapurkar@iiitn.ac.in"
        },
        {
            "name": "Dr. Chandrashekhar Sakode",
            "designation": "Assistant Professor",
            "role": "Member",
            "image": "https://iiitn.ac.in/images/faculty/55/55.JPG?_=20250224142018",
            "department": "basic_science",
            "joinYear": 2018,
            "experience": [
                "2018 - till date - Assistant Professor, IIIT Nagpur",
                "2017 - 2018 - Assistant Professor, PJLCE Nagpur",
                "2016 - 2017 - Assistant Professor, YCCE Nagpur"
            ],
            "teachingPositions": [
                "4th Sem ECE – Control Systems",
                "6th and 7th Sem ECE/CSE – Neuro-Fuzzy Techniques",
                "1st Sem ECE/CSE - Elements of Electrical Engineering",
                "2nd Sem ECE/CSE - Digital Electronics",
                "3rd Sem ECE - Network Theory"
            ],
            "research": [
                "Control Systems",
                "Optimization",
                "Biomedical Systems"
            ],
            "education": [
                "PhD in Control Systems from Indian Institute of Science Bangalore (2016)",
                "M. Tech. in Control Systems from VJTI Mumbai (2007)",
                "B. E. in Electrical Engineering from KDKCE Nagpur (2005)"
            ],
            "contact": "8971623875",
            "email": "chandrashekhar.sakode@iiitn.ac.in",
           
          
          
        },
        {
            "name": "Dr. Nishat A. Ansari",
            "designation": "Assistant Professor & HOD",
            "role": "HOD",
            "image": "https://iiitn.ac.in/images/faculty/33/33.jpg?_=20250224145236",
            "department": "cse",
            "joinYear": 2019,
            "experience": [
                "July 2019 - till date - Assistant Professor, IIIT Nagpur",
                "2009 - June 2019 - Assistant Professor, RCOEM Nagpur",
                "2005 - 2007 - Lecturer, PCE Nagpur",
                "2003 - 2005 - Teaching Assistant, VNIT Nagpur"
            ],
            "teachingPositions": [
                "5th Sem CSE - Computer Networks"
            ],
            "research": [
                "Wireless Sensor Networks"
            ],
            "education": [
                "PhD in CSE (Wireless Sensor Networks) from VNIT Nagpur (2018)",
                "M. Tech. in CSE from VNIT Nagpur (2009)",
                "B. E. in CSE from Govt. College of Engineering, Amravati (2002)"
            ],
            "contact": "0",
            "email": "nishat.ansari@iiitn.ac",
        },  
        {
            "name": "Dr. Tausif Diwan",
            "designation": "Associate Dean",
            "role": "Member",
            "image": "https://iiitn.ac.in/images/faculty/40/40.JPG?_=20250224145236",
            "department": "cse",
            "joinYear": 2019,
            "experience": [
                "July 2024 - till date - Associate Dean",
                "July 2022 - June 2024 - HoD CSE",
                "July 2019 - till date - Assistant Professor, IIIT Nagpur",
                "August 2011 - July 2019 - Assistant Professor, RCOEM, Nagpur"
            ],
            "teachingPositions": [
                "4th Sem CSE – Design & Analysis of Algorithms (2021-22)",
                "7th /8th Sem CSE – Neural Networks and Deep Learning (2020, 2021, 2022)",
                "4th Semester CSE – Design and Analysis of Algorithms (2020-2021)",
                "8th Semester CSE/ECE – Neural Network and Deep Learning (2020-2021)",
                "3rd Semester CSE - Data Structures with Applications (2019-2020)",
                "6th Semester CSE – Neural Network and Deep Learning (2019-2020)",
                "2nd Semester CSE - Data Structures (2019-2020)"
            ],
            "research": [
                "Prompt Engineering",
                "Large Language Models & Transformers",
                "Generative AI in NLP and Computer Vision",
                "Meta Learning, Federated Learning",
                "Applied Deep Learning & Machine Learning (Healthcare, Sentiment Analysis, Plant leaf disease detection, Fake news detection, & Deepfake)",
                "Parallel and Distributed Computing"
            ],
            "education": [
                "PhD in Parallel Computing from VNIT Nagpur (2017)",
                "M. Tech. in CSE from VNIT Nagpur (2011)",
                "B. E. in Computer Science from RTMNU Nagpur (2008)"
            ],
            "contact": "9890280388",
            "email": "tdiwan@iiitn.ac.in"
        },
        {
            "name": "Dr. Jitendra V. Tembhurne",
            "designation": "Assistant Professor",
            "role": "Member",
            "image": "https://iiitn.ac.in/images/faculty/32/32.JPG?_=20250224145236",
            "department": "cse",
            "joinYear": 2018,
            "experience": [
                "2022 - till date – Assistant Professor, IIIT Nagpur",
                "2020 - 2022 – Head of the Department & Assistant Professor, IIIT Nagpur",
                "2018 - 2020 – Assistant Professor, IIIT Nagpur",
                "2016 - 2018 – Assistant Professor, SVPCET Nagpur",
                "2007 - 2011 – Assistant Professor, KITS Ramtek Nagpur",
                "2005 - 2006 – Lecturer, KITS Ramtek Nagpur"
            ],
            "teachingPositions": [
                "5th Sem CSE - Database Management Systems (2018-19, 2019-20, 2020-21, 2021-22, 2022-23)",
                "2nd Sem ECE – Data Structures (2021-22)",
                "7th Sem CSE – Quantum Computing (2021-22, 2022-23)",
                "4th Sem CSE - Algorithms (2018-19, 2019-20, 2022-23)"
            ],
            "research": [
                "Deep Learning",
                "Machine Learning",
                "Information Security",
                "Blockchain",
                "Parallel Computing",
                "Quantum Computing",
                "Data Science",
                "Data Mining"
            ],
            "education": [
                "PhD in Parallel Computing from VNIT Nagpur (2017)",
                "M.E. in CSE from MGMCoE Nanded (2011)",
                "B. E. in Computer Technology from KITS Ramtek Nagpur (2003)"
            ],
            "contact": "9823504363",
            "email": "jtembhurne@iiitn.ac.in"
        },
        {
            "name": "Dr. Milind R. Penurkar",
            "designation": "Assistant Professor",
            "role": "Member",
            "image": "https://iiitn.ac.in/images/faculty/37/37.JPG?_=20250224145236",
            "department": "cse",
            "joinYear": 2019,
            "experience": [
                "July 2019 - till date - Assistant Professor, IIIT Nagpur",
                "2017 - 2019 - Associate Professor, MIT School of Engineering, MIT ADT University, Pune",
                "2012 - 2017 - Associate Professor, MIT College of Engineering, Pune, SPPU",
                "2007 - 2012 - Assistant Professor, MIT College of Engineering, Pune",
                "2003 - 2007 - Lecturer, MIT College of Engineering, Pune"
            ],
            "teachingPositions": [
                "CSE Sem-VII and VIII: Distributed Computing Systems (2020-21)",
                "CSE Sem IV: Design Principles of Programming Languages (2020-21, 2019-20)",
                "CSE Sem-III: Object-Oriented Programming (2020-21)",
                "CSE SEM-III: Microprocessor and Interfacing (2019-2020)"
            ],
            "research": [
                "Delay Tolerant Networks / Vehicular Delay Tolerant Networks",
                "Mobile Social Networks",
                "Machine Learning",
                "Operating System",
                "Distributed System"
            ],
            "education": [
                "PhD in CSE from VNIT, Nagpur (2018)",
                "M.Tech. in Computer Engineering from College of Engineering, Pune (2007)",
                "B. E. in CSE from SGGS Institute of Engineering and Technology, Nanded (2001)"
            ],
            "contact": "9552559528",
            "email": "milindpenurkar@iiitn.ac.in"
        },
        {
            "name": "Dr. Harsh Goud",
            "designation": "Assistant Professor & HOD",
            "role": "HOD",
            "image": "https://iiitn.ac.in/images/faculty/87/87.JPG?_=20250224150413",
            "department": "ece",
            "joinYear": 2021,
            "experience": [
                "2021 to till date – Assistant Professor, IIIT Nagpur",
                "2010 – 2020 – Assistant Professor, IES, IPSA Indore",
                "2009 – 2010 – Assistant Professor, CIIT Indore"
            ],
            "research": [
                "Process Control System",
                "PID Controller",
                "Model Reference Adaptive Controller",
                "Artificial Intelligence"
            ],
            "education": [
                "Ph. D. in Process Control System from MANIT Bhopal (2019)",
                "M. Tech. in Digital Techniques and Instrumentation from SGSITS, Indore (2008)",
                "B. E. in Electronics and Instrumentation from SGSITS, Indore (2006)"
            ],
            "contact": "9827554326",
            "email": "hgoud@iiitn.ac.in"
        },
        {
            "name": "Dr. Mayur R. Parate",
            "designation": "Assistant Professor",
            "role": "Member",
            "image": "https://iiitn.ac.in/images/faculty/54/54.jpg?_=20250224150413",
            "department": "ece",
            "joinYear": 2019,
            "experience": [
                "August 2019 to till date - Assistant Professor, IIIT Nagpur",
                "February 2018 - July 2019 - Assistant Professor, IIIT Pune",
                "August 2009 - April 2010 - Lecturer, JDIET, Yavatmal"
            ],
            "teaching": [
                "3rd Sem ECE - Network Theory (2019 - 2020)",
                "5th Sem ECE/CSE - Embedded Systems (2019 - 2020)"
            ],
            "research": [
                "Arbitrary object tracking in videos",
                "Development of appearance model of an object for computer vision application (Tracking)"
            ],
            "education": [
                "PhD in Image Processing and Computer Vision from VNIT, Nagpur (2018)",
                "M.E. in Digital Electronics from SGBAU, Amravati (2013)",
                "B.E. in Electronics and Telecommunication Engineering from SGBAU, Amravati (2009)"
            ],
            "contact": "7387439968",
            "email": "mparate@iiitn.ac.in"
        },
        {
            "name": "Dr. Tapan K. Jain",
            "designation": "Assistant Professor",
            "role": "Member",
            "image": "https://iiitn.ac.in/images/faculty/41/41.JPG?_=20250224150413",
            "department": "ece",
            "joinYear": 2018,
            "experience": [
                "July 2018 to till date - Assistant Professor, IIIT Nagpur",
                "July 2015 - July 2018 - Assistant Professor, IIIT Kota",
                "August 2009 - July 2015 - Assistant Professor, JUIT Solan",
                "2007 - August 2009 - Sr. Software Engineer, CRMnext India",
                "July 2005 - May 2009 - Software Engineer, KLA Tencor India Pvt. Ltd.",
                "July 2001 - July 2003 - Lecturer, JEC, Jabalpur"
            ],
            "teaching": [
                "VI Semester CSE/ECE - Digital Image Processing",
                "IV Semester ECE - Analog Communication",
                "V Semester ECE - Digital Communication",
                "III Semester ECE - Analog IC's",
                "II Semester CSE / ECE - Digital Electronics"
            ],
            "research": [
                "Wireless Sensor Network",
                "Wireless Communication",
                "Image Processing",
                "IoT and Data Analytics"
            ],
            "education": [
                "PhD in Wireless Sensor Network from JUIT, Solan",
                "M. Tech. in ECE from COEP",
                "B.E. in Electronics and Telecommunication Engineering from RGPV, Bhopal"
            ],
            "contact": "9736226189",
            "email": "tapan.jain@iiitn.ac.in"
        },
        {
            "name": "Dr. Rashmi A. Pandhare",
            "designation": "Assistant Professor",
            "role": "Member",
            "image": "https://iiitn.ac.in/images/faculty/53/53.JPG?_=20250224150413",
            "department": "ece",
            "joinYear": 2019,
            "experience": [
                "2019 to till date – Assistant Professor, IIIT Nagpur",
                "2017 – 2019 – Assistant Professor, BIT Wardha",
                "2009 – 2017 – Assistant Professor, DMIETR Wardha"
            ],
            "teaching": [
                "1st Sem CSE – Electronics Devices and Circuits (2019-20)",
                "5th Sem ECE – Analog and Digital Communication (2020-21)",
                "6th Sem ECE – Wireless Communication (2019-20, 2020-21)",
                "8th Sem ECE – Optical Communication (2019-20, 2020-21)"
            ],
            "research": [
                "High Gain Antennas",
                "UWB Antennas",
                "Reconfigurable Antennas"
            ],
            "education": [
                "PhD in Antenna from RTMNU (2018)",
                "M. Tech. in ECE from RTMNU (2011)",
                "B.E. in ECE from PDYPCE, Pune University (2004)"
            ],
            "contact": "8007923155",
            "email": "rpandhare@iiitn.ac.in"
        }
         
];

const staffData = [
    { name: "Mr. Nikhil Madavi", designation: "Lab Technician", qualification: "B.Sc. Physics", contact: "lacsenikhil@iiitn.ac.in	", image: "https://iiitn.ac.in/images/Staff/Mr.%20Nikhil%20Madavi.JPG", department: "cse" },
   
];

const Directory = () => {
    const [selectedTab, setSelectedTab] = useState<"faculty" | "staff">("faculty");
    const navigate = useNavigate();
    const location = useLocation();

    // Extract department from query params
    const queryParams = new URLSearchParams(location.search);
    const department = queryParams.get("department") as "cse" | "ece" | "basic_science" | null;

    console.log(department);

    // Filter faculty and staff based on department
    const filteredFaculty = useMemo(() => {
        return department ? facultyData.filter((f) => f.department === department) : facultyData;
    }, [department]);

    const filteredStaff = useMemo(() => {
        return department ? staffData.filter((s) => s.department === department) : staffData;
    }, [department]);

    return (
        <div className="max-w-6xl mx-auto px-6 py-10">
            <h1 className="text-3xl font-bold mb-6 flex items-center">
                <span className="text-accent text-4xl mr-2">|</span> Faculty & Staff Directory
            </h1>

            {/* Tabs */}
            <div className="flex gap-4 mb-6 border-b border-gray-300">
                {["faculty", "staff"].map((tab) => (
                    <button
                        key={tab}
                        className={`relative px-6 py-2 text-lg font-medium transition-all duration-300 ${selectedTab === tab ? "text-accent font-bold" : "text-gray-500 hover:text-gray-700"
                            }`}
                        onClick={() => setSelectedTab(tab as "faculty" | "staff")}
                    >
                        {tab.toUpperCase()}
                        {selectedTab === tab && (
                            <motion.div layoutId="underline" className="absolute left-0 bottom-0 h-[3px] bg-accent w-full" />
                        )}
                    </button>
                ))}
            </div>

            {/* Faculty Section */}
            {selectedTab === "faculty" && (
                <motion.div
                    key="faculty"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="flex flex-col gap-6"
                >
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        {filteredFaculty
                            .filter((faculty) => faculty.role === "HOD")
                            .map((faculty, index) => (
                                <div className="flex flex-col" key={index}>
                                    <Card
                                        key={index}
                                        className="shadow-lg border-2 border-accent mx-auto max-w-3xl cursor-pointer hover:shadow-xl transition"
                                        onClick={() => navigate(`/faculty/${encodeURIComponent(faculty.name)}`)}
                                    >
                                        <CardHeader className="text-center">
                                            <h2 className="text-xl font-bold text-accent">Head of Department (HOD)</h2>
                                            <div className="flex justify-center">
                                                <img src={faculty.image} alt={faculty.name} className="w-40 h-40 rounded-full object-cover shadow-md" />
                                            </div>
                                        </CardHeader>
                                        <CardContent className="text-center">
                                            <h3 className="text-lg font-semibold">{faculty.name}</h3>
                                            <p className="text-gray-600">{faculty.designation}</p>
                                            <p className="text-gray-600">{faculty.department.toUpperCase()}</p>

                                        </CardContent>
                                    </Card>
                                </div>
                            ))}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredFaculty
                            .filter((faculty) => faculty.role === "Member")
                            .map((faculty, index) => (
                                <Card
                                    key={index}
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
                                        <p className="text-gray-600">{faculty.department.toUpperCase()}</p>

                                    </CardContent>
                                </Card>
                            ))}
                    </div>
                </motion.div>
            )}

            {/* Staff Section */}
            {selectedTab === "staff" && (
                <motion.div
                    key="staff"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {filteredStaff.map((staff, index) => (
                        <Card key={index} className="shadow-md cursor-pointer hover:shadow-lg transition">
                            <CardHeader className="text-center">
                                <div className="flex justify-center">
                                    <img src={staff.image} alt={staff.name} className="w-24 h-24 rounded-full object-cover shadow-sm" />
                                </div>
                            </CardHeader>
                            <CardContent className="text-center">
                                <h3 className="text-lg font-semibold">{staff.name}</h3>
                                <p className="text-gray-600">{staff.designation}</p>
                                <p className="text-gray-600">{staff.department.toUpperCase()}</p>
                            </CardContent>
                        </Card>
                    ))}
                </motion.div>
            )}
        </div>
    );
};

export default Directory;
