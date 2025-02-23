import React from "react";

function InternalCompltComm() {
  // Committee Members Data
  const committeeMembers = [
    { id: 1, name: "Dr. Kirti Dorshetwar", designation: "Chairman, Asst. Professor", email: "kdorshetwar@iiitn.ac.in", mobile: "9823190654, 8668766430" },
    { id: 2, name: "Mrs. Pallavi P. Padole", designation: "Member from NGO, Dy. Director, VARDAN, Nagpur", email: "pmpadole@rediffmail.com", mobile: "----" },
    { id: 3, name: "Dr. Nileshchandra Pickle", designation: "Member, Asst. Professor", email: "npickle@iiitn.ac.in", mobile: "7276834418" },
    { id: 4, name: "Dr. Girish Ghivela", designation: "Member, Asst. Professor", email: "gghivela@iiitn.ac.in", mobile: "7008386470" },
    { id: 5, name: "Shri. Rahul Dongardive", designation: "Member, Lab Assistant", email: "lacserahul@iiitn.ac.in", mobile: "7219333382" },
    { id: 6, name: "Mr. Hardik Deore", designation: "Student Representative (BT22CSE123)", email: "bt22cse123@iiitn.ac.in", mobile: "----" },
  ];

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Header Section */}
      <header className="bg-[#002147] text-white py-16 text-center">
        <h1 className="text-5xl font-bold">Internal Complaint Committee</h1>
        <p className="text-lg mt-2 italic">"Ensuring a safe and inclusive environment for all."</p>
      </header>

      {/* Introduction Section */}
      <section className="max-w-5xl mx-auto bg-white p-6 shadow-lg rounded-lg mt-10">
        <h2 className="text-3xl font-semibold text-[#002147]">📌 About the Committee</h2>
        <p className="text-gray-700 mt-3 leading-relaxed">
          The **Internal Complaint Committee (ICC)** of **IIIT Nagpur** is constituted to address and resolve complaints related to 
          **harassment and grievances**. The committee ensures a **safe and respectful work and study environment** for all individuals.
        </p>
      </section>

      {/* Committee Members Table */}
      <section className="max-w-5xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-semibold text-[#002147]">🏛️ Committee Members</h2>
        <div className="overflow-x-auto mt-4">
          <table className="min-w-full bg-white border border-gray-300 shadow-sm rounded-lg">
            <thead className="bg-[#002147] text-white">
              <tr>
                <th className="py-3 px-6 text-left">#</th>
                <th className="py-3 px-6 text-left">Name</th>
                <th className="py-3 px-6 text-left">Designation</th>
                <th className="py-3 px-6 text-left">Email</th>
                <th className="py-3 px-6 text-left">Mobile</th>
              </tr>
            </thead>
            <tbody>
              {committeeMembers.map((member, index) => (
                <tr key={index} className="border-b hover:bg-gray-100 transition">
                  <td className="py-3 px-6">{member.id}</td>
                  <td className="py-3 px-6">{member.name}</td>
                  <td className="py-3 px-6 font-semibold">{member.designation}</td>
                  <td className="py-3 px-6 text-blue-500 hover:underline">
                    <a href={`mailto:${member.email}`}>{member.email}</a>
                  </td>
                  <td className="py-3 px-6">{member.mobile}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Contact Information */}
      <section className="max-w-5xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-semibold text-[#002147]">📞 Contact Information</h2>
        <p className="text-gray-700 mt-3 leading-relaxed">
          For complaints or concerns, please contact the **Internal Complaint Committee** via email. The committee ensures 
          **confidentiality** and a fair resolution process.
        </p>
      </section>

     
    </div>
  );
}

export default InternalCompltComm;
