import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Appointment = () => {
  const { docId } = useParams()
  const [docInfo, setDocInfo] = useState(null)

  const { doctors } = useContext(AppContext)

  const fetchDocInfo = () => {
    const doctor = doctors.find(doc => doc._id === docId)
    setDocInfo(doctor)
    console.log(doctor)
  }

  useEffect(() => {
    fetchDocInfo()
  }, [docId, doctors])

  return (
    <div>
      {docInfo ? (
        <h1>{docInfo.name}</h1>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default Appointment