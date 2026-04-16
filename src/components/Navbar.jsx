import React, { useState } from 'react'
import { Navigate, NavLink, useNavigate } from 'react-router-dom';
import {assets} from "../assets/assets_frontend/assets"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [shoeMenu, isShowMenu] = useState(false);
  const [token, isToken] = useState(true);

  const navigate = useNavigate()

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "All Doctor", path: "/doctors" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ]

  return (
    <div className='border-b border-gray-300'>

      <div className='flex items-center justify-between py-4 px-4 md:px-0'>
        <h1 className='text-lg font-semibold'>Medico</h1>

        {/* Desktop Menu */}
        <ul className='hidden md:flex items-center gap-6 font-medium'>
          {navLinks.map((link, index) => (
            <li key={index}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  isActive ? "text-blue-500" : "text-gray-700"
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Desktop Button */}
        <div className='hidden md:block'>
            { token ? 
            <div className='flex gap-2 items-center'>
                <img className='w-10 h-10 rounded-full' src={assets.profile_pic} alt="Profile" />
                <img className='w-3' src={assets.dropdown_icon} alt="dropdown_icon" />
            </div>
            :  
            <button onClick={()=>navigate("/login")} className='bg-blue-500 text-white px-4 py-2 rounded'>
            Create Account
          </button>}
         
        </div>

        {/* Mobile Hamburger */}
        <div className='md:hidden'>
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? "✖" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='md:hidden px-4 pb-4'>
          <ul className='flex flex-col gap-4 font-medium'>
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    isActive ? "text-blue-500" : "text-gray-700"
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>
         <div>
             {token ? 
              <div>
                <img src={assets.patients_icon} alt="Profile" />

            </div> :
               <button onClick={()=>navigate("/login")} className='mt-4 w-full bg-blue-500 text-white py-2 rounded'>
               Create Account
             </button>
             }
         </div>
      
        </div>
      )}
    </div>
  )
}

export default Navbar