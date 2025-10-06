import React from 'react'

const EducationPage = () => {
  return (
    <div className='flex flex-wrap h-[70vh] m-10 gap-10 items-center justify-center'>
      <div className='bg-cyan-800 max-w-[350px] w-[90%] text-center text-white p-4'>
        <h1 className='font-bold text-underline'>Postgraduate</h1>
        <p>MSc in Software Engineering 2025</p>
        <p>Limerick University</p>
      </div>
      <div className='bg-cyan-800 max-w-[350px] w-[90%] text-center text-white p-4'>
        <h1 className='font-bold text-underline'>Undergraduate</h1>
        <p>BSc in General Science in 2021</p>
        <p>Maynooth University</p>
      </div>
      <div className='bg-cyan-800 max-w-[350px] w-[90%] text-center text-white p-4'>
        <h1 className='font-bold text-underline'>Professional Diploma</h1>
        <p>Software Development in 2024</p>
        <p>University City Dublin </p>
      </div>
    </div>
  )
}

export default EducationPage