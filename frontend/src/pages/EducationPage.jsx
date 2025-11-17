/**
 * Education Page that takes in the EducationCard component and provides the user with
 * details when hovering over an education card
 */
import React from 'react'
import EducationCard from '../components/EducationCard'

const EducationPage = () => {
  const data = [
    {
      title: "Postgraduate",
      details: ["MSc in Software Engineering", "Completing in 2026", "University Limerick"]
    },
    {
      title: "Undergaduate",
      details: ["BSc is General Science", "Completed in 2021", "Maynooth University"]
    },
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