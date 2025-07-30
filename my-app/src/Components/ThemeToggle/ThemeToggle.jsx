// import React, { useEffect, useState } from "react";
// import { FaCircle } from "react-icons/fa"; // or your icon


// const ThemeToggle = () => {
//   const [theme, setTheme] = useState("light");

//   useEffect(() => {
//     document.documentElement.setAttribute("data-theme", theme);
//   }, [theme]);

//   const toggleTheme = () => {
//     setTheme(prev => (prev === "light" ? "dark" : "light"));
//   };

//   return (
//     <button className="theme-toggle" onClick={toggleTheme}>
//       <FaCircle color={theme === "dark" ? "orange" : "black"} />
//     </button>
//   );
// };

// export default ThemeToggle;
