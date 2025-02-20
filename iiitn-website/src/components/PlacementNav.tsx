import React from 'react'

function PlacementNav() {
  return (
    <>

<nav className="bg-gray-50 dark:bg-gray-700">
    <div className="max-w-screen-xl px-4 py-3 mx-auto">
        <div className="flex items-center">
            <ul className="flex flex-row font-medium mt-0 space-x-48 rtl:space-x text-lg">
                <li>
                    <a href="#" className="text-gray-900 dark:text-white hover:underline ml-12" aria-current="page">Internships</a>
                </li>
                <li>
                    <a href="#" className="text-gray-900 dark:text-white hover:underline">Statistics</a>
                </li>
                <li>
                    <a href="#" className="text-gray-900 dark:text-white hover:underline">Companies</a>
                </li>
                <li>
                    <a href="#" className="text-gray-900 dark:text-white hover:underline">Students</a>
                </li>
                <li>
                    <a href="#" className="text-gray-900 dark:text-white hover:underline">Contact T&P</a>
                </li>
            </ul>
        </div>
    </div>
</nav>


    


    </>
  )
}

export default PlacementNav