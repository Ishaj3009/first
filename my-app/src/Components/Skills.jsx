// // import React from "react";
// import "./Skills.css";

// const skillsData = {
//   languages: [
//     { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
//     { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
//     { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
//     { name: "C", icon: "https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png" },
//     { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
//     { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
//   ],
//   frameworks: [
//     { name: "Next.js", icon: "/assets/nextjs.png" },
//     { name: "Tailwind CSS", icon: "/assets/tailwind.png" },
//     { name: "Express.js", icon: "/assets/expressjs.png" }, // Leaf-style or "ex" logo from earlier code
//   ],
//   libraries: [
//     { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
//     { name: "Three.js", icon: "/assets/threejs.png" },
//   ],
//   databases: [
//     { name: "MySQL", icon: "/assets/mysql.png" },
//     { name: "MongoDB", icon: "/assets/mongoDB.png" },
//     { name: "Firebase", icon: "/assets/firebase.png" },
//   ],
//   tools: [
//     { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
//     { name: "GitHub", icon: "/assets/github.png" },
//   ],
//   environments: [
//     { name: "Node.js", icon: "/assets/node js.png" },
//   ]
// };

// const Skills = () => {
//   return (
//     <div className="skills-section">
//       <h1 className="section-title">My Skills</h1>
//       {Object.entries(skillsData).map(([category, skills]) => (
//         <div key={category}>
//           <h2 className="skill-category">{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
//           <div className="skills-container">
//             {skills.map((skill, index) => (
//               <div className="skill-box" key={index}>
//                 <div className="img">
//                   <img src={skill.icon} alt={skill.name} />
//                 </div>
//                 <p>{skill.name}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Skills;

import React from "react";
import "./Skills.css";

const skillsData = {
  Languages: [
    { name: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "C", icon: "https://upload.wikimedia.org/wikipedia/commons/1/19/C_Logo.png" },
    { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
    // { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  ],
  Frameworks: [
    // { name: "Next.js", icon: "/assets/nextjs.png" },
    { name: "Tailwind CSS", icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg" },
    { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
  ],
  Libraries: [
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    // { name: "Three.js", icon: "/assets/threejs.png" },
  ],
  Databases: [
    { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "Firebase", icon: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" },
  ],
  // Tools: [
  //   { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
  //   { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
  // ],
  // Environments: [
  //   { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  // ]
};

const Skills = () => {
  return (
    <div className="skills-layout">
      <h1 className="skills-heading">MY SKILLS</h1>
      {Object.entries(skillsData).map(([category, skills]) => (
        <div className="skill-row" key={category}>
          <div className="skill-label">{category}</div>
          <div className="skill-icons">
            {skills.map((skill, index) => (
              <img src={skill.icon} alt={skill.name} key={index} title={skill.name} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
