import React from 'react';
import { FaCalendarAlt, FaEnvelope, FaPhoneAlt, FaInfoCircle } from 'react-icons/fa';

function ClinicalCounselling() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Header Section */}
      <header className="bg-[#002147] text-white py-16 text-center">
        <h1 className="text-4xl font-bold">Clinical Counselling</h1>
        <p className="text-lg mt-2">Supporting student well-being at IIIT Nagpur.</p>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
        {/* Availability Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <FaCalendarAlt className="text-[#002147]" /> Availability
          </h2>
          <p className="text-gray-700">
            The institute's <b>Clinical Counselor</b> will be available <b>in-person</b> at the institute as follows:
          </p>
          <ul className="list-disc pl-6 mt-3 text-gray-700 space-y-2">
            <li><strong>📅 Days:</strong> Tuesday, Wednesday & Thursday</li>
            <li><strong>⏰ Timing:</strong> 4:30 PM - 6:30 PM (with prior appointment)</li>
          </ul>
        </section>

        {/* Contact Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <FaPhoneAlt className="text-[#002147]" /> Contact Information
          </h2>
          <p className="text-gray-700">
            If you need mental health support, the counselor can be reached through the following:
          </p>
          <ul className="list-none mt-3 text-gray-700 space-y-2">
            <li><FaEnvelope className="inline text-[#002147] mr-2" /> Email: <a href="mailto:counselor@iiitn.ac.in" className="text-[#002147] font-semibold hover:underline">counselor@iiitn.ac.in</a></li>
            <li><FaPhoneAlt className="inline text-[#002147] mr-2" /> Phone: <a href="tel:+919970303386" className="text-[#002147] font-semibold hover:underline">+91 9970303386</a> (Only for clinical counselling)</li>
          </ul>
        </section>

        {/* Important Note */}
        <section className="p-4 bg-yellow-100 border-l-4 border-yellow-500 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
            <FaInfoCircle className="text-yellow-600" /> Important Notice
          </h2>
          <p className="text-gray-700 mt-2">
            📢 **This contact number is strictly for clinical counselling purposes.**  
            🚫 **For admission-related queries, please visit the Admission Tab on the homepage.**
          </p>
        </section>
      </main>
    </div>
  );
}

export default ClinicalCounselling;
