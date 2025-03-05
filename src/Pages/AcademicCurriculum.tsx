const curriculumData = {
  cse: {
    title: "B. Tech. (CSE) Curriculum",
    batches: [
      { year: 2016, schemelink: "#", syllabuslink: "#" },
      { year: 2017, schemelink: "#", syllabuslink: "#" },
      { year: 2018, schemelink: "#", syllabuslink: "#" },
      { year: 2019, schemelink: "#", syllabuslink: "#" },
      { year: 2020, schemelink: "#", syllabuslink: "#" },
      { year: 2021, schemelink: "#", syllabuslink: "#" },
      { year: 2022, schemelink: "#", syllabuslink: "#", specialization: "AIML" },
      { year: 2022, schemelink: "#", syllabuslink: "#", specialization: "DSA" },
      { year: 2022, schemelink: "#", syllabuslink: "#", specialization: "HCIG" },
    ],
  },
  electives: {
    title: "Elective Subjects",
    subjects: ["List of Subjects"],
    openCourses: { year: 2025, subjects: ["List of Subjects"] },
  },
  ruleBooks: {
    btech: { title: "B.Tech (CSE) Curriculum", batch: "2016 onwards", link: "#" },
    phd: [
      { year: 2018, link: "#" },
      { year: 2024, link: "#" },
    ],
  },
};

function AcademicCurriculum() {
  return (
    <div className="flex flex-col items-center">
      {/* Header */}
      <header className="w-full bg-primary text-white py-12 text-center shadow-lg">
        <h1 className="text-3xl sm:text-4xl font-bold">Academic Curriculum</h1>
        <p className="mt-2 text-gray-200 text-base sm:text-lg">Complete academic curriculum for all years</p>
      </header>

      {/* Curriculum Section */}
      <section className="w-full max-w-5xl mt-8 bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-primary">{curriculumData.cse.title}</h2>
        <div className="overflow-x-auto mt-4">
          <table className="w-full border-collapse border border-gray-300 text-sm sm:text-base">
            <thead>
              <tr className="bg-gray-200 text-center">
                <th className="border px-4 py-3">Batch</th>
                <th className="border px-4 py-3">Scheme</th>
                <th className="border px-4 py-3">Syllabus</th>
                <th className="border px-4 py-3">Specialization</th>
              </tr>
            </thead>
            <tbody>
              {curriculumData.cse.batches.map((batch, index) => (
                <tr key={index} className="text-center hover:bg-gray-100">
                  <td className="border px-4 py-3">{batch.year}</td>
                  <td className="border px-4 py-3">
                    <a href={batch.schemelink} className="text-blue-600 underline">View</a>
                  </td>
                  <td className="border px-4 py-3">
                    <a href={batch.syllabuslink} className="text-blue-600 underline">View</a>
                  </td>
                  <td className="border px-4 py-3">{batch.specialization || "General"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Electives Section */}
      <section className="w-full max-w-5xl mt-8 bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-primary">{curriculumData.electives.title}</h2>
        <p className="mt-3 text-gray-700">Subjects: {curriculumData.electives.subjects.join(", ")}</p>
        <p className="mt-2 text-gray-700">Open Course (BS) {curriculumData.electives.openCourses.year}: {curriculumData.electives.openCourses.subjects.join(", ")}</p>
      </section>

      {/* Rule Books Section */}
      <section className="w-full max-w-5xl mt-8 bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-semibold text-primary">Rule Books</h2>
        <div className="mt-4">
          <h3 className="text-lg font-medium">{curriculumData.ruleBooks.btech.title}</h3>
          <p className="mt-1 text-gray-700">Batch: {curriculumData.ruleBooks.btech.batch} | 
            <a href={curriculumData.ruleBooks.btech.link} className="text-blue-600 underline ml-1">Click Here</a>
          </p>
        </div>
        <div className="mt-4">
          <h3 className="text-lg font-medium">PhD (CSE) Curriculum</h3>
          {curriculumData.ruleBooks.phd.map((phd, index) => (
            <p key={index} className="mt-1 text-gray-700">Batch: {phd.year} | 
              <a href={phd.link} className="text-blue-600 underline ml-1">Click Here</a>
            </p>
          ))}
        </div>
      </section>
    </div>
  );
}

export default AcademicCurriculum;