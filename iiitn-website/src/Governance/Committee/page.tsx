import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/card";
import heroimage from "../../assets/adminBanner.png";   

const committees = [
    {
        "title": "Board of Governors",
        "asOnDate": "As on 01/10/2024",
        "members": [
            {
                "name": "Shri Ravi Sharma",
                "position": "Chairperson",
                "details": "Chairperson - BoG, IIIT, Una. HP; President - IIT Alumni Council; Chairman - Telecom Equipment Manufacturers Association of India (TEMA); Founder - Prama Jyoti Foundation / Mission Chetna / Subodhanand Foundation."
            },
            {
                "name": "Ms Saumya Gupta",
                "position": "Member",
                "details": "JS (Technical Education), MoE, New Delhi"
            },
            {
                "name": "Dr. Vinod Mohitkar",
                "position": "Member",
                "details": "Director, DTE, Govt. of Maharashtra, Mumbai"
            },
            {
                "name": "Shri Ajay R. Bohora",
                "position": "Member",
                "details": "Co-Founder, HDFC Credila Financial Services, Nashik."
            },
            {
                "name": "Dr. (Mrs) B. Padma S. Rao",
                "position": "Member",
                "details": "Chief Scientist and Head, Environmental Audit and Policy Implementation Div., CSIR-NEERI, Nagpur."
            },
            {
                "name": "Shri. V. Murlidharan",
                "position": "Member",
                "details": "Founder & Managing Trustee, Sevalaya, Chennai"
            },
            {
                "name": "Prof Dr. Anupam Shukla",
                "position": "Member",
                "details": "Director, SVNIT, Surat"
            },
            {
                "name": "Prof. Dr. Rajendra Patrikar",
                "position": "Member",
                "details": "Professor (Center of VLSI & Nanotechnology), VNIT, Nagpur"
            },
            {
                "name": "Dr. Sachin Lodha",
                "position": "Member",
                "details": "Chief Scientist, Corporate Technology Office, TCS, Pune"
            },
            {
                "name": "Professor (Dr.) Prem Lal Patel",
                "position": "Member",
                "details": "Director, VNIT, Nagpur"
            },
            {
                "name": "Dr. Tausif Diwan",
                "position": "Member",
                "details": "Associate Dean, IIIT Nagpur"
            },
            {
                "name": "Dr. Aatish Daryapurkar",
                "position": "Member",
                "details": "Assistant Professor, IIIT Nagpur"
            },
            {
                "name": "Professor (Dr) Prem Lal Patel",
                "position": "Member",
                "details": "Director, IIIT Nagpur"
            },
            {
                "name": "Shri Kailas N. Dakhale",
                "position": "Member Secretary",
                "details": "Registrar, IIIT Nagpur"
            }
        ]
    },
    {
        "title": "Finance Committee",
        "asOnDate": "As on 01/10/2024",
        "members": [
            {
                "name": "Shri Ravi Sharma",
                "position": "Chairperson",
                "details": "Chairperson - BoG, IIIT, Una. HP; President - IIT Alumni Council; Chairman - Telecom Equipment Manufacturers Association of India (TEMA); Founder - Prama Jyoti Foundation / Mission Chetna / Subodhanand Foundation."
            },
            {
                "name": "Shri. N.S. Bisht",
                "position": "Member",
                "details": "Dy. Secretary, IFD, MOE, New Delhi"
            },
            {
                "name": "Professor (Dr) Prem Lal Patel",
                "position": "Member",
                "details": "Director, IIIT Nagpur"
            },
            {
                "name": "Dr. Sachin Virsingh Solanki",
                "position": "Member",
                "details": "Joint Director, Technical Education Regional Office, DTE, Nagpur"
            },
            {
                "name": "Shri Piyush Agrawal",
                "position": "Member",
                "details": "Services Delivery Leader, Tata Consultancy Services Industry Partner"
            },
            {
                "name": "Shri Kailas N. Dakhale",
                "position": "Member Secretary",
                "details": "Registrar, IIIT Nagpur"
            }
        ]
    },
    {
        "title": "Senate",
        "asOnDate": "As on 01/10/2024",
        "members": [
            {
                "name": "Professor (Dr) Prem Lal Patel",
                "position": "Chairman",
                "details": "Director, IIIT Nagpur"
            },
            {
                "name": "Dr A.G. Keskar",
                "position": "Member",
                "details": "Professor, VNIT, Nagpur"
            },
            {
                "name": "Dr Arvind Kumar",
                "position": "Member",
                "details": "Centre Head, TATA Consultancy Services, MIHAN, Nagpur"
            },
            {
                "name": "Shri Bhaskar Sharma",
                "position": "Member",
                "details": "TATA Consultancy Services, MIHAN, Nagpur"
            },
            {
                "name": "Dr. (Mrs) Aparajeeta Ojha",
                "position": "Member",
                "details": "Professor (Department of Computer Science & Engineering), IIITDM, Jabalpur"
            },
            {
                "name": "Dr. (Ms) Pushpa Trivedi",
                "position": "Member",
                "details": "Professor (Department of Humanities), Indian Institute of Technology, Bombay"
            },
            {
                "name": "Dr (Mrs) B. Padma S. Rao",
                "position": "Member",
                "details": "Chief Scientist and Head, Environmental Audit and Policy Implementation Division, CSIR-NEERI, Nagpur"
            },
            {
                "name": "Dr. Tausif Diwan",
                "position": "Member",
                "details": "Associate Dean, IIIT Nagpur"
            },
            {
                "name": "Dr. Nishat Afshan Ansari",
                "position": "Member",
                "details": "HOD, CSE, IIIT Nagpur"
            },
            {
                "name": "Dr. Harsh Goud",
                "position": "Member",
                "details": "HOD, ECE, IIIT Nagpur"
            },
            {
                "name": "Dr. Prasad Joshi",
                "position": "Member",
                "details": "HOD, BS, IIIT Nagpur"
            },
            {
                "name": "Shri Kailas N. Dakhale",
                "position": "Member Secretary",
                "details": "Registrar, IIIT Nagpur"
            }
        ]
    },
    {
        "title": "Building Works Committee",
        "asOnDate": "As on 01/10/2024",
        "members": [
            {
                "name": "Professor (Dr) Prem Lal Patel",
                "position": "Chairman",
                "details": "Director, IIIT Nagpur"
            },
            {
                "name": "Dr. Sachin V. Solanki",
                "position": "Member",
                "details": "Joint Director, Technical Education Regional Office, DTE, Nagpur"
            },
            {
                "name": "Dr. Praful Gharpure",
                "position": "Member",
                "details": "Head (Infrastructure Planning & Development), Representative of TCS"
            },
            {
                "name": "Dr. Dilip Lataye",
                "position": "Member",
                "details": "Prof. & HOD, Civil Engg. Dept., VNIT, Nagpur"
            },
            {
                "name": "Mrs. Varsha Ghushe",
                "position": "Member",
                "details": "Executive Engineer (Civil), Representative of Chief Engineer (Civil), PWD, Nagpur"
            },
            {
                "name": "Shri R.W. Banait",
                "position": "Member",
                "details": "Asst. Superintending Engineer (Electrical), PWD, Nagpur"
            },
            {
                "name": "Shri Kailas N. Dakhale",
                "position": "Member Secretary",
                "details": "Registrar, IIIT Nagpur"
            }
        ]
    }
]



function Committee() {
    return (
        <div className="bg-gray-50 text-gray-900 min-h-screen">
            {/* Hero Section */}
            <header
                className="relative w-full h-75 flex flex-col justify-center items-center text-white text-center shadow-lg"
                style={{
                    backgroundImage: `url(${heroimage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative z-10">
                    <h1 className="text-5xl font-extrabold drop-shadow-lg">Committees at IIIT Nagpur</h1>
                    <p className="text-xl font-medium mt-2">Ensuring Excellence in Leadership</p>
                </div>
            </header>

            {/* Main Layout */}
            <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 flex flex-col lg:flex-row gap-8">
                {/* Sidebar - Only visible on large screens */}
                <aside className="lg:w-1/4 hidden lg:block sticky top-24 self-start">
                    <Card className="shadow-md border border-gray-200">
                        <CardHeader className="bg-[#002147] text-white p-4 rounded-t-lg">
                            <CardTitle className="text-lg font-semibold">Quick Links</CardTitle>
                        </CardHeader>
                        <CardContent className="p-4">
                            <ul className="space-y-2 text-sm">
                                {committees.map((section, index) => (
                                    <li key={index}>
                                        <a
                                            href={`#${section.title.replace(/\s+/g, "-")}`}
                                            className="text-[#002147] hover:text-[#E87722] hover:underline block"
                                        >
                                            {section.title}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </CardContent>
                    </Card>
                </aside>

                {/* Committee Sections */}
                <div className="lg:w-3/4 space-y-8">
                    {committees.map((committee, index) => (
                        <Card key={index} id={committee.title.replace(/\s+/g, "-")} className="shadow-md border border-gray-200">
                            <CardHeader className="bg-[#002147] text-white p-4 rounded-t-lg">
                                <CardTitle>{committee.title}</CardTitle>
                                <p className="text-sm mt-1">{committee.asOnDate}</p>
                            </CardHeader>
                            <CardContent className="p-6">
                                <div className="overflow-x-auto">
                                    <table className="w-full border-collapse border border-gray-300">
                                        <thead>
                                            <tr className="bg-gray-100 text-[#002147]">
                                                <th className="border border-gray-300 p-3">S.No</th>
                                                <th className="border border-gray-300 p-3">Name</th>
                                                <th className="border border-gray-300 p-3">Position</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {committee.members.map((member, idx) => (
                                                <tr key={idx} className="text-center">
                                                    <td className="border border-gray-300 p-3">{idx + 1}</td>
                                                    <td className="border border-gray-300 p-3">
                                                        <div className="text-left">
                                                            <p className="font-semibold text-[#002147]">{member.name}</p>
                                                            <p className="text-sm text-gray-600">{member.details}</p>
                                                        </div>
                                                    </td>
                                                    <td className="border border-gray-300 p-3">{member.position}</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Committee;
