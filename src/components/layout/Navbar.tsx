import React from 'react';
import Logo from "../../assets/images/logo.png";

const Navbar: React.FC = () => {
  const scrollToSection = (elementId: string) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <img className="h-8 w-auto" src={Logo} alt="MoneyWise" />
              <span className="ml-2 text-xl font-bold text-purple-600">
                MoneyWise
              </span>
            </div>
            <nav className="hidden md:ml-6 md:flex md:space-x-8">
              <a
                onClick={() => scrollToSection("home")}
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 cursor-pointer"
              >
                Home
              </a>
              <a
                onClick={() => scrollToSection("features")}
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900 cursor-pointer"
              >
                Features
              </a>
              <a
                onClick={() => scrollToSection("how-it-works")}
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900 cursor-pointer"
              >
                How It Works
              </a>
            </nav>
          </div>
          {/* <div className="flex items-center">
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md text-sm font-medium">
              Download App
            </button>
          </div> */}
        </div>
      </div>
    </header>
  );
};

export default Navbar;