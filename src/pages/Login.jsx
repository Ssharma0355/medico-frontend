import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const [loginState, setLoginState] = useState({
    email: "",
    password: ""
  })

  const navigate = useNavigate()

  const handleLogin = (e) => {
    const { name, value } = e.target

    setLoginState((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const submitLogin = (e) => {
    e.preventDefault()

    if (!loginState.email || !loginState.password) {
      alert("Please fill all fields")
      return
    }

    console.log("Login Data:", loginState)

    // 👉 API call here
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      
      <form
        onSubmit={submitLogin}
        className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md"
      >
        <h1 className="text-3xl font-bold text-center mb-2">
          Login
        </h1>

        <p className="text-gray-500 text-center mb-6">
          Please login to book appointment
        </p>

        {/* Email */}
        <input
          type="email"
          name="email"
          value={loginState.email}
          onChange={handleLogin}
          placeholder="Enter your email"
          className="w-full border p-3 rounded-lg mb-4 outline-none focus:ring-2 focus:ring-indigo-500"
        />

        {/* Password */}
        <input
          type="password"
          name="password"
          value={loginState.password}
          onChange={handleLogin}
          placeholder="Enter your password"
          className="w-full border p-3 rounded-lg mb-6 outline-none focus:ring-2 focus:ring-indigo-500"
        />

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition"
        >
          Login
        </button>

        {/* Signup Link */}
        <p className="text-center text-gray-600 mt-4">
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/signup")}
            className="text-indigo-600 font-medium cursor-pointer hover:underline"
          >
            Create Account
          </span>
        </p>

      </form>

    </div>
  )
}

export default Login