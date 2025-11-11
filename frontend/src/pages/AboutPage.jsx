/**
 * Basic About Page with three resposnive components
 * Can download CV by clicking the button
 */


import React from 'react'
import About from '../components/About';
import DownloadCVButton from '../utils/DownloadCVButton';
import Bar from '../components/Bar';


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