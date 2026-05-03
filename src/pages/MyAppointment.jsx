import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const MyAppointment = () => {

  const appointments = [
    {
      _id: 'doc1',
      name: 'Dr. Richard James',
      image: assets.doc1,
      speciality: 'General Physician',
      paid: false,
      appointmentDate: "25 July, 2026",
      time: "8:30 PM",
      address: {
        line1: '17th Cross, Richmond',
        line2: 'Circle, Ring Road, London'
      }
    },
    {
      _id: 'doc2',
      name: 'Dr. Richard James',
      image: assets.doc2,
      speciality: 'General Physician',
      paid: true,
      appointmentDate: "25 July, 2026",
      time: "8:30 PM",
      address: {
        line1: '17th Cross, Richmond',
        line2: 'Circle, Ring Road, London'
      }
    },
    {
      _id: 'doc3',
      name: 'Dr. Richard James',
      image: assets.doc3,
      speciality: 'General Physician',
      paid: false,
      appointmentDate: "25 July, 2026",
      time: "8:30 PM",
      address: {
        line1: '17th Cross, Richmond',
        line2: 'Circle, Ring Road, London'
      }
    },
  ]

  return (
    <div className="min-h-screen py-10 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">
          My Appointments
        </h1>
        <div className="space-y-6">
          {appointments.map((doc) => (
            <div
              key={doc._id}
              className="bg-white shadow-md rounded-xl p-6 flex flex-col md:flex-row gap-6 items-center md:items-start"
            >
              {/* Doctor Image */}
              <img
                src={doc.image}
                alt={doc.name}
                className="w-28 h-28 rounded-lg object-cover"
              />
              {/* Info */}
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-xl font-semibold">
                  {doc.name}
                </h2>
                <p className="text-indigo-600 text-sm mt-1">
                  {doc.speciality}
                </p>
                <p className="text-gray-600 mt-2">
                  📅 {doc.appointmentDate}
                </p>
                <p className="text-gray-600">
                  ⏰ {doc.time}
                </p>
                <p className="text-gray-500 mt-2 text-sm">
                  {doc.address.line1}, {doc.address.line2}
                </p>
              </div>
              {/* Actions */}
              <div className="flex flex-col gap-3 w-full md:w-auto">
                <button
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition
                    ${doc.paid
                      ? "bg-green-100 text-green-600 cursor-default"
                      : "bg-indigo-600 text-white hover:bg-indigo-700"
                    }`}
                >
                  {doc.paid ? "Paid" : "Pay Now"}
                </button>
                <button
                  className="px-4 py-2 rounded-lg border border-red-400 text-red-500 hover:bg-red-50 transition text-sm"
                >
                  Cancel Appointment
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MyAppointment