import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets_frontend/assets'

const cards = [
  {
    title: "Book Appointments",
    desc: "Quickly book appointments with trusted doctors.",
    img: assets.header_img, // replace later
    color: "bg-primary",
  },
  {
    title: "Top Specialists",
    desc: "Find the best specialists near you easily.",
    img: assets.header_img,
    color: "bg-indigo-500",
  },
  {
    title: "Online Consultation",
    desc: "Consult doctors anytime from your home.",
    img: assets.header_img,
    color: "bg-pink-500",
  },
  {
    title: "24/7 Support",
    desc: "We are here to help you anytime.",
    img: assets.header_img,
    color: "bg-green-500",
  },
  {
    title: "Health Records",
    desc: "Manage your health data securely.",
    img: assets.header_img,
    color: "bg-yellow-500",
  },
]

function Header() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % cards.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="overflow-hidden px-6 md:px-10 lg:px-20 py-10">

      {/* CARDS WRAPPER */}
      <div
        className="flex gap-6 transition-transform duration-700"
        style={{ transform: `translateX(-${current * 25}%)` }}
      >
        {cards.map((card, index) => (
          <div
            key={index}
            className={`min-w-[25%] h-[300px] rounded-xl p-6 text-white flex flex-col justify-between shadow-lg ${card.color}`}
          >
            {/* TOP */}
            <div>
              <h2 className="text-xl font-semibold mb-2">
                {card.title}
              </h2>
              <p className="text-sm opacity-90">
                {card.desc}
              </p>
            </div>

            {/* IMAGE */}
            <div className="flex justify-center">
              <img
                src={card.img}
                alt=""
                className="w-24 h-24 object-contain"
              />
            </div>

            {/* BUTTON */}
            <button className="bg-white text-black py-2 rounded-full text-sm font-medium hover:scale-105 transition">
              Explore →
            </button>
          </div>
        ))}
      </div>

      {/* DOTS */}
      <div className="flex justify-center mt-6 gap-2">
        {cards.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              current === index ? "bg-black" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  )
}

export default Header