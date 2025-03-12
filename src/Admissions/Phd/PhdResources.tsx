
const PhDResources = () => {
    return (
        <div className="flex flex-col items-center">
            {/* Header */}
            <header className="w-full bg-primary text-white py-12 text-center shadow-lg">
                <h1 className="text-3xl sm:text-4xl font-bold">PhD Resources</h1>
                <p className="mt-2 text-gray-200 text-base sm:text-lg">
                    Important Forms & Contact Information
                </p>
            </header>

            {/* Important Forms */}
            <section className="w-full max-w-5xl mt-8 bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-2xl font-semibold text-primary">Important Proformas</h2>
                <ul className="list-disc pl-6 mt-4 text-gray-700">
                    <li>
                        <a href="/forms/progress-form.pdf" className="text-blue-600 underline">
                            Progress Form
                        </a>
                    </li>
                    <li>
                        <a href="/forms/phd-seminar.pdf" className="text-blue-600 underline">
                            Ph.D. Pre-Submission Seminar Report
                        </a>
                    </li>
                    <li>
                        <a href="/forms/no-dues.pdf" className="text-blue-600 underline">
                            No Dues Form for PhD Student
                        </a>
                    </li>
                    <li>
                        <a href="/forms/checklist-thesis.pdf" className="text-blue-600 underline">
                            Checklist for Verification at the time of PhD Thesis Submission
                        </a>
                    </li>
                    <li>
                        <a href="/forms/documents-thesis.pdf" className="text-blue-600 underline">
                            Documents for PhD Thesis Submission
                        </a>
                    </li>
                </ul>
            </section>

            {/* Contact Information */}
            <section className="w-full max-w-5xl mt-8 bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-2xl font-semibold text-primary text-center">Contact Us</h2>
                <p className="mt-2 text-gray-700 text-center">
                    For any information related to the Ph.D. program, you can contact the Ph.D. Coordinators at IIIT Nagpur.
                </p>

                {/* Coordinators Container */}
                <div className="mt-6 flex flex-col md:flex-row justify-center items-center gap-8">
                    {/* ECE Coordinator */}
                    <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-md w-full md:w-1/2">
                        <img
                            src="https://via.placeholder.com/150"
                            alt="Dr. Rashmi Pandhare"
                            className="w-24 h-24 object-cover rounded-full border-4 border-primary"
                        />
                        <h3 className="text-lg font-semibold text-primary mt-4">Ph.D. Coordinator (ECE)</h3>
                        <p className="text-gray-700 text-center">Dr. Rashmi Pandhare</p>
                        <p className="text-gray-600 text-center">Assistant Professor, ECE, IIIT Nagpur</p>
                        <a href="mailto:rpandhare@iiitn.ac.in" className="mt-2 text-blue-600 underline">
                            rpandhare@iiitn.ac.in
                        </a>
                    </div>

                    {/* CSE Coordinator */}
                    <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow-md w-full md:w-1/2 h-">
                        <h3 className="text-lg font-semibold text-primary mt-4">Ph.D. Coordinator (CSE)</h3>
                        <img
                            src="https://via.placeholder.com/150"
                            alt="Dr. Mayuri Digalwar"
                            className="w-24 h-24 object-cover rounded-full border-4 border-primary"
                        />
                        <p className="text-gray-700 text-center">Dr. Mayuri Digalwar</p>
                        <p className="text-gray-600 text-center">Assistant Professor, CSE, IIIT Nagpur</p>
                        <a href="mailto:mayuri@iiitn.ac.in" className="mt-2 text-blue-600 underline">
                            mayuri@iiitn.ac.in
                        </a>
                    </div>
                </div>
            </section>


            {/* Navigation */}
            <div className="mt-6">
                <a href="/phd-structure" className="px-6 py-2 bg-gray-400 text-white rounded-lg shadow-md">
                    ← Back
                </a>
            </div>
        </div>
    );
};

export default PhDResources;
