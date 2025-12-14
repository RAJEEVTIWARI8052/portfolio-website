import React from 'react';
import PropTypes from 'prop-types';
import Navbar from "./Navbar/Navbar";
import About from "./About/About";
import Skills from "./Skills/Skills";
// import Experience from "./Experience/Experience";
import Education from "./Education/Education";
import Work from "./Work/Work";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer"; 


import '../App.css';


const BlurBlob = ({ position = { top: "50%", left: "50%" }, size = { width: "300px", height: "300px" } }) => {

  return (
    <div
      className="absolute pointer-events-none"
      style={{
        top: position.top,
        left: position.left,
        width: size.width,
        height: size.height,
        transform: 'translate(-50%, -50%)',
        zIndex: 0,
      }}
    >
      <div className="w-full h-full bg-purple-500 rounded-full opacity-20 blur-3xl animate-pulse"></div>
    </div>
  );
};

// Main App Component
const App = () => {
  return (
    <div className="bg-gray-900 relative overflow-hidden">
      {/* Background elements */}
      <BlurBlob position={{ top: '20%', left: '10%' }} size={{ width: '400px', height: '400px' }} />
      <BlurBlob position={{ top: '80%', left: '90%' }} size={{ width: '300px', height: '300px' }} />
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      {/* Main content */}
      <div className="relative z-10">
        <Navbar />
        <About />
        <Skills />
        {/* <Experience /> */}
        <Education />
        <Work />
      
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App; 