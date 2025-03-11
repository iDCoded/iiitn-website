import { useEffect, useState } from "react";

const InternshipProgram = () => {
  const [pdfLinks, setPdfLinks] = useState<Record<string, string>>({});
  const [faculty, setFaculty] = useState<Record<string, string>>({});

  useEffect(() => {
    const fetchPdfLinks = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/media/media/category/internship_program`);
        const data = await response.json();

        const links: Record<string, string> = {};
        const faculty: Record<string, string> = {};

        data.forEach((item: { media_doc_id: string, title: string, sub_category?: string }) => {
          if (item.media_doc_id) {
            if (item.sub_category === "facultylist") {
              faculty[item.title] = item.media_doc_id;
            } else {
              links[item.title] = item.media_doc_id;
            }
          }
        });

        setPdfLinks(links);
        setFaculty(faculty);
      } catch (error) {
        console.error("Error fetching PDF links:", error);
      }

    };

    fetchPdfLinks();
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* Hero Section */}
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold text-primary">SUMMER / WINTER INTERNSHIP PROGRAM</h1>
        <p className="text-lg text-gray-700 mt-4">
          Gain educational and professional research experience at IIIT Nagpur.
        </p>
      </section>

      {/* Details Section */}
      <section className="bg-white shadow-md rounded-lg p-6 my-6">
        <h2 className="text-2xl font-bold text-accent border-b-2 pb-2">Objective</h2>
        <p className="text-gray-700 mt-2">
          This program is designed for B.Tech / B.E. / MSc. / MCA students across the nation
          to enhance their research exposure at IIIT Nagpur.
        </p>
      </section>

      {/* Internship Details */}
      <section className="bg-gray-100 p-6 rounded-lg my-6">
        <h2 className="text-2xl font-bold text-accent border-b-2 pb-2">Internship Details</h2>
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
            <h3 className="text-xl font-semibold text-primary">{item.title}</h3>
            <p className="text-gray-700 mt-2">{item.description}</p>
          </div>
        ))}
      </section>

      {/* Faculty List */}
      <section className="bg-white p-6 rounded-lg shadow-md my-6">
        <h2 className="text-2xl font-bold text-accent border-b-2 pb-2">Faculty List</h2>
        <ul className="list-disc pl-5 mt-2 text-gray-700 space-y-3">
          {Object.keys(faculty).length > 0 ? (
            <div className="space-y-2">
              <p className="text-gray-700 mt-2">
                Please go through this PDF to know about the area of expertise of the faculty at IIIT Nagpur:
              </p>
              <li>
                <a href={faculty.media_doc_id} className="text-blue-500">{faculty.title}</a>
              </li>
            </div>
          ) : (
            <li className="text-gray-500">Faculty list not available</li>
          )}
        </ul>
      </section>

      {/* Registration Fee Structure */}
      <section className="grid md:grid-cols-2 gap-6 my-6">
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-accent border-b-2 pb-2">Registration Fee</h2>
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
          Note:
        </div>

        {/* Bank Details */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-accent border-b-2 pb-2">Bank Details</h2>
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
      <section className="bg-white p-6 rounded-lg shadow-md my-6">
        <h2 className="text-2xl font-bold text-accent">
          <span className="text-primary font-bold mr-2">|</span> Internship Registration & Reports
        </h2>
        <div className="mt-4 space-y-4">
          {[
            { title: "Internship Application Form", key: "application_form.pdf" },
            { title: "Internship Joining Application", key: "joining_application.pdf" },
            { title: "Internship Report Submission Guidelines", key: "report_guidelines.docx" },
            { title: "Internship Evaluation Form", key: "evaluation_form.pdf" }
          ].map((doc, index) => (
            <div key={index} className="flex items-center justify-between">
              <h3 className="text-lg text-primary font-semibold">{doc.title}</h3>
              {pdfLinks[doc.key] ? (
                <a href={pdfLinks[doc.key]} className="text-blue-500">Download</a>
              ) : (
                <span className="text-gray-500">Not Available</span>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default InternshipProgram;
