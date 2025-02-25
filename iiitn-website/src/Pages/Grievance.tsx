import React from "react";

function Grievance() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header Section */}
      <header className="bg-primary text-white py-16 text-center">
        <h1 className="text-5xl font-bold">Grievance Portal</h1>
        <p className="text-lg mt-2 italic">
          "Ensuring a fair and transparent resolution process"
        </p>
      </header>

      {/* Introduction Section */}
      <section className="max-w-5xl mx-auto bg-white p-6 shadow-lg rounded-lg mt-10">
        <h2 className="text-3xl font-semibold text-primary"><span className="text-accent text-4xl">| </span>About the Portal</h2>
        <p className="text-gray-700 mt-3 leading-relaxed">
          This portal allows <strong>students, faculty, and staff</strong> to submit grievances related to academic, administrative, or other concerns. 
          Complaints will be reviewed and resolved by the competent authority, ensuring fairness and transparency.
        </p>
      </section>

      {/* Grievance Submission Section */}
      <main className="max-w-6xl mx-auto mt-10 p-6">
        <h2 className="text-3xl font-bold text-primary mb-6 text-left"><span className="text-accent text-4xl">| </span> Submit a Grievance</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <a href="#" className="block bg-primary text-white text-center py-4 rounded-lg shadow-md hover:bg-[#001730] transition">
            🎓 Student Grievance Portal
          </a>
          <a href="#" className="block bg-primary text-white text-center py-4 rounded-lg shadow-md hover:bg-[#001730] transition">
            👨‍🏫 Faculty / Staff Grievance Portal
          </a>
          <a href="#" className="block bg-primary text-white text-center py-4 rounded-lg shadow-md hover:bg-[#001730] transition">
            📋 General Grievance Portal
          </a>
        </div>
      </main>

      {/* Information Section */}
      <section className="max-w-5xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-semibold text-primary"><span className="text-accent text-4xl">| </span> How It Works?</h2>
        <ul className="list-disc pl-6 mt-6 text-gray-700 space-y-3">
            <li className="list-none">📌 Submit your complaint under the relevant category.</li>
            <li className="list-none">📌 The concerned authorities will validate and review the complaint.</li>
            <li className="list-none">📌 Once resolved, a response will be provided to the complainant.</li>
            <li className="list-none">📌 All grievances are handled with confidentiality and fairness.</li>
        </ul>
      </section>

      {/* Footer Section */}
      <footer className="text-center py-6 text-gray-600">
        &copy; {new Date().getFullYear()} IIIT Nagpur | All Rights Reserved
      </footer>
    </div>
  );
}

export default Grievance;
