import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import NavItem from '../utils/NavItem'
import ResponsiveCloseButton from '../utils/ResponsiveCloseButton'
import ResponsiveOpenButton from '../utils/ResponsiveOpenButton'



//Define all links in an dictionary that can easily be extended
const NavItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Education", path: "/education" },
  { label: "Skills", path: "/skills" },
  { label: "Contact", path: "/contact" },
  { label: "Messaging", path:"/message"},
  { label: "Blog", path: "/blog"},
  { label: "Gallery", path: "/gallery"}
]


//Changed the name setButtonOpen to setOpenButton to ensure maintability and consistency 
const Navbar = () => {
  const [openButton, setOpenButton] = useState(false);
  const openSideBar = () =>{
    setOpenButton(!openButton)
  }


  return (
    <nav className='p-6 flex bg-gray-600 w-screen justify-between'>
        <div>
            <h1 className='text-blue-200 text-xl font-bold'><Link to="/">Jack Farrell</Link></h1>
        </div>
        <div className='md:flex hidden gap-10 list-none text-white'>
          {NavItems.map((item) => (
            <NavItem key={item.path} {...item} />
          ))}
        </div>
        
        <div className='md:hidden flex'>
          <button onClick={openSideBar} className='text-blue-200 font-bold text-xl cursor-pointer'>
            <ResponsiveOpenButton/>
          </button>
          {openButton &&(
              <div className={`fixed right-0 top-0 ease-in-out transform transition-transform duration-300 flex p-4 flex-col duration-300 items-center list-none gap-10 z-50 h-screen bg-blue-100 ${openButton ? 'translate-x-0': 'translate-x-full'}`}>
                <button onClick={openSideBar}>
                  <ResponsiveCloseButton/>
                  {NavItems.map((item =>
                    <NavItem key={item.path} {...item} />
                  ))}
                </button>
              </div>
            )}
        </div>
    </nav>
  )
}

export default Navbar