import React from 'react'
import PlacementNav from '../../components/PlacementNav'

function Internships() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      
      <PlacementNav />
      {/* Header Section */}
      <div className="bg-[#002147] text-white py-16 text-center">
        <h1 className="text-4xl font-bold">Internships</h1>
        <p className="text-lg mt-2">Stay connected and contribute to the growth of IIIT Nagpur.</p>
      </div>

      <div className="max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-lg mb-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Summer/Winter Internship Program</h2>
        <p className="text-gray-700 mb-4">
          This program is designed to give an educational and professional research experience to budding Engineers.
        </p>
        <p className="text-gray-700 mb-4">
          To provide an opportunity to students from various disciplines to facilitate their exposure to the research environment at IIIT Nagpur.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mt-6">Details of the Internship Program:</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-3 mt-3">
          <li>Interns gain deep knowledge in their chosen field under expert supervision.</li>
          <li>Duration is flexible and determined by the candidate.</li>
          <li>Submission of required documents is mandatory for enrollment.</li>
          <li>Completion certificate issued upon successful project submission.</li>
          <li>Substantial outcome required, such as research publication or software development.</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-800 mt-6">Internship Modes:</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-3 mt-3">
          <li><strong>In-campus Internship:</strong> Students work on projects physically at IIIT Nagpur with access to resources.</li>
          <li><strong>Online Internship:</strong> Students work remotely under expert supervision.</li>
        </ul>

        <h3 className="text-xl font-semibold text-gray-800 mt-6">How to Apply:</h3>
        <p className="text-gray-700 mt-3">
          Students should directly contact faculty members via email with their latest CV and mention "Request for Internship at IIIT Nagpur" in the subject.
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mt-6">Faculty List:</h3>
        <p className="text-gray-700 mt-3">Below is a list of faculty members and their areas of expertise:</p>
        <div className="overflow-x-auto mt-4">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 p-2">Name</th>
                <th className="border border-gray-300 p-2">Email</th>
                <th className="border border-gray-300 p-2">Expertise</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 p-2">Dr. Tausif Diwan</td>
                <td className="border border-gray-300 p-2">tdiwan@iiitn.ac.in</td>
                <td className="border border-gray-300 p-2">Deep Learning</td>
              </tr>
              <tr>
                <td className="border border-gray-300 p-2">Dr. Jitendra Tembhurne</td>
                <td className="border border-gray-300 p-2">jtembhurne@iiitn.ac.in</td>
                <td className="border border-gray-300 p-2">Quantum Computing, AI, Data Mining</td>
              </tr>
              {/* Additional faculty rows here */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Internships
