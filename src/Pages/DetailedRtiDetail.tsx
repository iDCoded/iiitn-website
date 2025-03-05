
import { useParams, useNavigate } from "react-router-dom";

const completeData = [
  {
    id: "1.1",
    data: [
      {
        "Sr.No.": "1.1",
        "Details of Disclosure": {
          "Particulars": {
            "Name and address of the Organization": "Indian Institute of Information Technology, Nagpur",
            "Head of the organization": "Dr. O.G. Kakde, Director",
            "Vision": "The Institute aspires to attain the status of a top-notch Institution...",
            "Mission": "To undertake socially relevant, industry-oriented In-House Research...",
            "Key Objectives": [
              "To emerge amongst the foremost institutions in IT...",
              "To advance new knowledge and innovation...",
              "To develop competent and capable youth...",
              "To promote transparency in admissions and administration..."
            ],
            "Function and Duties": [
              "Imparting education in UG/PG levels...",
              "Undertaking research and projects...",
              "Following directives from MoE..."
            ],
            "Courses Offered": [
              "Computer Science & Engineering (CSE) - 4 years",
              "Electronics & Communication Engineering (ECE) - 4 years"
            ],
            "Admission Process": "Based on JEE Main rank, handled by JOSAA.",
            "Ph.D. Programmes": "Ph.D. in CSE & ECE with Visvesvaraya Ph.D. Scheme."
          }
        }
      }
    ]
  }
];

function DetailedRtiDetail() {
  const { rtidetailid } = useParams();
  const navigate = useNavigate();

  const rtiDetail = completeData.find((item) => item.id === rtidetailid);

  return (
    <div className="flex flex-col min-h-screen p-6 justify-center">
      {rtiDetail ? (
        <div className="w-full max-w-3xl mx-auto">
          <h1 className="text-2xl font-bold mb-4">RTI Details for ID: {rtidetailid}</h1>
          
          <div className="border p-4 rounded-lg bg-gray-100">
            {rtiDetail.data.map((detail, index) => (
              <div key={index} className="mb-4">
                <h2 className="text-xl font-semibold">{detail["Sr.No."]}. {detail["Details of Disclosure"]["Particulars"]["Name and address of the Organization"]}</h2>
                <p><strong>Head:</strong> {detail["Details of Disclosure"]["Particulars"]["Head of the organization"]}</p>
                <p><strong>Vision:</strong> {detail["Details of Disclosure"]["Particulars"]["Vision"]}</p>
                <p><strong>Mission:</strong> {detail["Details of Disclosure"]["Particulars"]["Mission"]}</p>

                <h3 className="font-semibold mt-2">Key Objectives:</h3>
                <ul className="list-disc ml-6">
                  {detail["Details of Disclosure"]["Particulars"]["Key Objectives"].map((obj, idx) => (
                    <li key={idx}>{obj}</li>
                  ))}
                </ul>

                <h3 className="font-semibold mt-2">Function and Duties:</h3>
                <ul className="list-disc ml-6">
                  {detail["Details of Disclosure"]["Particulars"]["Function and Duties"].map((func, idx) => (
                    <li key={idx}>{func}</li>
                  ))}
                </ul>

                <h3 className="font-semibold mt-2">Courses Offered:</h3>
                <ul className="list-disc ml-6">
                  {detail["Details of Disclosure"]["Particulars"]["Courses Offered"].map((course, idx) => (
                    <li key={idx}>{course}</li>
                  ))}
                </ul>

                <p><strong>Admission Process:</strong> {detail["Details of Disclosure"]["Particulars"]["Admission Process"]}</p>
                <p><strong>Ph.D. Programmes:</strong> {detail["Details of Disclosure"]["Particulars"]["Ph.D. Programmes"]}</p>
              </div>
            ))}
          </div>

          {/* Back button immediately after info div with some space */}
          <div className="flex justify-center mt-4">
            <button
              onClick={() => navigate(-1)}
              className="px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-md"
            >
              ← Back
            </button>
          </div>
        </div>
      ) : (
        <p className="text-red-500 text-center">No details found for ID: {rtidetailid}</p>
      )}
    </div>
  );
}

export default DetailedRtiDetail;
