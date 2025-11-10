import React from 'react'
import Button from '../utils/Button'

const Banner = () => {
  return (
    <div className='w-screen p-6 md:p-4 shadow-neon bg-gradient-to-r from-blue-500 to-neon-600 rounded-lg bg-cyan-800 items-center flex flex-col 
    justify-center text-white'>
        <h1 className='text-xl font-bold'>Jack Farrell</h1>
        <p className='text-lg'>MSc Student in Software Engineering</p>
        <p>Limerick University</p>
        <Button link="https://github.com/fj741" text="View My GitHub"/>
    </div>
  )
}

export default Banner