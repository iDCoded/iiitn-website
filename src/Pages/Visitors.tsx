import heroimage from "../assets/visitorsBanner.jpeg";
 // Replace with actual image

function Visitors() {
  return (
    <section className="bg-gray-50 min-h-screen flex flex-col items-center">
      {/* Header Section */}
      <header
        className="relative w-full h-80 flex flex-col justify-center items-center text-white text-center shadow-md rounded-lg overflow-hidden"
        style={{
          backgroundImage: `url(${heroimage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-5xl font-bold">Visitors</h1>
          <p className="text-lg mt-2">Stay updated with the latest visitor information from IIIT Nagpur.</p>
        </div>
      </header>

      {/* Location & Accessibility Section */}
      <section className="max-w-5xl w-full bg-white p-8 shadow-md rounded-lg mt-10">
        <h2 className="text-3xl font-semibold text-primary">🗺️ Location & Accessibility</h2>
        <p className="text-gray-700 mt-3 leading-relaxed">
          The campus is located in <b>Waranga, Buti Bori, Nagpur</b>, well connected by <b>rail, air, and road transport</b>.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div>
            <h3 className="text-2xl font-semibold text-primary">🚉 By Rail</h3>
            <p className="text-gray-700">Nagpur Main Railway Station - <b>20 KM</b></p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-primary">✈️ By Air</h3>
            <p className="text-gray-700">Dr. Babasaheb Ambedkar International Airport - <b>8 KM</b></p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-primary">🚌 By Road</h3>
            <p className="text-gray-700">Nagpur Central Bus Stand - <b>22 KM</b></p>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="max-w-5xl w-full bg-white p-8 shadow-md rounded-lg mt-10">
        <h2 className="text-3xl font-semibold text-primary">🗺️ Find Us on Google Maps</h2>
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

      {/* Guest House Section */}
      <section className="max-w-5xl w-full bg-white p-8 shadow-md rounded-lg mt-10">
        <h2 className="text-3xl font-semibold text-primary">🏨 Guest House</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          <div>
            <p className="text-gray-700 leading-relaxed">
              IIIT Nagpur provides a well-facilitated guest house for visiting faculty, parents, and guests. The guest house
              is equipped with modern amenities, ensuring a comfortable stay for visitors. Prior booking is required to avail
              the facility.
            </p>
            <a href="/pages/guesthouse">
            <button className="mt-4 px-6 py-2 bg-primary text-white font-semibold rounded-lg shadow hover:bg-orange-600 cursor-pointer transition">
              More Details
            </button>
            </a>
          </div>
          <div>
            <img src="" alt="Guest House" className="w-full h-64 object-cover rounded-lg shadow" />
          </div>
        </div>
      </section>
    </section>
  );
}

export default Visitors;
