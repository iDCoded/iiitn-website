
function Students() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">

      {/* Header Section */}
      <header className="bg-[#002147] text-white py-16 text-center">
        <h1 className="text-4xl font-bold">For Students</h1>
        <p className="text-lg mt-2">Stay connected and contribute to the growth of IIIT Nagpur.</p>
      </header>

      {/* Guidelines Section */}
      <section className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg mb-24">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Guidelines for Students</h2>
        <p className="text-gray-700 mb-4">
          Students are required to keep the following documents ready for all internship & placement selection processes:
        </p>

        <ul className="list-disc list-inside text-gray-700 space-y-3">
          <li>
            <strong>ID Proof:</strong> Aadhaar Card (mandatory) / PAN Card / Driving License / Voter ID card
          </li>
          <li>
            <strong>Address Proof (Any One):</strong> Electricity bill / Bank Passbook / Aadhar card / Rent agreement
          </li>
          <li>
            <strong>Self-attested Marksheets:</strong>
            <ul className="list-disc list-inside ml-5 mt-2">
              <li>10th Std, 12th Std, and all B.Tech Semesters & Transcript</li>
              <li>Course certificates / Internship certificates</li>
              <li>Recent Passport size Photographs (white background) – 10 copies</li>
              <li>Updated CV in prescribed format – 2 copies</li>
            </ul>
          </li>
        </ul>

        <div className="mt-6 space-y-3">
          <p className="text-blue-600 hover:underline">
            <a href="#" target="_blank" rel="noopener noreferrer">CV Format - Click Here</a>
          </p>
          <p className="text-blue-600 hover:underline">
            <a href="#" target="_blank" rel="noopener noreferrer">Placement Policy - Click Here</a>
          </p>
          <p className="text-blue-600 hover:underline">
            <a href="#" target="_blank" rel="noopener noreferrer">Internship Instructions & Evaluation Guidelines - Click Here</a>
          </p>
          <p className="text-blue-600 hover:underline">
            <a href="#" target="_blank" rel="noopener noreferrer">Semester Internship Evaluation Guidelines - Click Here</a>
          </p>
        </div>
      </section>
    </div>
  );
}

export default Students;
