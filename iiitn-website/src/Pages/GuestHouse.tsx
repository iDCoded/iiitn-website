import React from 'react'

function GuestHouse() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">    
      {/* Header Section */}
      <div className="bg-[#002147] text-white py-16 text-center">
        <h1 className="text-4xl font-bold">Guest House</h1>
        <p className="text-lg mt-2">Stay connected and contribute to the growth of IIIT Nagpur.</p>
      </div>
      
      {/* Content Section */}
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg my-10 space-y-6">
        <h2 className="text-2xl font-semibold text-gray-800">Guest House Information</h2>
        
        <ul className="list-disc list-inside text-gray-700 space-y-3">
          <li>
            <a href="#" className="text-blue-600 hover:underline">Online Booking Form for Guest House</a>
          </li>
          <li>
            <a href="#" className="text-blue-600 hover:underline">Requisition Slip to Book Guest House</a>
          </li>
          <li>
            <a href="#" className="text-blue-600 hover:underline">Rules for the Allotment of Guest House Accommodation & Room Tariff</a>
          </li>
        </ul>
        
        <h3 className="text-xl font-semibold text-gray-800">Contact for Booking & Queries</h3>
        <p className="text-gray-700">
          <strong>Guest House IIIT Nagpur:</strong> <br />
          Contact No: <span className="text-gray-900 font-semibold">9730075010</span>
        </p>
        <p className="text-gray-700">
          <strong>Mr. Avinash Suryawanshi</strong> <br />
          AoSD (Admin) <br />
          Mobile No: <span className="text-gray-900 font-semibold">9960206223</span> <br />
          Email: <a href="mailto:aosd@iiitn.ac.in" className="text-blue-600 hover:underline">aosd@iiitn.ac.in</a>
        </p>
        
        <h3 className="text-xl font-semibold text-gray-800">IIIT Nagpur Address</h3>
        <p className="text-gray-700">
          INDIAN INSTITUTE OF INFORMATION TECHNOLOGY NAGPUR (IIITN) <br />
          S.No. 140, 141/1 Behind Br. Sheshrao Wankhade Shetkari Sahkari Soot Girni, Village Waranga, Nagpur - 441108
        </p>
        
        <h3 className="text-xl font-semibold text-gray-800">Payment Details</h3>
        <p className="text-gray-700">
          <a href="#" className="text-blue-600 hover:underline">Payment details for guest house fees through SB Collect</a>
        </p>
        
        <h3 className="text-xl font-semibold text-gray-800">Accommodation & Hotels</h3>
        <p className="text-gray-700">
          <a href="#" className="text-blue-600 hover:underline">Guest House details and nearest hotel details</a>
        </p>
      </div>
    </div>
  )
}

export default GuestHouse