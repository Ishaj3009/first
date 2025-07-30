// document.addEventListener("DOMContentLoaded", () => {
//     const themeToggleButton = document.getElementById('theme-toggle');
//     const lightIcon = document.getElementById('light-icon');
//     const darkIcon = document.getElementById('dark-icon');
//     const currentTheme = localStorage.getItem('theme');
  
//     // Apply saved theme on page load
//     if (currentTheme) {
//       document.body.classList.add(currentTheme);  // Add the saved theme class to the body
//     }
  
//     // Log when the button is clicked
//     themeToggleButton.addEventListener('click', () => {
//       console.log("Button clicked!"); // Check if the event listener is working
      
//       const isDarkMode = document.body.classList.contains('dark-mode');
      
//       // Toggle dark mode class
//       if (isDarkMode) {
//         document.body.classList.remove('dark-mode');  // Remove dark mode
//         localStorage.setItem('theme', 'light-mode');  // Save light mode preference in localStorage
//       } else {
//         document.body.classList.add('dark-mode');     // Add dark mode
//         localStorage.setItem('theme', 'dark-mode');   // Save dark mode preference in localStorage
//       }
//     });
//   });
  