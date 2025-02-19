import React from 'react'
import { DepartmentCard } from '../components/DepartmentCard'
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";

function Departments() {
    return (
        <div className="bg-gray-100 text-gray-900 min-h-screen">
            {/* Hero Section */}
            <div className="bg-[#002147] text-white py-16 text-center">
                <h1 className="text-4xl font-bold">Departments at IIIT Nagpur</h1>
                <p className="text-lg mt-2">Explore the diverse academic departments at IIIT Nagpur</p>
            </div>

            {/* Content Sections */}
            <div className="max-w-6xl mx-auto px-6 py-12">
                {/* First Row of Departments */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 gap-y-8 mb-8 ">
                    {/* Department 1 */}
                    <DepartmentCard 
                        title="Basic Science" 
                        description="The Department of Basic Science at IIIT Nagpur focuses on fundamental research and education in physics, chemistry, and mathematics." 
                        link="departments/basic-science" 
                    />

                    {/* Department 2 */}
                    <DepartmentCard 
                        title="Computer Science & Engineering" 
                        description="The Department of Computer Science & Engineering offers cutting-edge research and education in computer science, software development, and AI." 
                        link="departments/cse" 
                    />
                </div>

                {/* Second Row of Departments */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 gap-y-8 mb-8 ">
                    {/* Department 3 */}
                    <DepartmentCard 
                        title="Electronics & Communication" 
                        description="The Department of Electronics & Communication at IIIT Nagpur is known for research in embedded systems, signal processing, and communication networks." 
                        link="departments/ece" 
                    />

                    
                </div>

                
            </div>
        </div>
    )
}

export default Departments;
