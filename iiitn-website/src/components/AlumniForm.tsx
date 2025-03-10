function AlumniForm() {
  return (
    <>
    <div className="bg-gray-100 min-h-screen flex flex-col">
			{/* Header Section */}
			<header className="bg-primary text-white py-14 text-center">
				<h1 className="text-3xl font-bold">Alumni Data</h1>
			</header>
      <form action="" className="max-w-lg mx-auto p-4">
        {/* Name and Branch */}
        <div className="flex flex-col md:flex-row gap-x-6 mb-6">
          <div className="w-full">
            <label className="flex items-center mb-2 text-gray-600 text-sm md:text-base font-medium">
              Name
            </label>
            <input
              type="text"
              className="block w-full h-11 px-5 py-2.5 bg-white text-gray-900 border border-gray-300 rounded-sm focus:outline-none text-sm md:text-base"
              required
            />
          </div>
          <div className="w-full">
            <label className="flex items-center mb-2 text-gray-600 text-sm md:text-base font-medium">
              Branch
            </label>
            <input
              type="text"
              className="block w-full h-11 px-5 py-2.5 bg-white text-gray-900 border border-gray-300 rounded-sm focus:outline-none text-sm md:text-base"
              required
            />
          </div>
        </div>

        {/* Year of Passing */}
        <div className="mb-6">
          <label className="flex items-center mb-2 text-gray-600 text-sm md:text-base font-medium">
            Year of Passing
          </label>
          <input
            type="text"
            className="block w-full h-11 px-5 py-2.5 bg-white text-gray-900 border border-gray-300 rounded-sm focus:outline-none text-sm md:text-base"
            required
          />
        </div>

        {/* Email */}
        <div className="mb-6">
          <label className="flex items-center mb-2 text-gray-600 text-sm md:text-base font-medium">
            Email Address
          </label>
          <input
            type="email"
            className="block w-full h-11 px-5 py-2.5 bg-white text-gray-900 border border-gray-300 rounded-sm focus:outline-none text-sm md:text-base"
            required
          />
        </div>

        {/* Contact Numbers */}
        <div className="flex flex-col md:flex-row gap-x-6 mb-6">
          <div className="w-full">
            <label className="flex items-center mb-2 text-gray-600 text-sm md:text-base font-medium">
              Contact Number
            </label>
            <input
              type="text"
              className="block w-full h-11 px-5 py-2.5 bg-white text-gray-900 border border-gray-300 rounded-sm focus:outline-none text-sm md:text-base"
              required
            />
          </div>
          <div className="w-full">
            <label className="flex items-center mb-2 text-gray-600 text-sm md:text-base font-medium">
              Alternate Contact Number
            </label>
            <input
              type="text"
              className="block w-full h-11 px-5 py-2.5 bg-white text-gray-900 border border-gray-300 rounded-sm focus:outline-none text-sm md:text-base"
              required
            />
          </div>
        </div>

        {/* Addresses */}
        <div className="mb-6">
          <label className="flex items-center mb-2 text-gray-600 text-sm md:text-base font-medium">
            Current Address
          </label>
          <textarea
            className="block w-full h-20 px-5 py-2.5 bg-white text-gray-900 border border-gray-300 rounded-sm focus:outline-none text-sm md:text-base"
            required
          />
        </div>

        <div className="mb-6">
          <label className="flex items-center mb-2 text-gray-600 text-sm md:text-base font-medium">
            Permanent Address
          </label>
          <textarea
            className="block w-full h-20 px-5 py-2.5 bg-white text-gray-900 border border-gray-300 rounded-sm focus:outline-none text-sm md:text-base"
            required
          />
        </div>

        {/* Current Organization */}
        <div className="mb-6">
          <label className="flex items-center mb-2 text-gray-600 text-sm md:text-base font-medium">
            Current Organization
          </label>
          <input
            type="text"
            className="block w-full h-11 px-5 py-2.5 bg-white text-gray-900 border border-gray-300 rounded-sm focus:outline-none text-sm md:text-base"
            required
          />
        </div>

        {/* Submit Button */}
        <button className="w-full h-11 bg-primary text-white font-medium rounded-sm hover:bg-accent transition">
          Submit
        </button>
      </form>
      </div>
    </>
  );
}

export default AlumniForm;
