/**
 * Simple Homepage consisting of two components
 * When displayed on a smaller device, the Design component is displayed under the Banner
 * Used lazy loading to load the large banner to improve overall performance
 */
import React, { Suspense, lazy } from 'react';

const Banner = lazy(() => import('../components/Banner'));

import Design from '../components/Design'

const Home = () => {
  return (
    <div className='flex h-100 w-screen'>
      <div className='flex md:flex-row mt-10 flex-col w-full'>
        <Suspense fallback={<div className="text-center p-4">Loading Banner...</div>}>
          <Banner />
        </Suspense>

        <Design/>
      </div>
    </div>
  )
}

export default Home