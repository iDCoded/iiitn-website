import { useEffect, useState } from "react";

type Branch = "cse" | "ece";

interface CurriculumData {
  title: string;
  batches: { year: number; schemelink: string; syllabuslink: string; specialization?: string }[];
  electivePdf: string;
  openCoursePdf: string;
}

function AcademicCurriculum() {
  const [selectedBranch, setSelectedBranch] = useState<Branch>("cse");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [curriculumData, setCurriculumData] = useState<Record<Branch, CurriculumData>>({
    cse: { title: "", batches: [], electivePdf: "", openCoursePdf: "" },
    ece: { title: "", batches: [], electivePdf: "", openCoursePdf: "" },
  });

  useEffect(() => {
    const fetchCurriculum = async () => {
      try {
        setLoading(true);
        setError(null);

        const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/media/media/category/curriculum`);
        if (!res.ok) throw new Error(`Failed to fetch curriculum data: ${res.statusText}`);

        const data = await res.json();
        const newCurriculumData: Record<Branch, CurriculumData> = {
          cse: { title: "CSE Curriculum", batches: [], electivePdf: "", openCoursePdf: "" },
          ece: { title: "ECE Curriculum", batches: [], electivePdf: "", openCoursePdf: "" },
        };

        data.forEach((item: any) => {
          const branch = item.m_sub_category as Branch;
          if (!newCurriculumData[branch]) return;

          const title = item.title.toLowerCase();
          const fileUrl = item.media_doc_id; // Document link

          if (title.includes("elective")) {
            newCurriculumData[branch].electivePdf = fileUrl;
          } else if (title.includes("opencourse")) {
            newCurriculumData[branch].openCoursePdf = fileUrl;
          } else {
            // Extract year from the title (e.g., "Scheme for 2016")
            const yearMatch = title.match(/\d{4}/);
            const year = yearMatch ? parseInt(yearMatch[0]) : 0;

            if (year > 0) {
              let batch = newCurriculumData[branch].batches.find(b => b.year === year);
              if (!batch) {
                batch = { year, schemelink: "", syllabuslink: "", specialization: "" };
                newCurriculumData[branch].batches.push(batch);
              }

              if (title.includes("scheme")) {
                batch.schemelink = fileUrl;
              } else if (title.includes("syllabus")) {
                batch.syllabuslink = fileUrl;
              }
            }
          }
        });

        setCurriculumData(newCurriculumData);
      } catch (error) {
        setError((error as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchCurriculum();
  }, []);

  if (loading) {
    return (
      <div className="text-center mt-8">
        Loading...
      </div>
    )
  }
  if (error) {
    return (
      <div className="text-center mt-8">
        No Data
      </div>
    )
  }

  return (
    <div className="flex flex-col items-center p-4">
      {/* Header */}
      <header className="w-full bg-primary text-white py-12 text-center shadow-lg">
        <h1 className="text-3xl sm:text-4xl font-bold">Academic Curriculum</h1>
        <p className="mt-2 text-gray-200 text-base sm:text-lg">
          Complete academic curriculum for all years
        </p>
      </header>

      {/* Branch Selection */}
      <div className="flex justify-center mt-6 space-x-4">
        {(["cse", "ece"] as Branch[]).map((branch) => (
          <button
            key={branch}
            onClick={() => setSelectedBranch(branch)}
            className={`px-6 py-3 rounded-lg font-semibold transition ${selectedBranch === branch ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
          >
            {branch.toUpperCase()}
          </button>
        ))}
      </div>

      {/* Curriculum Table */}
      <section className="w-full max-w-5xl mt-8 bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-primary">
          {curriculumData[selectedBranch].title}
        </h2>

        <div className="overflow-x-auto mt-4">
          <table className="w-full border-collapse border border-gray-300 text-sm sm:text-base">
            <thead>
              <tr className="bg-gray-200 text-center">
                <th className="border px-4 py-3">Batch</th>
                <th className="border px-4 py-3">Scheme</th>
                <th className="border px-4 py-3">Syllabus</th>
              </tr>
            </thead>
            <tbody>
              {curriculumData[selectedBranch].batches.length > 0 ? (
                curriculumData[selectedBranch].batches.map((batch, index) => (
                  <tr key={index} className="text-center hover:bg-gray-100">
                    <td className="border px-4 py-3 font-medium">{batch.year}</td>
                    <td className="border px-4 py-3">
                      {batch.schemelink ? (
                        <a href={batch.schemelink} className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
                          View Scheme
                        </a>
                      ) : (
                        <span className="text-gray-500">N/A</span>
                      )}
                    </td>
                    <td className="border px-4 py-3">
                      {batch.syllabuslink ? (
                        <a href={batch.syllabuslink} className="text-blue-600 underline" target="_blank" rel="noopener noreferrer">
                          View Syllabus
                        </a>
                      ) : (
                        <span className="text-gray-500">N/A</span>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={3} className="text-center text-gray-500 border px-4 py-3">
                    No curriculum data available
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>

      {/* Elective Subjects */}
      {curriculumData[selectedBranch].electivePdf && (
        <section className="w-full max-w-5xl mt-8 bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-primary">Elective Subjects</h2>
          <p className="mt-3 text-gray-700">
            <a
              href={curriculumData[selectedBranch].electivePdf}
              className="text-blue-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Electives PDF
            </a>
          </p>
        </section>
      )}

      {/* Open Course */}
      {curriculumData[selectedBranch].openCoursePdf && (
        <section className="w-full max-w-5xl mt-8 bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-primary">Open Course</h2>
          <p className="mt-2 text-gray-700">
            <a
              href={curriculumData[selectedBranch].openCoursePdf}
              className="text-blue-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Open Courses PDF
            </a>
          </p>
        </section>
      )}
    </div>
  );
}

export default AcademicCurriculum;
