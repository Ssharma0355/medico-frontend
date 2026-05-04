import React, { useState } from 'react'

const MyProfile = () => {
  const [userInfo, setUserInfo] = useState({
    name: "Sachin Sharma",
    age: 23,
    email: "ssharma0355@gmail.com",
    profile: "SS",
    gender: "Male",
    dob: "17/11/2000",
    phone: "+91 98765 43210"
  })

  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState(userInfo)

  // Generate initials dynamically
  const getInitials = (name) => {
    return name
      .split(" ")
      .map(word => word[0])
      .join("")
      .toUpperCase()
  }

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSave = () => {
    setUserInfo({
      ...formData,
      profile: getInitials(formData.name)
    })
    setIsOpen(false)
  }

  return (
    <div className="min-h-screen py-10 bg-gray-50 px-6">
      
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-8">
        
        {/* Top Section */}
        <div className="flex items-center gap-6">
          
          <div className="w-24 h-24 bg-indigo-600 text-white flex items-center justify-center rounded-full text-2xl font-bold">
            {userInfo.profile}
          </div>

          <div>
            <h1 className="text-2xl font-semibold">
              {userInfo.name}
            </h1>
            <p className="text-gray-500">{userInfo.email}</p>
          </div>
        </div>

        <div className="w-full h-[1px] bg-gray-200 my-6"></div>

        {/* Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
          <p><span className="font-medium">Phone:</span> {userInfo.phone}</p>
          <p><span className="font-medium">Gender:</span> {userInfo.gender}</p>
          <p><span className="font-medium">Date of Birth:</span> {userInfo.dob}</p>
          <p><span className="font-medium">Age:</span> {userInfo.age}</p>
        </div>

        {/* Button */}
        <div className="mt-8">
          <button
            onClick={() => {
              setFormData(userInfo)
              setIsOpen(true)
            }}
            className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            Edit Profile
          </button>
        </div>

      </div>

      {/* ✅ Modal */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md"
          >
            <h2 className="text-xl font-semibold mb-4">
              Edit Profile
            </h2>

            <div className="space-y-4">

              <div>
                <label className="text-sm text-gray-600">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border p-2 rounded mt-1"
                />
              </div>

              <div>
                <label className="text-sm text-gray-600">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border p-2 rounded mt-1"
                />
              </div>

              <div>
                <label className="text-sm text-gray-600">Phone</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border p-2 rounded mt-1"
                />
              </div>

              <div>
                <label className="text-sm text-gray-600">Gender</label>
                <input
                  type="text"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="w-full border p-2 rounded mt-1"
                />
              </div>

              <div>
                <label className="text-sm text-gray-600">Date of Birth</label>
                <input
                  type="text"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  className="w-full border p-2 rounded mt-1"
                />
              </div>

              <div>
                <label className="text-sm text-gray-600">Age</label>
                <input
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  className="w-full border p-2 rounded mt-1"
                />
              </div>

            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-3 mt-6">
              
              <button
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 rounded-lg border"
              >
                Cancel
              </button>

              <button
                onClick={handleSave}
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg"
              >
                Save
              </button>

            </div>

          </div>
        </div>
      )}

    </div>
  )
}

export default MyProfile