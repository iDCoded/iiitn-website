const officerData = [
    {
        title: "Central Public Information Officer",
        name: "Ms. Shilpa Pawankar",
        designation: "Assistant Registrar (Accounts)",
        institute: "Indian Institute of Information Technology, Nagpur",
        phone: "8080339345",
        email: "aracct@iiitn.ac.in",
        image: "https://iiitn.ac.in/images/Staff/Ms.%20Shilpa%20M.%20Pawankar.JPG",
    },
    {
        title: "First Appellate Authority",
        name: "Shri Kailas N. Dakhale",
        designation: "Registrar",
        institute: "Indian Institute of Information Technology, Nagpur",
        phone: "8087983449",
        email: "registrar@iiitn.ac.in",
        image: "https://iiitn.ac.in/images/Staff/registrar.jpg",
    },
];

function RtiContact() {
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col">
            {/* Header */}
            <header className="bg-primary text-white py-12 text-center">
                <h1 className="text-3xl md:text-5xl font-bold">RTI Officer Details</h1>
                <p className="text-base md:text-lg mt-2 italic">
                    "Transparency and Accountability at IIIT Nagpur."
                </p>
            </header>

            {/* Added Margin Below Header */}
            <div className="mt-8 flex flex-wrap justify-center p-6 gap-6">
                {officerData.map((officer, index) => (
                    <div key={index} className="bg-white shadow-lg rounded-lg p-6 max-w-sm text-center">
                        <img
                            src={officer.image}
                            alt={officer.name}
                            className="w-48 h-48 mx-auto rounded-full object-cover border-4 border-primary"
                        />
                        <h2 className="text-xl font-semibold mt-4">{officer.name}</h2>
                        <p className="text-gray-700">{officer.designation}</p>
                        <p className="text-gray-600 italic">{officer.institute}</p>
                        <p className="text-blue-600 mt-2">📞 {officer.phone}</p>
                        <a href={`mailto:${officer.email}`} className="text-blue-500 underline">
                            ✉ {officer.email}
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default RtiContact;
