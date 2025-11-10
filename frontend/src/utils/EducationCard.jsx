import React from 'react'
import PropTypes from 'prop-types'

//Created a Card with props title and details 
const EducationCard = ({title, details}) => {
  return (
    <div className="group bg-cyan-800 max-w-[350px] w-[90%] text-center text-white p-4 transition-all duration-300 hover:h-auto cursor-pointer">
        <h1 className='underline'>{title}</h1>
        <div className="opacity-0 max-h-0 overflow-hidden transition-all duration-300 group-hover:opacity-100 group-hover:max-h-[200px]">
            {details.map((item)=>{
                <p key={item}>{item}</p>
            })}
        </div>
    </div>
  )
}

EducationCard.propTypes = {
    title: PropTypes.string.isRequired,
    details: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default EducationCard