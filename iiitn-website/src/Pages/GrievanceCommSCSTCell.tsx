import React from "react";

function GrievanceCommSCSTCell() {
  // Committee Data
  const committeeMembers = [
    { id: 1, name: "Dr. Aishwarya Sagar Anand Ukey", department: "CSE", designation: "Chairman" },
    { id: 2, name: "Dr. Vrinda Yadav", department: "CSE", designation: "Member" },
    { id: 3, name: "Mr. Nikhil Madavi", department: "CSE", designation: "Member" },
    { id: 4, name: "Ms. Reema Dongardive", department: "CSE", designation: "Member" },
    { id: 5, name: "Mr. Ashok Dongare", department: "Admin", designation: "Member" },
  ];

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Header Section */}
      <header className="bg-[#002147] text-white py-16 text-center">
        <h1 className="text-5xl font-bold">Grievance Committee SC/ST Cell</h1>
        <p className="text-lg mt-2 italic">"Ensuring fairness and equal rights for all."</p>
      </header>

      {/* Introduction Section */}
      <section className="max-w-5xl mx-auto bg-white p-6 shadow-lg rounded-lg mt-10">
        <h2 className="text-3xl font-semibold text-[#002147]">📌 About the Committee</h2>
        <p className="text-gray-700 mt-3 leading-relaxed">
          The **Grievance Committee SC/ST Cell (GCC)** is established to address caste-based grievances at IIIT Nagpur. 
          The committee is responsible for investigating complaints, verifying facts, and ensuring a fair resolution process.
        </p>
      </section>

      {/* Committee Members Table */}
      <main className="max-w-6xl mx-auto mt-10 p-6">
        <h2 className="text-3xl font-bold text-[#002147] mb-6 text-center">👥 Committee Members</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg">
            <thead className="bg-[#002147] text-white">
              <tr>
                <th className="py-3 px-6 text-left">#</th>
                <th className="py-3 px-6 text-left">Name</th>
                <th className="py-3 px-6 text-left">Department</th>
                <th className="py-3 px-6 text-left">Designation</th>
              </tr>
            </thead>
            <tbody>
              {committeeMembers.map((member, index) => (
                <tr
                  key={index}
                  className="border-b hover:bg-gray-100 transition"
                >
                  <td className="py-3 px-6">{member.id}</td>
                  <td className="py-3 px-6">{member.name}</td>
                  <td className="py-3 px-6">{member.department}</td>
                  <td className="py-3 px-6 font-semibold">{member.designation}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>

      {/* Contact Information */}
      <section className="max-w-5xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-semibold text-[#002147]">📞 Contact Information</h2>
        <p className="text-gray-700 mt-3 leading-relaxed">
          If you have any grievances or need assistance, please reach out to the **Grievance Committee SC/ST Cell**. 
          All matters will be handled with confidentiality and fairness.
        </p>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-600">
        &copy; {new Date().getFullYear()} IIIT Nagpur | All Rights Reserved
      </footer>
    </div>
  );
}

export default GrievanceCommSCSTCell;
