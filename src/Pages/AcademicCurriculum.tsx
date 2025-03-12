import { useEffect, useState } from "react";

type Branch = "cse" | "ece";

const defcurriculumData: Record<Branch, {
  title: string;
  batches: { year: number; schemelink: string; syllabuslink: string; specialization?: string }[];
  electivePdf: string;
  openCoursePdf: string;
}> = {
  cse: {
    title: "B. Tech. (CSE) Curriculum",
    batches: [
      { year: 2016, schemelink: "#", syllabuslink: "#" },
      { year: 2017, schemelink: "#", syllabuslink: "#" },
      { year: 2018, schemelink: "#", syllabuslink: "#" },
      { year: 2019, schemelink: "#", syllabuslink: "#" },
      { year: 2020, schemelink: "#", syllabuslink: "#" },
      { year: 2021, schemelink: "#", syllabuslink: "#" },
      { year: 2022, schemelink: "#", syllabuslink: "#",  },
      { year: 2022, schemelink: "#", syllabuslink: "#",  },
      { year: 2022, schemelink: "#", syllabuslink: "#",  },
    ],
    electivePdf: "#",
    openCoursePdf: "#",
  },
  ece: {
    title: "B. Tech. (ECE) Curriculum",
    batches: [
      { year: 2016, schemelink: "#", syllabuslink: "#" },
      { year: 2017, schemelink: "#", syllabuslink: "#" },
      { year: 2018, schemelink: "#", syllabuslink: "#" },
      { year: 2019, schemelink: "#", syllabuslink: "#" },
      { year: 2020, schemelink: "#", syllabuslink: "#" },
      { year: 2021, schemelink: "#", syllabuslink: "#" },
      { year: 2022, schemelink: "#", syllabuslink: "#",},
      { year: 2022, schemelink: "#", syllabuslink: "#",},
      { year: 2022, schemelink: "#", syllabuslink: "#",},
    ],
    electivePdf: "#",
    openCoursePdf: "#",
  },
};

function AcademicCurriculum() {
  interface CurriculumData {
    title: string;
    batches: { year: number; schemelink: string; syllabuslink: string; specialization?: string }[];
    electivePdf: string;
    openCoursePdf: string;
  }
  const [selectedBranch, setSelectedBranch] = useState<Branch>("cse");

  const [loading, setLoading] = useState(true);
  const [curriculumData, setCurriculumData] = useState<Record<Branch, CurriculumData>>({} as Record<Branch, CurriculumData>);
  useEffect(() => {
    const fetchCurriculum = async () => {
      try {
        const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/media/media/category/curriculum`);
        if (!res.ok) throw new Error("Failed to fetch curriculum data");
  
        const data = await res.json();
  
        // Clone the default structure
        const curriculumData: Record<Branch, CurriculumData> = {
          cse: { ...defcurriculumData.cse, batches: [...defcurriculumData.cse.batches] },
          ece: { ...defcurriculumData.ece, batches: [...defcurriculumData.ece.batches] },
        };
  
        data.forEach((item: any) => {
          const branch = item.m_sub_category as Branch; // "cse" or "ece"
          const title = item.title.toLowerCase();
          const fileUrl = item.file_url;
  
          // Extract the year from title if it's a batch-related document
          const match = title.match(/^(\d{4})_(schemelink|syllabuslink)$/);
          if (match) {
            const year = parseInt(match[1]);
            const type = match[2]; // "schemelink" or "syllabuslink"
  
            const batchIndex = curriculumData[branch].batches.findIndex((batch) => batch.year === year);
            if (batchIndex !== -1) {
              if (type === "schemelink") {
                curriculumData[branch].batches[batchIndex].schemelink = fileUrl;
              } else if (type === "syllabuslink") {
                curriculumData[branch].batches[batchIndex].syllabuslink = fileUrl;
              }
            }
          }
  
          // Assign elective and open course PDFs
          if (title.includes("elective")) {
            curriculumData[branch].electivePdf = fileUrl;
          } else if (title.includes("opencourse")) {
            curriculumData[branch].openCoursePdf = fileUrl;
          }
        });
  
        setCurriculumData(curriculumData);
      } catch (error) {
        console.error("Error fetching curriculum data:", error);
        setCurriculumData(prevData => ({ ...prevData, ...defcurriculumData })); // Use fallback
      } finally {
        setLoading(false);
      }
    };
  
    fetchCurriculum();
  }, []);
  
  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex flex-col items-center">
      <header className="w-full bg-primary text-white py-12 text-center shadow-lg">
        <h1 className="text-3xl sm:text-4xl font-bold">Academic Curriculum</h1>
        <p className="mt-2 text-gray-200 text-base sm:text-lg">Complete academic curriculum for all years</p>
      </header>

      <div className="flex justify-center mt-6 space-x-4">
        <button
          onClick={() => setSelectedBranch("cse")}
          className={`px-6 py-3 rounded-lg font-semibold transition ${selectedBranch === "cse" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
        >
          CSE
        </button>
        <button
          onClick={() => setSelectedBranch("ece")}
          className={`px-6 py-3 rounded-lg font-semibold transition ${selectedBranch === "ece" ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-gray-300"}`}
        >
          ECE
        </button>
      </div>

      <section className="w-full max-w-5xl mt-8 bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-primary">{curriculumData[selectedBranch].title}</h2>
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
              {curriculumData[selectedBranch].batches.map((batch, index) => (
                <tr key={index} className="text-center hover:bg-gray-100">
                  <td className="border px-4 py-3">{batch.year}</td>
                  <td className="border px-4 py-3">
                    <a href={batch.schemelink} className="text-blue-600 underline">View</a>
                  </td>
                  <td className="border px-4 py-3">
                    <a href={batch.syllabuslink} className="text-blue-600 underline">View</a>
                  </td>
                
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="w-full max-w-5xl mt-8 bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-primary">Elective Subjects</h2>
        <p className="mt-3 text-gray-700">
          <a href={curriculumData[selectedBranch].electivePdf} className="text-blue-600 underline">View Electives PDF</a>
        </p>
      </section>

      <section className="w-full max-w-5xl mt-8 bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-primary">Open Course</h2>
        <p className="mt-2 text-gray-700">
          <a href={curriculumData[selectedBranch].openCoursePdf} className="text-blue-600 underline">View Open Courses PDF</a>
        </p>
      </section>
    </div>
  );
}

export default AcademicCurriculum;
