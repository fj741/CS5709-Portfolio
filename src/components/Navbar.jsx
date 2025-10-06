import React, {useState} from 'react'
import { Link } from 'react-router'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faX } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  const [openButton, setButtonOpen] = useState(false);
  const openSideBar = () =>{
    setButtonOpen(!openButton)
  }


  return (
    <nav className='p-6 flex bg-gray-600 w-screen justify-between'>
        <div>
            <h1 className='text-blue-200 text-xl font-bold'><Link to="/">Jack Farrell</Link></h1>
        </div>
        <div className=' md:flex hidden gap-10 list-none text-white'>
            <li className='hover:ease-in-out px-2 rounded-sm hover:bg-blue-500'><Link to="/">Home</Link></li>
            <li className='hover:ease-in-out px-2 rounded-sm hover:bg-blue-500'><Link to="/about">About</Link></li>
            <li className='hover:ease-in-out px-2 rounded-sm hover:bg-blue-500'><Link to="/education">Education</Link></li>
            <li className='hover:ease-in-out px-2 rounded-sm hover:bg-blue-500'><Link to="/skills">Skills</Link></li>
            <li className='hover:ease-in-out px-2 rounded-sm hover:bg-blue-500'><Link to="/contact">Contact</Link></li>
        </div>
        
        <div className='md:hidden flex'>
          <button onClick={openSideBar} className='text-blue-200 font-bold text-xl cursor-pointer'>
            <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
          </button>
          {openButton &&(
              <div className='fixed right-0 top-0 ease-in-out transition-transform duration-300 flex p-4 flex-col transform-0.3 items-center list-none gap-10 h-screen bg-blue-100'>
                <button onClick={openSideBar}>
                  <FontAwesomeIcon className='cursor-pointer' icon={faX}></FontAwesomeIcon>
                </button>
                <li className='hover:ease-in-out px-2 rounded-sm hover:text-white hover:bg-blue-500'><Link to="/">Home</Link></li>
                <li className='hover:ease-in-out px-2 rounded-sm hover:text-white hover:bg-blue-500'><Link to="/about">About</Link></li>
                <li className='hover:ease-in-out px-2 rounded-sm hover:text-white hover:bg-blue-500'><Link to="/education">Education</Link></li>
                <li className='hover:ease-in-out px-2 rounded-sm hover:text-white hover:bg-blue-500'><Link to="/skills">Skills</Link></li>
                <li className='hover:ease-in-out px-2 rounded-sm hover:text-white hover:bg-blue-500'><Link to="/contact">Contact</Link></li>
              </div>
            )}
        </div>
    </nav>
  )
}

export default Navbar