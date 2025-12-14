import React from 'react';
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Work from "./components/Work/Work"; // This is your Project Page
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer"; 

import './App.css';

// We define BlurBlob here to ensure it works perfectly without file import errors
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

const App = () => {
  return (
    <div className="bg-[#050414] relative overflow-hidden min-h-screen">
      
      {/* Background Blobs */}
      <BlurBlob position={{ top: '20%', left: '10%' }} size={{ width: '400px', height: '400px' }} />
      <BlurBlob position={{ top: '35%', left: '20%' }} size={{ width: '30%', height: '40%' }} />
      <BlurBlob position={{ top: '80%', left: '90%' }} size={{ width: '300px', height: '300px' }} />
      
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      {/* Main content */}
      <div className="relative pt-20 z-10">
        <Navbar />
        <About />
        <Skills />
        {/* <Experience /> */}
        <Work /> {/* This renders your Projects */}
        <Education />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default App;