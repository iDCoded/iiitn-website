
const PhDProgram = () => {
    return (
        <div className="flex flex-col items-center">
            {/* Header */}
            <header className="w-full bg-primary text-white py-12 text-center shadow-lg">
                <h1 className="text-3xl sm:text-4xl font-bold">Doctoral Programme</h1>
                <p className="mt-2 text-gray-200 text-base sm:text-lg">Overview of PhD Program at IIIT Nagpur</p>
            </header>

            {/* Overview & Categories */}
            <section className="w-full max-w-5xl mt-8 bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-2xl font-semibold text-primary">PhD Categories</h2>
                <ul className="list-disc pl-6 mt-4 text-gray-700">
                    <li><strong>Industry Candidates:</strong> EX-I, IN-IS</li>
                    <li><strong>Academic Institution Candidates:</strong> EX-A, IN-AS</li>
                    <li><strong>Other Candidates:</strong> IN-U, IN-ES</li>
                </ul>
                <p className="mt-4 text-gray-600">
                    The program is governed by the <a href="/phd-rulebook.pdf" className="text-blue-600 underline">PhD Rule Book</a>.
                </p>
            </section>

            {/* Admission Process */}
            <section className="w-full max-w-5xl mt-8 bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-2xl font-semibold text-primary">Admission Process</h2>
                <p className="mt-2 text-gray-700">
                    Admissions are conducted once a year. Applicants must fill an online form and submit a hard copy to the institute.
                </p>
                <p className="mt-4 text-gray-600">
                    For more details, check the <a href="/admission-guidelines.pdf" className="text-blue-600 underline">Admission Guidelines</a>.
                </p>
            </section>

            {/* Examination Pattern */}
            <section className="w-full max-w-5xl mt-8 bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-2xl font-semibold text-primary">Examination Pattern</h2>
                <p className="mt-2 text-gray-700">The entrance test has two sections:</p>
                <ul className="list-disc pl-6 mt-4 text-gray-700">
                    <li><strong>Section-1:</strong> General Ability & Communication Skills</li>
                    <li><strong>Section-2:</strong> Subject-Specific Topics</li>
                </ul>
            </section>

            {/* Selection Process */}
            <section className="w-full max-w-5xl mt-8 bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-2xl font-semibold text-primary">Selection Process</h2>
                <ol className="list-decimal pl-6 mt-4 text-gray-700">
                    <li><strong>Stage 1:</strong> Entrance Test</li>
                    <li><strong>Stage 2:</strong> Interview</li>
                    <li><strong>Stage 3:</strong> Combined Score Calculation</li>
                </ol>
            </section>

            {/* Programme Features */}
            <section className="w-full max-w-5xl mt-8 bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-2xl font-semibold text-primary">Programme Features</h2>
                <p className="mt-2 text-gray-700">PhD students must complete coursework:</p>
                <ul className="list-disc pl-6 mt-4 text-gray-700">
                    <li><strong>M.Tech Holders:</strong> 6 credits</li>
                    <li><strong>B.Tech Holders:</strong> 12 credits</li>
                    <li>Credits can be earned through <strong>MOOCs</strong> (NPTEL, Coursera, edX, etc.)</li>
                </ul>
            </section>

            {/* Research Areas */}
            <section className="w-full max-w-5xl mt-8 bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-2xl font-semibold text-primary">Research Areas</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
                    <div>
                        <h3 className="text-lg font-semibold">CSE & IT</h3>
                        <ul className="list-disc pl-6 text-gray-700">
                            <li>Machine Learning</li>
                            <li>Artificial Intelligence</li>
                            <li>Big Data Analytics</li>
                            <li>Computer Networks</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-lg font-semibold">ECE</h3>
                        <ul className="list-disc pl-6 text-gray-700">
                            <li>Wireless Sensor Networks</li>
                            <li>Microwave & Antennas</li>
                            <li>Signal Processing</li>
                            <li>Embedded Systems</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Operational Details */}
            <section className="w-full max-w-5xl mt-8 bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-2xl font-semibold text-primary">Operational Details</h2>
                <p className="mt-2 text-gray-700">PhD registration is valid for:</p>
                <ul className="list-disc pl-6 mt-4 text-gray-700">
                    <li><strong>M.Tech Holders:</strong> 6 years</li>
                    <li><strong>B.Tech Holders:</strong> 7 years</li>
                </ul>
            </section>

            {/* Important Forms */}
            <section className="w-full max-w-5xl mt-8 bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-2xl font-semibold text-primary">Important Forms</h2>
                <ul className="list-disc pl-6 mt-4 text-gray-700">
                    <li><a href="/forms/progress-form.pdf" className="text-blue-600 underline">Progress Form</a></li>
                    <li><a href="/forms/phd-seminar.pdf" className="text-blue-600 underline">Pre-Submission Seminar Report</a></li>
                    <li><a href="/forms/no-dues.pdf" className="text-blue-600 underline">No Dues Form</a></li>
                    <li><a href="/forms/thesis-checklist.pdf" className="text-blue-600 underline">Thesis Submission Checklist</a></li>
                </ul>
            </section>

            {/* Contact Information */}
            <section className="w-full max-w-5xl mt-8 bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-2xl font-semibold text-primary">Contact Us</h2>
                <div className="mt-4 text-gray-700">
                    <p><strong>ECE Coordinator:</strong> Dr. Rashmi Pandhare (<a href="mailto:rpandhare@iiitn.ac.in" className="text-blue-600 underline">rpandhare@iiitn.ac.in</a>)</p>
                    <p><strong>CSE Coordinator:</strong> Dr. Mayuri Digalwar (<a href="mailto:mayuri@iiitn.ac.in" className="text-blue-600 underline">mayuri@iiitn.ac.in</a>)</p>
                </div>
            </section>
        </div>
    );
};

export default PhDProgram;
