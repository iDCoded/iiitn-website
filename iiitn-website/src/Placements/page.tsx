import React from 'react';
import PlacementNav from '@/components/PlacementNav';

function Placements() {
    return (
        <>
            <div className="bg-gray-100 min-h-screen flex flex-col">
                <PlacementNav />
                <div className="bg-[#002147] text-white py-16 text-center">
                    <h1 className="text-5xl font-bold">Placements</h1>
                    <p className="text-xl mt-2">Stay connected and contribute to the growth of IIIT Nagpur.</p>
                </div>

                <div className='flex flex-col border-4 border-black p-6 m-4 rounded-lg bg-white shadow-lg'>
                    <h1 className="text-3xl font-semibold mb-4">About Us</h1>
                    <p className="text-gray-700 leading-relaxed">At IIITN, the Training & Placement Office is of strategic importance. It takes various initiatives to transform the students into a smart workforce. The T&P Office believes in providing quality internships and placements to all its students.
                        Consistent efforts are made to collaborate with leading organizations for joint technological development and research initiatives, internships, and placements. It acts as a Resource Centre, where students get information about various training programs, online courses, internships, and projects at various Govt Organizations in India.</p>
                    <p className="mt-4">The T&P office is headed by the Sr. Office Associate T&P, Dr. Meera Jgadale, and supported by faculty In-charge Dr. Paritosh Peshwe and student representatives.</p>
                    <p className="mt-4 font-semibold text-blue-600"><a href='#' className="underline">IIIT Nagpur Training & Placement Brochure - Download</a></p>
                    <div className="p-4 border rounded-lg shadow-md bg-gray-50 mt-6">
                        <h2 className="text-2xl font-semibold mb-2">Campus Recruitment Training</h2>
                        <p className="text-gray-700 leading-relaxed">Campus Recruitment Training is a crucial aspect of the placement preparations. Students at IIITN are critically trained on aspects like Aptitude, Group Discussions, and Interview skills. They are also encouraged to take up entrepreneurship through interaction with startup founders.</p>
                    </div>
                </div>

                <div className='flex flex-col border-4 border-black p-6 m-4 rounded-lg bg-white shadow-lg'>
                    <h1 className="text-3xl font-semibold mb-4">Why Recruit from IIIT Nagpur</h1>
                    <p className="text-gray-700 leading-relaxed">IIIT Nagpur is home to highly skilled and innovative students trained in various domains of technology and research. The rigorous academic curriculum and hands-on industry exposure ensure that our students are ready to contribute effectively in the corporate world.</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                        <div className="p-4 border rounded-lg shadow-md bg-gray-50">
                            <h2 className="text-xl font-semibold">Admission</h2>
                            <p className="text-gray-700">Established by MHRD, Govt of Maharashtra, and Industry partners. Declared as Institution of National Importance by Act of Parliament. Admissions happen through JoSAA. Only top 2% candidates taking JEE Mains Exam, make it to IIITN.</p>
                        </div>
                        <div className="p-4 border rounded-lg shadow-md bg-gray-50">
                            <h2 className="text-xl font-semibold">Industry Academia Collaboration</h2>
                            <p className="text-gray-700">Tie up with Tata Consultancy Services Ltd as Industry Partner. MoU with ESIEE Paris for exchange programs.</p>
                        </div>
                        <div className="p-4 border rounded-lg shadow-md bg-gray-50">
                            <h2 className="text-xl font-semibold">Curriculum</h2>
                            <p className="text-gray-700">Industry-relevant curriculum designed by Board of Studies with tech experts from IT industry. Choice Based Credit System allows students to choose subjects of interest. Credit-based mandatory industry internship for full semester in final year B.Tech.</p>
                        </div>
                        <div className="p-4 border rounded-lg shadow-md bg-gray-50">
                            <h2 className="text-xl font-semibold">Research Environment</h2>
                            <p className="text-gray-700">Research work is focused on IT Industry challenges, fostering Industry-Academia Collaboration.</p>
                        </div>
                        <div className="p-4 border rounded-lg shadow-md bg-gray-50">
                            <h2 className="text-xl font-semibold">Students Publications</h2>
                            <p className="text-gray-700">Various student publications are supported and encouraged.</p>
                        </div>
                        <div className="p-4 border rounded-lg shadow-md bg-gray-50">
                            <h2 className="text-xl font-semibold">Clubs and Communities</h2>
                            <h3 className="text-lg font-medium">Technical</h3>
                            <p className="text-gray-700">Ack-Z: A white hat security club. DotSlash: Programming Community for fostering coding culture.</p>
                            <h3 className="text-lg font-medium mt-4">Cultural</h3>
                            <p className="text-gray-700">Music Club, Art Club, and Dance Club bring students together for creative expression.</p>
                            <h3 className="text-lg font-medium mt-4">Academics and Research</h3>
                            <p className="text-gray-700">REAP: A research club guiding students in their research interests. 7C Club: Communication and Public Speaking club.</p>
                        </div>
                        <div className="p-4 border rounded-lg shadow-md bg-gray-50">
                            <h2 className="text-xl font-semibold">Flagship Annual Events</h2>
                            <p className="text-gray-700">ABHIVYAKTI – The Annual Cultural Festival. TANTRAFIESTA – National Level Technical Event.</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Placements;
