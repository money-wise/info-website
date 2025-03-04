import React from "react";
import { Button } from "@mantine/core";
import { Link } from "react-router-dom";
import { IconMenu2 } from "@tabler/icons-react";

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-primary">
            Money<span className="text-secondary">Wise</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            className="text-primary hover:text-secondary font-medium"
          >
            Home
          </Link>
          <Link
            // to="/features"
            to="#"
            className="text-primary hover:text-secondary font-medium"
          >
            Features
          </Link>
          <Link
            // to="/about"
            to="#"
            className="text-primary hover:text-secondary font-medium"
          >
            About
          </Link>
          <Link
            // to="/team"
            to="#"
            className="text-primary hover:text-secondary font-medium"
          >
            Team
          </Link>
          <Link
            // to="/contact"
            to="#"
            className="text-primary hover:text-secondary font-medium"
          >
            Contact
          </Link>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button className="bg-secondary hover:bg-opacity-90 text-white px-6 py-2 rounded-md">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-primary">
          <IconMenu2 size={24} />
        </button>
      </div>
    </header>
  );
};

export default Header;
