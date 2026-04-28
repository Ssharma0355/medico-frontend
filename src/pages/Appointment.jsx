import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import RelatedDoctors from '../components/RelatedDoctors'

const Appointment = () => {
  const { docId } = useParams()
  const { doctors } = useContext(AppContext)

  const [docInfo, setDocInfo] = useState(null)
  const [docSlots, setDocSlots] = useState([])
  const [slotIndex, setSlotIndex] = useState(0)
  const [slotTime, setSlotTime] = useState("")

  // Fetch doctor details
  const fetchDocInfo = () => {
    const doctor = doctors.find((doc) => doc._id === docId)
    setDocInfo(doctor)
  }

  // Generate available slots for next 7 days
  const getAvailableSlots = () => {
    setDocSlots([])

    let today = new Date()
    let allSlots = []

    for (let i = 0; i < 7; i++) {
      // Current date
      let currentDate = new Date(today)
      currentDate.setDate(today.getDate() + i)

      // End time → 9 PM
      let endTime = new Date(currentDate)
      endTime.setHours(21, 0, 0, 0)

      // Start time
      if (i === 0) {
        // Today → next available slot
        currentDate.setHours(
          currentDate.getHours() > 10
            ? currentDate.getHours() + 1
            : 10
        )

        currentDate.setMinutes(
          currentDate.getMinutes() > 30 ? 30 : 0
        )
      } else {
        // Future days → 10 AM
        currentDate.setHours(10)
        currentDate.setMinutes(0)
      }

      let timeSlots = []

      while (currentDate < endTime) {
        let formattedTime = currentDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })

        timeSlots.push({
          datetime: new Date(currentDate),
          time: formattedTime,
        })

        // Add 30 mins
        currentDate.setMinutes(currentDate.getMinutes() + 30)
      }

      allSlots.push(timeSlots)
    }

    setDocSlots(allSlots)
  }

  useEffect(() => {
    if (doctors.length > 0) {
      fetchDocInfo()
    }
  }, [docId, doctors])

  useEffect(() => {
    if (docInfo) {
      getAvailableSlots()
    }
  }, [docInfo])

  return (
    <div className="px-6 md:px-10 lg:px-20 py-12">
      {docInfo ? (
        <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-lg p-8">

          {/* Doctor Profile */}
          <div className="flex flex-col items-center text-center">
            <img
              src={docInfo.image}
              alt={docInfo.name}
              className="w-40 h-40 rounded-full object-cover border-4 border-indigo-100 shadow-md"
            />

            <h1 className="text-3xl font-bold text-gray-800 mt-6">
              {docInfo.name}
            </h1>

            <p className="text-lg text-indigo-600 mt-2">
              {docInfo.speciality}
            </p>

            <p className="text-gray-500 mt-1">
              {docInfo.degree} • {docInfo.experience}
            </p>
          </div>

          {/* About */}
          <div className="mt-10">
            <h2 className="text-xl font-semibold mb-2">
              About Doctor
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {docInfo.about}
            </p>
          </div>

          {/* Fee */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-2">
              Appointment Fee
            </h2>
            <p className="text-indigo-600 font-semibold text-lg">
              ₹{docInfo.fees}
            </p>
          </div>

          {/* Address */}
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-2">
              Address
            </h2>
            <p className="text-gray-600">
              {docInfo.address.line1}
            </p>
            <p className="text-gray-600">
              {docInfo.address.line2}
            </p>
          </div>


          {/* Available Slots */}
          <div className="mt-10">
            <h2 className="text-2xl font-semibold mb-6">
              Available Booking Slots
            </h2>

            {/* Days */}
            <div className="flex gap-4 overflow-x-auto pb-4">
              {docSlots.length > 0 &&
                docSlots.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => setSlotIndex(index)}
                    className={`min-w-[80px] text-center py-4 rounded-xl cursor-pointer border transition
                      ${
                        slotIndex === index
                          ? "bg-indigo-600 text-white"
                          : "border-gray-300 hover:border-indigo-400"
                      }`}
                  >
                    <p className="text-sm">
                      {item[0] &&
                        item[0].datetime.toLocaleDateString([], {
                          weekday: "short",
                        })}
                    </p>

                    <p className="text-lg font-semibold">
                      {item[0] &&
                        item[0].datetime.toLocaleDateString([], {
                          day: "numeric",
                        })}
                    </p>
                  </div>
                ))}
            </div>

            {/* Time Slots */}
            <div className="flex gap-3 overflow-x-auto mt-6 pb-4">
              {docSlots.length > 0 &&
                docSlots[slotIndex].map((item, index) => (
                  <button
                    key={index}
                    onClick={() => setSlotTime(item.time)}
                    className={`px-5 py-2 rounded-full border text-sm whitespace-nowrap transition
                      ${
                        slotTime === item.time
                          ? "bg-indigo-600 text-white"
                          : "border-gray-300 hover:border-indigo-400"
                      }`}
                  >
                    {item.time}
                  </button>
                ))}
            </div>

            {/* Book Button */}
            <button className="mt-8 bg-indigo-600 text-white px-8 py-3 rounded-full hover:scale-105 transition">
              Book Appointment
            </button>
          </div>
          <RelatedDoctors docId={docId} speciality={docInfo.speciality}/>
        </div>
      ) : (
        <p className="text-center text-gray-500">
          Loading doctor details...
        </p>
      )}
    </div>
  )
}

export default Appointment