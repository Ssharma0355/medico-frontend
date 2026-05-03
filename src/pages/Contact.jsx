import React from 'react'

const Contact = () => {
  return (
    <div className="px-6 md:px-10 lg:px-20 py-16">
      
      <div className="max-w-6xl mx-auto">
        
        {/* Heading */}
        <h1 className="text-3xl md:text-5xl font-bold text-center mb-10">
          Contact Us
        </h1>

        <div className="grid md:grid-cols-2 gap-10">
          
          {/* LEFT INFO */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              Get in Touch
            </h2>

            <p className="text-gray-600 mb-6">
              Have questions or need help? Reach out to us anytime. We’re here to help you.
            </p>

            <div className="space-y-4 text-gray-700">
              <p><strong>Email:</strong> support@healthcare.com</p>
              <p><strong>Phone:</strong> +91 9876XXXXX XX</p>
              <p><strong>Address:</strong> Patna, Bihar, India</p>
            </div>
          </div>

          {/* RIGHT FORM */}
          <form className="bg-white shadow-lg rounded-2xl p-6 space-y-4">
            
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border p-3 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border p-3 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
            />

            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full border p-3 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>
    </div>
  )
}

export default Contact