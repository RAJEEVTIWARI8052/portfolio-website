// =========================================
// 1. ASSET IMPORTS
// =========================================

// --- Skills Section Logos ---
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import csharpLogo from './assets/tech_logo/csharp.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';

// --- Experience Logos ---
import webverseLogo from './assets/company_logo/webverse_logo.png';
import agcLogo from './assets/company_logo/agc_logo.png';
import newtonschoolLogo from './assets/company_logo/newtonschool_logo.png';

// --- Education Logos ---
import gkalogo from './assets/education_logo/gka.png';
import mjplogo from './assets/education_logo/mjp.jpg';

// --- Project Logos ---
import fitverseImg from "./assets/work_logo/fitverse.png"; 
import rverseImg from "./assets/work_logo/rverse.png";   
import passwordImg from "./assets/work_logo/password.png";


// =========================================
// 2. DATA EXPORTS
// =========================================

// --- Skills Data ---
export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Angular', logo: angularLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'GSAP', logo: gsapLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Spring Boot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'C#', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

// --- Experiences Data ---
export const experiences = [
  {
    id: 0,
    img: webverseLogo,
    role: "Fullstack Developer",
    company: "Webverse Digital",
    date: "April 2024 - Present",
    desc: "Developed dynamic web applications using the MERN stack, handling frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize performance.",
    skills: [
      "HTML", "CSS", "JavaScript", "React JS", "TypeScript",
      "Node JS", "Tailwind CSS", "MongoDB", "Redux", "Next JS",
    ],
  },
  {
    id: 1,
    img: agcLogo,
    role: "Fullstack Engineer",
    company: "Agumentik Group of Companies",
    date: "July 2023 - March 2024",
    desc: "Contributed to projects as a Fullstack Engineer, leading frontend and backend development using HTML, CSS, JavaScript, PHP, SQL, Bootstrap, and React JS. Delivered responsive, high-performance web applications.",
    skills: ["React JS", "Redux", "JavaScript", "Tailwind CSS", "HTML", "CSS", "SQL"],
  },
  {
    id: 2,
    img: newtonschoolLogo,
    role: "Frontend Intern",
    company: "Newton School",
    date: "September 2021 - August 2022",
    desc: "Designed and implemented scalable UI components using HTML, CSS, JavaScript, Bootstrap, and Material UI. Translated Figma wireframes into interactive web pages.",
    skills: ["HTML", "CSS", "JavaScript", "Bootstrap", "Figma", "Material UI"],
  },
];

// --- Education Data ---
export const education = [
  {
    id: 1,
    img: mjplogo,
    school: "MJP Rohilkhand University, Bareilly",
    date: "Aug 2023 - Aug 2027",
    grade: "8.24",
    desc: "Pursuing B.Tech from MJP Rohilkhand University, gaining practical knowledge in Data Structures, Algorithms, Web Development, and DBMS.",
    degree: "B.Tech",
  },
  {
    id: 2,
    img: gkalogo,
    school: "Gyan Kunj Academy Banshi Bazar, Ballia",
    date: "Apr 2020 - Mar 2022",
    grade: "90%",
    desc: "Completed class 12 (CBSE) with PCM and Computer Science.",
    degree: "CBSE XII - PCM with Computer Science",
  },
  {
    id: 3,
    img: gkalogo,
    school: "Gyan Kunj Academy Banshi Bazar, Ballia",
    date: "Apr 2018 - Mar 2020",
    grade: "92.2%",
    desc: "Completed class 10 (CBSE) with Science and Computer Applications.",
    degree: "CBSE X - Science with Computer Applications",
  },
];

// --- Projects Data ---
export const projects = [
  {
    id: 1,
    title: "FitVerse - The Wellness Hub",
    description: "A comprehensive fitness platform designed to transform your body and life. Features detailed programs for Strength Training, Yoga, and Cardio.",
    image: fitverseImg,
    tags: ["React", "Tailwind CSS", "Fitness Tech", "Vercel"],
    github: "https://github.com/RAJEEVTIWARI8052/fitverse",
    webapp: "https://fitverse-xi.vercel.app/",
  },
  {
    id: 2,
    title: "Rverse - AI Course Generator",
    description: "An innovative educational platform that leverages AI to generate custom learning experiences.",
    image: rverseImg,
    tags: ["React", "AI", "EdTech", "API Integration"],
    github: "https://github.com/RAJEEVTIWARI8052/Rverse-AiCourseGenerator",
    webapp: "https://rverse-ai-course-generator-five.vercel.app/",
  },
  {
    id: 3,
    title: "Secure Password Generator",
    description: "A functional utility tool for generating strong, secure passwords with customizable options.",
    image: passwordImg,
    tags: ["React", "Web Utility", "Security"],
    github: "https://github.com/RAJEEVTIWARI8052/Password-Generator",
    webapp: "https://password-generator-omega-lac-15.vercel.app/",
  },
];