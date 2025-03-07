import { useState, useEffect } from "react";

const defDocuments = [
	{ documentName: "IIITN Act", documentLink: "https://www.iiitn.ac.in/IIITN_Act.pdf", subCategory: "est_sec" },
	{ documentName: "IIITN Ordinance", documentLink: "https://www.iiitn.ac.in/IIITN_Ordinance.pdf", subCategory: "est_sec" },
	{ documentName: "IIITN Rules", documentLink: "https://www.iiitn.ac.in/IIITN_Rules.pdf", subCategory: "est_sec" },
	{ documentName: "Academic Calendar 2024", documentLink: "https://www.iiitn.ac.in/Academic_Calendar.pdf", subCategory: "exam_sec" },
	{ documentName: "Examination Guidelines", documentLink: "https://www.iiitn.ac.in/Exam_Guidelines.pdf", subCategory: "exam_sec" },
	{ documentName: "Annual Report 2023", documentLink: "https://www.iiitn.ac.in/Annual_Report.pdf", subCategory: "acc_sec" },
	{ documentName: "Financial Statements 2023", documentLink: "https://www.iiitn.ac.in/Finance_Statements.pdf", subCategory: "acc_sec" },
	{ documentName: "Student Handbook", documentLink: "https://www.iiitn.ac.in/Student_Handbook.pdf", subCategory: "stu_sec" },
	{ documentName: "Hostel Rules", documentLink: "https://www.iiitn.ac.in/Hostel_Rules.pdf", subCategory: "stu_sec" }
  ];
  
  const sections = [
	{ title: "Establishment Section", subCategory: "est_sec" },
	{ title: "Examination Section", subCategory: "exam_sec" },
	{ title: "Accounts Section", subCategory: "acc_sec" },
	{ title: "Student Section", subCategory: "stu_sec" }
  ];
  
  

function OfficialDocuments() {
	interface Document{
		documentName: string;
		documentLink: string;
		subCategory: string;
	}
  const [documents, setDocuments] = useState<Document[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDocuments = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/media/media/category/official_documents`);
        if (!response.ok) throw new Error("Failed to fetch documents");
        const data = await response.json();

        const fetchedDocs = data.map((doc: any) => ({
          documentName: doc.title,
          documentLink: doc.media_doc_id, // Adjusted as per response structure
          subCategory: doc.m_sub_category.toLowerCase()
        }));

        setDocuments(fetchedDocs);
      } catch (error) {
        console.error("Error fetching documents:", error);
        setDocuments(defDocuments); // Fallback data
      } finally {
        setLoading(false);
      }
    };

    fetchDocuments();
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      <div className="bg-primary text-white py-16 text-center">
        <h1 className="text-4xl font-bold">Official Documents</h1>
        <p className="text-lg mt-2">Stay connected and contribute to the growth of IIIT Nagpur.</p>
      </div>

      <div className="w-full max-w-7xl mx-auto p-6">
        {loading ? (
          <p className="text-center text-gray-600">Loading...</p>
        ) : (
          sections.map((section, secIndex) => (
            <div key={secIndex} className="mb-8">
              <h2 className="text-2xl font-semibold text-primary mb-4">{section.title}</h2>
              <div className="bg-white shadow-lg rounded-lg p-5 overflow-x-auto">
                <table className="w-full border-collapse table-auto">
                  <thead>
                    <tr className="bg-primary text-white text-left">
                      <th className="py-3 px-6 w-16">Sr.No</th>
                      <th className="py-3 px-6">Document Name</th>
                      <th className="py-3 px-6 w-40">Download</th>
                    </tr>
                  </thead>
                  <tbody>
                    {documents.filter(doc => doc.subCategory === section.subCategory).length > 0 ? (
                      documents.filter(doc => doc.subCategory === section.subCategory).map((doc, index) => (
                        <tr key={index} className="border-b hover:bg-gray-100 transition">
                          <td className="py-3 px-6">{index + 1}</td>
                          <td className="py-3 px-6">{doc.documentName}</td>
                          <td className="py-3 px-6">
                            <a href={doc.documentLink} target="_blank" rel="noopener noreferrer" className="text-accent hover:text-orange-600 font-medium">
                              View PDF →
                            </a>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={3} className="text-center py-4 text-gray-500">No documents available</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default OfficialDocuments;