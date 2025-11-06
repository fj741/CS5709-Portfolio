import React from 'react'
import EducationCard from '../utils/EducationCard'

const EducationPage = () => {
  const data = [
    {
      title: "Postgraduate",
      details: ["MSc"]
    }
  ]
  return (
    <div className="flex flex-wrap h-[70vh] m-10 gap-10 items-center justify-center">
      {
      data.map((data) => (
        <EducationCard key={data.title} title={data.title} details={data.details} />
      ))}

      
    </div>
  )
}

export default EducationPage