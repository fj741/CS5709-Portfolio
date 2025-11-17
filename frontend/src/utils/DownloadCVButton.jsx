import React from 'react'

//A button to download CV
const DownloadCVButton = () => {
  return (
    <div>
        <a href="/CV.pdf" download className='bg-cyan-800 p-4 text-white font-bold'>Download CV</a>
    </div>

  )
}

export default DownloadCVButton