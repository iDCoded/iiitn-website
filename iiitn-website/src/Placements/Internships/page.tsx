
const InternshipProgram = () => {
  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Hero Section */}
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold text-[#002147]">SUMMER / WINTER INTERNSHIP PROGRAM</h1>
        <p className="text-lg text-gray-700 mt-4">
          Gain educational and professional research experience at IIIT Nagpur.
        </p>
      </section>

      {/* Details Section */}
      <section className="bg-white shadow-md rounded-lg p-6 my-6">
        <h2 className="text-2xl font-bold text-[#E87722] border-b-2 pb-2">Objective</h2>
        <p className="text-gray-700 mt-2">
          This program is designed for B.Tech / B.E. / MSc. / MCA students across the nation
          to enhance their research exposure at IIIT Nagpur.
        </p>
      </section>

      {/* Internship Details */}
      <section className="bg-gray-100 p-6 rounded-lg my-6">
        <h2 className="text-2xl font-bold text-[#E87722] border-b-2 pb-2">Internship Details</h2>
        <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-3">
          <li>The internship focuses on deep learning under expert faculty supervision.</li>
          <li>Candidates decide the duration of the internship.</li>
          <li>Required documents: Bonafide certificate, Resume, Photo, Payment receipt.</li>
          <li>Interns must follow IIIT-N rules & submit a project report.</li>
          <li>Expected outcomes: Research papers, software products, patents.</li>
        </ul>
      </section>

      {/* Modes of Internship */}
      <section className="grid md:grid-cols-2 gap-6 my-6">
        {[
          { title: "📍 In-campus Internship", description: "Physical presence required. Computational & Library resources provided." },
          { title: "🌍 Online Internship", description: "Remote work with expert guidance. No need for physical presence." }
        ].map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-[#002147]">{item.title}</h3>
            <p className="text-gray-700 mt-2">{item.description}</p>
          </div>
        ))}
      </section>

      {/* Faculty List */}
      <section className="bg-white p-6 rounded-lg shadow-md my-6">
        <h2 className="text-2xl font-bold text-[#E87722] border-b-2 pb-2">Faculty List</h2>
        <table className="w-full mt-4 border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-3">Name</th>
              <th className="border p-3">Email</th>
              <th className="border p-3">Expertise</th>
            </tr>
          </thead>
          <tbody>
            {[
              { name: "Dr. Tausif Diwan", email: "tdiwan@iiitn.ac.in", expertise: "Deep Learning" },
              { name: "Dr. Jitendra Tembhurne", email: "jtembhurne@iiitn.ac.in", expertise: "Quantum Computing, AI" },
              { name: "Dr. Pooja Jain", email: "poojajain@iiitn.ac.in", expertise: "NLP, Machine Learning" }
            ].map((faculty, index) => (
              <tr key={index} className="text-center">
                <td className="border p-3">{faculty.name}</td>
                <td className="border p-3 text-blue-500">{faculty.email}</td>
                <td className="border p-3">{faculty.expertise}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Registration Fee Structure */}
      <section className="grid md:grid-cols-2 gap-6 my-6">
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-[#E87722] border-b-2 pb-2">Registration Fee</h2>
          <table className="w-full mt-4 border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border p-3">Duration</th>
                <th className="border p-3">Fee (INR)</th>
              </tr>
            </thead>
            <tbody>
              {[
                { duration: "2 Months", fee: "₹10,000" },
                { duration: "6 Months", fee: "₹15,000" }
              ].map((item, index) => (
                <tr key={index} className="text-center">
                  <td className="border p-3">{item.duration}</td>
                  <td className="border p-3">{item.fee}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Bank Details */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-[#E87722] border-b-2 pb-2">Bank Details</h2>
          <div className="mt-4 text-gray-700 space-y-2">
            <p><span className="font-semibold">Account Name:</span> IIIT Nagpur</p>
            <p><span className="font-semibold">Bank:</span> State Bank of India</p>
            <p><span className="font-semibold">Branch:</span> IIIT Nagpur Campus</p>
            <p><span className="font-semibold">Account Number:</span> 123456789012</p>
            <p><span className="font-semibold">IFSC Code:</span> SBIN000XXXX</p>
          </div>
          <p className="text-gray-700 mt-4">
            <span className="font-semibold">Note:</span> Please upload the payment receipt while submitting your application.
          </p>
        </div>
      </section>

      {/* Internship Registration Form and Report Accordion */}
      <section className="my-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-[#E87722] border-b-2 pb-2">Internship Registration Form and Report</h2>
          <div className="mt-4 space-y-4">
            <div className="flex-row flex space-x-8">
              <h3 className="text-lg text-[#002147] font-semibold">Internship Application Form</h3>
              <a href="https://iiitn.ac.in/Downloads/internship/newformat2025/1_Application_Form_for_Internship_Program.pdf" className="text-blue-500 mt-2 block">Download</a>
            </div>
            <div className="flex-row flex space-x-8">
              <h3 className="text-lg text-[#002147] font-semibold">Internship Joining Application</h3>
              <a href="https://iiitn.ac.in/Downloads/internship/newformat2025/2_Internship_Joining_Application.pdf" className="text-blue-500 mt-2 block">Download</a>
            </div>
            <div className="flex-row flex space-x-8">
              <h3 className="text-lg text-[#002147] font-semibold">Internship Report Submission Guideline</h3>
              <a href="https://iiitn.ac.in/Downloads/internship/newformat2025/3_Internship_Report_Submission_Guidelines.docx" className="text-blue-500 mt-2 block">Download</a>
            </div>
            <div className="flex-row flex space-x-8">
              <h3 className="text-lg text-[#002147] font-semibold">Internship Evaluation Form</h3>
              <a href="https://iiitn.ac.in/Downloads/internship/newformat2025/4_Internship_Evaluation_Form.pdf" className="text-blue-500 mt-2 block">Download</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InternshipProgram;
