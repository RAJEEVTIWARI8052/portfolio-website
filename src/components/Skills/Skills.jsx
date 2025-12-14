import React from "react";
import Tilt from "react-parallax-tilt";
import { SkillsInfo } from "../../constants";
import '../../App.css';

const Skills = () => (
  <section
    id="skills"
    className="py-24 px-4 md:px-16 lg:px-32 font-sans bg-gradient-to-br from-gray-800 via-purple-800 to-gray-800"
  >
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">SKILLS</h2>
        <div className="w-24 h-1 bg-purple-500 mx-auto mb-4"></div>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          A collection of my technical skills and expertise honed through various projects
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {SkillsInfo.map((category, idx) => (
          <div
            key={idx}
            className="bg-gray-800/80 backdrop-blur-md p-8 rounded-2xl border border-purple-300 shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
          >
            <h3 className="text-2xl font-semibold text-white mb-6 text-center">
              {category.title}
            </h3>

            <div className="grid grid-cols-2 gap-4">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center space-x-3 bg-gray-700/50 border border-gray-600 rounded-lg py-3 px-4 hover:border-purple-500 transition-colors duration-200"
                >
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="w-8 h-8"
                    onError={(e) => {
                      e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiBmaWxsPSIjNkI0NkMxIi8+CjxwYXRoIGQ9Ik0xNiA4TDggMTZMMTYgMjRMMjQgMTZMMTYgOFoiIGZpbGw9IndoaXRlIi8+Cjwvc3ZnPg==';
                    }}
                  />
                  <span className="text-sm font-medium text-gray-200">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;