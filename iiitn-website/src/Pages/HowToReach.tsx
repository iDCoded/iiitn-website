import React from "react";

function HowToReach() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Header Section */}
      <header className="bg-[#002147] text-white py-16 text-center">
        <h1 className="text-5xl font-bold">📍 How to Reach IIIT Nagpur</h1>
        <p className="text-lg mt-2 italic">
          "Navigate your way to IIIT Nagpur with ease."
        </p>
      </header>

      {/* Location Details Section */}
      <section className="max-w-5xl mx-auto bg-white p-6 shadow-lg rounded-lg mt-10">
        <h2 className="text-3xl font-semibold text-[#002147]">🗺️ Location & Accessibility</h2>
        <p className="text-gray-700 mt-3 leading-relaxed">
          The campus is located in <b>Waranga, Buti Bori, Nagpur</b>, well connected by <b>rail, air, and road transport</b>.
        </p>

        <div className="mt-4">
          <h3 className="text-2xl font-semibold text-[#002147]">🚉 By Rail</h3>
          <p className="text-gray-700 mt-1">Nagpur Main Railway Station - <b>20 KM</b></p>
        </div>

        <div className="mt-4">
          <h3 className="text-2xl font-semibold text-[#002147]">✈️ By Air</h3>
          <p className="text-gray-700 mt-1">Dr. Babasaheb Ambedkar International Airport (Nagpur) - <b>8 KM</b></p>
        </div>

        <div className="mt-4">
          <h3 className="text-2xl font-semibold text-[#002147]">🚌 By Road</h3>
          <p className="text-gray-700 mt-1">Nagpur Central Bus Stand - <b>22 KM</b></p>
        </div>
      </section>

      {/* Official Address Section */}
      <section className="max-w-5xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-semibold text-[#002147]">🏫 Official Address</h2>
        <p className="text-gray-700 mt-3 leading-relaxed">
          <b>IIIT Nagpur</b>  
          <br /> Survey No. 140, 141/1,  
          <br /> Behind Br. Sheshrao Wankhade Shetkari Sahkari Soot Girni,  
          <br /> Village - Waranga, PO - Dongargaon (Butibori),  
          <br /> Tahsil - Nagpur (Rural), District Nagpur,  
          <br /> <b>Maharashtra - 441108</b>
        </p>
      </section>

      {/* Google Maps Section */}
      <section className="max-w-5xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
        <h2 className="text-3xl font-semibold text-[#002147]">🗺️ Find Us on Google Maps</h2>
        <div className="mt-4">
          <iframe
            title="IIIT Nagpur Location"
            className="w-full h-80 rounded-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.828076166463!2d79.04975991488986!3d21.092746685959896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4bff53a6b91fd%3A0x1830b3a2b4e17a2e!2sIIIT%20Nagpur!5e0!3m2!1sen!2sin!4v1617794286415!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </section>
    </div>
  );
}

export default HowToReach;
