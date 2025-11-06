import React from 'react'
import About from '../components/About';
import DownloadCVButton from '../utils/DownloadCVButton';

const AboutPage = () => {
  return (
    <div className='h-[80vh] flex flex-col items-center justify-center'>
      <About/>
      <DownloadCVButton/>
    </div>
  )
}

export default AboutPage;