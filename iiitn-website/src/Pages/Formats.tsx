import React from 'react';

const instituteFormats = [
  { id: 1, name: "Undertaking For Cast Validity (Maharashtra Only)", link: "/pdfs/undertaking_cast_validity.pdf" },
  { id: 2, name: "Undertaking For Correctness in Admission Form", link: "/pdfs/undertaking_correctness.pdf" },
  { id: 3, name: "Undertaking For Non-Available Documents", link: "/pdfs/undertaking_non_available.pdf" },
  { id: 4, name: "Affidavit For Gap Certificate", link: "/pdfs/affidavit_gap_certificate.pdf" },
];

const categoryFormats = [
  { id: 1, name: "FORM-GEN-EWS", link: "/pdfs/form_gen_ews.pdf" },
  { id: 2, name: "FORM-OBC-NCL", link: "/pdfs/form_obc_ncl.pdf" },
  { id: 3, name: "FORM-SC-ST", link: "/pdfs/form_sc_st.pdf" },
  { id: 4, name: "FORM-PwD (II)", link: "/pdfs/form_pwd_ii.pdf" },
  { id: 5, name: "FORM-PwD (III)", link: "/pdfs/form_pwd_iii.pdf" },
  { id: 6, name: "FORM-PwD (IV)", link: "/pdfs/form_pwd_iv.pdf" },
  { id: 7, name: "FORM-DYSLEXIC-1", link: "/pdfs/form_dyslexic_1.pdf" },
  { id: 8, name: "FORM-DYSLEXIC-2", link: "/pdfs/form_dyslexic_2.pdf" },
  { id: 9, name: "FORM-DS", link: "/pdfs/form_ds.pdf" },
];

function Formats() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Header Section */}
      <header className="bg-primary text-white py-16 text-center">
        <h1 className="text-5xl font-bold">Formats</h1>
        <p className="text-lg mt-2 italic">"Ensuring a fair and transparent resolution process"</p>
      </header>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto py-10">
        {/* Institute Formats Table */}
        <h2 className="text-2xl font-semibold text-primary mb-4">Institute Formats</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border rounded-lg shadow-md">
            <thead className="bg-primary text-white">
              <tr>
                <th className="px-4 py-3">Sr. No.</th>
                <th className="px-4 py-3 text-left">Format</th>
                <th className="px-4 py-3">Link</th>
              </tr>
            </thead>
            <tbody>
              {instituteFormats.map((format) => (
                <tr key={format.id} className="border-b">
                  <td className="px-4 py-3 text-center">{format.id}</td>
                  <td className="px-4 py-3">{format.name}</td>
                  <td className="px-4 py-3 text-center">
                    <a href={format.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800">
                      Download
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Category Formats Table */}
        <h2 className="text-2xl font-semibold text-primary mt-10 mb-4">Central Formats</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border rounded-lg shadow-md">
            <thead className="bg-primary text-white">
              <tr>
                <th className="px-4 py-3">Sr. No.</th>
                <th className="px-4 py-3 text-left">Format</th>
                <th className="px-4 py-3">Link</th>
              </tr>
            </thead>
            <tbody>
              {categoryFormats.map((format) => (
                <tr key={format.id} className="border-b">
                  <td className="px-4 py-3 text-center">{format.id}</td>
                  <td className="px-4 py-3">{format.name}</td>
                  <td className="px-4 py-3 text-center">
                    <a href={format.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline hover:text-blue-800">
                      Download
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Formats;
