import React from 'react'
import PropTypes from 'prop-types';

const Button = ({text, link}) => {
  return (
    <div>
        <a href={link} target="_blank" 
          className='flex transition duration-300 hover:scale-105 cursor-pointer px-4 py-2 bg-blue-800 shadow-md text-white'
          >{text}
        </a>
    </div>
  )
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
}

export default Button