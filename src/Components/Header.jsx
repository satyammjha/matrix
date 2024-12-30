import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow-md w-full p-4">
      <div className="flex flex-col items-center space-y-2 md:space-y-0 md:flex-row md:justify-between">
      
        <h1 className="text-2xl md:text-3xl font-bold  "      >
          3x3 Matrix Task
        </h1>

        <p className="text-lg font-semibold"    >Submitted by - Satyam Kumar</p>

    
        <div className="flex space-x-4">
          <a
            href="https://drive.google.com/file/d/1N_p5d0Lr7rE0Yu9rPyCAua-BWMiUAhMM/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline hover:text-blue-700 text-sm md:text-base"
          >
            Resume
          </a>
          <a
            href="https://www.linkedin.com/in/satyammjha/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline hover:text-blue-700 text-sm md:text-base"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/your-github-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline hover:text-blue-700 text-sm md:text-base"
          >
            GitHub
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;