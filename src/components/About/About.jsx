import React, { useState, useEffect } from "react";
import profileImage from "../../assets/Profile2.png"; 

const About = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const texts = ["Fullstack Developer", "Competitive Programmer", "AI Enthusiast"];

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentFullText = texts[currentIndex];
      
      if (isDeleting) {
        setCurrentText(currentFullText.substring(0, currentText.length - 1));
      } else {
        setCurrentText(currentFullText.substring(0, currentText.length + 1));
      }

      if (!isDeleting && currentText === currentFullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentIndex, texts]);

  return (
    <section
      id="about"
      className="py-16 md:py-24 px-4 md:px-16 lg:px-32 font-sans min-h-screen flex items-center relative z-10"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center max-w-7xl mx-auto w-full">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left mt-8 md:mt-0">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
            Hi, I am
          </h1>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Rajeev Kumar Tiwari
          </h2>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">
            <span className="text-white">I am a </span>
            <span className="text-purple-500">{currentText}<span className="animate-pulse">|</span></span>
          </h3>
          <p className="text-base sm:text-lg text-gray-400 mb-10 mt-8 leading-relaxed max-w-2xl">
            I am a B.Tech CSE student at MJPRU. I specialize in building full-stack web applications and integrating AI into modern technologies.
          </p>
          
          {/* UPDATED: Direct Download Link */}
          <a
            href="https://drive.google.com/uc?export=download&id=1USUmdYgtc9D8XlSr2JXS7Jpu_KxnCwUr" 
            className="inline-block bg-gradient-to-r from-purple-600 to-purple-800 text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer"
          >
            DOWNLOAD CV
          </a>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <div className="w-80 h-80 sm:w-74 sm:h-74 md:w-86 md:h-130 border-4 border-purple-700 rounded-full overflow-hidden transition-transform duration-300 hover:scale-105 shadow-2xl shadow-purple-900/50">
            <img
              src={profileImage}
              alt="Rajeev Kumar Tiwari"
              className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/400x400/2d3748/ffffff?text=Image+Not+Found';
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;