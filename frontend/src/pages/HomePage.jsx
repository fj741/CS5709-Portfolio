import Banner from '../components/Banner'
import Design from '../components/Design'

const Home = () => {
  return (
    <div className='flex h-100 w-screen'>
      <div className='flex md:flex-row mt-10 flex-col w-full'>
        <Banner />
        <Design/>
      </div>
    </div>
  )
}

export default Home