const PhDOverview = () => {
    return (
        <div className="flex flex-col items-center">
            {/* Header */}
            <header className="w-full bg-primary text-white py-12 text-center shadow-lg">
                <h1 className="text-3xl sm:text-4xl font-bold">Doctoral Programme</h1>
                <p className="mt-2 text-gray-200 text-base sm:text-lg">
                    Overview of PhD Program at IIIT Nagpur
                </p>
            </header>

            {/* PhD Categories */}
            <section className="w-full max-w-5xl mt-8 bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-2xl font-semibold text-primary">PhD Categories</h2>
                <ul className="list-disc pl-6 mt-4 text-gray-700">
                    <li><strong>Industry Candidates:</strong> EX-I, IN-IS</li>
                    <li><strong>Academic Institution Candidates:</strong> EX-A, IN-AS</li>
                    <li><strong>Other Candidates:</strong> IN-U, IN-ES</li>
                </ul>
            </section>

            {/* Admission Process */}
            <section className="w-full max-w-5xl mt-8 bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-2xl font-semibold text-primary">Admission Process</h2>
                <p className="mt-2 text-gray-700">
                    Admissions are conducted once a year. Applicants must fill an online form and submit a hard copy to the institute.
                </p>
            </section>

            {/* Examination Pattern */}
            <section className="w-full max-w-5xl mt-8 bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-2xl font-semibold text-primary">Examination Pattern</h2>
                <ul className="list-disc pl-6 mt-4 text-gray-700">
                    <li><strong>Section-1:</strong> General Ability & Communication Skills</li>
                    <li><strong>Section-2:</strong> Subject-Specific Topics</li>
                </ul>
            </section>

            {/* Navigation */}
            <div className="mt-6">
                <a href="/phd-structure" className="px-6 py-2 bg-accent text-white rounded-lg shadow-md">
                    Next →
                </a>
            </div>
        </div>
    );
};

export default PhDOverview;
