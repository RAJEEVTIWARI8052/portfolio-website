import React, { useState } from "react";
import { projects } from "../../constants";
import '../../App.css';

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => setSelectedProject(project);
  const handleCloseModal = () => setSelectedProject(null);

  return (
    <section
      id="work"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">PROJECTS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A showcase of the projects I have worked on, highlighting my skills and experience in various technologies
        </p>
      </div>

      <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="border border-white bg-gray-900 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer hover:shadow-purple-500/50 hover:-translate-y-2 transition-transform duration-300 flex flex-col h-full"
          >
            <div className="p-4">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-xl"
              />
            </div>
            <div className="p-6 flex flex-col flex-grow">
              
              {/* UPDATED: Title is now a clickable link to the deployed site */}
              <a 
                href={project.webapp} 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()} // Prevents modal from opening when clicking the title
                className="hover:text-purple-400 transition-colors w-fit block"
              >
                <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
              </a>

              <p className="text-gray-500 mb-4 pt-4 line-clamp-3 flex-grow">{project.description}</p>
              <div className="mb-4">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block bg-[#251f38] text-xs font-semibold text-purple-500 rounded-full px-2 py-1 mr-2 mb-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4 overflow-auto">
          <div className="bg-gray-900 rounded-xl shadow-2xl lg:w-full w-[90%] max-w-3xl overflow-hidden relative border border-gray-700">
            <div className="flex justify-end p-4 absolute top-0 right-0 z-10">
              <button
                onClick={handleCloseModal}
                className="text-white text-4xl font-bold hover:text-purple-500 bg-black/50 rounded-full w-10 h-10 flex items-center justify-center transition-colors"
              >
                &times;
              </button>
            </div>

            <div className="flex flex-col h-full">
              <div className="w-full flex justify-center bg-gray-800 px-4 pt-12 pb-4">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="lg:w-full w-[95%] max-h-[400px] object-cover rounded-xl shadow-2xl"
                />
              </div>
              <div className="lg:p-8 p-6">
                
                {/* UPDATED: Modal Title is also a clickable link */}
                <a 
                    href={selectedProject.webapp} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-purple-400 transition-colors inline-block"
                >
                    <h3 className="lg:text-3xl font-bold text-white mb-4 text-xl">{selectedProject.title}</h3>
                </a>

                <p className="text-gray-300 mb-6 lg:text-base text-sm leading-relaxed">{selectedProject.description}</p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-[#251f38] text-sm font-semibold text-purple-400 border border-purple-500/30 rounded-full px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gray-800 hover:bg-gray-700 text-white border border-gray-600 lg:px-6 lg:py-3 px-2 py-2 rounded-xl lg:text-lg text-sm font-semibold text-center transition-all"
                  >
                    View Code
                  </a>
                  <a
                    href={selectedProject.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-purple-600 hover:bg-purple-700 text-white lg:px-6 lg:py-3 px-2 py-2 rounded-xl lg:text-lg text-sm font-semibold text-center transition-all shadow-lg shadow-purple-900/50"
                  >
                    View Live
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;