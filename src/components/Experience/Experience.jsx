import React from "react";
import { experiences } from "../../constants"; // Make sure this array contains your experience data
import '../../App.css';
const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 px-4 md:px-16 lg:px-32 font-sans bg-gradient-to-br from-gray-800 via-purple-800 to-gray-800"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">EXPERIENCE</h2>
          <div className="w-32 h-1 bg-purple-500 mx-auto mb-4"></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A collection of my work experience and the roles I have taken in various organizations.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-1/2 w-1 bg-purple-400 h-full"></div>

          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`relative flex flex-col md:flex-row items-start md:items-center mb-16 ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"
                }`}
            >
              {/* Timeline Circle */}
              <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 bg-purple-600 border-4 border-purple-400 w-16 h-16 rounded-full flex justify-center items-center z-10 shadow-lg">
                <img
                  src={exp.img}
                  alt={exp.company}
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
                className={`w-full md:max-w-md p-6 ml-24 md:ml-0 rounded-2xl shadow-2xl border border-purple-300 bg-gray-800/90 backdrop-blur-md ${index % 2 === 0 ? "md:ml-8" : "md:mr-8"
                  } transform transition-all duration-300 hover:scale-105 hover:shadow-purple-500/25`}
              >
                <div className="flex flex-col space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-white rounded-lg overflow-hidden flex-shrink-0">
                      <img
                        src={exp.img}
                        alt={exp.company}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0IiBmaWxsPSIjRjNGNEY2Ii8+CjxjaXJjbGUgY3g9IjMyIiBjeT0iMzIiIHI9IjE2IiBmaWxsPSIjOUNBM0FGIi8+Cjwvc3ZnPg==';
                        }}
                      />
                    </div>
                    <div className="flex flex-col">
                      <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                      <h4 className="text-md text-purple-300">{exp.company}</h4>
                      <p className="text-sm text-gray-400 mt-1">{exp.date}</p>
                    </div>
                  </div>

                  <p className="text-gray-300 text-sm leading-relaxed">{exp.desc}</p>

                  {exp.skills && exp.skills.length > 0 && (
                    <div>
                      <h5 className="font-semibold text-white mb-2">Skills:</h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, idx) => (
                          <span
                            key={idx}
                            className="bg-purple-600 text-white px-3 py-1 text-xs rounded-full border border-purple-400 hover:bg-purple-500 transition-colors duration-200"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;