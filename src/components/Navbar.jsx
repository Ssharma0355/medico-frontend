import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

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
          <button className='bg-blue-500 text-white px-4 py-2 rounded'>
            Create Account
          </button>
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

          <button className='mt-4 w-full bg-blue-500 text-white py-2 rounded'>
            Create Account
          </button>
        </div>
      )}
    </div>
  )
}

export default Navbar