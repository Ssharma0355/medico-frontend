import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 px-6 md:px-10 lg:px-20 pt-12 pb-6">

      {/* TOP SECTION */}
      <div className="grid md:grid-cols-4 gap-10 mb-10">

        {/* LOGO + ABOUT */}
        <div>
          <h1 className='text-lg font-semibold'>Medico</h1>
          <p className="text-sm leading-6">
            Your trusted healthcare partner. Book appointments, consult doctors,
            and manage your health easily — all in one place.
          </p>
        </div>

        {/* COMPANY */}
        <div>
          <h2 className="text-white font-semibold mb-4">Company</h2>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Home</li>
            <li className="hover:text-white cursor-pointer">About us</li>
            <li className="hover:text-white cursor-pointer">Contact us</li>
            <li className="hover:text-white cursor-pointer">Privacy policy</li>
          </ul>
        </div>

        {/* SERVICES */}
        <div>
          <h2 className="text-white font-semibold mb-4">Services</h2>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-white cursor-pointer">Book Appointment</li>
            <li className="hover:text-white cursor-pointer">Find Doctors</li>
            <li className="hover:text-white cursor-pointer">Online Consultation</li>
            <li className="hover:text-white cursor-pointer">Health Records</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h2 className="text-white font-semibold mb-4">Get in Touch</h2>
          <ul className="space-y-2 text-sm">
            <li>📞 +91 XXXXXXXXXXX</li>
            <li>📧 support@healthcare.com</li>
            <li>📍 India</li>
          </ul>
        </div>

      </div>

      {/* DIVIDER */}
      <div className="border-t border-gray-700 pt-6 text-center text-sm">
        © {new Date().getFullYear()} Healthcare App. All rights reserved.
      </div>

    </footer>
  )
}

export default Footer