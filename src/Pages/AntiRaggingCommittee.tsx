const defantiRaggingCommitteePDF = "https://iiitn.ac.in/Downloads/website-homepage-antiragging-information.pdf";

import { useState,useEffect } from "react";

function AntiRaggingCommittee() {

    const [antiRaggingCommitteePDF, setAntiRaggingCommitteePDF] = useState(defantiRaggingCommitteePDF);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchAntiRaggingCommitteePDF = async () => {
            try {
                const res = await fetch(
                    `${import.meta.env.VITE_API_BASE_URL}/media/media/category/anti_ragging_committee`
                );
                if (!res.ok) {
                    throw new Error("Failed to fetch anti-ragging committee PDF");
                }
                const data = await res.json();
                console.log(data);
                setAntiRaggingCommitteePDF(data[0].media_doc_path);
            } catch (error) {
                console.error("Error fetching anti-ragging committee PDF:", error);
                setAntiRaggingCommitteePDF(defantiRaggingCommitteePDF);
            } finally {
                setLoading(false);
            }
        };

        fetchAntiRaggingCommitteePDF();
    }, []);


    if (loading) {
		return (
			<div className="bg-gray-100 min-h-screen flex items-center justify-center text-gray-800">
				Loading...
			</div>
		);
	}


    return (
    

      <div className="bg-gray-50 min-h-screen flex flex-col items-center">
        {/* Header Section */}
        <header className="bg-primary text-white py-12 px-6 shadow-lg text-center w-full">
          <h1 className="text-3xl md:text-4xl font-bold">Anti-Ragging Committee</h1>
          <p className="mt-2 text-gray-200 text-lg">
            Ensuring a safe and secure campus environment for students
          </p>
        </header>
  
        {/* Content Section */}
        <section className="max-w-4xl bg-white shadow-lg rounded-lg p-6 mt-8">
          <h2 className="text-2xl font-semibold text-primary">About the Committee</h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            The Anti-Ragging Committee at IIIT Nagpur is dedicated to creating a ragging-free
            environment within the campus. The committee ensures that strict actions are taken
            against any reported incidents and works towards fostering a culture of respect and
            inclusivity among students.
          </p>
  
          <h3 className="text-xl font-semibold mt-6 text-primary">Objectives</h3>
          <ul className="list-disc list-inside mt-2 text-gray-700">
            <li>Prevent any form of ragging and harassment on campus.</li>
            <li>Ensure strict implementation of anti-ragging regulations.</li>
            <li>Provide a safe and supportive environment for all students.</li>
            <li>Spread awareness through campaigns and interactive sessions.</li>
          </ul>
  
          {/* View PDF Button */}
          <div className="mt-6 flex justify-center">
            <a
              href={antiRaggingCommitteePDF}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              View Anti-Ragging Committee Details (PDF)
            </a>
          </div>
        </section>
      </div>
    );
  }
  
  export default AntiRaggingCommittee;
  