import React from "react";
import { education } from "../../constants"; // Make sure this array contains your education data
import '../../App.css';

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-4 md:px-16 lg:px-32 font-sans bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">EDUCATION</h2>
          <div className="w-32 h-1 bg-purple-500 mx-auto mb-4"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            My education has been a journey of learning and development. Here are my academic details.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 w-1 bg-purple-400 h-full"></div>

          {education.map((edu, index) => (
            <div
              key={edu.id}
              className={`relative flex flex-col md:flex-row items-start md:items-center mb-16 ${
                index % 2 === 0 ? "md:justify-start" : "md:justify-end"
              }`}
            >
              {/* Timeline Circle */}
              <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 bg-purple-600 border-4 border-purple-400 w-16 h-16 rounded-full flex justify-center items-center z-10 shadow-lg">
                <img
                  src={edu.img}
                  alt={edu.school}
                  className="w-12 h-12 object-cover rounded-full"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                <div className="w-8 h-8 bg-purple-300 rounded-full hidden"></div>
              </div>

              {/* Content Box */}
              <div
                className={`w-full md:max-w-md p-6 ml-24 md:ml-0 rounded-2xl shadow-2xl border border-purple-300 bg-gray-800/90 backdrop-blur-md ${
                  index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                } transform transition-all duration-300 hover:scale-105 hover:shadow-purple-500/25`}
              >
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-21 bg-white rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={edu.img}
                        alt={edu.school}
                        className="w-32 h-100 sm:w-100 sm:h-100 md:w-100 md:h-21 object-fit"
                        onError={(e) => {
                          e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNDgiIHZpZXdCb3g9IjAgMCA2NCA0OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjQ4IiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0zMiAyNEwyMCAzMkw0NCAzMkwzMiAyNFoiIGZpbGw9IiM5Q0EzQUYiLz4KPC9zdmc+';
                        }}
                      />
                    </div>
                    <div className="flex flex-col">
                      <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
                      <h4 className="text-md text-purple-300">{edu.school}</h4>
                      <p className="text-sm text-gray-400 mt-1">{edu.date}</p>
                    </div>
                  </div>

                  {edu.grade && (
                    <p className="text-purple-300 font-semibold">Grade: {edu.grade}</p>
                  )}
                  <p className="text-gray-300 text-sm leading-relaxed">{edu.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;