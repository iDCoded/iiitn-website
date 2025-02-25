import React from "react";

const tenderData = [
  {
    tenderparticulars: "Tender for Supply of Desktop Computers",
    lastdate: "2024-09-30",
    documetlink: "#",
    status: "Active",
  },
  {
    tenderparticulars: "Tender for Campus Networking",
    lastdate: "2024-08-15",
    documetlink: "#",
    status: "Inactive",
  },
  {
    tenderparticulars: "Tender for Furniture Supply",
    lastdate: "2024-07-20",
    documetlink: "#",
    status: "Active",
  },
];

function Tenders() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Header Section */}
      <div className="bg-primary text-white py-16 text-center">
        <h1 className="text-4xl font-bold">Tenders</h1>
        <p className="text-lg mt-2">Stay updated with the latest tenders from IIIT Nagpur.</p>
      </div>

      {/* Table Section */}
      <div className="w-full px-8 py-6">
        <div className="overflow-x-auto">
          <table className="w-full max-w-7xl mx-auto border-collapse bg-white shadow-lg rounded-lg">
            <thead>
              <tr className="bg-primary text-white text-left">
                <th className="p-5">Sr.No</th>
                <th className="p-5">Tender Particulars</th>
                <th className="p-5">Last Date</th>
                <th className="p-5">Status</th>
                <th className="p-5">Document</th>
              </tr>
            </thead>
            <tbody>
              {tenderData.map((tender, index) => (
                <tr key={index} className="border-b hover:bg-gray-100 transition-all duration-200">
                  <td className="p-5">{index + 1}</td>
                  <td className="p-5">{tender.tenderparticulars}</td>
                  <td className="p-5">{tender.lastdate}</td>
                  <td className="p-5">
                    <span
                      className={`px-4 py-1 rounded-full text-white text-sm ${
                        tender.status === "Active" ? "bg-green-500" : "bg-red-500"
                      }`}
                    >
                      {tender.status}
                    </span>
                  </td>
                  <td className="p-5">
                    <a href={tender.documetlink} className="text-blue-600 hover:underline">
                      Download 📄
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

export default Tenders;
