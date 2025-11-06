import React from 'react'
import PropTypes from 'prop-types';

const Button = ({text}) => {
  return (
    <div>
        <button className='flex transition duration-300 hover:scale-105 cursor-pointer px-4 py-2 bg-blue-800 shadow-md text-white'>{text}</button>
    </div>
  )
}

Button.propTypes = {
    text: PropTypes.string.isRequired,
}

export default Button