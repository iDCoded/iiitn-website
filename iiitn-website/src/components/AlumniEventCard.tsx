import React from 'react'
interface AlumniEventCardProps {
  title: string;
    date: string;
    description: string;
    image: string;

}

function AlumniEventCard({title, date, description, image}: AlumniEventCardProps) {
  return (
    <>
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
  <img className="w-full" src={image} alt={title}/>
  <div className="px-6 py-4">
    <div className="font-bold text-xl mb-2">{title}</div>
    <p className="text-gray-700 text-base">
      {description}
    </p>
  </div>
    <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{date}</span>
    </div>
</div></>
  )
}

export default AlumniEventCard