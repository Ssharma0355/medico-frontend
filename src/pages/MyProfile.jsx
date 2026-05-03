import React from 'react'

const MyProfile = () => {
  const userInfo = {
    name: "Sachin Sharma",
    age: 23,
    email: "ssharma0355@gmail.com",
    profile: "SS",
    gender: "Male",
    dob: "17/11/2000",
    phone: "+91 98765 43210"
  }

  return (
    <div className="min-h-screen py-10">
      
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-2xl p-8">
        
        {/* Top Section */}
        <div className="flex items-center gap-6">
          
          {/* Avatar */}
          <div className="w-24 h-24 bg-indigo-600 text-white flex items-center justify-center rounded-full text-2xl font-bold shadow-md">
            {userInfo.profile}
          </div>

          {/* Name */}
          <div>
            <h1 className="text-2xl font-semibold">
              {userInfo.name}
            </h1>
            <p className="text-gray-500">{userInfo.email}</p>
          </div>

        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-gray-200 my-6"></div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
          <p><span className="font-medium">Phone:</span> {userInfo.phone}</p>
          <p><span className="font-medium">Gender:</span> {userInfo.gender}</p>
          <p><span className="font-medium">Date of Birth:</span> {userInfo.dob}</p>
          <p><span className="font-medium">Age:</span> {userInfo.age}</p>
        </div>

        {/* Button */}
        <div className="mt-8">
          <button className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition">
            Edit Profile
          </button>
        </div>

      </div>

    </div>
  )
}

export default MyProfile