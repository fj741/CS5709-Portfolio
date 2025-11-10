import React from 'react'
import About from '../components/About';
import DownloadCVButton from '../utils/DownloadCVButton';
import Bar from '../components/Bar';

//About Page with a blank bar Component and information about me from the About Component

const AboutPage = () => {
  return (
    <div className=' flex flex-col gap-5 items-center justify-center'>
      <Bar />
      <About/>
      <DownloadCVButton/>
    </div>
  )
}

export default AboutPage;