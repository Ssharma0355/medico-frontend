import React from 'react'
import { useNavigate } from 'react-router-dom'
import { doctors } from '../assets/assets_frontend/assets'

const TopDoctors = () => {
  const navigate = useNavigate()

  return (
    <div className="px-6 md:px-10 lg:px-20 py-16">

      {/* TITLE */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold">
          Top Doctors to Book
        </h1>
        <p className="text-gray-500 mt-2">
          Book appointments with our most trusted doctors
        </p>
      </div>

      {/* GRID */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {doctors.slice(0, 8).map((doc, index) => (
          <div
            key={index}
            onClick={() => navigate(`/appointment/${doc._id}`)}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 cursor-pointer overflow-hidden group"
          >
            {/* IMAGE */}
            <div className="bg-indigo-50">
              <img
                src={doc.image}
                alt={doc.name}
                className="w-full h-48 object-cover group-hover:scale-105 transition duration-300"
              />
            </div>

            {/* CONTENT */}
            <div className="p-4">
              
              {/* NAME */}
              <h2 className="text-lg font-semibold">
                {doc.name}
              </h2>

              {/* SPECIALITY */}
              <p className="text-sm text-gray-500">
                {doc.speciality}
              </p>

              {/* EXPERIENCE */}
              <p className="text-xs text-gray-400 mt-1">
                {doc.experience}
              </p>

              {/* FEES + BUTTON */}
              <div className="flex items-center justify-between mt-4">
                <span className="text-sm font-medium text-indigo-600">
                  ₹{doc.fees}
                </span>

                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    navigate(`/appointment/${doc._id}`)
                  }}
                  className="text-sm bg-indigo-600 text-white px-3 py-1 rounded-full hover:scale-105 transition"
                >
                  Book
                </button>
              </div>

            </div>
          </div>
        ))}

      </div>

      {/* VIEW ALL */}
      <div className="text-center mt-10">
        <button
          onClick={() => navigate('/doctors')}
          className="px-6 py-2 bg-black text-white rounded-full hover:scale-105 transition"
        >
          View All Doctors
        </button>
      </div>

    </div>
  )
}

export default TopDoctors