import React from 'react'
import { assets } from '../assets/assets_frontend/assets'
import { useNavigate } from 'react-router-dom';

function Header() {
  const navigate = useNavigate();

  return (
    <div className="px-6 md:px-10 lg:px-20 py-12">
      
      <div className="max-w-6xl mx-auto bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl shadow-xl overflow-hidden">
        
        <div className="flex flex-col md:flex-row items-center p-8 md:p-12">
          
          {/* LEFT CONTENT */}
          <div className="flex-1 text-white">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
              Book Appointments <br /> with Trusted Doctors
            </h1>

            <p className="text-white/90 mb-6">
              Find top specialists, consult online, and manage your health — all in one place.
            </p>

            <div className="flex gap-4">
              <button
                onClick={() => navigate("/login")}
                className="bg-white text-black px-6 py-3 rounded-full font-medium hover:scale-105 transition"
              >
                Get Started →
              </button>

              <button className="border border-white px-6 py-3 rounded-full hover:bg-white hover:text-black transition">
                Learn More
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex-1 mt-8 md:mt-0 flex justify-center">
            <img
              src={assets.header_img}
              alt=""
              className="w-72 md:w-96 object-contain drop-shadow-xl"
            />
          </div>

        </div>
      </div>

    </div>
  )
}

export default Header