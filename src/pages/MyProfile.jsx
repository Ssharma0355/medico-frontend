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

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  // Save changes
  const handleSave = () => {
    setUserInfo(formData)
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
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          
          <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-md">
            
            <h2 className="text-xl font-semibold mb-4">
              Edit Profile
            </h2>

            <div className="space-y-3">
              
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                className="w-full border p-2 rounded"
              />

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full border p-2 rounded"
              />

              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
                className="w-full border p-2 rounded"
              />

              <input
                type="text"
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                placeholder="Gender"
                className="w-full border p-2 rounded"
              />

              <input
                type="text"
                name="dob"
                value={formData.dob}
                onChange={handleChange}
                placeholder="Date of Birth"
                className="w-full border p-2 rounded"
              />

              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                placeholder="Age"
                className="w-full border p-2 rounded"
              />

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