import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'

function RelatedDoctors({ docId, speciality }) {
  const { doctors } = useContext(AppContext)
  const [relDoc, setRelDoc] = useState([])

  useEffect(() => {
    if (doctors.length > 0 && speciality) {
      const doctorsData = doctors.filter(
        (doc) =>
          doc.speciality === speciality &&
          doc._id !== docId
      )

      setRelDoc(doctorsData)
    }
  }, [doctors, docId, speciality])

  return (
    <div className="mt-16">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800">
          Related Doctors
        </h2>
        <p className="text-gray-500 mt-2">
          Simply browse through our extensive list of trusted doctors.
        </p>
      </div>

      <div className="flex flex-rows-auto gap-6 gap-y-8 mt-10">
        {relDoc.slice(0, 4).map((doc) => (
          <div
            key={doc._id}
            className="border border-blue-100 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-300 shadow-sm hover:shadow-lg bg-white"
          >
            <img
              className="bg-blue-50 w-full h-56 object-cover"
              src={doc.image}
              alt={doc.name}
            />
             <img
              className="bg-blue-50 w-full h-56 object-cover"
              src={doc.image}
              alt={doc.name}
            />

            <div className="p-5">
              <div className="flex items-center gap-2 text-sm text-green-500">
                <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                <p>Available</p>
              </div>

              <p className="text-gray-900 text-lg font-semibold mt-3">
                {doc.name}
              </p>

              <p className="text-gray-600 text-sm mt-1">
                {doc.speciality}
              </p>

              <button className="mt-4 w-full bg-primary text-white py-2 rounded-lg hover:opacity-90 transition">
                Book Appointment
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RelatedDoctors