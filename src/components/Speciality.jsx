import React from 'react'
import { useNavigate } from 'react-router-dom'
import { specialityData } from '../assets/assets_frontend/assets'

const Speciality = () => {
  const navigate = useNavigate()

  return (
    <div className="px-6 md:px-10 lg:px-20 py-16">

      {/* TITLE */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold">
          Find by Speciality
        </h1>
        <p className="text-gray-500 mt-2">
          Browse doctors by speciality and book instantly
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">

        {specialityData.map((item, index) => (
          <div
            key={index}
            onClick={() => navigate(`/doctors/${item.speciality.toLowerCase()}`)}
            className="flex flex-col items-center p-4 rounded-2xl bg-white shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 cursor-pointer group"
          >
            {/* ICON */}
            <div className="bg-gray-100 p-4 rounded-full mb-4 group-hover:bg-indigo-100 transition">
              <img
                src={item.image}
                alt={item.speciality}
                className="w-12 h-12 object-contain"
              />
            </div>

            {/* TEXT */}
            <p className="text-sm font-medium text-center group-hover:text-indigo-600 transition">
              {item.speciality}
            </p>
          </div>
        ))}

      </div>

    </div>
  )
}

export default Speciality