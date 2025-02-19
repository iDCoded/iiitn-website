import React from 'react';
import AlumniForm from '../components/AlumniForm';

function Alumni() {
    return (
        <div className="bg-gray-100 min-h-screen flex flex-col">
            {/* Hero Section */}
            <div className="bg-[#002147] text-white py-16 text-center">
                <h1 className="text-4xl font-bold">Alumni of IIIT Nagpur</h1>
                <p className="text-lg mt-2">Stay connected and contribute to the growth of IIIT Nagpur.</p>
            </div>

            {/* Form Section - Centered */}
            <div className="flex flex-grow items-center justify-center mt-12">
                <AlumniForm />
            </div>
        </div>
    );
}

export default Alumni;
