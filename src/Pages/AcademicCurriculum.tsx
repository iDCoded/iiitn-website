import React from "react";

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
    <div className="bg-gray-50 min-h-screen flex flex-col items-center p-4">
      {/* 🔹 Header Section */}
      <header className="w-full bg-primary text-white py-10 text-center">
        <h1 className="text-2xl sm:text-3xl font-bold">Academic Curriculum</h1>
        <p className="mt-1 text-gray-200 text-sm sm:text-base">
          Complete academic curriculum for all years
        </p>
      </header>

      {/* 🔹 CSE Curriculum Section */}
      <section className="w-full max-w-4xl mt-6 p-4 sm:p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-xl sm:text-2xl font-semibold text-primary">{curriculumData.cse.title}</h2>
        <div className="overflow-x-auto mt-4">
          <table className="w-full border-collapse border border-gray-300 text-sm sm:text-base">
            <thead>
              <tr className="bg-gray-200 text-center">
                <th className="border px-2 sm:px-4 py-2">Batch</th>
                <th className="border px-2 sm:px-4 py-2">Scheme</th>
                <th className="border px-2 sm:px-4 py-2">Syllabus</th>
                <th className="border px-2 sm:px-4 py-2">Specialization</th>
              </tr>
            </thead>
            <tbody>
              {curriculumData.cse.batches.map((batch, index) => (
                <tr key={index} className="text-center">
                  <td className="border px-2 sm:px-4 py-2">{batch.year}</td>
                  <td className="border px-2 sm:px-4 py-2">
                    <a href={batch.schemelink} className="text-blue-600 underline">View</a>
                  </td>
                  <td className="border px-2 sm:px-4 py-2">
                    <a href={batch.syllabuslink} className="text-blue-600 underline">View</a>
                  </td>
                  <td className="border px-2 sm:px-4 py-2">{batch.specialization || "General"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* 🔹 Electives Section */}
      <section className="w-full max-w-4xl mt-6 p-4 sm:p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-xl sm:text-2xl font-semibold text-primary">{curriculumData.electives.title}</h2>
        <p className="mt-2 font-medium text-sm sm:text-base">
          Subjects: {curriculumData.electives.subjects.join(", ")}
        </p>
        <p className="mt-2 font-medium text-sm sm:text-base">
          Open Course (BS) {curriculumData.electives.openCourses.year}: {curriculumData.electives.openCourses.subjects.join(", ")}
        </p>
      </section>

      {/* 🔹 Rule Books Section */}
      <section className="w-full max-w-4xl mt-6 p-4 sm:p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-xl sm:text-2xl font-semibold text-primary">Rule Books</h2>

        {/* B.Tech Rule Book */}
        <div className="mt-4">
          <h3 className="text-lg font-medium">{curriculumData.ruleBooks.btech.title}</h3>
          <p className="mt-1 text-sm sm:text-base">
            Batch: {curriculumData.ruleBooks.btech.batch} | 
            <a href={curriculumData.ruleBooks.btech.link} className="text-blue-600 underline ml-1">Click Here</a>
          </p>
        </div>

        {/* PhD Rule Books */}
        <div className="mt-4">
          <h3 className="text-lg font-medium">PhD (CSE) Curriculum</h3>
          {curriculumData.ruleBooks.phd.map((phd, index) => (
            <p key={index} className="mt-1 text-sm sm:text-base">
              Batch: {phd.year} | 
              <a href={phd.link} className="text-blue-600 underline ml-1">Click Here</a>
            </p>
          ))}
        </div>
      </section>
    </div>
  );
}

export default AcademicCurriculum;
