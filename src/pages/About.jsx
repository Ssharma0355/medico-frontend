import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const About = () => {
  return (
    <div className="px-6 md:px-10 lg:px-20 py-16">
      
      <div className="max-w-6xl mx-auto">
        
        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-10">
          About Us
        </h1>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          
          {/* Image */}
          <div className="flex-1">
            <img 
              src={assets.about_image} 
              alt="About" 
              className="rounded-2xl shadow-lg"
            />
          </div>

          {/* Text */}
          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-4">
              Your Health, Our Priority
            </h2>

            <p className="text-gray-600 mb-4">
              We provide a seamless way to connect with trusted doctors and healthcare professionals. 
              Our platform ensures that you get the best medical advice anytime, anywhere.
            </p>

            <p className="text-gray-600 mb-4">
              From booking appointments to online consultations, we aim to simplify healthcare access 
              and improve your overall experience.
            </p>

            <p className="text-gray-600">
              Our mission is to make healthcare accessible, reliable, and convenient for everyone.
            </p>
          </div>

        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 text-center">
          
          <div className="bg-white shadow-md p-6 rounded-xl">
            <h3 className="text-2xl font-bold text-indigo-600">100+</h3>
            <p className="text-gray-600">Doctors</p>
          </div>

          <div className="bg-white shadow-md p-6 rounded-xl">
            <h3 className="text-2xl font-bold text-indigo-600">10K+</h3>
            <p className="text-gray-600">Happy Patients</p>
          </div>

          <div className="bg-white shadow-md p-6 rounded-xl">
            <h3 className="text-2xl font-bold text-indigo-600">24/7</h3>
            <p className="text-gray-600">Support</p>
          </div>

        </div>

      </div>
    </div>
  )
}

export default About