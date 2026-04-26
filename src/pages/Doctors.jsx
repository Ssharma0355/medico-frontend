import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { doctors } from "../assets/assets_frontend/assets";

const Doctors = () => {
  const { speciality } = useParams();
  const navigate = useNavigate();

  // Unique specialities only
  const specialities = [...new Set(doctors.map((doc) => doc.speciality))];

  // Filter doctors based on URL param
  const filteredDoctors = speciality
    ? doctors.filter(
        (doc) =>
          doc.speciality.toLowerCase().replace(/\s+/g, "-") === speciality
      )
    : doctors;

  return (
    <div className="px-6 md:px-10 lg:px-20 py-12">
      <div className="flex flex-col md:flex-row gap-8">
        
        {/* LEFT SIDEBAR */}
        <div className="md:w-1/4">
          <h2 className="text-xl font-semibold mb-4">Specialities</h2>

          <ul className="space-y-3">
            <li
              onClick={() => navigate("/doctors")}
              className={`cursor-pointer px-4 py-2 rounded-lg border transition
                ${
                  !speciality
                    ? "bg-indigo-600 text-white"
                    : "hover:bg-gray-100"
                }`}
            >
              All Doctors
            </li>

            {specialities.map((special, index) => {
              const slug = special.toLowerCase().replace(/\s+/g, "-");

              return (
                <li
                  key={index}
                  onClick={() => navigate(`/doctors/${slug}`)}
                  className={`cursor-pointer px-4 py-2 rounded-lg border transition
                    ${
                      speciality === slug
                        ? "bg-indigo-600 text-white"
                        : "hover:bg-gray-100"
                    }`}
                >
                  {special}
                </li>
              );
            })}
          </ul>
        </div>

        {/* RIGHT CONTENT */}
        <div className="md:w-3/4">
          {/* TITLE */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold capitalize">
              {speciality
                ? `${speciality.replace(/-/g, " ")} Doctors`
                : "All Doctors"}
            </h1>

            <p className="text-gray-500 mt-2">
              Book appointments with trusted doctors
            </p>
          </div>

          {/* GRID */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredDoctors.length > 0 ? (
              filteredDoctors.map((doc) => (
                <div
                  key={doc._id}
                  onClick={() => navigate(`/appointment/${doc._id}`)}
                  className="bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 cursor-pointer overflow-hidden group"
                >
                  {/* IMAGE */}
                  <div className="bg-indigo-50">
                    <img
                      src={doc.image}
                      alt={doc.name}
                      className="w-full h-52 object-cover group-hover:scale-105 transition duration-300"
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="p-4">
                    <h2 className="text-lg font-semibold">{doc.name}</h2>

                    <p className="text-sm text-gray-500">
                      {doc.speciality}
                    </p>

                    <p className="text-xs text-gray-400 mt-1">
                      {doc.experience}
                    </p>

                    <div className="flex items-center justify-between mt-4">
                      <span className="text-sm font-medium text-indigo-600">
                        ₹{doc.fees}
                      </span>

                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate(`/appointment/${doc._id}`);
                        }}
                        className="text-sm bg-indigo-600 text-white px-4 py-2 rounded-full hover:scale-105 transition"
                      >
                        Book
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p>No doctors found for this speciality.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctors;