import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Signup() {
    const [signupState, setSignupState] = useState({
        fullname:"",
        email: "",
        password: ""
      })
      const navigate = useNavigate()
      const handleSignup =(e)=>{
        const {name, value} = e.target
        setSignupState((prev)=>({
            ...prev,
            [name]:value
        }))

      }
      const submitSignup =()=>{

      }

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      
      <form
        onSubmit={submitSignup}
        className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md"
      >
        <h1 className="text-3xl font-bold text-center mb-2">
          Create Account
        </h1>

        <p className="text-gray-500 text-center mb-6">
          Please Signup to book appointment
        </p>

        {/* full name  */}
        <input
          type="text"
          name="fullname"
          value={signupState.fullname}
          onChange={handleSignup}
          placeholder="Enter your Full Name"
          className="w-full border p-3 rounded-lg mb-4 outline-none focus:ring-2 focus:ring-indigo-500"
        />

        {/* Email */}
        <input
          type="email"
          name="email"
          value={signupState.email}
          onChange={handleSignup}
          placeholder="Enter your email"
          className="w-full border p-3 rounded-lg mb-4 outline-none focus:ring-2 focus:ring-indigo-500"
        />

        {/* Password */}
        <input
          type="password"
          name="password"
          value={signupState.password}
          onChange={handleSignup}
          placeholder="Enter your password"
          className="w-full border p-3 rounded-lg mb-6 outline-none focus:ring-2 focus:ring-indigo-500"
        />

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition"
        >
          Signup
        </button>

        {/* Signup Link */}
        <p className="text-center text-gray-600 mt-4">
          Already have account {" "}
          <span
            onClick={() => navigate("/login")}
            className="text-indigo-600 font-medium cursor-pointer hover:underline"
          >
            Login
          </span>
        </p>

      </form>

    </div>
  )
}

export default Signup
