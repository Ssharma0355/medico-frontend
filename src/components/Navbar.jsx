import React, { useState } from 'react'
import { Navigate, NavLink, useNavigate } from 'react-router-dom';
import {assets} from "../assets/assets_frontend/assets"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [shoeMenu, isShowMenu] = useState(false);
  const [token, setToken] = useState(true);

  const navigate = useNavigate()

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "All Doctor", path: "/doctors" },
    { name: "About Us", path: "/about" },
    { name: "Contact Us", path: "/contact" },
  ]

  return (
    <div className="border-b border-gray-300">

    <div className="flex items-center justify-between py-4 px-4 md:px-0">
  
      {/* Logo */}
      <h1 className="text-lg font-semibold">Medico</h1>
  
      {/* Desktop Menu */}
      <ul className="hidden md:flex items-center gap-6 font-medium">
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
  
      {/* Right Side */}
      <div className="flex items-center gap-4">
  
        {/* Profile / Auth */}
        {token ? (
          <div className="flex gap-2 items-center relative group cursor-pointer">
  
            <img
              className="w-10 h-10 rounded-full"
              src={assets.profile_pic}
              alt="Profile"
            />
  
            <img
              className="w-3"
              src={assets.dropdown_icon}
              alt="dropdown_icon"
            />
  
            {/* Dropdown */}
            <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
  
              <div className="min-w-[218px] bg-[#F8F8F8] text-[18px] flex flex-col p-4 rounded shadow-lg">
  
                <p
                  onClick={() => navigate("/my-profile")}
                  className="hover:text-black cursor-pointer"
                >
                  My Profile
                </p>
  
                <p
                  onClick={() => navigate("/my-appointment")}
                  className="hover:text-black cursor-pointer"
                >
                  My Appointment
                </p>
  
                <p
                  onClick={() => setToken(false)}
                  className="hover:text-red-400 cursor-pointer"
                >
                  Log out
                </p>
  
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="hidden md:block bg-blue-500 text-white px-4 py-2 rounded"
          >
            Create Account
          </button>
        )}
  
        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl"
        >
          {isOpen ? "✖" : "☰"}
        </button>
  
      </div>
    </div>
  
    {/* Mobile Menu */}
    {isOpen && (
      <div className="md:hidden px-4 pb-4">
        <ul className="flex flex-col gap-4 font-medium">
  
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
      </div>
    )}
  </div>
  )
}

export default Navbar