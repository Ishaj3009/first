// import React from "react"



// import Navbar from "./Components/Navbar"
// import Hero from './Components/Hero/Hero'
// import About from './Components/About'
// import Contact from "./Components/Contact";
// import Footer from "./Components/Footer"
// // import ThemeToggle from "./Components/ThemeToggle/ThemeToggle"

// const App=()=> {
//   return(
//     <div>
//       {/* <div>
//       <img src="/publicimages/logo.png" alt="Logo" />
//     </div> */}
//       <Navbar/>
//       <Hero/>
//       <About/>
//       <Contact/>
//       <Footer/>
//       {/* <ThemeToggle/> */}
//     </div>
    




   
//   )
// }

// export default App;



import React from "react";
import Navbar from "./Components/Navbar";
import Hero from './Components/Hero/Hero';
import About from './Components/About';
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Skills from "./Components/Skills";
import Project from "./Components/Project";
// import ThemeToggle from "./Components/ThemeToggle/ThemeToggle";

const App = () => {
  return (
    <div>
      <Navbar />

      {/* Add IDs to each section so scroll works */}
      <section id="home">
        <Hero />
        
      </section>

      <section id="about">
        <About />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="project">
        <Project />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
      {/* <ThemeToggle /> */}
    </div>
  );
};

export default App;

