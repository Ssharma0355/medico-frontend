import React from 'react'
import { useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets_frontend/assets'

const CreateAccCTR = () => {
  const navigate = useNavigate()

  return (
    <div className="px-6 md:px-10 lg:px-20 py-16">
      
      <div className="max-w-6xl mx-auto bg-gradient-to-r from-indigo-500 to-purple-600 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">

        {/* LEFT CONTENT */}
        <div className="text-white max-w-xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Create Your Account & Book Appointments Instantly
          </h1>

          <p className="text-white/90 mb-6">
            Join thousands of users who trust us for their healthcare needs. 
            Easy booking, expert doctors, and secure health records — all in one place.
          </p>

          <button
            onClick={() => navigate('/login')}
            className="bg-white text-black px-6 py-3 rounded-full font-medium hover:scale-105 transition"
          >
            Create Account →
          </button>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <img
            src={assets.appointment_img}
            alt=""
            className="w-64 md:w-80 object-contain drop-shadow-xl"
          />
        </div>

      </div>

    </div>
  )
}

export default CreateAccCTR