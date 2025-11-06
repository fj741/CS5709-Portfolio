import React from 'react'

const SkillsPage = () => {
  return (
    <div>
        <div className='flex flex-col gap-5 h-[75vh] justify-center 
        items-center text-gray-800 mt-5 p-4'>
          <h1 className='font-bold'>Professional Skills</h1>
          <div className='flex flex-col bg-cyan-800 px-10 py-4 text-center text-white gap-3 
          items-center justify-center rounded-sm shadow-lg'>
            <div className='flex flex-col gap-3'>
              <h1 className='font-bold'>Frontend Languages and Frameworks</h1>
              <div className='flex flex-row gap-4'>
                <p>HTML</p>
                <p>CSS</p>
                <p>TailwindCSS</p>
                <p>React</p>
                <p>JavaScript</p>
              </div>
            </div>
            <div className='flex flex-col gap-3'>
              <h1 className='font-bold'>Backend Languages and Technologies</h1>
              <div className='flex flex-row gap-4'>
                <p>Python</p>
                <p>Django</p>
                <p>NodeJS</p>
              </div>
            </div>
            <div className='flex flex-col gap-3'>
              <h1 className='font-bold'>Object Oriented Languages</h1>
              <div className='flex flex-row gap-4'>
                <p>JavaScript</p>
                <p>Java</p>
                <p>Python</p>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default SkillsPage