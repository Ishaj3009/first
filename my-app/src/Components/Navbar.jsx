// import React from "react";
// import "./Navbar.css";

// const Navbar = ({ setActiveSection, activeSection }) => {
//     const handleNavigation = (section) => {
//         setActiveSection(section);
    
//         const element = document.getElementById(section);
//         if (element) {
//           element.scrollIntoView({ behavior: "smooth" });
//         }
//       };
    
//   return (
//     <div className="navbar">
//       <ul className="nav-menu">
//         <button className={activeSection === "home" ? "active" : ""} onClick={() => setActiveSection("home")}>
//           Home
//         </button>
//         <button className={activeSection === "about" ? "active" : ""} onClick={() => setActiveSection("about")}>
//           About Me
//         </button>
//         <button className={activeSection === "skills" ? "active" : ""} onClick={() => setActiveSection("skills")}>
//           Skills
//         </button>
//         <button className={activeSection === "projects" ? "active" : ""} onClick={() => setActiveSection("projects")}>
//           Projects
//         </button>
//         <button className={activeSection === "contact" ? "active" : ""} onClick={() => setActiveSection("contact")}>
//           Contact
//         </button>
        
//       </ul>
//     </div>
//   );
// };

// export default Navbar;
// import React from "react";
// import './Navbar.css'
// import logo from "../assets/react.svg";

// import { motion } from 'framer-motion';

// const Navbar = ()=>{
//   return(
//     <motion.header
//     initial={{ opacity: 0, y: -50 }}
//     animate={{ opacity: 1, y: 0 }}
//     transition={{ duration: 0.5 }}
//   >

// <div className="Navbar">
//   <img 
//     src="/publicimages/logo.png" 
//     alt="Logo" 
//     style={{ width: '100px', height: '100px' }}
//   />


//         <ul className="nav-menu">
//             <li><a href="#home">HOME</a></li>
//             <li><a href="#about">ABOUT ME</a></li>
//             <li><a href="#skills">SKILLS</a></li>
//             <li><a href="#connect with me">CONTACT</a></li>
          
           
//         </ul>
//      <div onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} className="nav-connect">Connect With Me</div>
     
//     </div>
//     </motion.header>
    
//   )
// }

// export default Navbar;





import React from "react";
import './Navbar.css';
import logo from "../assets/logo.png";
import { motion } from 'framer-motion';

const Navbar = () => {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // ✅ Wrap your JSX in return()
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="Navbar">
        <img src={logo} alt="Logo" style={{ width: '70px', height: '70px' }} />

        <ul className="nav-menu">
          <li><button onClick={() => handleScroll("home")}>HOME</button></li>
          <li><button onClick={() => handleScroll("about")}>ABOUT ME</button></li>
          <li><button onClick={() => handleScroll("skills")}>SKILLS</button></li>
          <li><button onClick={() => handleScroll("projects")}>PROJECTS</button></li>
          <li><button onClick={() => handleScroll("contact")}>CONTACT</button></li>
        </ul>

        <div onClick={() => handleScroll("contact")} className="nav-connect">
          Connect With Me
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;
